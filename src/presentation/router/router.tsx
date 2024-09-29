import { createBrowserRouter, Navigate } from "react-router-dom";
import { OrthographyPage } from "../pages/orthography/OrthographyPage";
import { ProsConsPage } from "../pages/pros-cons/ProsConsPage";
import { ProsConsStreamPage } from "../pages/pros-cons-stream/ProsConsStreamPage";
import { TranslatePage } from "../pages/translate/TranslatePage";
import { TextToAudioPage } from "../pages/text-to-audio/TextToAudioPage";
import { ImageGenerationPage } from "../pages/image-generation/ImageGenerationPage";
import { ImageTunningPage } from "../pages/image-tunning/ImageTunningPage";
import { AudioToTextPage } from "../pages/audio-to-text/AudioToTextPage";
import { AssistantPage } from "../pages/assistan/AssistantPage";
import { DashboardLayout } from "../layout/DashboardLayout";

export const menuRoutes = [
  {
    to: "/orthography",
    icon: "fa-solid fa-spell-check",
    title: "Ortografía",
    description: "Corregir ortografía",
    component: <OrthographyPage />,
  },
  {
    to: "/pros-cons",
    icon: "fa-solid fa-code-compare",
    title: "Pros & Cons",
    description: "Comparar pros y contras",
    component: <ProsConsPage />,
  },
  {
    to: "/pros-cons-stream",
    icon: "fa-solid fa-water",
    title: "Como stream",
    description: "Con stream de mensajes",
    component: <ProsConsStreamPage />,
  },
  {
    to: "/translate",
    icon: "fa-solid fa-language",
    title: "Traducir",
    description: "Textos a otros idiomas",
    component: <TranslatePage />,
  },
  {
    to: "/text-to-audio",
    icon: "fa-solid fa-podcast",
    title: "Texto a audio",
    description: "Convertir texto a audio",
    component: <TextToAudioPage />,
  },
  {
    to: "/image-generation",
    icon: "fa-solid fa-image",
    title: "Imágenes",
    description: "Generar imágenes",
    component: <ImageGenerationPage />,
  },
  {
    to: "/image-tunning",
    icon: "fa-solid fa-wand-magic",
    title: "Editar imagen",
    description: "Generación continua",
    component: <ImageTunningPage />,
  },
  {
    to: "/audio-to-text",
    icon: "fa-solid fa-comment-dots",
    title: "Audio a texto",
    description: "Convertir audio a texto",
    component: <AudioToTextPage />,
  },
  {
    to: "/assistant",
    icon: "fa-solid fa-user",
    title: "Asistente",
    description: "Información del asistente",
    component: <AssistantPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      ...menuRoutes.map((route) => ({
        path: route.to,
        element: route.component,
      })),
      {
        path: '',
        element: <Navigate to={menuRoutes[0].to}></Navigate>
      }
    ],
  },
]);
