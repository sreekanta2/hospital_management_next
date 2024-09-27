/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from "next/og";
import { NextResponse } from "next/server";

export function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get("title") || "Aidroo";
    const rating = searchParams.get("rating") || "0"; // Keep as string or convert to number if needed
    const profileUrl = searchParams.get("profileThumb") || "";
    const verified = searchParams.get("verified") === "true"; // Convert the string to a boolean
    const totalReviews = searchParams.get("totalReviews") || "0";

    // Create the image response with your desired structure
    return new ImageResponse(
      (
        <div
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            // backgroundImage: "linear-gradient(to bottom, #dbf4ff, #fff1f1)",
            border: "1px solid green",

            fontSize: 32,
            fontWeight: 600,
            padding: "0 20px",
            gap: "40px",
          }}
        >
          <img
            src="https://doccure.dreamstechnologies.com/html/template/assets/img/doctors/doctor-07.jpg"
            width="340" // Specify width
            height="200" // Specify height
            style={{
              objectFit: "cover",
              height: 400,
              width: 400,
              margin: "0",
              borderRadius: "10px",
              marginLeft: "10px",
              marginBottom: "10px",
              boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
            }}
          />

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "60%",
              backgroundColor: "transparent",
            }}
          >
            <h1
              style={{ textAlign: "justify", backgroundColor: "transparent" }}
            >
              title...fffffffffffffffffffffff dffffffdffffffdfffff
              {verified ? (
                <img
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "transparent",
                  }}
                  src="https://res.cloudinary.com/dtwhrzfwy/image/upload/v1724249953/nackgugh5tinsynmfx89.jpg"
                  alt="Verified"
                />
              ) : (
                <img
                  style={{
                    width: 40,
                    height: 40,
                    backgroundColor: "transparent",
                  }}
                  src="https://res.cloudinary.com/dtwhrzfwy/image/upload/v1724249953/wav2s9ok4jmqiodxdtti.jpg"
                  alt="Not Verified"
                />
              )}
            </h1>
            <h1 style={{ textAlign: "justify" }}>cfff</h1>
          </div>
        </div>
      ),
      {
        width: 1260,
        height: 600,
      }
    );
  } catch (error) {
    return new NextResponse("Image generation failed", { status: 500 });
  }
}

// https://doccure.dreamstechnologies.com/html/template/assets/img/doctors/doctor-07.jpg

// /* eslint-disable react/no-unknown-property */
// /* eslint-disable @next/next/no-img-element */
// import { Poppins } from "next/font/google";
// import { ImageResponse } from "next/og";
// import { GoDotFill } from "react-icons/go";

// const poppins = Poppins({
//   weight: ["400", "600"],
//   subsets: ["latin"],
// });

// export async function GET(request) {
//   const { searchParams } = new URL(request.url);
//   const title = searchParams.get("title" || "");
//   const rating = searchParams.get("rating" || 0);
//   const profileUrl = searchParams.get("profileThumb" || "");
//   const verified = searchParams.get("verified") === "true"; // Convert the string to a boolean
//   const totalReviews = searchParams.get("totalReviews" || 0);

//   // Retrieve the color, 18, and filledStars parameters from the query string
//   // Default to blue if not provided
//   // Default 18 if not provided
//   const totalStars = 5;
//   const filledStars = Math.floor(rating);

//   // Define the dynamic SVG path data for the star shape
//   const dynamicPath = `M507.4,256.1c0,69.4-28.1,132.2-73.5,177.5c-45.3,45.5-108.3,73.7-177.5,73.7c-57.2,0-110.3-19.2-152.5-51.8
//     c-0.2-0.2-0.4-0.2-0.7-0.5c-0.2,0-0.2-0.2-0.4-0.5c-0.2,0-0.4-0.2-0.7-0.5c-4.7-3.6-9.2-7.6-13.6-11.6c-4.2-3.8-8.3-7.8-12.3-11.8
//     v-0.2c-0.2-0.2-0.2-0.2-0.4-0.2V430c-2.5-2.2-4.5-4.5-6.5-6.7c-0.2-0.2-0.4-0.5-0.7-0.7C29.3,378.5,5.4,320.2,5.4,256.1
//     c0-69.2,28.1-131.9,73.5-177.5C124.2,33.3,187.2,5.2,256.4,5.2s132.2,28.1,177.5,73.4C479.2,124.2,507.4,186.9,507.4,256.1z`;

//   // Define the inner white path that fits within the star
//   const innerWhitePath = `M437.5,197.5l-138.3-0.3L256.3,65l-44.3,132.2H75.3l84.3,63c0,0,56.5-26.8,144-28.8c0,0,0,0-0.1,0.1
//     c-3.4,1.2-102.2,37.3-144.2,99.6L145,410.7c0,0,0.2-0.4,0.7-1.1L253.7,329l114.6,81.7l-41.7-132.5L437.5,197.5z`;

//   return new ImageResponse(
//     (
//       <div
//         tw={`flex w-full   h-full items-center  justify-start   bg-white gap-x-64   `}
//         style={{
//           fontFamily: poppins.style.fontFamily,
//           gap: "20px",
//         }}
//       >
//         <img
//           tw="flex  w-1/4 h-1/2   rounded-xl ml-24   object-cover"
//           src={profileUrl}
//           alt="hello"
//         />

//         <div tw="flex flex-col   justify-center -mt-28 ">
//           <div tw="flex mt-8  items-center  ">
//             <span tw="text-7xl mr-2 text ">{title}...</span>

//             {verified ? (
//               <img
//                 tw="w-12 -mt-1"
//                 src="https://res.cloudinary.com/dtwhrzfwy/image/upload/v1724249953/nackgugh5tinsynmfx89.jpg"
//                 alt="Verified"
//               />
//             ) : (
//               <img
//                 tw="w-12 -mt-1"
//                 src="https://res.cloudinary.com/dtwhrzfwy/image/upload/v1724249953/wav2s9ok4jmqiodxdtti.jpg"
//                 alt="Not Verified"
//               />
//             )}
//           </div>
//           <div tw="flex items-center mt-6">
//             <span tw="text-6xl mr-4">
//               {totalReviews === "null" ? 0 : totalReviews} Reviews
//             </span>
//             <GoDotFill tw="text-primary_color text-7xl  " />
//             <span tw="text-6xl ml-2">{rating.slice(0, 3)}</span>
//           </div>
//           <div tw="flex gap-4 items-center  w-full my-2 mt-8 ">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width={`${50 * totalStars}px`} // Adjust width to fit all stars
//               height={`${50}px`} // Height of the SVG
//               viewBox={`0 0 ${20 * totalStars} ${18}`} // Adjust viewBox to fit all stars
//             >
//               {[...Array(totalStars)].map((_, index) => {
//                 const getStarColor = (index, rating) => {
//                   if (index < rating) {
//                     // Filled stars
//                     if (rating <= 1) {
//                       return "red"; // 1 to 3 stars are red
//                     } else if (rating <= 3) {
//                       return "#f9931f"; // 4 stars are green
//                     } else if (rating <= 4) {
//                       return "#00a53b"; // 5 stars are blue
//                     } else {
//                       return "#0090ff"; // 5 stars are blue
//                     }
//                   } else {
//                     // Unfilled stars
//                     return "#e0e0e0"; // Default unfilled color (gray)
//                   }
//                 };

//                 const starColor = getStarColor(index, filledStars); // Get star color dynamically
//                 const x = index * 20; // Position each star horizontally

//                 return (
//                   <g key={index} transform={`translate(${x}, 0)`}>
//                     <path
//                       fill={starColor} // Apply the color using the fill attribute
//                       d={dynamicPath} // Use the dynamic path data
//                       transform={`scale(${18 / 512}) `} // Scale the path to the desired 18
//                     />
//                     <path
//                       fill="#ffffff" // Apply white color for the inner path
//                       d={innerWhitePath} // Use the inner white path data
//                       transform={`scale(${18 / 512})`} // Scale the path to fit inside the star
//                     />
//                   </g>
//                 );
//               })}
//             </svg>
//           </div>
//         </div>
//       </div>
//     ),
//     {
//       width: 1260,
//       height: 600,
//     }
//   );
// }
