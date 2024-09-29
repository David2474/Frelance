import React from "react";

export default function Nav() {
  return (
    <nav className="sticky top-0 flex items-center justify-around px-4 w-11/12 py-2 backdrop-blur rounded-sm">
      <div className="">
        <p className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          DavidG
        </p>
      </div>
      <div className="list-none hidden md:flex justify-around font-medium w-2/3">
        <a
          href="#seccion1"
          className="cursor-pointer hover:border-b-2 border-black font-bold"
        >
          ¿Quien soy?
        </a>
        <a href="#seccion2" className="cursor-pointer hover:border-b-2 border-black font-bold">
          Proyectos
        </a>
        <a href="#seccion3" className="cursor-pointer hover:border-b-2 border-black font-bold">
          Servicios
        </a>
        <a href="#seccion4" className="cursor-pointer hover:border-b-2 border-black font-bold">
          Contacto
        </a>
      </div>
    </nav>
  );
}
