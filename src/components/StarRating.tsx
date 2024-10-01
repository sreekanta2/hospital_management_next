import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number; // The rating value as a floating-point number
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Round the rating to the nearest half
  const fullStars = Math.floor(rating); // Number of full stars
  const hasHalfStar = rating % 1 >= 0.5; // Check if there's a half-star
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0); // Remaining empty stars

  return (
    <div className=" ">
      <div className="flex">
        {/* Render full stars */}
        {Array.from({ length: fullStars }).map((_, index) => (
          <Star key={index} fill="#f4c150" strokeWidth={0} />
        ))}

        {/* Render half star if needed */}
        {hasHalfStar && <StarHalf fill="#f4c150" strokeWidth={0} />}

        {/* Render empty stars */}
        {Array.from({ length: emptyStars }).map((_, index) => (
          <Star key={index} fill="#dedfe0" strokeWidth={0} />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
