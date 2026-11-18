import { PeixunPage, peixunMetadata } from "../../../(h-line)/_ui/PeixunPage";
import { PEIXUN_FR } from "../../../(h-line)/_data/peixun";

export const metadata = peixunMetadata(PEIXUN_FR);

export default function Page() {
  return <PeixunPage c={PEIXUN_FR} />;
}
