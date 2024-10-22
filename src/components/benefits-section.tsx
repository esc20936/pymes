'use client'

import { AppWindow, BarChart2, DollarSign } from "lucide-react";

export function BenefitsSectionComponent() {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-purple-50/10 via-indigo-100 to-purple-50/10">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-indigo-900 mb-4">¿Cómo Bam Len te ayuda a mejorar la gestión financiera?</h2>
        <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
          Como dueño de una PYME, tener control sobre tus finanzas es crucial. Descubre cómo Bam Len optimiza la administración de tu negocio, ahorrándote tiempo y dinero.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Control Financiero Inteligente */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BarChart2 className="w-8 h-8 text-indigo-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-indigo-900">Control Financiero Inteligente</h3>
            <p className="text-gray-600">
              Ten una visión clara de tus ingresos y gastos en tiempo real. Toma decisiones informadas para mejorar tu flujo de caja.
            </p>
          </div>

          {/* Automatización de Reportes */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <AppWindow className="w-8 h-8 text-blue-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-indigo-900">Automatización de Reportes</h3>
            <p className="text-gray-600">
              Genera reportes financieros automáticamente y mantén tus cuentas siempre al día, sin el esfuerzo manual.
            </p>
          </div>

          {/* Optimización de Pagos y Cobros */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-pink-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-indigo-900">Optimización de Pagos y Cobros</h3>
            <p className="text-gray-600">
              Simplifica el proceso de pagos a proveedores y cobros a clientes, optimizando el tiempo y reduciendo errores.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
