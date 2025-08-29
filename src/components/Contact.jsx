import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-20">
      <h2 className="text-3xl font-bold text-center mb-6">LET’S HAVE A CHAT</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert(`Thanks, ${form.name}! I will reply to ${form.email}.`);
        }}
        className="max-w-xl mx-auto space-y-4"
      >
        <input
          type="text"
          placeholder="YOUR NAME"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="EMAIL ADDRESS"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <textarea
          placeholder="CHAT HERE"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2"
          rows="5"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <button className="w-full bg-lime-300 text-gray-900 px-4 py-2 rounded-lg hover:scale-105 transition">
          SUBMIT HERE
        </button>
      </form>
    </section>
  );
}
