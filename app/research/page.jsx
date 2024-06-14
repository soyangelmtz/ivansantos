import React from 'react';

const research = [
  {
    title: 'Síntesis de nuevos compuestos bioactivos',
    description: 'Investigación enfocada en la síntesis y caracterización de nuevos compuestos con potencial bioactivo para aplicaciones en la industria farmacéutica.',
    year: 2022,
    link: '#',
  },
  {
    title: 'Estudio de enzimas y su función en el metabolismo',
    description: 'Análisis de la estructura y función de enzimas clave en procesos metabólicos. Proyecto colaborativo con el Instituto de Biotecnología.',
    year: 2021,
    link: '#',
  },
  {
    title: 'Desarrollo de materiales avanzados para aplicaciones industriales',
    description: 'Investigación sobre la creación de materiales con propiedades mejoradas para su uso en diversas aplicaciones industriales.',
    year: 2020,
    link: '#',
  },
  {
    title: 'Impacto ambiental de los metales pesados en ecosistemas acuáticos',
    description: 'Estudio de los efectos de la contaminación por metales pesados en ecosistemas acuáticos y su mitigación mediante métodos químicos.',
    year: 2019,
    link: '#',
  },
  {
    title: 'Innovaciones en la catálisis homogénea',
    description: 'Desarrollo de nuevos catalizadores homogéneos para reacciones químicas más eficientes y sostenibles.',
    year: 2018,
    link: '#',
  },
];

function ResearchPage() {
  return (
    <div className="min-h-screen  py-10 px-4">
      <div className="max-w-4xl mx-auto bg-gray-100 dark:bg-slate-900 shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-yellow-200 mb-6">Investigaciones</h1>
        <p className="text-gray-700 dark:text-yellow-100 mb-6">
          Aquí se presentan algunas de las investigaciones realizadas por el Dr. Iván Alonso Santos López.
        </p>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {research.map((item, index) => (
            <li key={index} className="py-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-yellow-200">{item.title}</h2>
              <p className="text-gray-700 dark:text-yellow-100">{item.description}</p>
              <p className="text-gray-500 dark:text-yellow-300">Año: {item.year}</p>
              <a href={item.link} className="text-blue-500 hover:underline dark:text-blue-400">
                Leer más
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ResearchPage;
