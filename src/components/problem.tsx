'use client'

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export function ProblemSolutionCards() {
  return (
    <section className=" py-16 px-4  bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-500">
            ¿Qué problemas resolvemos para tu negocio?
          </h2>
          <p className="max-w-[900px] text-neutral-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Sabemos que manejar las finanzas, analizar datos y ofrecer métodos de pago modernos son retos importantes para tu negocio. Aquí tienes nuestra solución.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-8 pt-12 sm:grid-cols-2 md:gap-12">
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src="/cuaderno.jpg"
                  alt="Dueño de negocio enfrentando problemas financieros"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-500 mb-4">Los Retos</h3>
                <ul className="text-left text-zinc-500 space-y-2">
                  <li>• Dificultad para llevar un control eficiente de las finanzas</li>
                  <li>• Falta de información clara para tomar decisiones basadas en datos</li>
                  <li>• Limitación a métodos de pago tradicionales que requieren efectivo</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="border-none shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-48 w-full">
                <Image
                  src="/bamlen.png"
                  alt="Dueño de negocio usando Bam Len para mejorar su negocio"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-purple-500 mb-4">Nuestra Solución</h3>
                <ul className="text-left text-zinc-500 space-y-2">
                  <li>• Herramientas para gestionar tus finanzas de forma sencilla y eficiente</li>
                  <li>• Análisis de datos que te ayudan a entender y mejorar tu negocio</li>
                  <li>• Métodos de pago modernos y seguros que reducen la necesidad de efectivo</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
