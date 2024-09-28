import { Card, CardContent } from "@/components/ui/card"


interface Resource{
    icon: string
    title: string
    description: string
}

export default function ServiceCard({icon, title, description}: Resource) {
  return (
    <Card className="">
      <CardContent className="p-4">
        <div className="flex items-center space-x-4">
          <div className="bg-primary/10 p-2 rounded-full">
                {icon}
          </div>
          <div>
            <h3 className="font-semibold">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
