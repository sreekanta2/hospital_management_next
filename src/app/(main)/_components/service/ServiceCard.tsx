import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import serviceImage1 from "@/assets/home/service/service-01.svg";

export default function ServiceCard() {
  return (
    <Card className="w-64   md:max-w-[230px] flex flex-col items-center mx-auto px-4 py-6">
      <CardContent className="flex justify-center w-full">
        <Image
          src={serviceImage1}
          alt="Service Image"
          className="w-full h-auto object-contain max-w-[50px]"
          priority={true}
        />
      </CardContent>
    </Card>
  );
}
