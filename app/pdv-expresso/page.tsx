import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function PDVExpresso() {
  const services = [
    {
      id: 1,
      name: "DETRAN-PE",
      description: "Departamento Estadual de Trânsito de Pernambuco",
      url: "https://www.detran.pe.gov.br/",
      logo: "/pdv-logos/detran-pe.png",
      color: "bg-blue-600",
    },
    {
      id: 2,
      name: "GOV.BR",
      description: "Portal de Serviços do Governo Federal",
      url: "https://www.gov.br/",
      logo: "/pdv-logos/gov-br.png",
      color: "bg-green-600",
    },
    {
      id: 3,
      name: "PORTAL DO EMPREENDEDOR",
      description: "Portal do Empreendedor - MEI",
      url: "https://www.gov.br/empresas-e-negocios/pt-br/empreendedor",
      logo: "/pdv-logos/portal-empreendedor.png",
      color: "bg-purple-600",
    },
    {
      id: 4,
      name: "CLARO",
      description: "Claro - Serviços de Telecomunicações",
      url: "https://www.claro.com.br/",
      logo: "/pdv-logos/claro.png",
      color: "bg-red-600",
    },
    {
      id: 5,
      name: "TIM",
      description: "TIM - Serviços de Telecomunicações",
      url: "https://www.tim.com.br/",
      logo: "/pdv-logos/tim.png",
      color: "bg-blue-500",
    },
    {
      id: 6,
      name: "TSE",
      description: "Portal de Serviços do Tribunal Superior Eleitoral",
      url: "https://www.tse.jus.br",
      logo: "/pdv-logos/tim.png",
      color: "bg-blue-500",
    },
    {
      id: 7,
      name: "ANTECEDENTES FEDERAL",
      description: "Portal de emissão do Antecedentes criminais Federal",
      url: "https://servicos.pf.gov.br/epol-sinic-publico/",
      logo: "/pdv-logos/tim.png",
      color: "bg-yellow-500",
    },
    {
      id: 8,
      name: "ANTECEDENTES ESTADUAL - PE / IITB",
      description:
        "Portal de emissão do Antecedentes criminais Estadual - IITB - PE",
      url: "https://abrir.link/DrYdw",
      logo: "/pdv-logos/placeholder-logo.png",
      color: "bg-blue-500",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-4">
            <Button asChild variant="outline" size="sm">
              <Link href="/" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Voltar
              </Link>
            </Button>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">PDV EXPRESSO</h1>
              <p className="text-gray-600">
                Acesso rápido aos principais serviços online
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Serviços Online
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Acesse rapidamente os principais portais e serviços que você
            precisa. Clique nos botões abaixo para ser redirecionado para o site
            oficial de cada serviço.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {services.map((service) => (
            <Card
              key={service.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className={`${service.color} p-4 text-white`}>
                <div className="flex items-center justify-center mb-2">
                  <div className="bg-white p-2 rounded-lg">
                    <Image
                      src={
                        service.logo || "/placeholder.svg?height=60&width=60"
                      }
                      alt={`Logo ${service.name}`}
                      width={60}
                      height={60}
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-center">
                  {service.name}
                </h3>
              </div>
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-4 text-center">
                  {service.description}
                </p>
                <Button
                  asChild
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <a
                    href={service.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    Acessar Site
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 bg-white rounded-lg p-6 shadow-sm">
          <div className="text-center">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Informações Importantes
            </h3>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 text-sm text-gray-600">
              <div className="p-4 bg-orange-50 rounded-lg">
                <h4 className="font-semibold text-orange-800 mb-2">
                  Segurança
                </h4>
                <p>
                  Todos os links redirecionam para os sites oficiais dos
                  respectivos órgãos e empresas.
                </p>
              </div>
              <div className="p-4 bg-blue-50 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">
                  Atualização
                </h4>
                <p>
                  Os links são verificados regularmente para garantir que
                  estejam sempre funcionando.
                </p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Suporte</h4>
                <p>
                  Precisa de ajuda? Entre em contato conosco pelo WhatsApp ou
                  telefone.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black text-white py-8 mt-12">
        <div className="container mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Image
              src="/placeholder-logo.png?height=40&width=120"
              alt="GLTEC INFORMÁTICA"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} GLTEC INFORMÁTICA. Todos os direitos
            reservados.
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Rua João Gonçalves de Lima - São Geraldo - Arcoverde-PE | (87)
            99182-0080 / (87) 99195-8156
          </p>
        </div>
      </footer>
    </div>
  );
}
