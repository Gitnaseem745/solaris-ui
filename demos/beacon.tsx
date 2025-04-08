import Beacon from "@/components/ui/beacon";
import { IoLogoWebComponent } from "react-icons/io5";

export default function BeaconDemo() {
  return (
    <div className="w-fit mx-auto">
      <Beacon url="#" icon={<IoLogoWebComponent />} text="Find out what's new!" />
    </div>
  );
}
