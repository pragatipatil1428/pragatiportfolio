'use client';

export default function LocationMap() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
      <iframe
        title="Map showing Pune, Maharashtra, India"
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps?q=Pune,%20Maharashtra,%20India&z=11&output=embed"
      />
    </div>
  );
}
