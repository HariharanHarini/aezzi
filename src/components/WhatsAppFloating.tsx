import { MessageCircle } from "lucide-react";

export default function WhatsAppFloating() {
  const WHATSAPP_NUMBER = "7382387778";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999, // 🔥 ABOVE EVERYTHING
      }}
    >
      {/* Tooltip */}
      <div
        style={{
          position: "absolute",
          right: "70px",
          top: "50%",
          transform: "translateY(-50%)",
          background: "#000",
          color: "#fff",
          padding: "6px 10px",
          borderRadius: "6px",
          fontSize: "14px",
          whiteSpace: "nowrap",
        }}
      >
        Chat with us
      </div>

      {/* Button */}
      <a
        href={`https://wa.me/91${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: "#25D366",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          boxShadow: "0 0 25px rgba(37,211,102,0.8)",
        }}
      >
        <MessageCircle size={28} color="#fff" />
      </a>
    </div>
  );
}
