'use client';

export default function LocationMap() {
  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-slate-200 dark:border-slate-800">
      <iframe
        width="100%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.0654276881913!2d73.85674!3d18.52043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf0b06efffff%3A0x8e4b0e8b8e8e8e8e!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123"
      />
    </div>
  );
}
