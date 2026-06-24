export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919427806585"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-5 z-50 flex items-center justify-center rounded-full h-14 w-14 shadow-md bg-[#25D366] text-white hover:brightness-110 active:scale-90 transition-all"
      aria-label="Chat on WhatsApp"
    >
      <span className="material-symbols-outlined" style={{ fontSize: 28, fontVariationSettings: "'FILL' 1" }}>
        chat
      </span>
    </a>
  );
}
