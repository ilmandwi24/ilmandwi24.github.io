import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import HeroImage from "@/assets/images/header.webp"
const HeroSection = () => {
  const socialIcon = [
    // {
    //   img: "/images/icon/twitter-icon.svg",
    //   href: "https://twitter.com",
    //   icon: "Twitter",
    // },
    // {
    //   img: "/images/icon/behance-icon.svg",
    //   href: "https://behance.com",
    //   icon: "Behance",
    // },
    {
      href: "https://github.com/ilmandwi24",
      icon: "Github",
    },
    {
      href: "https://www.linkedin.com/in/ilman-dwi/",
      icon: "Linkedin",
    },
  ];
  const iconMap = {
    Github,
    Linkedin,
  };
  return (
    <section>
      <div className="container">
        <div className="">
          <div className="w-full h-72">
            <Image
              src={HeroImage}
              alt="banner-img"
              width={1080}
              height={267}
              priority
  placeholder="blur"
  
               sizes="(max-width:768px) 100vw, 50vw"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-x border-border">
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              <div className="absolute top-0 transform -translate-y-1/2">
                <Image
                  src={"/images/hero-sec/user-pp.jpg"}
                  alt="user-img"
                  width={145}
                  height={145}
                  className="border-4 border-white rounded-full"
                />
                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                <h1>Ilman Dwi Cahya</h1>
                <p className="text-violet-700 font-normal">Website Develper</p>
                <div className="flex items-center gap-2">
                  <Image
                    src={"/images/icon/map-icon.svg"}
                    alt="map-icon"
                    width={20}
                    height={20}
                  />
                  <p className="text-primary">Kabupaten Bekasi, Jawa Barat</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                  {socialIcon?.map((value, index) => {
                    const Icon = iconMap[value.icon as keyof typeof iconMap];
                    return (
                      <Link
                        href={value?.href}
                        key={index}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open project ${value.icon}`}
                        className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-border rounded-full"
                      >
                        <Icon />
                      </Link>
                    );
                  })}
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
