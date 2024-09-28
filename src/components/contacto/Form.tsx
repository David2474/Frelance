"use client";
// import React from "react";
// import { useForm, ValidationError } from "@formspree/react";
// import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
// import { Textarea } from "../ui/textarea";
// import { Label } from "@radix-ui/react-label";
// import { Input } from "../ui/input";

// function ContactForm() {
//   const [state, handleSubmit] = useForm("https://formspree.io/f/xblrngky");
//   if (state.succeeded) {
//     return <p>Thanks for joining!</p>;
//   }
//   return (
//     <Card className="w-9/12 ">
//       <form onSubmit={handleSubmit}>
//         <CardHeader>
//           <CardTitle>
//             <p className="text-3xl font-bold text-center text-gray-800">Contáctame</p>
//           </CardTitle>
//         </CardHeader>
//         <CardContent>
//           <Label htmlFor="name" className="">Nombre</Label>
//           <Input id="name" placeholder="Tu Nombre" className="my-3" type="text" name="name" />
//           <ValidationError prefix="Name" field="name" errors={state.errors} />

//           <Label htmlFor="email">Correo</Label>
//           <Input id="email" placeholder="Tu Correo" className="my-3" type="email" name="email" />
//           <ValidationError prefix="Email" field="email" errors={state.errors} />

//           <Textarea id="message" placeholder="Mensaje" className="border mt-5" name="message" />
//           <ValidationError
//             prefix="Message"
//             field="message"
//             errors={state.errors}
//           />
//         </CardContent>
//         <CardFooter className="flex justify-center">
//           <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-md p-2  w-28 text-lg text-white" disabled={state.submitting}>
//             Enviar
//           </button>
//         </CardFooter>
//       </form>
//     </Card>
//   );
// }

// function App() {
//   return (
//     <ContactForm />
//   );
// }

// export default App;


import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("https://formspree.io/f/xblrngky");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;