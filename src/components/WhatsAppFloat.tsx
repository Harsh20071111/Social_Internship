import Image from "next/image";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919427806585"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center transition-all hover:scale-110 drop-shadow-lg hover:drop-shadow-xl"
      aria-label="Chat on WhatsApp"
    >
      <Image
        src="/images/whatsapp-icon.png"
        alt="WhatsApp"
        width={60}
        height={60}
        className="h-[60px] w-[60px] object-contain"
      />
    </a>
  );
}
