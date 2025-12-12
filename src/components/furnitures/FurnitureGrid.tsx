import FurnitureCard from "./FurnitureCard";
import { Furniture } from "@/data/furnitures"; // Import Furniture type

interface FurnitureGridProps {
    furnitures: Furniture[];
}

export default function FurnitureGrid({ furnitures }: FurnitureGridProps) {
    return (
        <section className="w-full py-12">
            <div className="flex items-center gap-4 mb-6 anim-details-title mx-6 pb-4">
                <h2 className="text-2xl font-bold whitespace-nowrap text-white">Our Collection</h2>
                <hr className="w-full border-gray-600" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 mx-6">
                {furnitures.map((item) => (
                    <FurnitureCard key={item.id} item={item} />
                ))}
            </div>
        </section>
    );
}