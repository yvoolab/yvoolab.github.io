// Version française — traduction de la copie validée le 2026-07-30 :
//   ai-side-hustle/h-line/direct-clients/web-copy-2026-07-30.md §三 /shanghu/chaping
// Aucun argument nouveau : prix, chiffres et promesses sont ceux du chinois.
// Raison d'être : sur les 7 prospects contactés le 2026-08-01, 5 l'ont été en français,
// et l'aperçu du lien envoyé en message privé s'affichait en chinois.
// Relecture de marque : advisor, 2026-08-02 (REVISE → 10 corrections appliquées).

export const FR_CHAPING = {
  title: "Vos avis négatifs sur Google, toujours sans réponse ?",
  subtitle:
    "Chaque avis négatif resté sans réponse décourage les nouveaux clients qui viennent de vous trouver.",
  sellingPoints: [
    // « huit sur dix » plutôt que « 80 % » : trois pourcentages d'affilée sonnent
    // rapport d'étude ; « x sur dix » est le registre courant, aligné sur le chinois 八成.
    "Huit clients sur dix vont plus volontiers vers un commerce qui répond à tous ses avis ; quatre sur dix évitent celui qui ne répond jamais. Une réponse toute faite en rebute un sur deux — les nôtres sont écrites une à une.",
    "Nous rédigeons vos réponses en français ; vous les recevez sur votre téléphone sous 48 h. Vous relisez, vous publiez. Le ton juste : ni courbettes, ni agressivité.",
    // « chacune » lève l'ambiguïté « 25 € les deux » : le chinois dit 头两单半价 = moitié prix par commande.
    "Vos avis négatifs accumulés, traités en une seule fois (jusqu'à 10) : 49 € — vos deux premières commandes à 25 € chacune.",
  ],
  // Scindé en bouton + sous-titre comme sur /zicha : en un seul bloc, le texte
  // long transforme le CTA rouge en bandeau et il ne se lit plus comme un bouton.
  cta: "Envoyez-nous le nom de votre établissement",
  ctaSub: "Nous rédigeons une première réponse, gratuitement. Elle vous convainc ? On parle prix.",
  mailSubject: "Réponse aux avis Google",
  priceChipPrimary: "49 €",
  priceChipSecondary: "les 2 premières à 25 € chacune",
} as const;

export const FR_STEPS_TITLE = "Comment ça se passe";
export const FR_STEP_LABEL = (n: number) => `Étape ${n}`;
export const FR_STEPS = [
  "Vous nous envoyez le nom de votre établissement",
  "L'IA rédige le brouillon, nous le validons",
  "Rien ne part sans votre accord",
];

// Bloc de confiance — traduction des quatre lignes rouges du site chinois.
export const FR_TRUST_ITEMS = [
  "L'IA rédige, rien ne part sans votre accord",
  "Vous nous écrivez en chinois ou en français ; le français et l'anglais, c'est notre affaire",
  "Nous ne demandons ni papiers, ni identifiants, ni mots de passe",
  "Basés à Paris",
];

// Traduction de la mention légale du site (voir DISCLAIMER dans (h-line)/_data/copy.ts).
export const FR_DISCLAIMER =
  "Précision : ce service relève de l'assistance à la lecture, à la rédaction et à la mise en ordre de courriers administratifs et commerciaux (activité d'écrivain public). Il ne constitue pas un conseil juridique, comptable ou fiscal. Nous travaillons à partir des documents et informations que vous nous transmettez, pour vous aider à comprendre vos courriers et à en rédiger des projets de réponse ; la vérification des délais, des montants et des informations officielles ainsi que la décision finale restent de votre responsabilité — pour toute question juridique ou fiscale importante, consultez un professionnel. Il s'agit d'une prestation entre professionnels ; sauf faute lourde ou dolosive, notre responsabilité est limitée au périmètre convenu par écrit.";

export const FR_META_DESCRIPTION =
  "Chaque avis négatif resté sans réponse décourage les clients qui vous trouvent sur Google. 49 € ; les deux premières commandes à 25 € chacune.";

export const FR_LANG_SWITCH = "中文版";
export const ZH_LANG_SWITCH = "Lire en français";
