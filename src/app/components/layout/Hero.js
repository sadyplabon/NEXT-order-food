import Image from "next/image";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
        <div className="py-12">
            <h1 className="text-4xl">
                Everything<br />
                 is <span className="text-primary font-semibold">better</span><br />
                 with a&nbsp;<span className="text-primary font-semibold">Pizza</span>
            </h1>
            <p className="my-4 text-gray-500 text-sm"> Pizza is the missing piece that makes every day
                complete, a simple yet delicious joy is life !
            </p>
            <div className="flex gap-4 text-sm">
                <button className="flex gap-2 uppercase items-center bg-primary text-white px-4 py-2 rounded-full hover:opacity-95">
                    Order now
                    <Right />
                </button>
                <button className="flex gap-2 py-2 items-center text-gray-600 font-semibold">
                    Learn more
                    <Right />
                </button>
            </div>
        </div>
        <div className="relative">
            <Image src={'/pizza.png'} layout="fill" objectFit="contain" alt="pizza" />
        </div>
    </section>
  )
}
