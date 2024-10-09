import PatientsLayout from "../_components/PatientsLayout";
import { PatientProfileSettingsForm } from "./_components/PatientProfileSettingsForm";

export default function page() {
  return (
    <PatientsLayout>
      <div>
        <PatientProfileSettingsForm />
      </div>
    </PatientsLayout>
  );
}
