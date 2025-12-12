import type { Furniture } from "@/data/furnitures";
import { Eye } from "lucide-react";
import { Link } from "react-router-dom";

type Props = {
    item: Furniture;
};

export default function FurnitureCard({ item }: Props) {

    return (
        <section>
            <div className="relative w-full h-100 group">
                {/* Image par défaut */}
                <img
                    src={item.image}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full rounded-t-xs object-cover transition-opacity duration-500 group-hover:opacity-0 opacity-100"
                    draggable={false}
                />
                {/* Image du Hover */}
                <img
                    src={item.imageHover}
                    alt={item.name}
                    className="absolute inset-0 h-full w-full rounded-t-xs object-cover transition-opacity duration-500 group-hover:opacity-100 opacity-0"
                    draggable={false}
                />
                {/* Voir produit */}
                <Link to={`/produit/${item.id}`}>
                    <div className="absolute bottom-0 left-0 w-full flex items-center justify-center bg-black/70 text-white h-12 origin-bottom scale-y-0 group-hover:scale-y-100 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-out pointer-events-auto">
                        <span className="text-base font-light tracking-wide">View product</span>
                        <Eye className="w-4 h-4 ml-2 mt-0.5" />
                    </div>
                </Link>


            </div>

            <div className="py-4">
                {/* Titre */}
                <h3 className="font-bold text-sm mb-2">{item.name}</h3>
                {/* Fait maison */}
                {item.handmade && (
                    <div className="">
                        <span className="text-xs text-[var(--color-secondary)] font-semibold">Handmade</span>
                    </div>
                )}
                {/* Dimension */}
                <p className="text-white/70 text-sm py-1">{item.dimensions}</p>
                {/* Carré de couleur */}
                <div className="inline-flex items-center justify-center border border-white rounded-xs w-4 h-4 mb-1">
                    <span
                        className="inline-block w-2 h-2 rounded-[2px]"
                        style={{ backgroundColor: item.color }}
                        aria-label={`Couleur principale : ${item.color}`}
                        title={item.color}
                    />
                </div>
                {/* Nb de couleurs */}
                {item.numberColor && item.numberColor !== '' && (
                    <span className="text-xs text-white/60 ps-2">
                        {item.numberColor} Colour{parseInt(item.numberColor, 10) > 1 ? 's' : ''}
                    </span>
                )}

            </div>
        </section>
    );
}