import DoctorLayout from "../_components/DoctorLayout";
import RequestsCard from "./_components/RequestsCard";

export default function page() {
  return (
    <DoctorLayout>
      <div className="flex flex-col gap-4 ">
        <h1 className="text-xl ">Requests</h1>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-4">
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
        <RequestsCard />
      </div>
    </DoctorLayout>
  );
}
