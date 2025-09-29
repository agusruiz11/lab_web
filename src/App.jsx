
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Services from '@/pages/Services';
import Team from '@/pages/Team';
import Reports from '@/pages/Reports';
import Instructions from '@/pages/Instructions';
import Contact from '@/pages/Contact';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Helmet>
          <title>Laboratorio Aracil - Patología de Precisión Personalizada</title>
          <meta name="description" content="Laboratorio de anatomía patológica en Tandil desde 1984. Diagnósticos precisos con calidad humana. Histopatología e inmunohistoquímica." />
          <meta name="keywords" content="laboratorio, patología, anatomía patológica, Tandil, diagnóstico, histopatología, inmunohistoquímica" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link rel="canonical" href="https://laboratorioaracil.ar" />
        </Helmet>
        
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre-nosotros" element={<About />} />
            <Route path="/servicios" element={<Services />} />
            <Route path="/equipo" element={<Team />} />
            {/* <Route path="/informes" element={<Reports />} /> */}
            <Route path="/instructivos" element={<Instructions />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </main>
        
        <Footer />
        <WhatsAppFloat />
        <Toaster />
      </div>
    </Router>
  );
}

export default App;
