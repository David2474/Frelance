'use client'
import Form from "@/components/contacto/Form";
import CardPakage from "@/components/paquetes/CardPakage";
import ServiceCard from "@/components/ServiceCard";

 

export default function Home() {
  return (
    <div className="min-h-screen flex items-center flex-col font-[family-name:var(--font-geist-sans)]">
      <nav className="sticky top-0 flex items-center justify-around px-4 w-11/12 py-2 backdrop-blur rounded-sm">
        <div className="">
          <p className="text-2xl font-semibold">DavidG</p>
        </div>
        <div className="list-none flex justify-around font-medium w-2/3">
          <a href="#seccion1" className="cursor-pointer hover:border-b-2 border-black font-bold">¿Quien soy?</a>
          <li className="cursor-pointer hover:border-b-2 border-black font-bold">Proyectos</li>
          <li className="cursor-pointer hover:border-b-2 border-black font-bold">Servicios</li>
          <li className="cursor-pointer hover:border-b-2 border-black font-bold">Contacto</li>
        </div>
      </nav>

      <section className="border w-11/12 my-4">

        <div className="w-11/12 mx-auto  my-6">
          <div className="my-5 border-black border">
            <h2 className="text-3xl font-bold mb-4">¿Quién Soy?</h2>
            <p className="text-muted-foreground mb-6">
              Soy un desarrollador web apasionado con más de 5 años de experiencia en la creación de soluciones digitales innovadoras. Me especializo en React, Node.js y diseño de experiencias de usuario intuitivas.
            </p>
            <button className="bg-lime-500 p-2 rounded-md"
            onClick={() =>{
              window.open(`https://wa.me/7227111426?text=Me gustaria cotizar mi pagina web`, '_blank');
            }}
            >Contáctame</button>
          </div>
        </div>
        
        <div className="my-10 border border-black w-11/12 mx-auto">
            <h2 className="text-3xl font-bold mb-4">Lo que ofrezco</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <ServiceCard
                icon={'image'}
                title="Desarrollo Web"
                description="Sitios web responsivos y aplicaciones web modernas utilizando las últimas tecnologías."
              />
              <ServiceCard
                icon={'image'}
                title="Diseño UI/UX"
                description="Interfaces atractivas y fáciles de usar que mejoran la experiencia del usuario."
              />
              <ServiceCard
                icon={'image'}
                title="Consultoría Técnica"
                description="Asesoramiento experto para ayudarte a tomar las mejores decisiones tecnológicas."
              />
              <ServiceCard
                icon={'image'}
                title="Optimización de Rendimiento"
                description="Mejora de la velocidad y eficiencia de aplicaciones web existentes."
              />
            </div>
        </div>
      </section> 


      <div className="w-11/12 py-4">
        <div className="w-11/12 mx-auto">
          <p className="text-3xl font-semibold mb-4">Mis paquetes</p>
          <CardPakage/>
        </div>
      </div>

      <div className="bg-gray-600 w-11/12">
        <Form/>
      </div>
    </div>
  );
}
