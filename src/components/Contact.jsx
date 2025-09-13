import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ahd0flq", "template_9wa9uro", form.current, {
        publicKey: "K1ujv0NGZNC-WjZ09",
      })
      .then(
        () => {
          alert("Message has been sent, we will soon get back to you!");
          form.current.reset(); // clear form after sending
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="max-w-6xl text-center mx-auto px-4 pt-25 pb-20"
      ref={ref}
    >
      <motion.h2
        className="text-3xl md:text-4xl text-white font-bold text-center mb-10 inline-block after:block after:w-16 after:h-1 after:bg-gradient-to-l after:from-blue-400 after:to-indigo-500 after:mx-auto after:mt-2"
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        LET’S HAVE A CHAT
      </motion.h2>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-xl mx-auto space-y-5 hover:shadow-sm transition-all duration-600 backdrop-blur-md p-6 rounded-2xl shadow-xl/10 shadow-blue-400"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Your Name"
          className="w-full bg-gray-900/50 border border-gray-600 focus:border-white/30 focus:ring-2 focus:ring-white/30 rounded-lg px-4 py-3 text-white outline-none transition"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Email Address"
          className="w-full bg-gray-900/50 border border-gray-600 focus:border-white/30 focus:ring-2 focus:ring-white/30 rounded-lg px-4 py-3 text-white outline-none transition"
        />
        <textarea
          name="message"
          placeholder="Write your message..."
          className="w-full bg-gray-900/50 border border-gray-600 focus:border-white/30 focus:ring-2 focus:ring-white/30 rounded-lg px-4 py-3 text-white outline-none transition"
          rows="5"
        />
        <div className="text-center">
          <button
            type="submit"
            className="px-6 py-3 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold transition-transform transform hover:scale-105"
          >
            SUBMIT
          </button>
        </div>
      </motion.form>
    </section>
  );
}
