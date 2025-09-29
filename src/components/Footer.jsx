
import React from 'react';
import { Link } from 'react-router-dom';
import { Microscope, MapPin, Phone, Mail, Clock } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Inicio', href: '/' },
    { name: 'Sobre Nosotros', href: '/sobre-nosotros' },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Equipo', href: '/equipo' },
    { name: 'Contacto', href: '/contacto' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Microscope className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">Laboratorio Aracil</span>
            </div>
            <p className="text-gray-300 mb-4">
              Patología de precisión personalizada desde 1984. El laboratorio de anatomía patológica 
              más antiguo de Tandil, oficialmente habilitado y comprometido con la excelencia diagnóstica.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Habilitado oficialmente</span>
              <span>•</span>
              <span>Desde 1984</span>
              <span>•</span>
              <span>Tandil, Argentina</span>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Enlaces Rápidos</span>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Información de contacto */}
          <div>
            <span className="text-lg font-semibold mb-4 block">Contacto</span>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Fuerte Independencia 315<br />
                  Tandil, Buenos Aires
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">(02494) 42-9704</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@laboratorioaracil.ar</span>
              </div>
              <div className="flex items-start space-x-2">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">
                  Lun - Vie: 9:30-12:30<br />
                  17:00-20:00 hs
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Laboratorio Aracil. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
