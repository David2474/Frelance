import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
// import { Content } from "@radix-ui/react-accordion";

export default function CardPakage() {
  const paquetes = [
    {
      title: "Paquete Sencillo",
      page: "Web sencilla",
      content: [
        "Web de una sola seccion",
        "Un servicio de mantenimiento",
        "Desplegada en la web",
      ],
      message:
        "Hola buen dia, quiero cotizar mi web en el paquete sencillo con el precio especial ",
    },
    {
      title: "Paquete Mega",
      page: "web profecional",
      content: [
        "Web de varias secciones",
        "Dos servicios de mantenimiento",
        "Desplegada en la web",
        "Link a redes sociales",
        "Una acesoria"
      ],
      message:
        "Hola buen dia, quiero cotizar mi web en el paquete Mega con el precio especial ",
    },
    {
      title: "Paquete Premiun",
      page: "Web Completa",
      content: [
        "Web completa",
        "Un mes de servicio de mantenimiento",
        "Desplegada en la web",
        "Link a redes sociales",
        "Una acesoria",
      ],
      message:
        "Hola buen dia, quiero cotizar mi web en el paquete master con el precio especial",
    },
  ];

  return (
    <>

    {paquetes.map((pkg, index) => {
        return (
            <Accordion
            type="single"
            collapsible
            className="bg-gray-200 my-7 shadow-md rounded-sm p-4"
            key={index}
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="font-semibold">{pkg.title}</AccordionTrigger>
              <AccordionContent>
                <Card>
                  <CardHeader>
                    <CardTitle>{pkg.page}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {pkg.content.map((pkg, index)=>{
                        return(
                            <li key={index} className="text-lg">{pkg}</li>
                        )
                    })}
                  </CardContent>
                  <CardFooter>
                    <button className="bg-gray-600 rounded-md p-2 text-lg text-white">
                      Contact
                    </button>
                  </CardFooter>
                </Card>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        )
    })}

    </>
  );
}
