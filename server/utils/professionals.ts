import { Professional, Review } from "../../shared/types/professionals";

const professions = [
  { profession: "Desenvolvedor Full Stack", category: "Tecnologia" },
  { profession: "Designer UX/UI", category: "Design" },
  { profession: "Fotógrafo", category: "Fotografia" },
  { profession: "Eletricista", category: "Serviços" },
  { profession: "Encanador", category: "Serviços" },
  { profession: "Personal Trainer", category: "Saúde" },
  { profession: "Professor Particular", category: "Educação" },
  { profession: "Arquiteto", category: "Arquitetura" },
  { profession: "Contador", category: "Finanças" },
  { profession: "Advogado", category: "Jurídico" },
  { profession: "Marketing Digital", category: "Marketing" },
  { profession: "Redator", category: "Conteúdo" },
  { profession: "Tradutor", category: "Idiomas" },
  { profession: "Mecânico", category: "Automotivo" },
  { profession: "Chef de Cozinha", category: "Gastronomia" },
  { profession: "Jardineiro", category: "Jardinagem" },
  { profession: "Pintor", category: "Serviços" },
  { profession: "Marceneiro", category: "Marcenaria" },
  { profession: "Psicólogo", category: "Saúde" },
  { profession: "Veterinário", category: "Veterinária" },
];

const firstNames = [
  "Lucas",
  "Ana",
  "Pedro",
  "Maria",
  "João",
  "Julia",
  "Carlos",
  "Beatriz",
  "Rafael",
  "Camila",
  "Fernando",
  "Larissa",
  "Bruno",
  "Gabriela",
  "Thiago",
  "Amanda",
  "Diego",
  "Patricia",
  "Rodrigo",
  "Fernanda",
  "Felipe",
  "Mariana",
  "Gustavo",
  "Juliana",
  "Marcelo",
  "Carolina",
  "André",
  "Leticia",
  "Paulo",
  "Renata",
  "Vitor",
  "Isabela",
  "Eduardo",
  "Natalia",
  "Ricardo",
  "Vanessa",
];

const lastNames = [
  "Silva",
  "Santos",
  "Oliveira",
  "Souza",
  "Rodrigues",
  "Ferreira",
  "Alves",
  "Pereira",
  "Lima",
  "Gomes",
  "Costa",
  "Ribeiro",
  "Martins",
  "Carvalho",
  "Rocha",
  "Almeida",
  "Nascimento",
  "Araújo",
  "Melo",
  "Barbosa",
  "Cardoso",
  "Correia",
  "Dias",
  "Teixeira",
  "Pinto",
  "Moreira",
  "Monteiro",
  "Mendes",
];

const services = {
  Tecnologia: [
    "Desenvolvimento Web",
    "Apps Mobile",
    "Consultoria TI",
    "DevOps",
    "Cloud Computing",
  ],
  Design: [
    "Design de Interfaces",
    "Branding",
    "Motion Design",
    "Ilustração",
    "Design Gráfico",
  ],
  Fotografia: ["Eventos", "Produtos", "Retratos", "Casamentos", "Paisagens"],
  Serviços: [
    "Manutenção",
    "Instalação",
    "Reparos",
    "Emergência 24h",
    "Consultoria",
  ],
  Saúde: [
    "Consultoria",
    "Treino Personalizado",
    "Avaliação Física",
    "Nutrição",
    "Reabilitação",
  ],
  Educação: [
    "Aulas Online",
    "Aulas Presenciais",
    "Preparação Vestibular",
    "Idiomas",
    "Reforço Escolar",
  ],
  Arquitetura: [
    "Projeto Residencial",
    "Projeto Comercial",
    "Reforma",
    "Decoração",
    "Paisagismo",
  ],
  Finanças: [
    "Contabilidade",
    "IR",
    "Planejamento Financeiro",
    "Consultoria",
    "Auditoria",
  ],
  Jurídico: ["Consultoria", "Contratos", "Trabalhista", "Civil", "Empresarial"],
  Marketing: ["Redes Sociais", "SEO", "Ads", "Branding", "Conteúdo"],
  Conteúdo: ["Artigos", "Blog Posts", "Copywriting", "E-books", "Roteiros"],
  Idiomas: ["Inglês", "Espanhol", "Francês", "Alemão", "Italiano"],
  Automotivo: ["Manutenção", "Diagnóstico", "Funilaria", "Pintura", "Elétrica"],
  Gastronomia: [
    "Eventos",
    "Aulas",
    "Catering",
    "Consultoria",
    "Menu Personalizado",
  ],
  Jardinagem: ["Paisagismo", "Manutenção", "Irrigação", "Poda", "Adubação"],
  Marcenaria: [
    "Móveis Sob Medida",
    "Reforma",
    "Acabamento",
    "Instalação",
    "Restauração",
  ],
  Veterinária: ["Consulta", "Vacinas", "Cirurgias", "Emergência", "Estética"],
};

const reviewComments = [
  "Excelente profissional! Muito atencioso e entregou exatamente o que eu precisava.",
  "Trabalho impecável, super recomendo! Voltaria a contratar com certeza.",
  "Muito profissional e pontual. Ficou exatamente como eu imaginei.",
  "Superou minhas expectativas! Entrega de qualidade e no prazo.",
  "Ótima comunicação e resultado final perfeito.",
  "Profissional competente e dedicado. Muito satisfeito com o serviço.",
  "Recomendo! Trabalho bem feito e preço justo.",
  "Adorei o resultado! Muito caprichoso e atencioso.",
  "Serviço de primeira qualidade. Com certeza contratarei novamente.",
  "Muito bom! Resolveu meu problema rapidamente.",
];

function generateReviews(count: number): Review[] {
  const reviews: Review[] = [];
  for (let i = 0; i < count; i++) {
    reviews.push({
      id: i + 1,
      author: `${firstNames[Math.floor(Math.random() * firstNames.length)]} ${lastNames[Math.floor(Math.random() * lastNames.length)]}`,
      rating: 3 + Math.floor(Math.random() * 3),
      comment:
        reviewComments[Math.floor(Math.random() * reviewComments.length)]!,
      date: new Date(
        2024 + Math.random(),
        Math.floor(Math.random() * 12),
        Math.floor(Math.random() * 28) + 1,
      )
        .toISOString()
        .split("T")[0]!,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70) + 1}`,
    });
  }
  return reviews;
}

export function generateProfessionals(count: number = 500): Professional[] {
  const professionals: Professional[] = [];

  for (let i = 0; i < count; i++) {
    const professionData =
      professions[Math.floor(Math.random() * professions.length)];
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const reviewCount = 5 + Math.floor(Math.random() * 50);
    const reviews = generateReviews(Math.min(reviewCount, 10));
    const avgRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    const availabilityOptions: ("available" | "busy" | "unavailable")[] = [
      "available",
      "busy",
      "unavailable",
    ];
    const availability =
      availabilityOptions[
        Math.floor(Math.random() * availabilityOptions.length)
      ];

    const professionalServices =
      services[professionData?.category as keyof typeof services] ||
      services["Serviços"];
    const selectedServices = professionalServices
      .sort(() => 0.5 - Math.random())
      .slice(0, 2 + Math.floor(Math.random() * 3));

    professionals.push({
      id: i + 1,
      name: `${firstName} ${lastName}`,
      profession: professionData?.profession || "Profissional Genérico",
      category: professionData?.category || "Serviços",
      hourlyRate: 50 + Math.floor(Math.random() * 450),
      rating: Number(avgRating.toFixed(1)),
      totalReviews: reviewCount,
      distance: Math.floor(Math.random() * 50) + 1,
      photo: `https://i.pravatar.cc/300?img=${(i % 70) + 1}`,
      description: `Profissional experiente em ${professionData?.profession} com mais de ${5 + Math.floor(Math.random() * 15)} anos de atuação no mercado. Comprometido com a excelência e satisfação dos clientes, oferecendo soluções personalizadas e de alta qualidade.`,
      services: selectedServices,
      availability: availability || "busy",
      location: `São Paulo - SP, ${Math.floor(Math.random() * 50) + 1}km`,
      experienceYears: 2 + Math.floor(Math.random() * 18),
      gallery: Array.from(
        { length: 6 },
        (_, idx) => `https://picsum.photos/seed/${i}-${idx}/400/300`,
      ),
      reviews,
    });
  }

  return professionals;
}

export const professionals = generateProfessionals(500);
