import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = [
  "https://via.placeholder.com/400x200?text=Image+1",
  "https://via.placeholder.com/400x200?text=Image+2",
  "https://via.placeholder.com/400x200?text=Image+3",
];

export default function ImageSlideshow() {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <Card className="max-w-md mx-auto mt-6">
      <CardContent className="p-6 space-y-4 text-center">
        <img
          src={images[index]}
          alt="slideshow"
          className="rounded"
        />

        <div className="flex justify-between">
          <Button onClick={prev}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </div>
      </CardContent>
    </Card>
  );
}
