import bannerImage from "@/assets/home/banner/banner-img.png";
import bannerImage2 from "@/assets/home/banner/banner-img1.svg";
import bannerImage3 from "@/assets/home/banner/banner-img2.svg";
import bannerImage4 from "@/assets/home/banner/banner-img3.svg";
import Image from "next/image";

export default function Banner() {
  return (
    <div className="max-w-7xl mx-auto my-4 px-4 h-screen">
      <div className=" grid grid-cols-2 justify-between items-start">
        <div className="  relative">
          <div className="text-lg font-semibold  ">
            <h1>Consult Best Doctors Your Nearby Location.</h1>
          </div>
        </div>
        <div className="relative w-full hidden lg:block ">
          <div className="relative left-0">
            <Image
              src={bannerImage}
              alt="Banner Image"
              width={500}
              height={150}
              className="object-cover  h-auto w-2/3"
            />
          </div>
          <div className="absolute top-1/3 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
            <Image
              src={bannerImage2}
              alt="Banner Image 2"
              layout="responsive"
              width={300}
              height={300}
              className="object-cover w-full h-auto animate-bounce-smooth"
            />
          </div>
          <div className="absolute top-2/4 right-1/4 transform translate-x-1/2 -translate-y-1/2 ">
            <Image
              src={bannerImage3}
              alt="Banner Image 3"
              layout="responsive"
              width={300}
              height={300}
              className="object-cover w-full h-auto animate-bounce-smooth"
            />
          </div>
          <div className="absolute bottom-4   right-0 transform   ">
            <Image
              src={bannerImage4}
              alt="Banner Image 4"
              layout="responsive"
              width={500}
              height={300}
              className="object-cover w-full h-auto animate-bounce-smooth"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
