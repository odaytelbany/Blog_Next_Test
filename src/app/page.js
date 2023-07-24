import Button from "@/components/Button/Button";
import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className="flex items-center gap-24 ">
      <div className="description flex-1">
        <h1 style={{WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(to bottom, #194c33, #bbb)"}} className="text-7xl mb-12 bg-clip-text">Better design for your digital products.</h1>
        <p className="mb-10">Turning your idea into reality. we bring together the teams from the global tech inductry.</p>
        <Button title="See Our Works"/>
      </div>
      <div className="image flex-1">
        <Image src={Hero} alt="" className="w-full object-contain w-full h-500"/>
      </div>
    </div>
  )
}
