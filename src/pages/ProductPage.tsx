import { useParams, Link } from 'react-router-dom';
import { furnitures } from '@/data/furnitures';
import { ArrowLeft, Ruler, Hand, Palette, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

export default function ProductPage() {
    const { id } = useParams<{ id: string }>();
    const product = furnitures.find(f => f.id === Number(id));
    const mainContainer = useRef(null);

    useGSAP(() => {
        if (!mainContainer.current) return;

        // Animate hero title
        gsap.from(".hero-title", {
            opacity: 0,
            y: 50,
            duration: 2,
            delay: 0.4,
            ease: 'power3.out'
        });

        // Animate details on scroll
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".details-section",
                start: "top 80%",
                end: "top 50%",
                scrub: 1,
            }
        });

        tl.from(".product-image-cutout", { y: 100, opacity: 0, duration: 1.2, ease: 'power3.out' })
          .from(".anim-details-title", { y: 50, opacity: 0, duration: 1 }, "<25%")
          .from(".product-description", { y: 50, opacity: 0, duration: 1 }, "<25%")
          .from(".product-tech-sheet", { y: 50, opacity: 0, duration: 1 }, "<25%")
          .from(".anim-button-group", { y: 50, opacity: 0, duration: 1 }, "<25%");
          
        const imageContainerElement = document.querySelector('.anim-image-container');
        const imageElement = document.querySelector('.anim-tilt-target');

        if (!imageContainerElement || !imageElement) return;
        
        // Cast to HTMLElement for correct TypeScript inference
        const imageContainer = imageContainerElement as HTMLElement;
        const image = imageElement as HTMLElement;
        
        const rotX = gsap.quickTo(image, "rotationX", { duration: 0.8, ease: "power3.out" });
        const rotY = gsap.quickTo(image, "rotationY", { duration: 0.8, ease: "power3.out" });

        const handleMouseMove = (e: MouseEvent) => {
            const { left, top, width, height } = imageContainer.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;
            const xPercent = x / width - 0.5;
            const yPercent = y / height - 0.5;
            
            const tiltStrength = 35;
            rotX(-yPercent * tiltStrength);
            rotY(xPercent * tiltStrength);
        };

        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const handleMouseLeave = (_e: MouseEvent) => { // Changed e to _e
            rotX(0);
            rotY(0);
        };

        if (imageContainer) { // Ensure imageContainer exists before adding listeners
            imageContainer.addEventListener('mousemove', handleMouseMove);
            imageContainer.addEventListener('mouseleave', handleMouseLeave);
        }

        return () => {
            if (imageContainer) { // Ensure imageContainer exists before removing listeners
                imageContainer.removeEventListener('mousemove', handleMouseMove);
                imageContainer.removeEventListener('mouseleave', handleMouseLeave);
            }
        };

    }, { scope: mainContainer });

    if (!product) {
        // Fallback for non-existent product
        return (
            <div className="flex flex-col items-center justify-center h-screen text-center">
                <h1 className="text-4xl font-bold mb-4">Produit non trouvé</h1>
                <p className="mb-8">Désolé, nous n'avons pas pu trouver le produit que vous cherchez.</p>
                <Link to="/gallery">
                    <Button>Retour à la galerie</Button>
                </Link>
            </div>
        );
    }

    return (
        <div ref={mainContainer} className="bg-white text-gray-800">
            {/* Image de la section Hero*/}
            <header className="h-screen w-full relative flex flex-col">
                <div
                    className="absolute inset-0 h-full w-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${product.imageHover})` }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="relative flex-grow flex flex-col items-center justify-center text-white text-center p-4">
                    <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-wider">
                        {product.name}
                    </h1>
                </div>
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/80 animate-bounce">
                    <ChevronDown className="w-8 h-8" />
                </div>
            </header>

            {/* Détails du produit / image */}
            <section className="details-section relative bg-[#171717] py-20 z-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-14">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                        {/* Image du produit */}
                        <div className="lg:order-2 anim-image-container" style={{ perspective: '1000px' }}>
                             <img 
                                src={product.imageFiche}
                                alt={product.name} 
                                className="product-image-cutout anim-tilt-target w-full h-auto object-contain rounded-lg"
                                style={{ willChange: 'transform, opacity' }}
                            />
                        </div>

                        {/* Détails du produit */}
                        <div className="lg:order-1" style={{ willChange: 'transform, opacity' }}>
                            <div className="mb-8">
                                <Link to="/gallery" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Back to Gallery
                                </Link>
                            </div>

                            <div className="product-details-content">
                                <div className="flex items-center gap-4 mb-6 anim-details-title">
                                    <h2 className="text-2xl font-bold whitespace-nowrap text-white">Product Details</h2>
                                    <hr className="w-full border-gray-600" />
                                </div>
                                <p className="product-description text-gray-300 mb-8 text-lg">{product.description}</p>
                                
                                <div className="product-tech-sheet mt-8">
                                    <h3 className="text-xl font-semibold text-white mb-4">Specifications</h3>
                                    <ul className="space-y-4 text-gray-500">
                                        <li className="flex items-center gap-4">
                                            <Ruler className="w-5 h-5 text-gray-500" />
                                            <span><strong>Dimensions :</strong> {product.dimensions}</span>
                                        </li>
                                        {product.handmade && (
                                            <li className="flex items-center gap-4">
                                                <Hand className="w-5 h-5 text-gray-500" />
                                                <span><strong>Fabrication :</strong> Handmade</span>
                                            </li>
                                        )}
                                        <li className="flex items-center gap-4">
                                            <Palette className="w-5 h-5 text-gray-500" />
                                            <span className="inline-flex items-center"><strong>Colour :</strong> <span className="inline-block w-4 h-4 rounded-full ml-2" style={{ backgroundColor: product.color, border: '1px solid #ccc' }}></span></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="anim-button-group mt-8">
                                <Link to="/contact" className="w-full text-gray-400 hover:text-white">
                                    <Button className="w-full cursor-pointer text-gray-400 hover:text-white" size="lg">Contact us for more information..</Button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
