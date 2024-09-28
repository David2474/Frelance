import React from "react";
import ServiceCard from "./ServiceCard";

export default function CardContentPakage() {
  return (
    <>
      <h2 className="text-3xl font-bold mb-4">Lo que ofrezco</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <ServiceCard
          icon={"image"}
          title="Desarrollo Web"
          description="Sitios web responsivos y aplicaciones web modernas utilizando las últimas tecnologías."
        />
        <ServiceCard
          icon={"image"}
          title="Diseño UI/UX"
          description="Interfaces atractivas y fáciles de usar que mejoran la experiencia del usuario."
        />
        <ServiceCard
          icon={"image"}
          title="Consultoría Técnica"
          description="Asesoramiento experto para ayudarte a tomar las mejores decisiones tecnológicas."
        />
        <ServiceCard
          icon={"image"}
          title="Optimización de Rendimiento"
          description="Mejora de la velocidad y eficiencia de aplicaciones web existentes."
        />
      </div>
    </>
  );
}
