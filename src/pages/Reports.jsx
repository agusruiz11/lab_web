
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Download, Lock, Search, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { toast } = useToast();

  const handleLogin = () => {
    toast({
      title: "🚧 Sistema en desarrollo",
      description: "🚧 Esta feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleSearch = () => {
    toast({
      title: "🚧 Búsqueda no disponible",
      description: "🚧 Esta feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const features = [
    {
      icon: FileText,
      title: 'Informes Digitales',
      description: 'Acceso rápido y seguro a todos sus informes de laboratorio en formato digital'
    },
    {
      icon: Download,
      title: 'Descarga Inmediata',
      description: 'Descargue sus informes en formato PDF para compartir con su médico'
    },
    {
      icon: Lock,
      title: 'Acceso Seguro',
      description: 'Sistema protegido con credenciales personales para garantizar la privacidad'
    },
    {
      icon: Clock,
      title: 'Disponibilidad 24/7',
      description: 'Consulte sus resultados en cualquier momento del día'
    }
  ];

  const instructions = [
    {
      step: '1',
      title: 'Solicite sus credenciales',
      description: 'Contacte al laboratorio para obtener su usuario y contraseña de acceso'
    },
    {
      step: '2',
      title: 'Ingrese al sistema',
      description: 'Utilice sus credenciales para acceder de forma segura a la plataforma'
    },
    {
      step: '3',
      title: 'Consulte sus informes',
      description: 'Navegue por sus informes organizados por fecha y tipo de estudio'
    },
    {
      step: '4',
      title: 'Descargue los resultados',
      description: 'Descargue los informes en PDF para compartir con su médico tratante'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Informes - Laboratorio Aracil</title>
        <meta name="description" content="Acceda a sus informes de laboratorio de forma segura. Sistema digital para consultar y descargar resultados de anatomía patológica." />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Consulta de Informes</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Acceda de forma segura a sus resultados de laboratorio
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sistema de Login */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-lg shadow-lg"
          >
            <div className="text-center mb-8">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <Lock className="h-10 w-10 text-blue-800" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceso a Informes</h2>
              <p className="text-gray-600">
                Ingrese sus credenciales para acceder a sus informes de laboratorio
              </p>
            </div>

            <div className="max-w-md mx-auto space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de Documento
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ingrese su DNI"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Ingrese su contraseña"
                />
              </div>

              <Button 
                onClick={handleLogin}
                className="w-full bg-blue-800 hover:bg-blue-900"
                size="lg"
              >
                <Lock className="mr-2 h-5 w-5" />
                Acceder a Informes
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  ¿No tiene credenciales de acceso?{' '}
                  <a href="/contacto" className="text-blue-800 hover:underline">
                    Contáctenos
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Búsqueda Rápida */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Búsqueda Rápida</h2>
            <p className="text-gray-600">
              Busque sus informes por número de protocolo o fecha
            </p>
          </motion.div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-grow">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Número de protocolo o fecha (DD/MM/AAAA)"
                />
              </div>
              <Button 
                onClick={handleSearch}
                className="bg-blue-800 hover:bg-blue-900 px-8"
                size="lg"
              >
                <Search className="mr-2 h-5 w-5" />
                Buscar
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
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
              Sistema de Informes Digital
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Plataforma moderna y segura para el acceso a sus resultados de laboratorio
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="h-10 w-10 text-blue-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Instrucciones */}
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
              Cómo Acceder a sus Informes
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Siga estos sencillos pasos para consultar sus resultados
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructions.map((instruction, index) => (
              <motion.div
                key={instruction.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-blue-800 text-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {instruction.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{instruction.title}</h3>
                <p className="text-gray-600">{instruction.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Información Importante */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-blue-700 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Shield className="h-10 w-10" />
            </div>
            <h2 className="text-3xl font-bold mb-6">Información Importante</h2>
            <div className="max-w-4xl mx-auto space-y-4 text-lg text-blue-100">
              <p>
                • Los informes están disponibles 48-72 horas después de la toma de muestra
              </p>
              <p>
                • Para obtener sus credenciales de acceso, contacte al laboratorio con su DNI
              </p>
              <p>
                • Los informes se mantienen disponibles en el sistema por 2 años
              </p>
              <p>
                • En caso de dudas sobre los resultados, consulte con su médico tratante
              </p>
              <p className="font-semibold text-white">
                Para soporte técnico: (02494) 42-9704 | info@laboratorioaracil.ar
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Reports;
