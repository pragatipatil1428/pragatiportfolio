import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

interface ContactPayload {
  name?: unknown;
  email?: unknown;
  message?: unknown;
  gotcha?: unknown;
}

function isNonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev";

  if (!apiKey || !toEmail) {
    return NextResponse.json(
      { error: "Email service is not configured on the server." },
      { status: 500 }
    );
  }

  if (apiKey.includes("your-") || apiKey.includes(" ")) {
    return NextResponse.json(
      {
        error:
          "Email service is not configured yet: add your real Resend API key to .env.local and restart the dev server.",
      },
      { status: 500 }
    );
  }

  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot: real users never see this field, so any value means a bot.
  if (isNonEmptyString(payload.gotcha)) {
    return NextResponse.json({ success: true });
  }

  const { name, email, message } = payload;

  if (!isNonEmptyString(name) || !isNonEmptyString(email) || !isNonEmptyString(message)) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Please provide a valid email address." }, { status: 400 });
  }

  if (name.trim().length > 100 || message.trim().length > 5000) {
    return NextResponse.json(
      { error: "Name must be under 100 characters and message under 5000 characters." },
      { status: 400 }
    );
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from: `Portfolio <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject: `Portfolio inquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="margin-top: 0; color: #4f46e5;">New portfolio inquiry</h2>
          <table style="border-collapse: collapse; width: 100%; margin-bottom: 16px;">
            <tr>
              <td style="padding: 8px 0; color: #64748b; width: 80px;">Name</td>
              <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${escapeHtml(name)}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #64748b;">Email</td>
              <td style="padding: 8px 0; color: #0f172a;">
                <a href="mailto:${escapeHtml(email)}" style="color: #4f46e5;">${escapeHtml(email)}</a>
              </td>
            </tr>
          </table>
          <div style="padding: 16px; background: #f8fafc; border-radius: 8px; color: #334155; line-height: 1.6; white-space: pre-wrap;">${escapeHtml(message)}</div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return NextResponse.json(
      { error: "Failed to send the message. Please try again later." },
      { status: 500 }
    );
  }
}
