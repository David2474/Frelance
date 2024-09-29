"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Textarea } from "../ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Input } from "../ui/input";

function ContactForm() {
  const [state, handleSubmit] = useForm("xblrngky");
  if (state.succeeded) {
    return (
      <Card className="w-11/12 h-72 flex justify-center">
        <CardContent className="flex flex-col items-center justify-center">
          <p className="text-2xl font-bold  text-gray-800">Gracias por contactarte!</p>
        </CardContent>
      </Card>
    );
  }
  return (
    <Card className="w-11/12">
      <form onSubmit={handleSubmit}>
        <CardHeader>
          <CardTitle>
            <p className="text-3xl font-bold  text-gray-800">Contáctame</p>
            <p className="text-gray-800 font-normal text-base">Enviame  un mensaje y te respondere lo antes posible.</p>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Label htmlFor="name" className="">Nombre</Label>
          <Input id="name" placeholder="Tu Nombre" className="my-3" type="text" name="name" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />

          <Label htmlFor="email">Correo</Label>
          <Input id="email" placeholder="Tu Correo" className="my-3" type="email" name="email" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />

          <Textarea id="message" placeholder="Mensaje" className="border mt-5" name="message" />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </CardContent>
        <CardFooter className="flex justify-center">
          <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-md p-2  w-28 text-lg text-white" disabled={state.submitting}>
            Enviar
          </button>
        </CardFooter>
      </form>
    </Card>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;


// import React, { useState } from 'react';

// const ContactForm = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     message: ''
//   });

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Enviar el formulario a Formspree
//     const response = await fetch('https://formspree.io/f/xblrngky', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: formData.email,
//         message: formData.message,
//       }),
//     });

//     if (response.ok) {
//       alert('Mensaje enviado');
//     } else {
//       alert('Hubo un error al enviar el mensaje');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label htmlFor="email">Email:</label>
//       <input
//         type="email"
//         name="email"
//         id="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />

//       <label htmlFor="message">Mensaje:</label>
//       <textarea
//         name="message"
//         id="message"
//         value={formData.message}
//         onChange={handleChange}
//         required
//       />

//       <button type="submit">Enviar</button>
//     </form>
//   );
// };

// export default ContactForm;
