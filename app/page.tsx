"use client"
import Image from "next/image";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

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
      <section className="w-full max-w-3xl text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Automnex</h1>
        <p className="text-lg md:text-xl text-base-content/80 mb-6">
          We build software to improve people's lives. Our mission is to create solutions actually improve people's lives.
        </p>
        {/* <div className="flex justify-center mb-4">
          <Image src="/logo/Automnex.png" alt="Automnex Logo" width={80} height={80} className="rounded-lg" />
        </div> */}
      </section>

      {/* Product Highlight Section */}
      <section id="guard" className="w-full max-w-2xl bg-base-200 rounded-lg shadow-lg p-8 flex flex-col items-center text-white">
        <h2 className="text-2xl font-semibold mb-2">Introducing Guard</h2>
        <p className="text-base-content/80 mb-4 text-center">
          <span className="font-bold">Guard</span> is our automatic NSFW blocker, designed to keep your digital experience safe and distraction-free. Guard uses advanced technology to detect and block inappropriate content in real time, so you can browse with confidence.
        </p>
        {/* Video Demo */}
        <div className="w-full flex justify-center mb-4">
          <video className="rounded-lg w-full max-w-md" controls poster="/logo/Automnex.png">
            <source src="/demo/guard-demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex gap-4">
          {/* <button className="btn bg-white text-black rounded-lg border transition">Learn More</button> */}
          <a href="/downloads/guard-latest.zip" download className="btn bg-white text-black rounded-lg border border-white  transition">Download</a>
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
