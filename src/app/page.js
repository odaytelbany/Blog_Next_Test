import Image from "next/image";
import Hero from "public/hero.png";

export default function Home() {
  return (
    <div className="text-white flex items-center gap-24 ">
      <div className="description flex-1">
        <h1 style={{WebkitTextFillColor: "transparent", backgroundImage: "linear-gradient(to bottom, #194c33, #bbb)"}} className="text-7xl mb-12 bg-clip-text">Better design for your digital products.</h1>
        <p className="mb-12">Turning your idea into reality. we bring together the teams from the global tech inductry.</p>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">See our Works</button>
      </div>
      <div className="image flex-1">
        <Image src={Hero} alt="" className="w-full object-contain w-full h-500"/>
      </div>
    </div>
  )
}
