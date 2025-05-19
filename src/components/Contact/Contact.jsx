import React, { useState } from 'react';
import { Mail, User, MessageCircle, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Contact = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes conectar tu API o servicio externo
    setSent(true);
    setTimeout(() => setSent(false), 4000); // Ocultar luego de 4 segundos
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-gray-900 transition-colors">
      <div className="container mx-auto px-6 max-w-2xl">
        <motion.h2
          className="text-4xl font-bold text-center mb-4 text-gray-800 dark:text-white"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Contáctame
        </motion.h2>

        <motion.p
          className="text-center text-gray-600 dark:text-gray-300 mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          ¿Tienes un proyecto o idea en mente? Estoy listo para ayudarte.
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 p-8 rounded-xl shadow-xl flex flex-col gap-6 transition"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative">
            <label htmlFor="name" className="sr-only">Tu nombre</label>
            <User className="absolute top-3 left-3 text-blue-500" />
            <input
              id="name"
              type="text"
              placeholder="Tu nombre"
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="email" className="sr-only">Tu correo</label>
            <Mail className="absolute top-3 left-3 text-blue-500" />
            <input
              id="email"
              type="email"
              placeholder="Tu correo"
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="message" className="sr-only">Mensaje</label>
            <MessageCircle className="absolute top-3 left-3 text-blue-500" />
            <textarea
              id="message"
              rows="4"
              placeholder="Escribe tu mensaje..."
              className="pl-10 pr-4 py-3 w-full border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileTap={{ scale: 0.97 }}
            className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            {sent ? (
              <span className="flex items-center justify-center gap-2">
                <CheckCircle size={18} /> ¡Mensaje enviado!
              </span>
            ) : (
              "Enviar mensaje"
            )}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;
