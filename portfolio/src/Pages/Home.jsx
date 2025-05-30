import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import designs from "../Data/design";

export default function Home() {
  const scrollRef = useRef(null);
  const textRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const onWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
      setScrollX(container.scrollLeft);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, []);

  // Framer Motion: fade out text as scroll increases
  const opacity = scrollX < 300 ? 1 - scrollX / 300 : 0;

  return (
    <section className="min-h-screen flex items-center justify-center overflow-hidden">
      <div className="flex w-full items-center gap-12">
        {/* Text Block */}
        <motion.div className="w-1/3 min-w-[250px]">
          <h1 className="text-5xl font-bold mb-4">HI, I'M BASLIEL BEDEWI</h1>
          <p className="">
            I design futuristic, minimal digital experiences. Scroll to explore
            my work.
          </p>
        </motion.div>

        {/* Image Scroll */}
        <div
          ref={scrollRef}
          className="scroll-container flex gap-6 overflow-x-auto no-scrollbar w-2/3"
        >
          <div className="flex gap-6 pl-[50vw]">
            {" "}
            {/* Add left spacing */}
            {designs.map((design) => (
              <img
                key={design.id}
                src={design.image}
                alt=""
                className="w-[400px] h-[500px] object-cover rounded-xl shrink-0 transition duration-300 transform hover:-translate-y-2 hover:scale-105"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
