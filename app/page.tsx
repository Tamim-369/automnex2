"use client"
import Image from "next/image";
import { FaPaperPlane, FaShieldAlt, FaBolt, FaEye, FaKeyboard, FaDownload } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/api/track-visit", { method: "POST" });
  }, []);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (data.success) {
        setSuccess("Message sent successfully!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(data.error || "Failed to send message.");
      }
    } catch {
      setError("Failed to send message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      {/* Hero Section */}
      <section className="w-full max-w-3xl text-center py-16 px-4 relative overflow-hidden">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-base-200/60 to-secondary/10 rounded-2xl blur-2xl -z-10" />
        <div className="animate-fade-in flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Automnex</h1>
          <p className="text-lg md:text-xl text-base-content/80 mb-6">
            We build software to improve people's lives. Our mission is to create solutions actually improve people's lives.
          </p>
          <button
            className="btn bg-white text-black rounded-lg px-8 py-2 font-semibold shadow-lg transition hover:scale-105"
            onClick={() => {
              const el = document.getElementById('guard');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </button>
        </div>
        {/* <div className="flex justify-center mb-4">
          <Image src="/logo/Automnex.png" alt="Automnex Logo" width={80} height={80} className="rounded-lg" />
        </div> */}
      </section>

      {/* Product Highlight Section */}
      <section id="guard" className="w-full flex justify-center items-center mt-20">
        <div className="relative bg-transparent backdrop-blur-xl rounded-2xl shadow-2xl p-12 flex flex-col items-center w-full xl:max-w-5xl border border-white/10 transition hover:scale-[1.02] hover:shadow-3xl duration-300 animate-fade-in-up">
          {/* Badge */}
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 flex items-center gap-2">
            <span className="badge bg-white text-neutral text-xs px-3 py-1 rounded-lg flex items-center gap-2 shadow-md border border-neutral/20">
              <FaShieldAlt className="text-base text-neutral" /> Guard v1.0
            </span>
          </div>
          {/* Guard Logo */}
          <div className="mt-4 mb-6">
            <Image src="/logo/Guard.png" alt="Guard Logo" width={80} height={80} className="rounded-xl shadow-xl border-2 border-white/20" style={{ boxShadow: '0 0 24px 4px rgba(255,255,255,0.08)' }} />
          </div>
          {/* Title & Subtitle */}
          <h2 className="text-3xl font-bold mb-1 text-white">Guard</h2>
          <p className="text-neutral-content mb-8 text-center text-lg max-w-lg">
            AI-powered NSFW content blocker for Windows. Instantly closes inappropriate tabs to keep you focused, productive, and disciplined.
          </p>
          {/* Feature List */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 w-full ">
            <div className="flex  items-center gap-3 bg-neutral/70 rounded-full px-5 py-3 transition hover:bg-neutral/80 shadow-sm">
              <FaEye className="text-white text-xl" />
              <span className="text-white font-medium">Auto-detects NSFW content</span>
            </div>
            <div className="flex items-center gap-3 bg-neutral/70 rounded-full px-5 py-3 transition hover:bg-neutral/80 shadow-sm">
              <FaBolt className="text-white text-xl" />
              <span className="text-white font-medium">Closes instantly</span>
            </div>
            <div className="flex items-center gap-3 bg-neutral/70 rounded-full px-5 py-3 transition hover:bg-neutral/80 shadow-sm">
              <FaShieldAlt className="text-white text-xl" />
              <span className="text-white font-medium">Runs in background</span>
            </div>
            <div className="flex items-center gap-3 bg-neutral/70 rounded-full px-5 py-3 transition hover:bg-neutral/80 shadow-sm">
              <FaKeyboard className="text-white text-xl" />
              <span className="text-white font-medium">Customizable shortcut & sensitivity</span>
            </div>
          </div>
          {/* Download and Support Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-8">
            <a href="/api/download" download className="btn bg-white text-neutral rounded-xl px-10 py-3 font-semibold shadow-xl flex items-center gap-2 text-lg hover:scale-105 transition border-0">
              <FaDownload /> Download
            </a>
            <a href="https://coff.ee/automnex" target="_blank" rel="noopener noreferrer" className="btn bg-white text-neutral rounded-xl px-10 py-3 font-semibold shadow-xl flex items-center gap-2 text-lg hover:scale-105 transition border-0">
              ☕ Support Us
            </a>
          </div>
          {/* Video Demo or Placeholder */}
          <div className="w-full flex justify-center mt-8">
            <iframe
              src="https://drive.google.com/file/d/1_Ygnjjq3MLKzHB1wi1m58hsqjaVlVeAo/preview"
              className="rounded-xl w-full  border border-white/10 shadow"
              allow="autoplay"
              allowFullScreen
              title="Guard Demo Video"
              style={{ aspectRatio: '16/9', minHeight: '320px' }}
            />
          </div>

        </div>
      </section>
      <hr className="text-gray-600  w-full xl:max-w-4xl mt-20" />
      {/* Contact Section */}

      <div id="contact" className="w-full max-w-2xl mt-6 bg-transparent rounded-lg shadow-lg p-8 flex flex-col items-center text-white">
        <h2 className="text-2xl font-semibold mb-6">Contact Us</h2>

        <form className="w-full flex flex-col gap-6" onSubmit={handleSubmit}>
          {success && <div className="text-green-400 text-sm mt-2">{success}</div>}
          {error && <div className="text-red-400 text-sm mt-2">{error}</div>}
          <div className="flex flex-col sm:flex-row sm:justify-baseline sm:items-baseline justify-center items-center gap-4 w-full">
            <div className="form-control w-full">
              <span className="label-text mb-3 text-white">Name</span>
              <br />
              <input
                type="text"
                placeholder="Your name"
                className="input rounded-lg w-full"
                required
                value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              />
            </div>
            <div className="form-control w-full">
              <span className="label-text mb-3 text-white">Email</span>
              <br />

              <input
                type="email"
                placeholder="you@email.com"
                className="input rounded-lg w-full"
                required
                value={form.email}
                onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              />
            </div>
          </div>
          <div className="form-control w-full">
            <span className="label-text mb-3 text-white">Message</span>
            <fieldset className="fieldset w-full">
              <textarea
                className="textarea h-24 text-white placeholder-gray-400 transition w-full rounded-lg"
                placeholder="Type your message here..."
                required
                value={form.message}
                onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
              />
              <div className="label text-gray-400">Required</div>
            </fieldset>
          </div>
          <button
            type="submit"
            className={`btn bg-white text-black rounded-lg border border-white transition self-end px-6 py-2 font-semibold shadow-lg flex items-center gap-2  ${loading ? "cursor-not-allowed" : ""}`}

          >
            <FaPaperPlane className="mr-1" />
            {loading ? "Sending..." : "Send"}
          </button>

        </form>
      </div>
    </main>
  );
}
