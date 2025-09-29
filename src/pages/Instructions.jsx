
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Download, FileText, Clock, Thermometer, AlertCircle, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Instructions = () => {
  const { toast } = useToast();

  const handleDownload = (fileName) => {
    toast({
      title: "🚧 Descarga no disponible",
      description: "🚧 Esta feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const instructions = [
    {
      title: 'Preparación de Muestras para Biopsia',
      description: 'Guía completa para la correcta preparación y conservación de muestras de biopsia',
      icon: FileText,
      items: [
        'Fijación inmediata en formol al 10%',
        'Relación muestra-fijador 1:10',
        'Identificación clara del frasco',
        'Datos clínicos completos'
      ]
    },
    {
      title: 'Conservación y Transporte',
      description: 'Instrucciones para el correcto transporte de muestras al laboratorio',
      icon: Thermometer,
      items: [
        'Mantener a temperatura ambiente',
        'Evitar congelación de la muestra',
        'Transporte en contenedor seguro',
        'Entrega dentro de las 24 horas'
      ]
    },
    {
      title: 'Tiempos de Entrega',
      description: 'Información sobre los tiempos estimados para cada tipo de estudio',
      icon: Clock,
      items: [
        'Histopatología rutinaria: 3-5 días',
        'Inmunohistoquímica: 5-7 días',
        'Estudios especiales: 7-10 días',
        'Casos urgentes: 24-48 horas'
      ]
    }
  ];

  const guidelines = [
    {
      icon: CheckCircle,
      title: 'Qué SÍ hacer',
      items: [
        'Fijar la muestra inmediatamente después de la extracción',
        'Usar formol neutro tamponado al 10%',
        'Completar todos los datos en la solicitud',
        'Identificar claramente el frasco con los datos del paciente',
        'Incluir información clínica relevante',
        'Transportar a temperatura ambiente'
      ]
    },
    {
      icon: AlertCircle,
      title: 'Qué NO hacer',
      items: [
        'No congelar las muestras',
        'No usar alcohol como fijador',
        'No dejar la muestra sin fijar',
        'No usar frascos sin identificación',
        'No transportar sin protección',
        'No demorar el envío más de 24 horas'
      ]
    }
  ];

  const downloadableGuides = [
    {
      title: 'Guía de Preparación de Biopsias',
      description: 'Manual completo para la preparación de muestras de biopsia',
      format: 'PDF - 2.5 MB'
    },
    {
      title: 'Protocolo de Transporte',
      description: 'Instrucciones detalladas para el transporte seguro de muestras',
      format: 'PDF - 1.8 MB'
    },
    {
      title: 'Formulario de Solicitud',
      description: 'Formulario oficial para solicitud de estudios anatomopatológicos',
      format: 'PDF - 0.5 MB'
    },
    {
      title: 'Tiempos de Entrega',
      description: 'Tabla de tiempos estimados según tipo de estudio',
      format: 'PDF - 0.3 MB'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Instructivos - Laboratorio Aracil</title>
        <meta name="description" content="Guías e instructivos para la correcta preparación, conservación y transporte de muestras para anatomía patológica." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Instructivos</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Guías completas para la correcta preparación y entrega de muestras
            </p>
          </motion.div>
        </div>
      </section>

      {/* Instrucciones Principales */}
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
              Guías de Procedimientos
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Instrucciones detalladas para garantizar la calidad de las muestras 
              y la precisión de los diagnósticos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {instructions.map((instruction, index) => (
              <motion.div
                key={instruction.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg card-hover"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <instruction.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {instruction.title}
                </h3>
                <p className="text-gray-600 mb-4 text-center">{instruction.description}</p>
                <ul className="space-y-2">
                  {instruction.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className="w-2 h-2 bg-blue-800 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Qué hacer y qué no hacer */}
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
              Recomendaciones Importantes
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Buenas prácticas y errores comunes a evitar en el manejo de muestras
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {guidelines.map((guideline, index) => (
              <motion.div
                key={guideline.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center mb-6">
                  <div className={`rounded-full w-12 h-12 flex items-center justify-center mr-4 ${
                    index === 0 ? 'bg-green-100' : 'bg-red-100'
                  }`}>
                    <guideline.icon className={`h-6 w-6 ${
                      index === 0 ? 'text-green-600' : 'text-red-600'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{guideline.title}</h3>
                </div>
                <ul className="space-y-3">
                  {guideline.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <div className={`w-2 h-2 rounded-full mr-3 mt-2 flex-shrink-0 ${
                        index === 0 ? 'bg-green-600' : 'bg-red-600'
                      }`}></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Guías Descargables */}
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
              Documentos Descargables
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Descargue nuestras guías completas en formato PDF para consulta offline
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {downloadableGuides.map((guide, index) => (
              <motion.div
                key={guide.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg card-hover"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{guide.title}</h3>
                    <p className="text-gray-600 mb-3">{guide.description}</p>
                    <span className="text-sm text-gray-500">{guide.format}</span>
                  </div>
                  <Button
                    onClick={() => handleDownload(guide.title)}
                    variant="outline"
                    size="sm"
                    className="ml-4 flex-shrink-0"
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Descargar
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto para Dudas */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Tiene Dudas?
            </h2>
            <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Nuestro equipo está disponible para resolver cualquier consulta 
              sobre la preparación y entrega de muestras
            </p>
            <div className="space-y-4 text-lg text-blue-100 mb-8">
              <p>📞 Teléfono: (02494) 42-9704</p>
              <p>📧 Email: info@laboratorioaracil.ar</p>
              <p>🕒 Horarios: Lunes a Viernes, 9:30-12:30 y 17:00-20:00 hs</p>
            </div>
            <p className="text-blue-100">
              No dude en contactarnos ante cualquier duda sobre los procedimientos. 
              Estamos aquí para ayudarle a obtener los mejores resultados.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Instructions;
