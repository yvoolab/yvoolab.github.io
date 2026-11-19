// AI 培训落地页文案（中 /peixun · 法 /fr/formation-ia）——草稿，候 Del 签，签前不上线。
// 底本：ai-side-hustle/research/ai-training-menu-framework-2026-11-18.md
//   三（问卷 v3 引言，Del 2026-11-18「问卷可以，问卷通过」）· 三之二（法文本）· 二（八道菜）· 五（授课流程）。
// 不出新论断：只取问卷已过之句与八道菜「学完能做到」。
// 价：问卷菜单原价（每人），Del 2026-11-19 07:30 准顾问复核 1118 之价改（€20 起含必选「安全起步」）；
// Del 11-19「待价准后同上线」。页内只标吾价，不书内训市价，故问卷对比之「价格」一条不入。

const FORM_ZH =
  "https://docs.google.com/forms/d/e/1FAIpQLSef8TP8qow02n_D5E-arbyVd_KHXyGtyWotv8sPfy4o5Hut9g/viewform";
const FORM_FR =
  "https://docs.google.com/forms/d/e/1FAIpQLSfbDK0Ni7tcmGOBW61XYeQfBO9DSdhCobpu6J-DB60TDs6zRA/viewform";

export type PeixunCopy = {
  lang: "zh" | "fr";
  path: string;
  altPath: string;
  altLabel: string;
  metaTitle: string;
  metaDescription: string;
  title: string;
  subtitle: string;
  cta: string;
  ctaHref: string;
  ctaSub: string;
  compareTitle: string;
  compare: readonly { k: string; v: string }[];
  menuTitle: string;
  menuNote: string;
  menu: readonly { name: string; does: string; hours: string; price: string; required?: boolean }[];
  requiredTag: string;
  extra: string;
  stepsTitle: string;
  stepLabel: (n: number) => string;
  steps: readonly string[];
  priceLine: string;
  trust: readonly string[];
  mailLabel: string;
  mailSubject: string;
};

export const PEIXUN_ZH: PeixunCopy = {
  lang: "zh",
  path: "/peixun/",
  altPath: "/fr/formation-ia/",
  altLabel: "Lire en français",
  metaTitle: "AI 教练 · 团队培训与陪练 — Yvoolab",
  metaDescription: "教练本身是 AI：员工随时可练，每次约 20 分钟，练的是自己手上的活；中英法皆可，主管每周收进度。",
  title: "AI 教练 · 团队培训与陪练",
  subtitle: "我们是 Yvoolab，为团队提供 AI 教练。教练本身是 AI，员工随时可练，练的是自己手上的活。",
  cta: "填写培训问卷",
  ctaHref: FORM_ZH,
  ctaSub: "七个问题，三分钟：告诉我们贵司想让员工学哪几项。",
  compareTitle: "和真人培训相比",
  compare: [
    { k: "时间", v: "真人课要全员同一天停下工作去上课；AI 教练随时可练，每次约 20 分钟。" },
    { k: "练习", v: "真人课上练习时间有限；AI 教练不限次数，练的是员工自己手上的活。" },
    { k: "语言", v: "真人讲师通常讲一种语言；AI 教练中文、英文、法语都可以，一个团队可以混用。" },
    { k: "跟进", v: "真人课结束即结束；AI 教练课后仍可练，主管每周收到进度：谁练了、过了几项、省下多少时间。" },
  ],
  menuTitle: "八项自选",
  menuNote: "按需挑选，不必全学。学完能自己办下列之事，不是成为专家。",
  menu: [
    { name: "安全起步", does: "知道哪些资料不能交给 AI，会分辨 AI 编造的内容", hours: "1 小时", price: "€20/人", required: true },
    { name: "选对工具", does: "选定一个适合贵司的 AI 工具并开好账号", hours: "30 分钟", price: "€10/人" },
    { name: "会问会查", does: "会写清楚的指令，会核对 AI 的回答", hours: "2 小时", price: "€40/人" },
    { name: "邮件与客户消息", does: "中英法回邮件、回评论、回客户消息", hours: "2 小时", price: "€40/人" },
    { name: "宣传图文", does: "做社媒帖、活动图、短视频脚本", hours: "2.5 小时", price: "€50/人" },
    { name: "文书与会议", does: "长文摘要、会议纪要、公函交 AI 起草", hours: "2 小时", price: "€40/人" },
    { name: "Excel 与数据", does: "让 AI 写公式、清洗数据、做透视、对账", hours: "3.5 小时", price: "€70/人" },
    { name: "实战一件", does: "选一件每月重复的工作，用 AI 办完，对比前后耗时", hours: "3.5 小时", price: "€70/人" },
  ],
  requiredTag: "必选",
  extra: "每套都含：课后不限次陪练 · 主管周报 · 结课报告。",
  stepsTitle: "每一项怎么学",
  stepLabel: (n) => `第 ${n} 步`,
  steps: [
    "开课先测一次，读一篇约 10 分钟的短文",
    "AI 教练按岗位出题，员工用自己手上的活来练",
    "AI 批改、要求重做，节末小考通过才算完成",
  ],
  priceLine: "按项自选，按人计价，€20 起（必选之「安全起步」一项）。",
  trust: [
    "教练是 AI，开口即说明自己是 AI",
    "在贵司准用的 AI 工具里练；尚无工具的，在我们的页面里用虚构数据练",
    "不需要接入贵司系统，也不需要看任何内部文件",
    "巴黎",
  ],
  mailLabel: "或直接写信给我们",
  mailSubject: "AI 培训",
};

export const PEIXUN_FR: PeixunCopy = {
  lang: "fr",
  path: "/fr/formation-ia/",
  altPath: "/peixun/",
  altLabel: "中文版",
  metaTitle: "Coach IA — formation et entraînement pour vos équipes — Yvoolab",
  metaDescription:
    "Un coach IA pour vos équipes : disponible à tout moment, 20 minutes par séance, sur les tâches réelles de chacun. Français, anglais, chinois.",
  title: "Coach IA — formation et entraînement pour vos équipes",
  subtitle:
    "Nous sommes Yvoolab. Nous proposons aux équipes un coach IA : le coach est lui-même une IA, disponible à tout moment, et l'on s'entraîne sur ses propres tâches.",
  cta: "Répondre au questionnaire",
  ctaHref: FORM_FR,
  ctaSub: "Sept questions, trois minutes : dites-nous quels modules vous intéressent.",
  compareTitle: "Par rapport à une formation en présentiel",
  compare: [
    { k: "Temps", v: "Une formation classique mobilise toute l'équipe le même jour ; le coach IA est disponible à tout moment, environ 20 minutes par séance." },
    { k: "Pratique", v: "En salle, le temps d'exercice reste limité ; avec le coach IA, autant d'essais que nécessaire, sur les tâches réelles de chacun." },
    { k: "Langues", v: "Un formateur parle en général une seule langue ; le coach IA travaille en français, en anglais et en chinois, et une même équipe peut les mélanger." },
    { k: "Suivi", v: "Une formation s'arrête à la fin de la séance ; le coach IA reste disponible ensuite, et le manager reçoit chaque semaine un point : qui s'entraîne, combien de modules validés, combien de temps gagné." },
  ],
  menuTitle: "Huit modules au choix",
  menuNote: "Vous choisissez ce dont vous avez besoin. À l'issue, chacun sait faire seul ce qui est décrit — sans prétendre devenir expert.",
  menu: [
    { name: "Bien démarrer en sécurité", does: "savoir quelles données ne jamais confier à l'IA, repérer ce qu'elle invente", hours: "1 h", price: "20 € / pers.", required: true },
    { name: "Choisir son outil", does: "retenir l'outil d'IA adapté à votre entreprise et ouvrir les comptes", hours: "30 min", price: "10 € / pers." },
    { name: "Bien demander, bien vérifier", does: "formuler des consignes claires, contrôler les réponses de l'IA", hours: "2 h", price: "40 € / pers." },
    { name: "E-mails et messages clients", does: "répondre aux e-mails, avis et messages clients en français, anglais ou chinois", hours: "2 h", price: "40 € / pers." },
    { name: "Visuels et publications", does: "publication réseaux sociaux, visuel d'événement, script de vidéo courte", hours: "2 h 30", price: "50 € / pers." },
    { name: "Documents et réunions", does: "synthèses, comptes rendus de réunion, courriers préparés par l'IA", hours: "2 h", price: "40 € / pers." },
    { name: "Excel et données", does: "formules, nettoyage de données, tableaux croisés, rapprochements, avec l'IA", hours: "3 h 30", price: "70 € / pers." },
    { name: "Un cas réel", does: "choisir une tâche mensuelle récurrente, la traiter avec l'IA, comparer le temps avant et après", hours: "3 h 30", price: "70 € / pers." },
  ],
  requiredTag: "obligatoire",
  extra: "Toujours inclus : entraînement illimité après le module · point hebdomadaire au manager · bilan de fin de parcours.",
  stepsTitle: "Comment se déroule un module",
  stepLabel: (n) => `Étape ${n}`,
  steps: [
    "Un test de départ, puis un texte court d'environ 10 minutes",
    "Le coach IA propose des exercices selon le poste ; chacun s'entraîne sur ses tâches réelles",
    "Correction par l'IA, reprise si besoin ; le module est validé après un court test final",
  ],
  priceLine: "Module par module, facturé par personne, à partir de 20 € (module Sécurité, obligatoire).",
  trust: [
    "Le coach est une IA et le dit dès le départ",
    "On s'entraîne dans l'outil d'IA autorisé par votre entreprise ; sans outil, sur notre page, avec des données fictives",
    "Aucun accès à vos systèmes, aucun document interne demandé",
    "Basés à Paris",
  ],
  mailLabel: "Ou écrivez-nous directement",
  mailSubject: "Formation IA",
};
