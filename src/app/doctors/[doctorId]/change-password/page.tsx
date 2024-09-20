import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DoctorLayout from "../_components/DoctorLayout";

export default function ChangePassword() {
  return (
    <DoctorLayout>
      <div className=" border mx-6 rounded-md p-6  space-y-4  ">
        <Input placeholder="Old password" />
        <Input placeholder="New password" />
        <Input placeholder="Confirm password" />

        <Button className="py-3 px-4 rounded-md bg-[#09e5ab] transition-transform placeholder-white hover:bg-[#137e61]">
          Save Changes
        </Button>
      </div>
    </DoctorLayout>
  );
}
