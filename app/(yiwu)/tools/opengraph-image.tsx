import { renderOgImage, size, contentType, dynamic } from "../../(h-line)/_ui/og";

export { size, contentType, dynamic };

export default async function Image() {
  return renderOgImage({
    title: "免费在线小工具",
    priceChip: "免费 · 文件不出浏览器",
  });
}
