import type { Metadata } from "next";
import { RootShell } from "../(h-line)/_ui/RootShell";

export const metadata: Metadata = {
  metadataBase: new URL("https://yvoolab.github.io"),
  title: "Yvoolab — assistant administratif & IA pour commerçants, Paris",
  description:
    "Réponses aux avis Google, relances, courriers administratifs en français. L'IA rédige, rien ne part sans votre accord.",
};

// Le logo renvoie vers la page FR : il n'y a pas encore de page d'accueil française,
// et renvoyer un francophone vers la vitrine chinoise casserait le parcours.
export default function HLineFrLayout({ children }: { children: React.ReactNode }) {
  return (
    <RootShell lang="fr" homeHref="/fr/shanghu/chaping">
      {children}
    </RootShell>
  );
}
