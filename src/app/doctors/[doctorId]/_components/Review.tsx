import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { TabsContent } from "@/components/ui/tabs";
import ReviewCard from "../reviews/_components/ReviewCard";

export default function Review() {
  const review = [
    {
      id: 1,
      title: "Great Doctor",
      description: "Excellent service and care.",
    },
    { id: 2, title: "Friendly Staff", description: "Friendly and attentive." },
    {
      id: 3,
      title: "High Quality Care",
      description: "High-quality treatment.",
    },
    {
      id: 4,
      title: "High-Quality Service",
      description: "High-quality services.",
    },
  ];
  return (
    <TabsContent value="review">
      <form className="mt-4 border-b px-3">
        <h1>
          Write a review for :
          <span className="text-xl font-semibold text-gray-600 ml-2">
            Darren Elder
          </span>
        </h1>
        <Input className="w-1/3" />
        {/* <TextArea   /> */}
        <Button className="bg-[#0de0fe] py-3  px-4 my-4   text-bold rounded  text-white">
          Add Review
        </Button>
      </form>
      <div className="    ">
        {review.map((item) => (
          <ReviewCard key={item.id} />
        ))}
      </div>
    </TabsContent>
  );
}
