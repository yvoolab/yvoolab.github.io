import { PeixunPage, peixunMetadata } from "../_ui/PeixunPage";
import { PEIXUN_ZH } from "../_data/peixun";

export const metadata = peixunMetadata(PEIXUN_ZH);

export default function Page() {
  return <PeixunPage c={PEIXUN_ZH} />;
}
