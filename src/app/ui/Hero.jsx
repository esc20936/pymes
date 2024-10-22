import Image from "next/image";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-12 md:px-12 lg:px-24 py-12 gap-4" >
        <div className="md:w-1/2 lg:w-1/2 text-center md:text-left">
          <h1 className="mb-5 text-4xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-5xl">
            Lleva tu negocio al siguiente nivel con {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">
              Bam Len
            </span>
          </h1>
          <p className="max-w-lg mt-4 text-lg text-gray-600 dark:text-gray-400">
            Bam Len te proporciona las herramientas más avanzadas en la nube para que gestiones, escales y transformes tu negocio sin complicaciones. ¡Es momento de dar el siguiente paso!
          </p>
          <div className="mt-6">
            <Link href="/signup" className="inline-block px-8 py-3 text-white bg-indigo-500 rounded-full">
                Comienza gratis ahora
            </Link>
          </div>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/2 flex justify-center">
          <Image
            src="/heroImage.jpg" // Ruta de tu imagen
            alt="Bam Len app screenshot"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
