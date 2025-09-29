
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Calendar, Shield, Target } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '1984',
      title: 'Fundación',
      description: 'Inicio de actividades como el primer laboratorio de anatomía patológica de Tandil'
    },
    {
      year: '1990',
      title: 'Habilitación Oficial',
      description: 'Obtención de todas las habilitaciones oficiales requeridas'
    },
    {
      year: '2000',
      title: 'Modernización',
      description: 'Incorporación de tecnología avanzada en inmunohistoquímica'
    },
    {
      year: '2024',
      title: 'Actualidad',
      description: 'Más de 40 años de experiencia al servicio de la comunidad'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precisión',
      description: 'Diagnósticos exactos basados en la evidencia científica más actualizada'
    },
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Compromiso constante con la calidad y mejora continua'
    },
    {
      icon: Shield,
      title: 'Confiabilidad',
      description: 'Respaldo de décadas de experiencia y habilitaciones oficiales'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sobre Nosotros - Laboratorio Aracil</title>
        <meta name="description" content="Conoce la historia del Laboratorio Aracil, fundado en 1984. Más de 40 años de experiencia en anatomía patológica en Tandil." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre Nosotros</h1>
            <p className="text-xl md:text-2xl text-blue-100">
              Más de 40 años de compromiso con la salud de nuestra comunidad
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  El Laboratorio Aracil fue fundado en 1984 con la visión de brindar servicios 
                  de anatomía patológica de la más alta calidad a la comunidad de Tandil y la región.
                </p>
                <p>
                  Como el laboratorio de anatomía patológica más antiguo de la ciudad, hemos sido 
                  testigos y protagonistas del desarrollo de la medicina diagnóstica en nuestra región, 
                  adaptándonos constantemente a los avances tecnológicos y científicos.
                </p>
                <p>
                  Nuestro compromiso con la excelencia nos ha llevado a obtener todas las habilitaciones 
                  oficiales requeridas y a mantener los más altos estándares de calidad en cada uno 
                  de nuestros procesos.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                className="rounded-lg shadow-xl w-full h-96 object-cover"
                alt="Laboratorio de anatomía patológica moderno"
               src="https://images.unsplash.com/photo-1602052577122-f73b9710adba" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestra Trayectoria
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Cuatro décadas de crecimiento, innovación y compromiso con la excelencia médica
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg card-hover text-center"
              >
                <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Calendar className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">{milestone.year}</h3>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                <p className="text-gray-600">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestros Valores
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Los principios que guían nuestro trabajo diario y definen nuestra identidad profesional
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-10 w-10 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl font-bold mb-6">Nuestra Misión</h2>
              <p className="text-lg text-blue-100">
                Brindar servicios de anatomía patológica de la más alta calidad, 
                con diagnósticos precisos y confiables que contribuyan al bienestar 
                de nuestros pacientes, manteniendo siempre un enfoque humano y personalizado.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              <h2 className="text-3xl font-bold mb-6">Nuestra Visión</h2>
              <p className="text-lg text-blue-100">
                Ser el laboratorio de anatomía patológica de referencia en la región, 
                reconocido por nuestra excelencia técnica, innovación constante y 
                compromiso inquebrantable con la salud de nuestra comunidad.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
