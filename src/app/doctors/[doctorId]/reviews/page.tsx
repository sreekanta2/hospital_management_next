import PaginationComponent from "@/components/PaginationComponent";
import DoctorLayout from "../_components/DoctorLayout";
import ReviewCard from "./_components/ReviewCard";

export default function page() {
  return (
    <DoctorLayout>
      <div className="  border rounded-md flex flex-col gap-3">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
      <PaginationComponent currentPage={1} totalPages={10} />
    </DoctorLayout>
  );
}
