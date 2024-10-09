import { Suspense } from "react";
import DoctorLayout from "../_components/DoctorLayout";
import PatientsListClient from "./_components/PatiantDetails";

export default async function PatientsPageServer() {
  // Fetch patient data here (you can replace this with actual API/database fetching)
  const patients = await fetchPatients();

  return (
    <DoctorLayout>
      <div>
        {/* Suspense can be used for loading states */}
        <Suspense fallback={<p>Loading...</p>}>
          <PatientsListClient patients={patients} />
        </Suspense>
      </div>
    </DoctorLayout>
  );
}

// Mock patient data fetch function
async function fetchPatients() {
  return [
    {
      id: 1,
      name: "John Doe",
      email: "john@example.com",
      age: 28,
      bloodGroup: "A+",
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "jane@example.com",
      age: 32,
      bloodGroup: "B-",
    },
    {
      id: 3,
      name: "Robert Roe",
      email: "robert@example.com",
      age: 45,
      bloodGroup: "O+",
    },
  ];
}
