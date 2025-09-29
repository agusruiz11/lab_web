
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const { toast } = useToast();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "🚧 Formulario en desarrollo",
      description: "🚧 Esta feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Dirección',
      details: ['Fuerte Independencia 315', 'Tandil, Buenos Aires', 'Argentina'],
      action: 'Ver en mapa'
    },
    {
      icon: Phone,
      title: 'Teléfono',
      details: ['(02494) 42-9704'],
      action: 'Llamar ahora'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['info@laboratorioaracil.ar'],
      action: 'Enviar email'
    },
    {
      icon: Clock,
      title: 'Horarios',
      details: ['Lunes a Viernes', '9:30 - 12:30 hs', '17:00 - 20:00 hs'],
      action: 'Ver horarios'
    }
  ];

  const handleContactAction = (action) => {
    toast({
      title: "🚧 Acción no disponible",
      description: "🚧 Esta feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contacto - Laboratorio Aracil</title>
        <meta name="description" content="Contacte al Laboratorio Aracil. Dirección: Fuerte Independencia 315, Tandil. Teléfono: (02494) 42-9704. Email: info@laboratorioaracil.ar" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-800 to-blue-900 text-white section-padding">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contacto</h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Estamos aquí para atenderle. Contáctenos para cualquier consulta 
              o para solicitar nuestros servicios
            </p>
          </motion.div>
        </div>
      </section>

      {/* Información de Contacto */}
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
              Información de Contacto
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Múltiples formas de comunicarse con nosotros para su comodidad
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg card-hover text-center"
              >
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <info.icon className="h-8 w-8 text-blue-800" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{info.title}</h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600">{detail}</p>
                  ))}
                </div>
                <Button
                  onClick={() => handleContactAction(info.action)}
                  variant="outline"
                  size="sm"
                  className="text-blue-800 border-blue-800 hover:bg-blue-800 hover:text-white"
                >
                  {info.action}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nuestra Ubicación */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Nuestra Ubicación</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Nos encontramos en el centro de Tandil, con fácil acceso y estacionamiento disponible
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Información de ubicación */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Cómo llegar</h3>
                <div className="space-y-4 text-gray-700">
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p className="font-semibold">Dirección:</p>
                      <p>Fuerte Independencia 315, Tandil</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🚗</span>
                    <div>
                      <p className="font-semibold">En auto:</p>
                      <p>Estacionamiento disponible en la zona</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🚌</span>
                    <div>
                      <p className="font-semibold">En transporte público:</p>
                      <p>Líneas urbanas con paradas cercanas</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <span className="text-2xl">🚶</span>
                    <div>
                      <p className="font-semibold">A pie:</p>
                      <p>Ubicado en zona céntrica, fácil acceso peatonal</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Mapa */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Mapa de ubicación</h3>
                {/* Mapa de Google Maps */}
                <div className="rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3172.515526812934!2d-59.135728199999996!3d-37.3303021!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95911f964cca95a3%3Axdb2ee44b60ecf2a!2sFuerte%20Independencia%20315%2C%20B7000%20Tandil%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1759172877458!5m2!1ses!2sar" 
                    width="100%" 
                    height="320" 
                    style={{border: 0}} 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación del Laboratorio Aracil - Fuerte Independencia 315, Tandil"
                  ></iframe>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA */}
      <section className="section-padding bg-green-600 text-white">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-green-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="h-10 w-10" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Contacto Inmediato por WhatsApp
            </h2>
            <p className="text-xl mb-8 text-green-100 max-w-3xl mx-auto">
              Para consultas urgentes o información inmediata, contáctenos directamente 
              por WhatsApp. Respuesta rápida garantizada.
            </p>
            <Button
              size="lg"
              className="bg-white text-green-600 hover:bg-green-50 font-semibold px-8 py-3"
              onClick={() => {
                const phoneNumber = '5492494429704';
                const message = 'Hola, me gustaría obtener información sobre los servicios del Laboratorio Aracil.';
                const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
                window.open(whatsappUrl, '_blank');
              }}
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Escribir por WhatsApp
            </Button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
