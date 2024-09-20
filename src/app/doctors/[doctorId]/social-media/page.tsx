import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DoctorLayout from "../_components/DoctorLayout";

export default function SocialMedia() {
  return (
    <DoctorLayout>
      <div className=" border mx-6 rounded-md p-6 space-y-4  ">
        <Input placeholder="Facebook Url" />
        <Input placeholder="Twitter Url" />
        <Input placeholder="Instagram Url" />
        <Input placeholder="Pinterest Url" />
        <Input placeholder="Linkedin  Url" />
        <Input placeholder="Youtube  Url" />
        <Button className="py-3 px-4 rounded-md bg-[#09e5ab] transition-transform placeholder-white hover:bg-[#137e61]">
          Save Changes
        </Button>
      </div>
    </DoctorLayout>
  );
}
