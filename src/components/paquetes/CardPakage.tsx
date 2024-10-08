'use client'
import { Code, Rocket, Zap } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function CardPakage() {

  const handleClick = () => {
    const phoneNumber = "7227111426"; // Reemplaza con tu número de WhatsApp en formato internacional
    const message = `¡Lleva tu proyecto al siguiente nivel con soluciones web personalizadas!
  Soy un desarrollador web apasionado por crear sitios y aplicaciones modernas, eficientes y a la medida de tus necesidades. Con un enfoque en la calidad, rendimiento y experiencia de usuario, te ayudo a convertir tus ideas en realidades digitales.
  
  Servicios que ofrezco:
  Desarrollo de sitios web personalizados: Desde páginas estáticas hasta aplicaciones web interactivas.
  E-commerce: Tiendas online optimizadas para conversión y con sistemas de pago seguros.
  Optimización de rendimiento: Mejora de velocidad de carga, SEO y experiencia de usuario.
  Desarrollo responsivo: Sitios adaptados para funcionar perfectamente en dispositivos móviles y de escritorio.`;
    
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  }

  const paquetes = [
    {
      subtitle: "Para proyectos pequeños",
      page: "Web sencilla",
      icon: (
        <div className="w-16 h-16 mx-auto rounded-full bg-blue-500 flex items-center justify-center">
          <Code className="w-8 h-8 bg-blue-500 text-white" />
        </div>
      ),
      content: [
        "Web de una sola seccion",
        "2 revisiones",
        "1 mes de soporte",
      ],
    },
    {
      page: "web profecional",
      subtitle: "Para empresas en crecimiento",
      icon: (
        <div className="w-16 h-16 mx-auto rounded-full bg-purple-500 flex items-center justify-center">
          <Zap className="w-8 h-8 text-white" />
        </div>
      ),
      content: [
        "Web de varias secciones",
        "5 revisiones",
        "2 meses de soporte",
        "Link a redes sociales",
      ],
    },
    {
      page: "Empresarial",
      subtitle: "Soluciones a la medida",
      icon: (
        <div className="w-16 h-16 mx-auto rounded-full bg-green-500  flex items-center justify-center">
          <Rocket className="w-8 h-8 text-white" />
        </div>
      ),
      content: [
        "Web personalizada",
        "10 revisiones",
        "6 meses de soporte",
        "Link a redes sociales",
      ],
    },
  ];

  return (
    <>
      {paquetes.map((pkg, index) => {
        return (
          <Card
            key={index}
            className="shadow-md hover:shadow-lg my-4 transition-shadow duration-300 w-9/12 lg:w-1/4"
          >
            <CardHeader className="flex items-center">
              <div className="w-16 h-16 mx-auto rounded-full flex items-center justify-center">
                {pkg.icon}
              </div>
              <CardTitle className="mt-4 text-2xl font-semibold text-gray-800">
                {pkg.page}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {pkg.subtitle}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {pkg.content.map((pkg, index) => {
                return (
                  <li key={index} className="space-y-2 text-gray-700">
                    {pkg}
                  </li>
                );
              })}
            </CardContent>
            <CardFooter className="flex justify-center items-center">
              <button
                onClick={handleClick}
                className={`rounded-md p-2 text-lg text-white ${
                  index === 0
                    ? "bg-blue-500 hover:bg-blue-600"
                    : index === 1
                    ? "bg-purple-500 hover:bg-purple-600"
                    : "bg-green-500 hover:bg-green-600"
                }`}
              >
                Seleccionar
              </button>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
}
