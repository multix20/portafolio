import React from 'react'
const Services = () => {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold text-xl mb-2">Desarrollo Web</h3>
            <p>Construcción de sitios modernos, rápidos y responsivos.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold text-xl mb-2">Soporte Linux</h3>
            <p>Instalación, configuración y administración de servidores Linux.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold text-xl mb-2">Automatización</h3>
            <p>Creación de scripts y procesos automatizados para tareas repetitivas.</p>
          </div>
          <div className="p-4 bg-white shadow rounded">
            <h3 className="font-semibold text-xl mb-2">Consultoría en Software Libre</h3>
            <p>Asesoría en implementación y uso de tecnologías open source.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
