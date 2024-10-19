import PaginationComponent from "@/components/PaginationComponent";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import PatientsLayout from "../_components/PatientsLayout";
import DependantsCard from "./_components/DependantsCard";
import { DependantsCreatedForm } from "./_components/DependantsCreatedForm";

export default function page() {
  return (
    <PatientsLayout>
      <div className="w-full">
        <form className="flex justify-between items-center">
          <h1 className="text-lg font-bold">Dependants</h1>
          <div className="flex items-center border rounded-md lg:mb-4 ">
            <Input
              placeholder="search"
              type="text"
              className="max-w-40 focus-visible:ring-0 border-0"
            />
            <Search size={14} className="mr-2" />
          </div>
        </form>
        <hr className=" my-3" />
        <form className="flex justify-between items-center  mb-4">
          <div className="flex items-center border rounded-md  ">
            <Input
              placeholder="search"
              type="text"
              className="max-w-40 focus-visible:ring-0 border-0"
            />
            <Search size={14} className="mr-2" />
          </div>

          <DependantsCreatedForm />
        </form>

        <div className="flex flex-col gap-4">
          <DependantsCard />
          <DependantsCard />
          <DependantsCard />
          <DependantsCard />
          <DependantsCard />
          <DependantsCard />
          <DependantsCard />
          <DependantsCard />
        </div>
        <PaginationComponent currentPage={1} totalPages={10} />
      </div>
    </PatientsLayout>
  );
}
