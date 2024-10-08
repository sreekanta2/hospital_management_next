import Avatar from "@/components/Avatar";

export default function ClinicCard() {
  const name = "Clinic Name gfgffg fgfg fg fg fg fg f gfg fg f gf fg fg fg fg ";
  return (
    <div className=" rounded-md p-4 bg-slate-50 dark:bg-gray-800 flex flex-col  gap-4">
      <div className="w-full flex justify-between items-center gap-3">
        <div className="flex items-center gap-3">
          <Avatar className="rounded-lg" width="50px" height="50px" />

          <h1>{name.length > 35 ? `${name.slice(0, 35)}...` : name}</h1>
        </div>
        <span className="justify-self-end">$100</span>
      </div>
      <div className="w-fit flex    flex-col p-4 bg-white dark:bg-gray-700 rounded-md text-xs gap-2">
        <span>Tue : 07:00 AM - 09:00 PM</span>
        <span>Wed : 07:00 AM - 09:00 PM</span>
      </div>
    </div>
  );
}
