import React from 'react';

// Actualizado con más detalles como en el portafolio
const proyectos = [
  {
    id: 1,
    titulo: "MotoWild",
    descripcion: "Landing page para tours en moto por el sur de Chile. Diseño responsivo con galería de imágenes y sistema de reservas.",
    imagen: "assets/image/moto.jpg",
    enlace: "https://gentle-sprite-d4815a.netlify.app/",
    tech: ["React", "Tailwind CSS", "Firebase"],
    escalable: true,
    dinamico: true,
    economico: false,
    detalles: {
      escalabilidad: "Arquitectura modular que facilita añadir nuevas rutas y tours",
      dinamico: "Sistema de reservas en tiempo real",
      economico: null
    }
  },
  {
    id: 2,
    titulo: "SoftSolution S.A.",
    descripcion: "Brochure digital para software de gestión empresarial con demostraciones interactivas de funcionalidades clave.",
    imagen: "assets/image/soft.jpg",
    enlace: "https://fanciful-palmier-ebb68f.netlify.app/",
    tech: ["React", "Material UI", "Chart.js"],
    escalable: false,
    dinamico: true,
    economico: true,
    detalles: {
      escalabilidad: null,
      dinamico: "Demos interactivas que muestran el funcionamiento del software",
      economico: "Implementación de bajo costo con alto impacto visual"
    }
  },
  {
    id: 3,
    titulo: "Ecotonal Studio",
    descripcion: "Sitio de grabación y producción musical profesional con reproductor de audio integrado y galería de trabajos.",
    imagen: "assets/image/eco.jpg",
    enlace: "https://ecotonal.netlify.app",
    tech: ["React", "Styled Components", "Howler.js"],
    escalable: true,
    dinamico: true,
    economico: true,
    detalles: {
      escalabilidad: "Sistema de catálogo expandible para nuevos artistas y trabajos",
      dinamico: "Reproductor de audio con muestras de trabajos realizados",
      economico: "Optimización de recursos para mantener costos bajos"
    }
  }
];

const Proyectos = () => {
  return (
    <section id="proyectos" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8" style={{ fontFamily: 'var(--font-heading)' }}>
          Proyectos Recientes
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectos.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300 relative"
            >
              {proyecto.imagen && (
                <img src={proyecto.imagen} alt={proyecto.titulo} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'var(--font-subheading)' }}>
                  {proyecto.titulo}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{proyecto.descripcion}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {proyecto.tech && proyecto.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="inline-block bg-blue-100 text-blue-700 rounded-full px-2 py-1 text-xs font-semibold"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={proyecto.enlace}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    Ver proyecto
                  </a>
                  <div className="flex gap-2">
                    {proyecto.escalable && (
                      <span className="text-green-500 text-xs italic" title="Escalable">
                        Escalable
                      </span>
                    )}
                    {proyecto.dinamico && (
                      <span className="text-purple-500 text-xs italic" title="Dinámico">
                        Dinámico
                      </span>
                    )}
                    {proyecto.economico && (
                      <span className="text-yellow-500 text-xs italic" title="Bajo Costo">
                        Económico
                      </span>
                    )}
                  </div>
                </div>
                {proyecto.detalles && (
                  <div className="mt-4 text-xs text-gray-500">
                    {proyecto.detalles.escalabilidad && <p>Escalabilidad: {proyecto.detalles.escalabilidad}</p>}
                    {proyecto.detalles.dinamico && <p>Dinamismo: {proyecto.detalles.dinamico}</p>}
                    {proyecto.detalles.economico && <p>Eficiencia de Costos: {proyecto.detalles.economico}</p>}
                  </div>
                )}
                {/* Elemento decorativo inspirado en Miró */}
                <div
                  className="absolute bottom-2 right-2 w-6 h-6 bg-red-300 rounded-full opacity-30"
                  style={{ transform: 'translateY(50%)' }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Proyectos;