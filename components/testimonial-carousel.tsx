"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "João Silva",
    company: "",
    text: "A GLTEC Informática superou todas as minhas expectativas. O serviço de manutenção foi rápido e eficiente, e o atendimento foi excepcional. Recomendo fortemente!",
  },
  {
    id: 2,
    name: "Maria Oliveira",
    company: "",
    text: "Contratamos os serviços de impressão para nossos materiais promocionais e ficamos impressionados com a qualidade e rapidez na entrega. Certamente continuaremos trabalhando com a GLTEC.",
  },
  {
    id: 3,
    name: "Carlos Pereira",
    company: "",
    text: "A assistência técnica da GLTEC resolveu problemas em nossa rede que outras empresas não conseguiram. Profissionais competentes e preço justo. Estamos muito satisfeitos.",
  },
  {
    id: 4,
    name: "Ana Santos",
    company: "",
    text: "Os serviços de gráfica rápida da GLTEC são excelentes. Sempre entregam nossos materiais com alta qualidade e dentro do prazo. Recomendo a todos.",
  },
];

export function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [current, autoplay]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setAutoplay(false)}
      onMouseLeave={() => setAutoplay(true)}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
              <Card className="p-6 h-full flex flex-col">
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-orange-500" />
                </div>
                <p className="text-gray-600 italic mb-6 flex-grow">
                  {testimonial.text}
                </p>
                <div>
                  <h4 className="font-bold">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md z-10"
        onClick={prev}
      >
        <ChevronLeft className="h-4 w-4" />
        <span className="sr-only">Anterior</span>
      </Button>

      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md z-10"
        onClick={next}
      >
        <ChevronRight className="h-4 w-4" />
        <span className="sr-only">Próximo</span>
      </Button>

      <div className="flex justify-center mt-4 gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-orange-500" : "bg-gray-300"
            }`}
            onClick={() => setCurrent(index)}
          >
            <span className="sr-only">Depoimento {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
