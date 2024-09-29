import { Card, CardContent } from "@/components/ui/card"
import { Code, Globe, Layout, RefreshCw, ShoppingCart, Zap } from "lucide-react"


interface ServiceCardProps{
    icon: React.ReactNode
    title: string
    description: string
}


function ServiceCard({ icon, title, description }: ServiceCardProps) {
  return (
    <Card className="h-full">
      <CardContent className="p-4">
        <div className="flex items-start space-x-4">
          <div className="bg-primary/10 flex justify-center items-center p-2 rounded-full ">
            {icon}
          </div>
          <div>
            <h3 className="font-semibold mb-1">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ServiciosDesarrollador() {
  const servicios = [
    {
      icon: <Globe className="h-6 w-6 text-primary" />,
      title: "Desarrollo Web Responsivo",
      description: "Sitios web que se adaptan perfectamente a todos los dispositivos y tamaños de pantalla."
    },
    {
      icon: <Layout className="h-6 w-6 text-primary" />,
      title: "Aplicaciones de Una Página (SPA)",
      description: "Experiencias web fluidas y rápidas con navegación sin recargas de página."
    },
    {
      icon: <Code className="h-6 w-6 text-primary" />,
      title: "Integración de APIs",
      description: "Conecta tu sitio web con servicios externos para ampliar su funcionalidad."
    },
    {
      icon: <Zap className="h-6 w-6 text-primary" />,
      title: "Optimización de Rendimiento",
      description: "Mejora la velocidad y eficiencia de tu sitio web para una mejor experiencia de usuario."
    },
    {
      icon: <ShoppingCart className="h-6 w-6 text-primary" />,
      title: "Desarrollo E-commerce",
      description: "Crea tu tienda en línea personalizada con todas las funcionalidades necesarias."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-primary" />,
      title: "Mantenimiento Web",
      description: "Mantén tu sitio web actualizado, seguro y funcionando sin problemas."
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Mis Servicios de Desarrollo Web</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicios.map((servicio, index) => (
          <ServiceCard
            key={index}
            icon={servicio.icon}
            title={servicio.title}
            description={servicio.description}
          />
        ))}
      </div>
    </div>
  )}







// export default function ServiceCard({icon, title, description}: Resource) {
//   return (
//     <Card className="">
//       <CardContent className="p-4">
//         <div className="flex items-center space-x-4">
//           <div className="bg-primary/10 p-2 rounded-full">
//                 {icon}
//           </div>
//           <div>
//             <h3 className="font-semibold">{title}</h3>
//             <p className="text-sm text-muted-foreground">{description}</p>
//           </div>
//         </div>
//       </CardContent>
//     </Card>
//   )
// }
