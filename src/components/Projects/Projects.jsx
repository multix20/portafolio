import React from 'react';
import { projects } from '../../data/projects'; // Asegúrate de que la ruta sea correcta

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8" style={{ fontFamily: 'TuFuenteParaTitulos' }}>
          Proyectos Destacados
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
            >
              {project.image && (
                <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2" style={{ fontFamily: 'TuFuenteParaSubtitulos' }}>
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech && project.tech.map((tech, index) => (
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
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    Ver más
                  </a>
                  {project.scalability && (
                    <span className="text-green-500 text-xs italic" title="Escalable">
                      Escalable
                    </span>
                  )}
                  {project.dynamic && (
                    <span className="text-purple-500 text-xs italic" title="Dinámico">
                      Dinámico
                    </span>
                  )}
                  {project.costEffective && (
                    <span className="text-yellow-500 text-xs italic" title="Bajo Costo">
                      Económico
                    </span>
                  )}
                </div>
                {project.details && (
                  <div className="mt-4 text-xs text-gray-500">
                    {project.details.scalability && <p>Escalabilidad: {project.details.scalability}</p>}
                    {project.details.dynamic && <p>Dinamismo: {project.details.dynamic}</p>}
                    {project.details.costEffective && <p>Eficiencia de Costos: {project.details.costEffective}</p>}
                  </div>
                )}
                {/* Ejemplo sutil de forma geométrica inspirada en Miró */}
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

export default Projects;