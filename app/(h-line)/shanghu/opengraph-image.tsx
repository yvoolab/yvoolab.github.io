import { renderOgImage, size, contentType, dynamic } from "../_ui/og";

export { size, contentType, dynamic };

export default async function Image() {
  return renderOgImage({ title: "用得起的 AI，听得懂您的 Yvoolab" });
}
