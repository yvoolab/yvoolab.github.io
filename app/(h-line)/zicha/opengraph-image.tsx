import { renderOgImage, size, contentType, dynamic } from "../_ui/og";
import { zicha } from "../_data/services";

export { size, contentType, dynamic };

export default async function Image() {
  return renderOgImage({
    title: zicha.title,
    priceChip: zicha.priceChipSecondary ?? zicha.priceChipPrimary,
  });
}
