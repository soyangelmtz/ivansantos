import React from "react";
import { EnvelopeAt, Geo, Telephone } from "react-bootstrap-icons";

function ContactPage() {
  return (
    <div className="w-full min-h-screen flex flex-col items-center py-16 ">
      <div className="w-11/12 md:w-2/3 lg:w-1/2 bg-slate-100 dark:bg-slate-950 shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/contact.jpg')", filter: "blur(1px)" }}></div>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-yellow-200">Contacto</h1>
          <p className="mt-4 text-gray-700 leading-relaxed dark:text-yellow-100">
            Para cualquier consulta o colaboración, no dudes en ponerte en contacto con el Dr. Iván Alonso Santos López. Estamos aquí para ayudarte y responder a tus preguntas.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-yellow-100">Información de Contacto</h3>
            <div className="mt-4">
              <p className="flex items-center text-gray-700 dark:text-yellow-100">
                <EnvelopeAt className="mr-2" /> 
                <a href="mailto:ivansantos@uanl.edu.mx" className="hover:text-blue-500 ">ivansantos@uanl.edu.mx</a>
              </p>
              <p className="flex items-center mt-2 text-gray-700 dark:text-yellow-100">
                <Telephone className="mr-2" />
                +52 81 1234 5678
              </p>
              <p className="flex items-center mt-2 text-gray-700 dark:text-yellow-100">
                <Geo className="mr-2" />
                <a href="https://maps.app.goo.gl/d3cSHQ1sLaLzorfi7" target="_blank" className="hover:text-blue-500">División de Estudios de Posgrado, Facultad de Ciencias Químicas UANL</a>
              </p>
            </div>
            <div className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-yellow-100">Ubicación</h3>
              <p className="mt-4 text-gray-700 leading-relaxed dark:text-yellow-100">
                Nos encontramos en la Facultad de Ciencias Químicas de la Universidad Autónoma de Nuevo León (UANL), en la División de Estudios de Posgrado.
              </p>
              <div className="my-6 border md:w-[70%] mx-auto">
                <a href="https://maps.app.goo.gl/d3cSHQ1sLaLzorfi7" target="_blank">
                  <img src="/map-preview.png" alt="Ubicación en Google Maps" className="w-full h-64 object-cover rounded-lg hover:opacity-80 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
