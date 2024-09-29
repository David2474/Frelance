
import AboutMe from "@/components/aboutme/AboutMe";
import Form from "@/components/contacto/Form";
import Nav from "@/components/navegation/Nav";
import CardPakage from "@/components/paquetes/CardPakage";
import CardContentPakage from "@/components/servicios/CardContent";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center flex-col font-[family-name:var(--font-geist-sans)]">
      <Nav />

      <section className="w-11/12 my-4">
        <AboutMe />
        <div className="my-10 w-11/12 mx-auto">
          <CardContentPakage />
        </div>
      </section>

      <div className="w-11/12 py-4">
        <div className="w-11/12 mx-auto flex flex-col">
          <p className="text-3xl font-semibold mb-4">Mis paquetes</p>
          <div className="flex flex-col items-center lg:items-start lg:justify-around flex-nowrap lg:flex-row">
            <CardPakage />
          </div>
        </div>
      </div>

      <div className="w-11/12 flex my-10 justify-center">
        <Form/>
      </div>
    </div>
  );
}
