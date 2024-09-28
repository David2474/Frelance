"use client"
import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="w-11/12 mx-auto  my-6">
        <div className="my-5 border-black border">
          <h2 className="text-3xl font-bold mb-4">¿Quién Soy?</h2>
          <p className="text-muted-foreground mb-6">
            Soy un desarrollador web apasionado con más de 5 años de experiencia
            en la creación de soluciones digitales innovadoras. Me especializo
            en React, Node.js y diseño de experiencias de usuario intuitivas.
          </p>
          <button
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-md"
            onClick={() => {
              window.open(
                `https://wa.me/7227111426?text=Me gustaria cotizar mi pagina web`,
                "_blank"
              );
            }}
          >
            Contáctame
          </button>
        </div>
      </div>
    </>
  );
}
