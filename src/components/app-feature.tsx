"'use client'"

import Image from "next/image"

export function AppFeature() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8 bg-gradient-to-br ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="rounded-3xl p-4 md:p-8 relative z-10">
              <Image
                src="/proto.png"
                width={300}
                height={600}
                alt="App Interface"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
            <div className="absolute top-4 left-4 w-full h-full rounded-3xl -z-10"></div>
            <div className="absolute -top-4 -right-4 text-blue-400">
              <svg className="w-8 h-8" viewBox="0 24" fill="currentColor">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
              </svg>
            </div>
            <div className="absolute -bottom-4 -left-4 text-purple-400">
              <svg className="w-12 h-12" viewBox="0 24" fill="currentColor">
                <path d="M17.66 11.2C17.43 10.9 17.15 10.64 16.89 10.38C16.22 9.78 15.46 9.35 14.82 8.72C13.33 7.26 13 4.85 13.95 3C13 3.23 12.17 3.75 11.46 4.32C8.87 6.4 7.85 10.07 9.07 13.22C9.11 13.32 9.15 13.42 13.55C9.15 13.77 9 13.97 8.8 14.05C8.57 14.15 8.33 14.09 8.14 13.93C8.08 13.88 8.04 13.83 8 13.76C6.87 12.33 6.69 10.28 7.45 8.64C5.78 10 4.87 12.3 5 14.47C5.06 14.97 5.12 15.47 5.29 15.97C5.43 16.57 5.7 17.17 6 17.7C7.08 19.43 8.95 20.67 10.96 20.92C13.1 21.19 15.39 20.8 17.03 19.32C18.86 17.66 19.5 15 18.56 12.72L18.43 12.46C18.22 12 11.2 11.2M14.5 17.5C14.22 17.74 13.76 18 13.4 18.1C12.28 18.5 11.16 17.94 10.5 17.28C11.69 17 12.4 16.12 12.61 15.23C12.78 14.43 12.46 13C12.21 12.26 12.23 11.63 12.5 10.94C12.69 11.32 12.89 11.7 13.13 12C13.9 15.11 13.44 15.37 14.8C15.41 14.94 15.43 15.08 15.23C15.46 16.05 15.1 16.95 14.5 17.5H14.5Z" />
              </svg>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-blue-600 font-semibold text-lg">Saca todo el provecho</h3>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Manejar tu negocio desde tus manos</h2>
            <p className="text-gray-600">
              Con Bam Len, puedes acceder a información valiosa sobre tus finanzas y clientes en tiempo real, desde cualquier lugar.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 font-semibold mr-3">01</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Atrae más gente</h4>
                  <p className="text-gray-600">
                    Atrae a más clientes potenciales gracias puntos canjeables en una amplia red de comercios.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-100 text-purple-600 font-semibold mr-3">02</span>
                <div>
                  <h4 className="font-semibold text-gray-900">Toma decisiones inteligentes</h4>
                  <p className="text-gray-600">
                    Toma decisiones informadas sobre tu negocio con datos en tiempo real y reportes personalizados.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}