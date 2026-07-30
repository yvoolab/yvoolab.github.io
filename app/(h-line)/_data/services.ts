// H-line (商户面) content — copy sourced verbatim from:
//   ai-side-hustle/h-line/direct-clients/poster-copy-draft-2026-07-23.md (poster copy)
//   ai-side-hustle/h-line/direct-clients/menu-customer-version.md (service-card summaries)
// Structure only follows docs/site-redesign-ia-spec-2026-07-30.md — no wording invented.

export type HService = {
  slug: string;
  path: string;
  /** poster 主标 (H1). P3/P6 use spec's 温和版 per 渠道注. */
  title: string;
  /** poster 副标 */
  subtitle: string;
  /** poster 卖点三行, verbatim */
  sellingPoints: [string, string, string];
  /** poster CTA, verbatim */
  cta: string;
  /** noun extracted from the CTA sentence, for the 3-step "您发 X" slot */
  ctaSubject: string;
  /** mailto subject line for this service's primary CTA (验收修单 #4) */
  mailSubject: string;
  priceChipPrimary: string;
  /** only set where the poster text explicitly states a 头两单 number/半价 */
  priceChipSecondary?: string;
};

export const services: HService[] = [
  {
    slug: "chaping",
    path: "/shanghu/chaping",
    title: "Google 上的差评，还挂着没回？",
    subtitle: "每条没回的差评，都在替你劝退搜到店的新客人。",
    sellingPoints: [
      "哈佛研究：评分每高一颗星，营收平均多 5-9%——回复差评是把分拉回来的第一步",
      "法语回复我们写好，48 小时内到你手机，你过目再发——不低声下气，也不呛人",
      "积压差评一次清完（10 条以内），原价 49 欧，头两单 25 欧",
    ],
    cta: "把店名发我，先免费替你写一条看看，觉得行再谈钱。",
    ctaSubject: "店名",
    mailSubject: "差评回复",
    priceChipPrimary: "49 欧",
    priceChipSecondary: "头两单 25 欧",
  },
  {
    slug: "shangjiaye",
    path: "/shanghu/shangjiaye",
    title: "客人搜「附近中餐」，你的店排第几？",
    subtitle: "照片乱、简介空、时间错——每一样都在白丢上门客。",
    sellingPoints: [
      "法国 300 多家餐厅实测：商家页修整后评论量比同行多一倍不止——评论多，排得靠前，上门客就多",
      "照片、简介、营业时间、菜单信息一次修齐，顺手把 AI 眼里的信息也理顺",
      "一次性 99 欧，头两单半价",
    ],
    cta: "发店名，我把你商家页缺的几样列成清单给你，免费。",
    ctaSubject: "店名",
    mailSubject: "商家页整容",
    priceChipPrimary: "99 欧",
    priceChipSecondary: "头两单半价",
  },
  {
    slug: "baojia",
    path: "/shanghu/baojia",
    // 温和版主标（spec §2 渠道注，网页属公开渠道）
    title: "法国报价单法定 15 项，你的模板齐了吗？",
    subtitle: "催款信法语代笔、当天出——自己的钱，早点要回来。",
    sellingPoints: [
      "催款信 19 欧/封，你口述我落笔，措辞有分寸不伤客情",
      "顺手把报价单也配齐：法国 devis 法定 15 项模板套装 99 欧，免得不合规挨罚（最高可罚 3000 欧）",
      "中文沟通，微信语音就能说清",
    ],
    cta: "把你现在用的报价单拍照发我（金额、客户名遮住，只看格式），免费指出缺哪几项。",
    ctaSubject: "报价单照片（金额、客户名遮住）",
    mailSubject: "报价单+催款信",
    priceChipPrimary: "催款信 19 欧/封",
    priceChipSecondary: "模板套装 99 欧",
  },
  {
    slug: "xunpan",
    path: "/shanghu/xunpan",
    title: "批发城里谁回得快，谁先拿单",
    subtitle: "哈佛研究 2241 家企业：一小时内回复，拿单机会高出近七倍。",
    sellingPoints: [
      "法语/英语回信 AI 打好草稿，你确认一下就发——快，但每个字你说了算",
      "搭建一次 119 欧，此后询盘再多也不过夜",
      "没空守邮箱不是错——但客户等了一夜，就会去问你的同行。现在不用守了",
    ],
    cta: "把你最近一封还没回的询盘转发给我，免费替你拟好回信。",
    ctaSubject: "还没回的询盘邮件",
    mailSubject: "询盘秒回",
    priceChipPrimary: "119 欧",
    priceChipSecondary: "可选看护 39 欧/月",
  },
  {
    slug: "tijian",
    path: "/shanghu/tijian",
    title: "现在的年轻客人，问 ChatGPT 哪家好吃",
    subtitle: "法国 35 岁以下的顾客，三成最近在用 AI 找餐厅（TheFork 调查）——AI 推荐得出你的店吗？",
    sellingPoints: [
      "查一遍你的店在 AI 眼里什么样：推不推荐你、说你什么、缺什么信息",
      "查出来的窟窿顺手补上——常和商家页整容一起做",
      "体检一次 49 欧，头两单半价",
    ],
    cta: "把店名发我，先免费查这一项——AI 推不推荐你，一句话告诉你；全套体检（说你什么、缺什么、怎么补）再谈钱。",
    ctaSubject: "店名",
    mailSubject: "AI 推荐体检",
    priceChipPrimary: "49 欧",
    priceChipSecondary: "头两单半价",
  },
  {
    slug: "waimai",
    path: "/shanghu/waimai",
    // 温和版主标（spec §2 渠道注）
    title: "你的外卖页，最后一次认真改是什么时候？",
    subtitle: "Uber 官方说：菜品描述和照片，最多能差出五成转化。",
    sellingPoints: [
      "法语菜品描述逐条重写，照片给出具体建议——你确认后才改",
      "Uber Eats / Deliveroo 每平台 79 欧，头两单半价",
      "改完是你自己的页面，不用月月交钱",
    ],
    cta: "把你店的外卖链接发我，免费指出最亏的三处。",
    ctaSubject: "外卖链接",
    mailSubject: "外卖页优化",
    priceChipPrimary: "79 欧/平台",
    priceChipSecondary: "头两单半价",
  },
  {
    slug: "butie",
    path: "/shanghu/butie",
    title: "法国给商户的补贴上千项，你申过几项？",
    subtitle: "传统申报中介开口 3000 欧起、拿到还要抽成——我们不抽成。",
    sellingPoints: [
      "官方申请条件整理成清单给你，你自己对照、自己拿主意",
      "初查 49 欧；要申的话，申请书文字草稿代拟 99 欧起（你自己提交）",
      "不承诺一定拿到——只把路指清楚，钱是你的",
    ],
    cta: "回「补贴」两个字，先把官方查询入口免费发你。",
    ctaSubject: "「补贴」两字",
    mailSubject: "商户找补贴",
    priceChipPrimary: "49 欧起",
  },
];

export const zicha: HService = {
  slug: "zicha",
  path: "/zicha",
  title: "该拿没拿的补助、多交了的税——你有没有？",
  subtitle:
    "光「在职补助」（prime d'activité）一项，符合条件的人里约一半没去领（法国官方统计）。不开店也用得上。",
  sellingPoints: [
    "你本人、店员、家里人都行：该领没领的补助、能省没省的税，一次帮你查清——官方对居留、入籍影响怎么说，报告里一并附上",
    "一份中文报告说明白：有什么、条件是什么、去哪申去哪报——你自己去办，我们不经手你的钱，也不要你的证件、账号和密码",
    "报告 29 欧，头两单 15 欧",
  ],
  cta: "回「自查」两个字，一分钟几个问题，先免费告诉你值不值得查——不值得查也照实说。",
  ctaSubject: "「自查」两字",
  mailSubject: "自查",
  priceChipPrimary: "29 欧",
  priceChipSecondary: "头两单 15 欧",
};

export function findService(slug: string): HService | undefined {
  return services.find((s) => s.slug === slug);
}

// /shanghu 总门面服务卡 —— 文案摘自 menu-customer-version.md，价格/谁用得上/描述皆原文
export type MenuCard = {
  title: string;
  body: string;
  price: string;
  href: string;
  external?: boolean;
};

export const persistentCard: MenuCard = {
  title: "差评回复管家",
  body: "谁用得上：Google 上有评价的一切商家——餐馆、美甲、按摩、理发、烟草店、亚超、旅行社都算。没回的差评全部配好法语回复草稿，您过目就能发；此后每周帮您盯新评价，新差评 48 小时内草稿到您手机。",
  price: "积压清理一次 49 欧（10 条以内）；月度看护 69 欧/月",
  href: "/shanghu/chaping",
};

export const oneTimeCards: MenuCard[] = [
  {
    title: "Google 商家页整容",
    body: "谁用得上：靠街坊客上门的店。照片、简介、营业时间、菜单信息一次修齐，客人搜「附近中餐」时您的店像样地出现——法国 300 多家餐厅实测：商家页修齐的店，评论量比同行多一倍不止。",
    price: "一次性 99 欧",
    href: "/shanghu/shangjiaye",
  },
  {
    title: "外卖页面优化",
    body: "谁用得上：上了 Uber Eats / Deliveroo 的餐馆。菜单照片建议+法语菜品描述重写——描述和照片最多能差出五成转化（Uber 官方说法）。",
    price: "79 欧/平台",
    href: "/shanghu/waimai",
  },
  {
    title: "询盘秒回",
    body: "谁用得上：批发、外贸、装修队，凡靠邮件接单的生意。客户邮件 AI 打草稿、秒回您确认——客户不会因为等了一夜，跑去问您的同行（哈佛研究：一小时内回复，拿单机会高出近七倍）。",
    price: "搭建 119 欧 + 可选看护 39 欧/月",
    href: "/shanghu/xunpan",
  },
  {
    title: "报价单+催款信加速",
    body: "谁用得上：装修队、工匠、上门服务。法国报价单（devis）15 项法定信息一次配齐 + 催款信法语代笔当天出（客户平均拖您 14 天）。",
    price: "模板套装 99 欧；催款信 19 欧/封",
    href: "/shanghu/baojia",
  },
  {
    title: "AI 推荐体检",
    body: "谁用得上：做年轻客生意的店。法国 35 岁以下顾客，三成最近在用 AI 找餐厅（TheFork 调查）——查一遍您的店在 AI 眼里什么样：推不推荐您、说您什么、缺什么信息。",
    price: "体检一次 49 欧，您店的头两单半价",
    href: "/shanghu/tijian",
  },
  {
    title: "商户找补贴",
    body: "谁用得上：注册了公司的商户。官方申请条件整理成清单给您，您自己对照拿主意；要申的话申请书文字草稿代拟（您自己提交）。传统中介开口 3000 欧起还抽成，我们不抽成。",
    price: "初查 49 欧；申报草稿 99 欧起/项",
    href: "/shanghu/butie",
  },
  {
    title: "网站全案：建站·改版·合规体检·SEO/AI 推荐优化",
    body: "谁用得上：有网站或想要网站的商家。没网站建一个、有网站翻新；查网站合不合欧盟法规；客人 Google 搜得到您、问 AI 时推荐得出您。",
    price: "体检类 49 欧；建站/改版按需一口价（书面方案后报）",
    href: "mailto:yvoolab@gmail.com",
    external: true,
  },
];
