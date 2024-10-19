import PaginationComponent from "@/components/PaginationComponent";
import PatientsLayout from "../_components/PatientsLayout";
import FavouriteDoctorCard from "./_components/FavouriteDoctorCard";

export default function page() {
  return (
    <PatientsLayout>
      <div className="w-full mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((patient, index) => (
            <FavouriteDoctorCard key={index} />
          ))}
        </div>
        <PaginationComponent currentPage={1} totalPages={10} />
      </div>
    </PatientsLayout>
  );
}
