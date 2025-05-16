import React from 'react';
import {
  Github, Database, FileType2, Code2,
  Server, Terminal, Cog
} from 'lucide-react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const About = () => {
  const skills = [
    { icon: <span className="text-blue-600 text-2xl">⚛️</span>, name: 'React' },
    { icon: <FileType2 size={28} className="text-white" />, name: 'Next.js', bg: 'bg-gray-800' },
    { icon: <Terminal size={28} className="text-yellow-600" />, name: 'Linux', bg: 'bg-yellow-100' },
    { icon: <span className="text-blue-600 text-xl">🐳</span>, name: 'Docker', bg: 'bg-blue-100' },
    { icon: <Code2 size={28} className="text-yellow-600" />, name: 'JavaScript', bg: 'bg-yellow-100' },
    { icon: <Server size={28} className="text-green-600" />, name: 'Node.js', bg: 'bg-green-100' },
    { icon: <Github size={28} className="text-white" />, name: 'GitHub', bg: 'bg-gray-900' },
    { icon: <Database size={28} className="text-white" />, name: 'MySQL', bg: 'bg-blue-500' },
    { icon: <Cog size={28} className="text-purple-600" />, name: 'DevOps', bg: 'bg-purple-100' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <motion.h2
          className="text-3xl font-bold text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Sobre mí
        </motion.h2>

        <div className="flex flex-col space-y-12">

          {/* Quién Soy */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-32 h-32 mb-4 md:mb-0">
                <img 
                  src="/image/perfil.jpg" 
                  alt="Juan Pablo Monsalve" 
                  className="rounded-full object-cover w-full h-full border-4 border-blue-100"
                />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">Quién Soy</h3>
                <p className="text-gray-700 leading-relaxed">
                  Soy Juan Pablo Monsalve Suazo, apasionado por el software libre, el desarrollo web moderno 
                  y la administración de sistemas Linux. Con una visión clara de ofrecer soluciones con propósito, 
                  fundé <strong>MultiX</strong> como una forma de aplicar mis conocimientos técnicos para mejorar 
                  los procesos tecnológicos de personas y empresas.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Educación */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-4">
              <div className="bg-green-100 p-2 rounded-full mr-3">
                <span className="text-green-600 text-xl">🎓</span>
              </div>
              <h3 className="text-xl font-semibold">Educación</h3>
            </div>
            <ul className="space-y-2 text-gray-700 pl-4">
              <li>Ingeniería en Informática, Universidad de Chile</li>
              <li>Certificación en Desarrollo Web Full Stack</li>
              <li>Especialización en Administración de Sistemas Linux</li>
            </ul>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="bg-purple-100 p-2 rounded-full mr-3">
                <span className="text-purple-600 text-xl">💻</span>
              </div>
              <h3 className="text-xl font-semibold">Skills</h3>
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className={`flex flex-col items-center hover:scale-110 transition-transform duration-300`}
                >
                  <div className={`rounded-full w-14 h-14 flex items-center justify-center shadow-md ${skill.bg || 'bg-blue-100'}`}>
                    {skill.icon}
                  </div>
                  <span className="text-sm mt-2 font-medium text-gray-700">{skill.name}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
