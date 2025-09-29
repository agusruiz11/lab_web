
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Stethoscope } from 'lucide-react';

const Team = () => {
  const doctors = [
    {
      name: 'Dr. Aracil Enrique Eduardo',
      role: 'Director Médico',
      specialization: 'Anatomía Patológica',
      experience: 'Más de 40 años de experiencia'
    },
    {
      name: 'Dr. Aracil Bernardo Tacún',
      role: 'Médico Patólogo',
      specialization: 'Anatomía Patológica',
      experience: 'Especialista en diagnóstico histopatológico'
    },
    {
      name: 'Dr. Aracil Juan Antuel',
      role: 'Médico Patólogo',
      specialization: 'Anatomía Patológica',
      experience: 'Especialista en inmunohistoquímica'
    },
    {
      name: 'Dra. Rossi Lucía Elizabeth',
      role: 'Médica Patóloga',
      specialization: 'Anatomía Patológica',
      experience: 'Especialista en patología diagnóstica'
    }
  ];

  const departments = [
    {
      icon: Stethoscope,
      title: 'Médicos Patólogos',
      description: 'Equipo de médicos especializados en anatomía patológica con amplia experiencia en diagnóstico histopatológico e inmunohistoquímica.',
      count: '4 especialistas'
    },
    {
      icon: Users,
      title: 'Técnicos Especializados',
      description: 'Personal técnico altamente capacitado en procesamiento de muestras, cortes histológicos y técnicas de laboratorio.',
      count: 'Equipo técnico'
    },
    {
      icon: Award,
      title: 'Personal Administrativo',
      description: 'Equipo administrativo dedicado a la atención al paciente, gestión de informes y coordinación con obras sociales.',
      count: 'Atención integral'
    }
  ];

  const values = [
    {
      icon: GraduationCap,
      title: 'Formación Continua',
      description: 'Nuestro equipo se mantiene actualizado con los últimos avances en anatomía patológica'
    },
    {
      icon: Award,
      title: 'Experiencia Comprobada',
      description: 'Décadas de experiencia en diagnóstico patológico y atención médica especializada'
    },
    {
      icon: Users,
      title: 'Trabajo en Equipo',
      description: 'Colaboración interdisciplinaria para brindar el mejor servicio a nuestros pacientes'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Nuestro Equipo - Laboratorio Aracil</title>
        <meta name="description" content="Conoce al equipo médico del Laboratorio Aracil: médicos patólogos especializados, técnicos y personal administrativo comprometidos con la excelencia." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestro Equipo</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Profesionales especializados comprometidos con la excelencia 
              en el diagnóstico patológico
            </p>
          </motion.div>
        </div>
      </section>

      {/* Médicos */}
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
              Equipo Médico
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Médicos patólogos especializados con amplia experiencia en diagnóstico 
              histopatológico e inmunohistoquímica
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {doctors.map((doctor, index) => (
              <motion.div
                key={doctor.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg card-hover"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-4 rounded-full flex-shrink-0">
                    <Stethoscope className="h-8 w-8 text-blue-800" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{doctor.name}</h3>
                    <p className="text-blue-800 font-medium mb-2">{doctor.role}</p>
                    <p className="text-gray-600 mb-2">{doctor.specialization}</p>
                    <p className="text-sm text-gray-500">{doctor.experience}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Departamentos */}
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
              Estructura del Equipo
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un equipo multidisciplinario organizado para brindar atención integral 
              y especializada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {departments.map((dept, index) => (
              <motion.div
                key={dept.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg card-hover text-center"
              >
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <dept.icon className="h-10 w-10 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{dept.title}</h3>
                <p className="text-gray-600 mb-4">{dept.description}</p>
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  {dept.count}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores del Equipo */}
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
              Nuestros Valores Profesionales
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Los principios que guían el trabajo de nuestro equipo profesional
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

      {/* Compromiso */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nuestro Compromiso
            </h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg text-blue-100">
              <p>
                En el Laboratorio Aracil, nuestro equipo está comprometido con brindar 
                diagnósticos precisos y confiables, manteniendo siempre los más altos 
                estándares de calidad profesional.
              </p>
              <p>
                Cada miembro de nuestro equipo aporta su experiencia y dedicación para 
                asegurar que cada paciente reciba la atención especializada que merece, 
                con la calidez humana que nos caracteriza.
              </p>
              <p className="text-xl font-semibold text-white">
                "Donde usted no es nuestro paciente, usted es nuestra preocupación"
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Team;
