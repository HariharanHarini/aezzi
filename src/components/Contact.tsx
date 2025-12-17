import { useState } from "react";
import {
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Send,
} from "lucide-react";

export function Contact() {
  const WHATSAPP_NUMBER = "7382387778";

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `
🚀 *New Engineering Brief – AEZZI*

👤 Name: ${formData.name}
📞 Mobile: ${formData.phone}
📧 Email: ${formData.email}
🧩 Service: ${formData.service || "Not selected"}

📝 Project Overview:
${formData.message}
    `;

    const whatsappURL = `https://wa.me/91${WHATSAPP_NUMBER}?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      message: "",
    });
  };

  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Support",
      detail: "support@premiumatcheap.com",
      description: "Send us an email anytime",
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: "Live Chat",
      detail: "WhatsApp 24/7",
      description: "Chat instantly with our team",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone Support",
      detail: "+91 73823 87778",
      description: "Call or WhatsApp us",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Response Time",
      detail: "Within 24 hours",
      description: "Fast & reliable support",
    },
  ];

  return (
    <div className="py-12 bg-background">
      {/* Hero */}
      <section className="py-16 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-foreground mb-4">
            Let’s Engineer Your Project
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Share your requirements and we’ll connect with you directly on WhatsApp.
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className="bg-secondary/50 rounded-xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-white mb-4">
                  {method.icon}
                </div>
                <h3 className="text-foreground mb-1">
                  {method.title}
                </h3>
                <p className="text-card-foreground mb-1">
                  {method.detail}
                </p>
                <p className="text-muted-foreground text-sm">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-xl border border-border p-8 md:p-12">
              <div className="text-center mb-8">
                <h2 className="text-foreground mb-2">
                  Send Engineering Brief
                </h2>
                <p className="text-muted-foreground">
                  This will open WhatsApp with your details
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-foreground mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                {/* Mobile Number (UNDER NAME) */}
                <div>
                  <label className="block text-foreground mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your Mobile Number"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cyan-400"
                  />
                </div>

                {/* Service */}
                <div>
                  <label className="block text-foreground mb-2">
                    Service of Interest
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cyan-400"
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Meta & Google Ads">Meta & Google Ads</option>
                    <option value="SEO">SEO</option>
                    <option value="Brand Management">Brand Management</option>
                    <option value="Custom Project">Custom Project</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-foreground mb-2">
                    Project Overview *
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-cyan-400 resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-cyan-400 text-black py-4 rounded-full flex items-center justify-center gap-2 font-semibold shadow-[0_0_25px_rgba(0,255,255,0.6)] hover:scale-[1.02] transition"
                >
                  <Send className="w-5 h-5" />
                  Send via WhatsApp
                </button>

                <p className="text-center text-muted-foreground text-sm">
                  You’ll be redirected to WhatsApp with your message
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
