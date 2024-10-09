"use client";

import { useState } from "react";

import PaginationComponent from "@/components/PaginationComponent";
import SearchInput from "@/components/SearchInput";
import { Button } from "@/components/ui/button";
import PatientCard from "./PatientsCard";

export default function PatientsListClient({
  patients,
}: {
  patients: Array<any>;
}) {
  const [selectedPatient, setSelectedPatient] = useState<number | null>(null);

  const handlePatientSelect = (patientId: number) => {
    setSelectedPatient(patientId); // Select a patient to show details
  };

  const handleBackToList = () => {
    setSelectedPatient(null); // Deselect the patient and go back to the list
  };

  return (
    <div>
      {selectedPatient ? (
        <div>
          <button
            onClick={handleBackToList}
            className="text-blue-500 underline"
          >
            &larr; Back to Patients
          </button>
          <h1 className="text-xl font-semibold mt-4">Patient Details</h1>
          <PatientDetails
            patient={patients.find((p) => p.id === selectedPatient)}
          />
        </div>
      ) : (
        <div>
          <div className="flex justify-between border-b pb-2">
            <h1 className="text-xl font-semibold">My Patients</h1>
            <SearchInput baseUrl="/doctors/1/my-patients" searchParamKey="q" />
          </div>

          <div className="flex gap-2 mt-4">
            <Button
              variant="outline"
              className="focus:bg-blue-500 focus:text-white"
            >
              Active
            </Button>
            <Button
              variant="outline"
              className="focus:bg-blue-500 focus:text-white"
            >
              Inactive
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 mt-8">
            {patients.map((patient) => (
              <PatientCard
                key={patient.id}
                patientId={patient.id}
                onPatientClick={handlePatientSelect}
              />
            ))}
          </div>
          <PaginationComponent currentPage={1} totalPages={20} baseUrl="1" />
        </div>
      )}
    </div>
  );
}

function PatientDetails({ patient }: { patient: any }) {
  if (!patient) return null;

  return (
    <div className="p-4 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-bold">Patient: {patient.name}</h2>
      <p>Email: {patient.email}</p>
      <p>Age: {patient.age}</p>
      <p>Blood Group: {patient.bloodGroup}</p>
    </div>
  );
}
