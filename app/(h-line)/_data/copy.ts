// Shared H-line copy fragments, verbatim from menu-customer-version.md.

export const CONTACT_LINE =
  "邮箱 yvoolab@gmail.com · Facebook「Yvoo Lab」· Instagram @yvoolab · 小红书 @AI一武";

export const SLOGAN = "用得起的 AI，听得懂您的 Yvoolab。";

export const DISCLAIMER =
  "说明：这项服务是代读、代写与整理行政/商务信件的文书协助（écrivain public 性质），不是法律、会计或税务咨询。我们会根据您提供的资料和文件帮您读懂信件、写回复草稿；但信中的期限、金额、官方信息核实无误，以及最终怎么处理，责任在您自己——重要法律、税务问题建议另找专业人士确认。这是商户与商户之间的服务关系；除非出现重大过失或故意行为，我方责任以我们书面约定的范围为限。";

// Hero copy for /shanghu (spec §2 总门面·item1)
export const SHANGHU_HERO_SUBHEAD =
  "巴黎华人商户的 AI 帮手——差评回复、催款信、法语公文、找补贴，AI 打草稿，您确认后才发出。";

// 验收修单 #6：hero 标题强制断行于「AI，」后；页脚 SLOGAN 不动，故与 SLOGAN 分开两个常量
export const SHANGHU_HERO_TITLE_LINE1 = "用得起的 AI，";
export const SHANGHU_HERO_TITLE_LINE2 = "听得懂您的 Yvoolab。";

// 验收修单 #5：主钮拆分——钮内短句 + 钮下小字
export const DIAGNOSIS_CTA_LABEL = "说说您最耗人工的那件事";
export const DIAGNOSIS_CTA_SUB = "15 分钟免费咨询：告诉您能不能做、大概怎么做";
export const DIAGNOSIS_MAIL_SUBJECT = "免费诊断";

// Del 2026-07-30 令补回：诊断邀约全式（例子三枚沿信稿 v2.1 已审句 + 总则「用您自己的话」+ 菜单第 9 条尾句拼装，无新造文案）
export const DIAGNOSIS_FULL_INVITE =
  "您不用懂技术，也不用会说需求。就用您自己的话讲：您每天在做什么？哪件事天天重复？哪件最耗人工？——是回评价、催账款、看法语公文，还是别的。能不能自动化、大概怎么做、值不值得，判断是我的事：15 分钟免费咨询，给您个准话。要做的话出书面方案和一口价，您再定。";

// 半价横幅 (spec §2 总门面·item2)
export const HALF_PRICE_BANNER = "您店的头两单半价，办完留句真实评价就行。";

// 红线信任块 (spec §2 总门面·item4)
export const TRUST_ITEMS = [
  "AI 打草稿，您确认后才发出",
  "您说中文就行，法语英语我们替您出面",
  "不要您的证件、账号和密码",
  "巴黎本地",
];

// 另有一行 (spec §2 总门面·item5), verbatim from menu-customer-version.md
export const EXTRA_LINE =
  "另有：法国信件拆解（一次性·谁用得上：收到法语公文看不懂的商户/个人）39 欧 · 信箱管家（持续看护·谁用得上：所有小公司/个体户，法语公文月月都有）119 欧/月";

// En français 摘要段 (spec §2 总门面·item6). 法语措辞候 Del 裁定,
// 此句取自已核准的 variant-D 视觉稿原样文字，非新造商业文案。
export const FRENCH_LABEL = "En français";
export const FRENCH_SUMMARY = "Assistant administratif & IA pour commerçants — Paris.";

// 通用诊断邀约链接（服务页 hero 次行）验收修单 #8
export const DIAGNOSIS_LINK_TEXT =
  "您的行业不在上面？说说您最耗人工的那件事——15 分钟免费咨询，替您判能不能做。";

// 验收修单 #9：每页页脚回链免费小工具
export const TOOLS_FOOTER_TEXT = "先试试我们的免费小工具";

// 验收修单 #4：主钮 mailto 统一构造（yvoolab@gmail.com + 预填 subject）
export function mailtoWithSubject(subject: string): string {
  return `mailto:yvoolab@gmail.com?subject=${encodeURIComponent(subject)}`;
}
