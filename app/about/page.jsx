import React from "react";
import { EnvelopeAt, Geo, Telephone } from "react-bootstrap-icons";


function AboutPage() {
  return (
    <div className="w-full min-h-screen  flex flex-col items-center py-16">
      <div className="w-11/12 md:w-2/3 lg:w-1/2 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="w-full h-64 bg-cover bg-center" style={{ backgroundImage: "url('/jumbotron.png')" }}></div>
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-900">Dr. Iván Alonso Santos López</h1>
          <h2 className="text-xl text-gray-600 mt-2">Facultad de Ciencias Químicas, UANL</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Dr. Iván Alonso Santos López es un distinguido académico e investigador de la Facultad de Ciencias Químicas de la Universidad Autónoma de Nuevo León (UANL). Con más de 20 años de experiencia en el campo de la química, ha contribuido significativamente a la investigación y la enseñanza de esta disciplina.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Sus áreas de especialización incluyen la química orgánica, la síntesis de compuestos bioactivos y la química ambiental. A lo largo de su carrera, ha publicado numerosos artículos en revistas científicas de alto impacto y ha participado en diversas conferencias internacionales.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Dr. Santos López ha sido reconocido con varios premios y distinciones por su excelencia en la investigación y su dedicación a la formación de nuevas generaciones de químicos. Además, colabora activamente con instituciones y organizaciones tanto a nivel nacional como internacional.
          </p>
          <div className="mt-8">
            <h3 className="text-2xl font-semibold text-gray-900">Contacto</h3>
            <div className="mt-4">
              <p className="flex items-center text-gray-700">
                <EnvelopeAt className="mr-2" /> 
                <a href="mailto:ivansantos@uanl.edu.mx" className="hover:text-blue-500">ivansantos@uanl.edu.mx</a>
              </p>
              <p className="flex items-center mt-2 text-gray-700">
                <Telephone className="mr-2" />
                +52 81 1234 5678
              </p>
              <p className="flex items-center mt-2 text-gray-700">
                <Geo className="mr-2" />
                <a href="https://maps.app.goo.gl/d3cSHQ1sLaLzorfi7" target="_blank" className="hover:text-blue-500">División de Estudios de Posgrado, Facultad de Ciencias Químicas UANL</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
