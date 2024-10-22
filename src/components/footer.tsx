"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Instagram, Twitter } from "lucide-react"

export function FooterComponent() {
  const [email, setEmail] = useState("''")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the email to your server
    console.log("'Submitted email:'", email)
    setSubmitted(true)
    setEmail("''")
  }

  return (
    <footer className="bg-white text-gray-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Image src="/BAM.jpg" alt="Apple" width={90} height={90} />
            <p className="text-sm">
              El mejor lugar para manejar tu negocio desde tus manos.
            </p>
          </div>
          {/* <div className="space-y-2">
            <h3 className="font-semibold text-gray-900"></h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-500 transition-colors">iPhone</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">iPad</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Mac</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Watch</a></li>
            </ul>
          </div>
          <div className="space-y-2">
            <h3 className="font-semibold text-gray-900">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-indigo-500 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-indigo-500 transition-colors">Contact</a></li>
            </ul>
          </div> */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-900">
              Unete a nuestra lista de espera
            </h3>
            <form onSubmit={handleSubmit} className="space-y-2">
              <Input
                type="email"
                placeholder="Ingresa tu correo"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-neutral-200 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-neutral-800"
                required
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-indigo-500 via-pink-500 to-blue-500 text-white font-semibold py-2 px-4 rounded-md hover:opacity-90 transition-opacity"
              >
                Unete
              </Button>
            </form>
            {submitted && (
              <p className="text-green-500 text-sm">
                ¡Gracias por unirte a nuestra lista de espera!
              </p>
            )}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm">
              &copy; 2024 Bam Len. Todos los derechos reservados.
              </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-indigo-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-pink-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}