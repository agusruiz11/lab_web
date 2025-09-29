
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Microscope, TestTube, FileText, Clock, Shield, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Microscope,
      title: 'Diagnóstico por Histopatología',
      description: 'Análisis microscópico de tejidos para el diagnóstico de enfermedades',
      features: [
        'Biopsias de todos los órganos y sistemas',
        'Estudios de piezas quirúrgicas',
        'Análisis de citología',
        'Diagnósticos de precisión'
      ]
    },
    {
      icon: TestTube,
      title: 'Diagnóstico por Inmunohistoquímica',
      description: 'Técnicas avanzadas para identificación específica de proteínas',
      features: [
        'Marcadores tumorales específicos',
        'Diagnóstico diferencial de neoplasias',
        'Estudios de receptores hormonales',
        'Análisis de expresión proteica'
      ]
    },
    {
      icon: FileText,
      title: 'Preparación de Muestras',
      description: 'Procesamiento especializado de muestras biológicas',
      features: [
        'Fijación y procesamiento de tejidos',
        'Cortes histológicos de alta calidad',
        'Coloraciones especiales',
        'Técnicas de preservación'
      ]
    },
    {
      icon: Users,
      title: 'Informes Personalizados',
      description: 'Reportes detallados adaptados a cada caso clínico',
      features: [
        'Informes descriptivos completos',
        'Correlación clínico-patológica',
        'Recomendaciones diagnósticas',
        'Consultoría especializada'
      ]
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Recepción de Muestra',
      description: 'Recibimos y registramos la muestra con todos los datos clínicos necesarios'
    },
    {
      step: '02',
      title: 'Procesamiento',
      description: 'Preparación técnica especializada de la muestra para análisis'
    },
    {
      step: '03',
      title: 'Análisis Microscópico',
      description: 'Evaluación detallada por nuestros médicos patólogos especializados'
    },
    {
      step: '04',
      title: 'Informe Final',
      description: 'Elaboración del diagnóstico y entrega del informe completo'
    }
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Tiempos de Entrega Ágiles',
      description: 'Procesamiento eficiente sin comprometer la calidad'
    },
    {
      icon: Shield,
      title: 'Calidad Garantizada',
      description: 'Estándares internacionales y controles de calidad rigurosos'
    },
    {
      icon: Users,
      title: 'Atención Personalizada',
      description: 'Cada caso recibe atención individual y especializada'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Servicios - Laboratorio Aracil</title>
        <meta name="description" content="Servicios especializados en anatomía patológica: histopatología, inmunohistoquímica, preparación de muestras e informes personalizados." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Nuestros Servicios</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Servicios especializados en anatomía patológica con la más alta calidad 
              y precisión diagnóstica
            </p>
          </motion.div>
        </div>
      </section>

      {/* Servicios Principales */}
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
              Servicios Especializados
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ofrecemos una gama completa de servicios de anatomía patológica 
              para satisfacer todas las necesidades diagnósticas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg card-hover"
              >
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <service.icon className="h-8 w-8 text-blue-800" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso */}
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
              Nuestro Proceso
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Un proceso sistemático y riguroso que garantiza la máxima precisión 
              en cada diagnóstico
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
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
              ¿Por qué elegirnos?
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Ventajas que nos distinguen en el campo de la anatomía patológica
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-10 w-10 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Información para Pacientes */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Información para Pacientes y Médicos
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Trabajamos con las principales obras sociales y prepagas. 
              Consulte nuestros instructivos para la correcta preparación y entrega de muestras.
            </p>
            <div className="space-y-4 text-lg text-blue-100">
              <p>• Atención con cita previa y urgencias</p>
              <p>• Informes disponibles en formato digital</p>
              <p>• Consultoría especializada disponible</p>
              <p>• Cobertura de obras sociales y prepagas</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
