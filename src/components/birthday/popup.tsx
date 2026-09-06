import { useEffect } from "react";
import { Button } from "@/components/ui/button";

type PopupProps = {
  open: boolean;
  text: string;
  onClose: () => void;
};

export function Popup({ open, text, onClose }: PopupProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center px-4 transition-[opacity] duration-200 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
      aria-hidden={!open}
      inert={!open ? true : undefined}
    >
      <button
        type="button"
        aria-label="Close"
        className="absolute inset-0 bg-ink/30"
        onClick={onClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="surprise-title"
        className={`relative w-full max-w-md rounded-xl bg-cream p-8 text-center shadow-soft transition-[transform,opacity] duration-200 ${
          open ? "scale-100 opacity-100" : "scale-[0.96] opacity-0"
        }`}
      >
        <p className="text-xs font-medium tracking-[0.22em] text-rose uppercase">
          One more thing
        </p>
        <h2 id="surprise-title" className="font-serif mt-3 text-2xl text-wine">
          For my coolest baby
        </h2>
        <p className="mt-4 text-base leading-relaxed text-ink">{text}</p>
        <Button className="mt-6" onClick={onClose}>
          Close
        </Button>
      </div>
    </div>
  );
}
