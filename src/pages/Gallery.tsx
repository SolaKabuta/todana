import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import FurnitureGrid from "@/components/furnitures/FurnitureGrid";
import './Gallery.css';
import backgroundGallery from '../assets/backgroundGallery.png';
import { furnitures } from "@/data/furnitures";

function splitTextToSpans(text: string, initialDelay = 0) {
    return [...text].map((char, i) => (
        <span
            key={i}
            className="char"
            style={{
                animationDelay: `${initialDelay + 0.06 * i}s`
            }}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
}

export default function Gallery() {
    const gridRef = useRef<HTMLDivElement>(null);
    const [activeCategory, setActiveCategory] = useState<string>('all');

    const categories = ['chair', 'arm-chair', 'dining-table', 'coffee-table', 'sofa'];
    const allCategories = ['all', ...categories];

    const handleFilterChange = (category: string) => {
        setActiveCategory(category);
    };

    const filteredFurnitures = activeCategory === 'all'
        ? furnitures
        : furnitures.filter(item => item.category === activeCategory);

    const handleExploreClick = () => {
        gridRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <main
                className="relative grid place-content-center h-screen w-screen px-4 md:px-6"
                style={{
                    backgroundImage: `url(${backgroundGallery})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                }}
            >
                <div className="absolute inset-0 bg-black/60 pointer-events-none" />
                <div className="relative text-center [&_p]:py-10 p-8 perspective-container">
                    <div className="flex flex-col items-center justify-center">
                        <h1 className="title-animated text-4xl md:text-7xl lg:text-8xl xl:text-[85px] text-center font-black">
                            {splitTextToSpans("The Art of Interior")}
                        </h1>
                        <span className="text-xl md:text-2xl mt-2 text-gray-400 font-light tracking-wide"
                            >
                            {splitTextToSpans('インテリアの芸術', 1.2)}
                        </span>
                    </div>


                </div>
                <div className="flex justify-center items-center">
                    <Button className="bg-white/80 text-black hover:bg-white/60 reveal-3d"
                            style={{ animationDelay: '1.8s'}}
                            onClick={handleExploreClick}
                    >
                        Explore Collection
                    </Button>
                </div>
            </main>

            <section id="gallery" ref={gridRef} className="py-10 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto mt-4 flex flex-wrap justify-center gap-2">
                    {allCategories.map(category => (
                        <Button
                            key={category}
                            onClick={() => handleFilterChange(category)}
                            variant={activeCategory === category ? "default" : "outline"}
                            className="capitalize hover:bg-white/[0.30] hover:text-white"
                        >
                            {category.replace('-', ' ')}
                        </Button>
                    ))}
                </div>
                <FurnitureGrid furnitures={filteredFurnitures} />
            </section>
        </>
    );
}