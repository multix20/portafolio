import React from 'react'
const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 max-w-xl text-center">
        <h2 className="text-3xl font-bold mb-6">Contacto</h2>
        <p className="mb-4">¿Tienes un proyecto o idea? Hablemos.</p>
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Tu nombre" className="p-2 border rounded" />
          <input type="email" placeholder="Tu correo" className="p-2 border rounded" />
          <textarea placeholder="Mensaje" rows="5" className="p-2 border rounded" />
          <button type="submit" className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800">
            Enviar
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
