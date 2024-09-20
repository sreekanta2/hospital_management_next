import DoctorCard from "./_components/DoctorCard";

import DoctorFilterForm from "./_components/DoctorFilterForm";

export default function div() {
  // const genderOptions = ["Male", "Female"];
  // const avalable = [
  //   "Available Today",
  //   "Available Tomorrow",
  //   "Available in Next 7 Days",
  //   "Available in Next 3 Days",
  // ];
  return (
    <div className=" max-w-[1280px] mx-auto mt-24 ">
      <div className="grid mx-6  grid-cols-1 lg:grid-cols-5 gap-4 ">
        <DoctorFilterForm />

        <div className=" col-span-4 grid grid-flow-row gap-4 text-neutral-600 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
    </div>
  );
}
