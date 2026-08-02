import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.35 }}
      className={`mb-5 flex flex-col gap-1 ${alignment}`}
    >
      <div className="inline-flex items-center gap-2">
        <span className="h-px w-6 bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
        <p className="text-xs font-semibold uppercase tracking-[0.2em] bg-gradient-to-r from-indigo-600 to-fuchsia-500 bg-clip-text text-transparent dark:from-indigo-400 dark:to-fuchsia-400">{eyebrow}</p>
      </div>
      <h2 className="max-w-3xl text-lg font-semibold tracking-tight text-slate-900 dark:text-white sm:text-xl">
        {title}
      </h2>
      {description ? (
        <p className="max-w-2xl text-xs leading-5 text-slate-600 dark:text-slate-300">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}
