
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Award, Heart, Shield, Clock, ArrowRight, Users, FileText, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Home = () => {
  const { toast } = useToast();

  const handleSolicitarInforme = () => {
    toast({
      title: "🚧 Esta función está en desarrollo",
      description: "🚧 Esta feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const features = [
    {
      icon: Award,
      title: 'Excelencia',
      description: 'Más de 40 años de experiencia en diagnósticos de precisión'
    },
    {
      icon: Heart,
      title: 'Calidad Humana',
      description: 'Atención personalizada donde usted es nuestra preocupación'
    },
    {
      icon: Shield,
      title: 'Obras Sociales',
      description: 'Trabajamos con las principales obras sociales y prepagas'
    },
    {
      icon: Clock,
      title: 'Disponibilidad',
      description: 'Horarios amplios y atención ágil para su comodidad'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Laboratorio Aracil - Patología de Precisión Personalizada desde 1984</title>
        <meta name="description" content="Laboratorio de anatomía patológica en Tandil desde 1984. Diagnósticos precisos con calidad humana. El más antiguo de Tandil, oficialmente habilitado." />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Laboratorio Aracil
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-light">
              Patología de precisión personalizada desde 1984
            </p>
            <p className="text-lg md:text-xl mb-8 text-blue-100">
              "Donde usted no es nuestro paciente, usted es nuestra preocupación"
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleSolicitarInforme}
                size="lg" 
                className="bg-white text-blue-800 hover:bg-blue-50 font-semibold px-8 py-3"
              >
                <FileText className="mr-2 h-5 w-5" />
                Solicitar Informe
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-8 py-3"
              >
                <Link to="/contacto">
                  <Phone className="mr-2 h-5 w-5" />
                  Contacto
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
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
              Más de 40 años de experiencia
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Fundado en 1984, somos el laboratorio de anatomía patológica más antiguo de Tandil, 
                oficialmente habilitado y comprometido con la excelencia en el diagnóstico médico.
              </p>
              <p className="text-lg text-gray-700">
                Nuestra misión es brindar diagnósticos precisos y confiables, combinando la experiencia 
                de décadas con la tecnología más avanzada, siempre con un enfoque humano y personalizado.
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg card-hover text-center"
              >
                <feature.icon className="h-12 w-12 text-blue-800 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-blue-800 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Conozca nuestro equipo profesional
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Un equipo de médicos especializados y técnicos altamente capacitados 
              al servicio de su salud
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                asChild
                size="lg" 
                className="bg-white text-blue-800 hover:bg-blue-50 font-semibold px-8 py-3"
              >
                <Link to="/equipo">
                  <Users className="mr-2 h-5 w-5" />
                  Conocer Equipo
                </Link>
              </Button>
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="border-white text-white hover:bg-white hover:text-blue-800 font-semibold px-8 py-3"
              >
                <Link to="/contacto">
                  Reserve una Consulta
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Nuestros Servicios
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              Ofrecemos servicios especializados en anatomía patológica con la más alta calidad 
              y precisión diagnóstica
            </p>
            
            <Button asChild size="lg" className="bg-blue-800 hover:bg-blue-900 text-white">
              <Link to="/servicios">
                Ver Todos los Servicios
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
