import React from 'react';
import { Microscope, MapPin, Phone, Mail, Clock } from 'lucide-react';

const HeroImage = () => {
  return (
    <div className='flex justify-center items-center p-6'>
      <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 p-6 max-w-md w-full">
        {/* Logo y título del laboratorio */}
        <div className="flex items-center space-x-3 mb-4">
          <Microscope className="h-8 w-8 text-blue-400" />
          <div>
            <h2 className="text-xl font-bold text-gray-100">Laboratorio Aracil</h2>
            <p className="text-sm text-gray-400">Patología de Precisión Personalizada</p>
          </div>
        </div>

        {/* Información del laboratorio */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-gray-300">
            <MapPin className="h-4 w-4 mr-2 text-blue-400" />
            <span>Tandil, Argentina</span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <Clock className="h-4 w-4 mr-2 text-blue-400" />
            <span>Desde 1984</span>
          </div>
          <div className="flex items-center text-sm text-gray-300">
            <Phone className="h-4 w-4 mr-2 text-blue-400" />
            <span>+54 249 442-1234</span>
          </div>
        </div>

        {/* URL del sitio web */}
        <div className="text-center">
          <p className="text-xs text-gray-400 mb-1">Visita nuestro sitio web:</p>
          <p className="text-sm text-blue-400 font-mono">https://laboratorioaracil.ar</p>
        </div>
      </div>
    </div>
  );
};

export default HeroImage;
