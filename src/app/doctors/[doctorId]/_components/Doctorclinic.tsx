import LightBox from "@/components/Lightbox";
import StarRating from "@/components/StarRating";

export default function DoctorClinic({}) {
  const times = [1, 2, 3];
  return (
    <div className="border rounded-md">
      <div className="flex flex-col gap-6 md:flex-row md:justify-between p-4">
        <div className="flex  gap-4 ">
          <div className="flex  flex-col gap-6">
            <div className="flex flex-col gap-1">
              <h1 className="text-xl text-gray-700  font-semibold">
                Dr. Darren Elder
              </h1>
              <p className="text-sm text-gray-600">
                BDS, MDS - Oral & Maxillofacial Surgery
              </p>
            </div>
            <div className="flex flex-col gap-1">
              <StarRating rating={5} />
              <p className="text-sm text-gray-500">
                <span>icon</span>
                <span> Network, USA - Get Directions</span>
              </p>
            </div>
            <div className="flex ">
              <LightBox />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {times.map((time) => (
            <div key={time}>
              <h1 className="font-semibold">Sun - Sat</h1>
              <div className="flex flex-col gap-2 text-sm text-gray-600 ">
                <p className="text-[#20c0f3]"> 10.00AM - 2.00PM</p>
              </div>
            </div>
          ))}
        </div>
        <h1 className="mr-14 font-bold">$250</h1>
      </div>
    </div>
  );
}
