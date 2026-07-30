import { renderOgImage, size, contentType, dynamic } from "../../_ui/og";
import { findService } from "../../_data/services";

export { size, contentType, dynamic };

const service = findService("chaping")!;

export default async function Image() {
  return renderOgImage({
    title: service.title,
    priceChip: service.priceChipSecondary ?? service.priceChipPrimary,
  });
}
