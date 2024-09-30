"use client";
import { Github, Linkedin, MessageCircle } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "@/components/ui/button";

export default function AboutMe() {

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

  return (
    <>
      <div className="w-11/12 mx-auto bg-white px-3 py-1 my-6">
        <Card className="border-none mx-auto my-6">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">¿Quién Soy?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Soy un desarrollador web apasionado con más de 2 años de
              experiencia en la creación de soluciones digitales innovadoras. Me
              especializo en React, Node.js y diseño de experiencias de usuario
              intuitivas.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline" onClick={handleClick}>
                <MessageCircle className="mr-2 h-4 w-4" />
                Contáctame
              </Button>

              {/* <Button variant="outline" asChild>
                <a
                  href="/ruta-a-tu-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Ver CV
                </a>
              </Button> */}
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/David2474"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://www.linkedin.com/in/dev-david-gutierrez/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
