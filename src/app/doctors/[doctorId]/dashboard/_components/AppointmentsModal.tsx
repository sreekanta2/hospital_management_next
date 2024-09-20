interface AppointmentsModalProps {
  open: boolean;
  control: () => void;
}
export default function AppointmentsModal({
  open,
  control,
}: AppointmentsModalProps) {
  return (
    open && (
      <>
        <div
          onClick={control}
          className="fixed w-full h-full overflow-y-scroll inset-0 z-10 bg-black/50 cursor-pointer"
        ></div>
        <div className="rounded w-[400px]  space-y-8 bg-white p-6 absolute bottom-0 md:top-1/2 left-1/2 z-20 -translate-x-1/2 translate-y-[365%] md:translate-y-[33%]">
          <div className="flex flex-col gap-6">
            <h1 className="  text-2xl border-b pb-4 text-gray-700">
              Appointment Details
            </h1>

            <div className="flex justify-between  ">
              <div>
                <h1 className="  text-gray-600">#APT001</h1>
                <p className="  text-gray-500">21 Oct 2023 10:00 AM</p>
              </div>
              <button className="bg-green-200 py-1  px-2 text-green-700 rounded-md">
                Competed
              </button>
            </div>
            <div>
              <h1 className=" text-md text-gray-600">Confirm Date</h1>
              <p className="  text-gray-500">21 Oct 2023 10:00 AM</p>
            </div>
            <div>
              <h1 className="  text-gray-600">Paid Amount</h1>
              <p className="  text-gray-500">$100</p>
            </div>
          </div>
        </div>
      </>
    )
  );
}
