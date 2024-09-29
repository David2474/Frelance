"use client";
import { FileText, Github, Linkedin, MessageCircle } from "lucide-react";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "@/components/ui/button";

export default function AboutMe() {
  return (
    <>
      <div className="w-11/12 mx-auto bg-white px-3 py-1 my-6">
        <Card className="border-none mx-auto my-6">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">¿Quién Soy?</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <p className="text-muted-foreground">
              Soy un desarrollador web apasionado con más de 5 años de
              experiencia en la creación de soluciones digitales innovadoras. Me
              especializo en React, Node.js y diseño de experiencias de usuario
              intuitivas.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button variant="outline">
                <MessageCircle className="mr-2 h-4 w-4" />
                Contáctame
              </Button>

              <Button variant="outline" asChild>
                <a
                  href="/ruta-a-tu-cv.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Ver CV
                </a>
              </Button>
            </div>

            <div className="flex gap-4">
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://github.com/tu-usuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a
                  href="https://linkedin.com/in/tu-perfil"
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
