import Image from "next/image";
import React from "react";
import { heroWide } from "@/public/images/index";
import { ScrollArea } from "@/components/ui/scroll-area";

const Home = () => {
  return (
    <ScrollArea className="h-full w-auto">
      <div className="bg-jasny h-full w-full rounded-xl p-10">
        <div className="flex justify-between gap-10 py-5">
          <h1 className="font-semibold text-5xl">
            EXPLORE THE UNKNOWN <br /> WITH {""}
            <span className="text-pomarańcz font-bold">RIDECLUB BIKES</span>
          </h1>
          <p className="w-2/5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore
            quisquam nostrum ipsum vel alias, eaque ullam natus laudantium
            facilis itaque. Repellendus laboriosam nulla consequuntur. Libero
            nam natus quibusdam quas autem!
          </p>
        </div>
        <div className="w-full h-auto">
          <Image
            src={heroWide}
            alt="Hero Image"
            className="object-cover rounded-xl"
          />
        </div>
      </div>
    </ScrollArea>
  );
};

export default Home;
