import Image from "next/image";

export function ClientLogos() {
  // Array de logos de clientes fictícios
  const clients = [
    { id: 1, name: "Cliente 1", logo: "/clients/Americanas.png" },
    { id: 2, name: "Cliente 2", logo: "/clients/OticaCenter.jpg" },
    { id: 3, name: "Cliente 3", logo: "/clients/SystemSaude.jpg" },
    { id: 4, name: "Cliente 4", logo: "/clients/SorriaDentista.jpg" },
    { id: 5, name: "Cliente 5", logo: "/clients/dnit.png" },
    { id: 6, name: "Cliente 6", logo: "/clients/O rancho.jpeg" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
      {clients.map((client) => (
        <div key={client.id} className="flex items-center justify-center p-4 ">
          <Image
            src={client.logo || "/placeholder.svg"}
            alt={client.name}
            width={120}
            height={80}
            className="max-h-80 w-auto object-contain"
          />
        </div>
      ))}
    </div>
  );
}
