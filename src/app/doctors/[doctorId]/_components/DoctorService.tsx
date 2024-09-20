export default function DoctorService() {
  const services = [1, 2, 3, 4, 5, 6];
  return (
    <div>
      <h1 className="  py-2 font-semibold text-gray-600">Services</h1>
      <ul className="flex flex-wrap gap-x-10 gap-y-4">
        {services.map((service) => (
          <li className="flex gap-4 items-center" key={service}>
            <svg
              className="w-3 h-3 ms-2 rtl:rotate-180 text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
            <span className="text-[#20c0f3]">Tooth cleaning</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
