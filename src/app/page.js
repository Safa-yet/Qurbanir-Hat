import FeaturedAnimal from "@/Component/Home Page/FeaturedAnimal";
import TipsSection from "@/Component/Home Page/TipsSection";
import Banner from "@/Component/Shared Item/Banner";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Banner></Banner>
    <FeaturedAnimal></FeaturedAnimal>
    <TipsSection></TipsSection>
    </>
  );
}
