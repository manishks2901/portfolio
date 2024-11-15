"use client";
import CardComponent from "./card";
import ReadMoreButtons from "@/components/button";
import { type CarouselApi } from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { MoveLeft, MoveRight } from "lucide-react";

const ProjectCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);
  return (
    <div className="h-[300px] relative">
      <div className="h-[300px]">
        <div>
        <Carousel setApi={setApi} opts={{ loop: true }}>
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"
                        title="Card 1"
                        description="Description"
                        ButtonComponent={ReadMoreButtons}
                    />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"
                        title="Card 1"
                        description="Description"
                        ButtonComponent={ReadMoreButtons}
                    />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"
                        title="Card 1"
                        description="Description"
                        ButtonComponent={ReadMoreButtons}
                    />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"
                        title="Card 1"
                        description="Description"
                        ButtonComponent={ReadMoreButtons}
                    />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                    <CardComponent
                        imageUrl="https://res.cloudinary.com/dsax8ghd0/image/upload/v1731439763/docker_qm91rf.jpg"
                        title="Card 1"
                        description="Description"
                        ButtonComponent={ReadMoreButtons}
                    />
                </CarouselItem>
            </CarouselContent>
        </Carousel>
        </div>
      </div>
      <div className="flex gap-3 absolute  top-10  items-center z-40 h-[320px] w-full justify-between opacity-100">
            <div className="w-[330px] h-[240px] flex justify-end  items-center" 
            style={{
                borderRadius: "12px",
                background: "linear-gradient(270deg, rgba(18, 18, 18, 0.00) 1%, rgba(18, 18, 18, 0.10) 5.4%, rgba(18, 18, 18, 0.20) 9.8%, rgba(18, 18, 18, 0.30) 14.84%, rgba(18, 18, 18, 0.40) 19.75%, rgba(18, 18, 18, 0.50) 25.28%, rgba(18, 18, 18, 0.55) 29.89%, rgba(18, 18, 18, 0.60) 34.5%, rgba(18, 18, 18, 0.65) 38.49%, rgba(18, 18, 18, 0.70) 43.41%, rgba(18, 18, 18, 0.75) 49.47%, rgba(18, 18, 18, 0.80) 54.46%, rgba(18, 18, 18, 0.85) 59.99%, rgba(18, 18, 18, 0.90) 65.75%, rgba(18, 18, 18, 0.95) 74.37%, #121212 89.9%)",
                backgroundBlendMode: "hard-light",
                backdropFilter: "blur(3.2px)"
              }}
            >
                <button type="button" title="Previous" onClick={() => api?.scrollTo(current - 1)} className="flex justify-center items-center w-20 h-20 rounded-full bg-transparent border-solid border-2 border-white">
                    <MoveLeft/>
                </button>
            </div>ˀ
            <div className="w-[330px] h-[300px] flex justify-center  items-center"
            style={{
                borderRadius: "12px",
                background: "linear-gradient(90deg, rgba(18, 18, 18, 0.00) 0.17%, rgba(18, 18, 18, 0.10) 4.61%, rgba(18, 18, 18, 0.20) 9.04%, rgba(18, 18, 18, 0.30) 14.12%, rgba(18, 18, 18, 0.40) 19.08%, rgba(18, 18, 18, 0.50) 24.65%, rgba(18, 18, 18, 0.55) 29.3%, rgba(18, 18, 18, 0.60) 33.94%, rgba(18, 18, 18, 0.65) 37.97%, rgba(18, 18, 18, 0.70) 42.92%, rgba(18, 18, 18, 0.75) 49.04%, rgba(18, 18, 18, 0.80) 54.07%, rgba(18, 18, 18, 0.85) 59.64%, rgba(18, 18, 18, 0.90) 65.44%, rgba(18, 18, 18, 0.95) 74.14%, #121212 89.8%)",
                backgroundBlendMode: "hard-light",
                backdropFilter: "blur(3.2px)"
            }}
            >
                <button type="button" title="Next" onClick={() => api?.scrollTo(current + 1)}
                className="flex justify-center items-center w-20 h-20 rounded-full bg-transparent border-solid border-2 border-white"
                    >
                        <MoveRight/>
                </button>
            </div>
      </div>
    </div>
  );
};

export default ProjectCarousel;
