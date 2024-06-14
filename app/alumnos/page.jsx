"use client"
import React, { useState } from 'react';

const schedule = [
  { day: 'Lunes', time: '10:00 - 12:00', activity: 'Clase de Química Orgánica', info: 'Entrega de tareas sobre el tema de compuestos orgánicos.' },
  { day: 'Martes', time: '14:00 - 16:00', activity: 'Clase de Bioquímica', info: 'Tema a exponer: Enzimas y su función en el metabolismo.' },
  { day: 'Miércoles', time: '09:00 - 11:00', activity: 'Consultas de Tesis', info: 'Revisión de avances de tesis.' },
  { day: 'Jueves', time: '10:00 - 12:00', activity: 'Clase de Química Inorgánica', info: 'Tema a exponer: Metales de transición.' },
  { day: 'Viernes', time: '11:00 - 13:00', activity: 'Revisión de Proyectos', info: 'Entrega de proyectos finales de laboratorio.' },
];

function CalendarPage() {
  const days = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes'];
  const hours = Array.from({ length: 15 }, (_, i) => `${7 + i}:00`);
  const [tooltip, setTooltip] = useState({ visible: false, content: '', x: 0, y: 0 });

  const handleMouseEnter = (event, info) => {
    const rect = event.target.getBoundingClientRect();
    setTooltip({ visible: true, content: info, x: rect.left + window.scrollX, y: rect.top + window.scrollY });
  };

  const handleMouseLeave = () => {
    setTooltip({ visible: false, content: '', x: 0, y: 0 });
  };

  return (
    <div className="relative min-h-screen py-10 px-4">
      <div className="max-w-[75vw] mx-auto bg-gray-100 dark:bg-slate-900 shadow-lg rounded-lg p-6">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-yellow-200 mb-6">Alumnos</h1>
        <p className="text-gray-700 dark:text-yellow-100 mb-6">
          Aquí puedes encontrar la disponibilidad del Dr. Iván Alonso Santos López, los horarios de sus clases y las fechas de entrega de tareas o actividades.
        </p>
        <div className="bg-white dark:bg-slate-950 shadow rounded-lg p-4 overflow-x-auto">
          <table className="min-w-full table-fixed divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Hora</th>
                {days.map(day => (
                  <th key={day} className="w-1/6 px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">{day}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {hours.map(hour => (
                <tr key={hour}>
                  <td className="w-1/6 px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-200">{hour}</td>
                  {days.map(day => {
                    const scheduleItem = schedule.find(s => s.day === day && s.time.startsWith(hour));
                    const activity = scheduleItem ? (
                      <span
                        className="cursor-pointer hover:text-blue-500"
                        onMouseEnter={(e) => handleMouseEnter(e, scheduleItem.info)}
                        onMouseLeave={handleMouseLeave}
                      >
                        {scheduleItem.activity}
                      </span>
                    ) : '';
                    return (
                      <td key={`${day}-${hour}`} className="w-1/6 px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-300">
                        {activity}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {tooltip.visible && (
        <div
          className="absolute bg-gray-700 text-white text-xs rounded py-1 px-4 z-10"
          style={{ top: tooltip.y - 150, left: tooltip.x }}
        >
          {tooltip.content}
        </div>
      )}
    </div>
  );
}

export default CalendarPage;
