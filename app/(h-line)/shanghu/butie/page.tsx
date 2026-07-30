import { ServicePage } from "../../_ui/ServicePage";
import { serviceMetadata } from "../../_ui/metadata";
import { findService } from "../../_data/services";

const service = findService("butie")!;

export const metadata = serviceMetadata(service);

export default function Page() {
  return <ServicePage service={service} />;
}
