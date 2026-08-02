import { renderOgImage, size, contentType, dynamic } from "../../../../(h-line)/_ui/og";
import { FR_CHAPING } from "../../../_copy";

export { size, contentType, dynamic };

export default async function Image() {
  return renderOgImage({
    title: FR_CHAPING.title,
    priceChip: `${FR_CHAPING.priceChipPrimary} · ${FR_CHAPING.priceChipSecondary}`,
  });
}
