import DoctorLayout from "../_components/DoctorLayout";
import SpecialtiesServiceForm from "./_components/SpecialtiesServiceForm";

export default function page() {
  return (
    <DoctorLayout>
      <div>
        <h1>Specialties & Services</h1>
        <div>
          <SpecialtiesServiceForm />
        </div>
      </div>
    </DoctorLayout>
  );
}
