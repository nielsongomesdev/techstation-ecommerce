import tecladoMecanico from "@/assets/images/teclado-mecanico.png";
import mouseErgonomico from "@/assets/images/mouse-ergonomico.png";
import monitorUltrawide from "@/assets/images/monitor-ultrawide.png";
import headsetStudio from "@/assets/images/headset-studio.png";
import deskpadCouro from "@/assets/images/deskpad-couro.png";
import suporteMonitor from "@/assets/images/suporte-monitor.png";

export const products = [
  {
    id: 1,
    name: "Teclado Mecânico Minimalista K2",
    image: tecladoMecanico,
    price: 450,
    color: "Preto Fosco",
    description:
      "Perfil compacto, switches responsivos e iluminação elegante para elevar sua produtividade no setup.",
    category: { id: 1, name: "Teclados" },
  },
  {
    id: 2,
    name: "Mouse Ergonômico Master Pro 3",
    image: mouseErgonomico,
    price: 320,
    color: "Grafite",
    description:
      "Precisão profissional com design ergonômico para longas jornadas de código sem fadiga.",
    category: { id: 2, name: "Mouses" },
  },
  {
    id: 3,
    name: 'Monitor UltraWide 34" Curvo',
    image: monitorUltrawide,
    price: 2500,
    color: "Preto",
    description:
      "Campo de visão amplo e imersivo para multitarefa, desenvolvimento e criação com máxima fluidez.",
    category: { id: 3, name: "Monitores" },
  },
  {
    id: 4,
    name: "Headset Noise Cancelling Studio",
    image: headsetStudio,
    price: 600,
    color: "Preto",
    description:
      "Áudio cristalino com cancelamento de ruído para foco total em reuniões, estudos e codificação.",
    category: { id: 4, name: "Áudio" },
  },
  {
    id: 5,
    name: "Deskpad de Couro Premium Preto",
    image: deskpadCouro,
    price: 120,
    color: "Preto",
    description:
      "Acabamento sofisticado e toque macio para organizar o setup e melhorar o deslizamento do mouse.",
    category: { id: 2, name: "Mouses" },
  },
  {
    id: 6,
    name: "Suporte Articulado para Monitor",
    image: suporteMonitor,
    price: 280,
    color: "Preto",
    description:
      "Ergonomia ajustável para posicionamento ideal da tela e mais conforto na rotina de trabalho.",
    category: { id: 3, name: "Monitores" },
  },
];
