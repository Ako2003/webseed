"use client";
import { useState, useRef } from "react";
import { Button, Typography, Card, CardHeader, CardBody, CardFooter } from "@/utils/material-tailwind";
import Image from "next/image";
import homes from "@/constants/homes";
import Link from "next/link";
import { tools } from "@/constants/tools";

export default function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [hoverToolIndex, setHoverToolIndex] = useState(null)
  const homeRefs = useRef([]);

  const handleHover = (index:any) => {
    setHoveredIndex(index);
  };

  const handleToolHover = (index:any) => {
    setHoverToolIndex(index)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null);
    setHoverToolIndex(null)
  };

  return (
    <main className="header">
      <section className="mx-auto relative w-11/12 md:w-3/4">
        <div className="pt-5 absolute w-full flex justify-between">
          <div>
            <Typography variant="h2" color="white" className="font-poppins font-bold">
              Web<strong className="text-[#ff8941]">Seed</strong>.
            </Typography>
          </div>
          <div>
            <Button className="bg-[#ff8941] rounded-none px-10 py-5 shadow-none">
              <Typography variant="small" className="font-rubik tracking-wide font-bold">
                Buy Now
              </Typography>
            </Button>
          </div>
        </div>

        <div className="flex mx-auto md:w-4/5 h-screen items-center">
          <div>
            <Typography color="white" className="text-6xl font-poppins font-bold text-center leading-relaxed max-lg:text-2xl">
              Webseed - WordPress Theme for Software Landing Pages
            </Typography>
            <Typography variant="h5" color="white" className="font-bold text-center leading-relaxed max-lg:text-lg">
              Ideal for Startups, App Landing Pages, and SaaS Websites Theme
            </Typography>
            <div className="flex justify-center mt-5">
              <Link href={"#demos"}>
                <Button className="bg-[#ff8941] rounded-none px-10 py-5 flex">
                  <Typography variant="small" className="font-rubik tracking-widest font-bold">
                    Demos
                  </Typography>
                  <Image src="/svg/arrow-down.svg" alt="arrow-down" width={20} height={20} />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="demos">
        <div className="py-16 bg-[#F9FAFF]">
          <Typography variant="h1" className="text-[#062a4d] font-popins font-medium text-center">
            Stunning Demo Here
          </Typography>
          <Typography variant="h6" className="text-[#758799] font-popins font-medium text-center  mx-auto w-11/12">
            Choose a homepage to start navigating Growsass. Build strong & <br/> impressive websites using Growsass premade Theme.
          </Typography>
        </div>

        <div className="mx-auto w-11/12 grid grid-cols-1 md:grid-cols-3 py-16 gap-10">
          {homes.map((home, index) => (
            <div
              key={index}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={handleMouseLeave}
              className="group cursor-pointer"
            >
              <div className="relative">
                <img src={home.img} alt="home" />
                <div className={`absolute w-full bottom-0 py-4 flex items-center justify-center bg-[#4441CE] text-white opacity-0 transform translate-y-4 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : ''}`}>
                  <Link href={home.url}>
                    <Typography variant="h5" className="font-rubik font-medium text-center uppercase">View demo</Typography>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center mt-5">
                <Typography variant="h5" className="font-popins font-medium text-center">{home.title}</Typography>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="py-16 bg-[#F9FAFF] mb-20">
          <Typography variant="h1" className="text-[#062a4d] font-popins font-medium text-center">
            Growsass Core Features
          </Typography>
          <Typography variant="h6" className="text-[#758799] font-popins font-medium text-center">
            We Provide Impressive Freatures For your Website. You can easily <br/> manage Your website. You will love it.
          </Typography>
        </div>
      </section>

      <section className="mb-20">
        <div 
          className="grid mx-auto md:grid-cols-3 lg:grid-cols-4 xl:w-3/4 justify-items-center gap-10">
          {tools.map((tool, index) => (
            <div 
              key={index}
              onMouseEnter={() => handleToolHover(index)}
              onMouseLeave={handleMouseLeave}>
              <Card className="flex flex-1 min-w-[210px] h-[191.8px]">
                <CardBody className="mt-6">
                  <div className="flex justify-center">
                    <Image src={tool.src} width={70} height={70} alt={tool.title}/>
                    <div className={`absolute w-full h-full bottom-0 py-4 flex items-center justify-center bg-[#4441CE]/80 text-white opacity-0 transform translate-y-0 transition-all duration-300 rounded-xl ${hoverToolIndex === index ? 'opacity-100 translate-y-0' : ''}`}>
                      <Link href={tool.url}>
                        <Typography variant="h5" className="font-rubik font-medium text-center capitalize">Learn More</Typography>
                      </Link>
                    </div>
                  </div>
                  <Typography className="font-poppins font-semibold text-center" color="black">
                    {tool.title}
                  </Typography>
                </CardBody>
              </Card>
            </div>
          ))}
        </div>
      </section>

      <section className="footer">
          <div className="flex items-center h-[80vh]">
            <div className="mx-auto w-auto z-10">
              <div className="flex justify-center">
                <Image src={"/img/review.png"} width={120} height={120} alt="reviews"/>
              </div>
              <Typography color="white" className="text-6xl font-poppins font-bold text-center leading-relaxed max-lg:text-2xl mb-2">Feeling in love? 
                <strong className="font-bold italic">Purchase WebSeed !</strong></Typography>
              <Typography color="white" className="text-xl font-poppins font-semibold text-center leading-relaxed max-lg:text-lg ">Impressive design, powerful features, and easy customization</Typography>
              <div className="flex justify-center mt-5">
                <Link href={"#demos"}>
                  <Button className="bg-[#ff8941] rounded-none px-10 py-5 flex">
                    <Typography variant="small" className="font-rubik tracking-widest font-bold">
                      Purchase now
                    </Typography>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
      </section>
    </main>
  );
}
