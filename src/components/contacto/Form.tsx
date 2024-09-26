import {
  Card,
  CardFooter,
  CardContent,
  CardDescription,
  CardTitle,
  CardHeader,
} from "../ui/card";

export default function Form() {
  return (
    <div className="mx-auto">
      <Card className="w-full max-w-md mx-auto">
        <CardHeader>
          <CardTitle>Contáctame</CardTitle>
          <CardDescription>
            Envíame un mensaje y te responderé lo antes posible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Nombre</Label>
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                aria-invalid={errors.name ? "true" : "false"}
              />
              {errors.name && (
                <p className="text-sm text-red-500">{errors.name}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="tu@email.com"
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-sm text-red-500">{errors.email}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Asunto</Label>
              <Input
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                placeholder="Asunto del mensaje"
                aria-invalid={errors.subject ? "true" : "false"}
              />
              {errors.subject && (
                <p className="text-sm text-red-500">{errors.subject}</p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensaje</Label>
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="Tu mensaje aquí..."
                rows={4}
                aria-invalid={errors.message ? "true" : "false"}
              />
              {errors.message && (
                <p className="text-sm text-red-500">{errors.message}</p>
              )}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Enviando..." : "Enviar mensaje"}
            </Button>
          </form>
        </CardContent>
        <CardFooter>
          {submitStatus === "success" && (
            <div className="flex items-center text-green-500">
              <CheckCircle2 className="mr-2" />
              <span>Mensaje enviado con éxito</span>
            </div>
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
