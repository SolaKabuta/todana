export interface Furniture {
    id: number;
    name: string;
    description: string;
    handmade: boolean;
    image: string;
    imageHover: string;
    imageFiche: string;
    dimensions: string;
    color: string;
    numberColor: string;
    category: 'chair' | 'dining-table' | 'arm-chair' | 'sofa' | 'coffee-table';
}

export const furnitures = [
    {
        id: 1,
        name: "SORA Ashwood Dining Chair – Linen Beige",
        description: "Functional Minimalism. Structure in sanded light ashwood, with enveloping seat and backrest in textured beige linen.",
        handmade: true,
        image: "/assets/images/gallery/furnitures/sora_fond.png",
        imageHover: "/assets/images/gallery/furnitures/sora_environnement.png",
        imageFiche: "/assets/images/gallery/furnitures/sora_sans_fond.png",
        dimensions: "20.5W x 19.5D x 31.5H",
        color: '#F4F0E1',
        numberColor: '',
        category: 'chair'
    },

    {
        id: 2,
        name: "BELGRAVIA Velvet Dining Chair – Deep Emerald",
        description: "Sculptural Comfort. Crafted with a dark walnut wood base and upholstered in sumptuous deep emerald velvet. A refined silhouette for the lounge.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/belgravia_fond.png",
        imageHover: "/assets/images/gallery/furnitures/belgravia_environnement.png",
        imageFiche: "/assets/images/gallery/furnitures/belgravia_sans_fond.png",
        dimensions: "22.5W x 24.0D x 32.0H",
        color: '#004D40',
        numberColor: ' +2',
        category: 'chair'
    },

    {
        id: 3,
        name: "VERSAILLES Dining Armchair – Terracotta Linen",
        description: "Minimalist Structure. Crafted with solid dark ashwood, featuring a contoured backrest and a comfortable enveloping seat upholstered in high-quality textured Terracotta Linen fabric.",
        handmade: true,
        image: "/assets/images/gallery/furnitures/versailles_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/versailles_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/versailles_sans_fond.png",
        dimensions: "24.0W x 22.5D x 30.0H",
        color: '#C0764C',
        numberColor: '',
        category: 'chair'
    },

    {
        id: 4,
        name: "OSLO Rattan Bar Stool – Natural Oak",
        description: "Minimalist Craftsmanship. Structure in light, natural Oakwood, featuring a hand-woven rattan backrest and a comfortable upholstered seat in refined Oyster Beige fabric.",
        handmade: true,
        image: "/assets/images/gallery/furnitures/oslo_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/oslo_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/oslo_sans_fond.png",
        dimensions: "20.0W x 21.0D x 40.0H",
        color: '#D4C19A',
        numberColor: '',
        category: 'chair'
    },

    /*
    {
        id: 5,
        name: "COPENHAGUE Black steel Bar Stool – Anthracite Felted",
        description: "Modern Minimalism. Featuring a tubular structure in matte black steel, supporting a contoured seat and backrest upholstered in smooth Anthracite Felted Fabric.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/copenhague_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/copenhague_environnement.jpg",
        dimensions: "19.0W x 22.0D x 38.5H",
        color: '#3E3E3E',
        numberColor: ' +2'
    },
    */

    {
        id: 6,
        name: "SENA Round Dining Table – Black Marble Look",
        description: "Timeless Elegance. Features a smooth, heavy Black Marble-look top set on a robust, sculpted central pedestal base with an Espresso Finish.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/sena_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/sena_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/sena_sans_fond.png",
        dimensions: "47.0D x 30.0H",
        color: '#473C35',
        numberColor: '',
        category: 'dining-table'
    },

    {
        id: 7,
        name: "NOMA Solid Oak Dining Table – Natural",
        description: "Architectural Structure. Crafted entirely from solid, light Oakwood, this statement piece features a thick, sculpted rectangular top supported by two robust, interlocking V-shaped bases.",
        handmade: true,
        image: "/assets/images/gallery/furnitures/noma_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/noma_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/noma_sans_fond.png",
        dimensions: "78.0L x 38.0W x 30.0H",
        color: '#BFA796',
        numberColor: '',
        category: 'dining-table'
    },


    {
        id: 8,
        name: "FJORDE Dining Table – Two-Tone Oak",
        description: "Scandinavian Structure. A streamlined rectangular dining table featuring a solid, light Oak tabletop. The supporting structure and distinctive V-shaped legs are crafted from dark-stained wood, creating a striking two-tone contrast.",
        handmade: true,
        image: "/assets/images/gallery/furnitures/fjorde_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/fjorde_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/fjorde_sans_fond.png",
        dimensions: "65.0L x 35.0W x 30.0H",
        color: '#7F5E4B',
        numberColor: '',
        category: 'dining-table'
    },

    /*
    {
        id: 9,
        name: "BERLIN Dining Table – Natural Wood Glass",
        description: "The Berlin Dining Table is a functional work of art. Its ultra-clear tempered glass top reveals a sculptural, solid wood base featuring organic, fluid lines. The contrast between the natural warmth of the wood and the modern transparency of the glass brings sophistication and lightness to any space.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/berlin_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/berlin_environnement.jpg",
        dimensions: "78.0L x 39.0W x 30.0H",
        color: '#FFFFFF',
        numberColor: ''
    },
    */

    {
        id: 10,
        name: "FLORENCE Dining Table – Solid Oak",
        description: "Natural Elegance. A round dining table defined by its solid top and base crafted from Natural Solid Oak. The robust, monolithic structure provides a warm and timeless presence, making this piece the perfect anchor for gatherings.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/florence_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/florence_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/florence_sans_fond.png",
        dimensions: "54.0D x 30.0H",
        color: '#9B7653',
        numberColor: '',
        category: 'dining-table'
    },

    /*
    {
        id: 11,
        name: "TORRE Bar Table – Walnut & Steel",
        description: "Nocturnal Character. A round bar height table, defined by a rich, grain Solid Walnut top and a striking Architectural Black Steel base. The lattice pedestal provides a bold, monolithic, and modern anchor for evening gatherings.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/torre_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/torre_environnement.jpg",
        dimensions: "40.0D x 42.0H",
        color: '#4D3325',
        numberColor: ''
    },
    */
    {
        id: 12,
        name: "GENTRY Armchair – Mahogany Leather",
        description: "Rich Character. A club armchair with classic lines, upholstered in Deep Mahogany Genuine Leather. Its low profile and enveloping seat create a chic, masculine retreat.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/gentry_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/gentry_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/gentry_sans_fond.png",
        dimensions: "33.5W x 35.5D x 29.5H",
        color: '#2F1712',
        numberColor: '',
        category: 'arm-chair'
    },

    {
        id: 13,
        name: "LOUVRE Sofa – Forest Green Corduroy",
        description: "Woodland Luxury. A modular sofa with deep seating and Forest Green Corduroy Velvet upholstery. Its clean, sculptural design provides a sophisticated presence and enveloping comfort, perfect for evenings by the fire.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/louvre_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/louvre_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/louvre_sans_fond.png",
        dimensions: "86.5W x 39.5D x 29.5H",
        color: '#224335',
        numberColor: ' +3',
        category: 'sofa'
    },

    {
        id: 14,
        name: "ALMA Sofa – Creamy Bouclé Fabric",
        description: "Casual Comfort. A spacious sofa defined by soft lines and Textured Beige Bouclé Fabric upholstery. Its deep seating and minimalist look invite relaxation, anchoring a sense of calm in your living space.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/alma_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/alma_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/alma_sans_fond.png",
        dimensions: "94.5W x 41.5D x 27.5H",
        color: '#D7D0C3',
        numberColor: ' +2',
        category: 'sofa'
    },

    {
        id: 15,
        name: "CHESTER Armchair – Pale Linen",
        description: "Elegant Retreat. An individual club armchair, defined by its tufted backrest and luxurious Pale Linen upholstery. Its enveloping shape and comfortable seat make it the perfect reading chair.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/chester_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/chester_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/chester_sans_fond.png",
        dimensions: "35.5W x 35.5D x 31.5H",
        color: '#BCA88D',
        numberColor: '',
        category: 'arm-chair'
    },


    {
        id: 16,
        name: "NORDIC Coffee Table – Ashwood",
        description: "Light Ash Minimalism. Coffee table with pure lines crafted from Sanded Light Ashwood. Calm, functional design for modern living.",
        handmade: true,
        image: "/assets/images/gallery/furnitures/nordic_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/nordic_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/nordic_sans_fond.png",
        dimensions: "47.0W x 24.0D x 16.0H",
        color: '#4D3325',
        numberColor: '',
        category: 'coffee-table'
    },

    {
        id: 17,
        name: "CHEMIN Coffee Table – White Marble",
        description: "Sculptural Minimalism. Defined by a Shiny Gold Metal Tubular base supporting a sleek Veined White Marble top. The piece exudes a refined and luxurious presence.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/chemin_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/chemin_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/chemin_sans_fond.png",
        dimensions: "27.5D x 16.0H",
        color: '#F2F2F2',
        numberColor: '',
        category: 'coffee-table'
    },

    {
        id: 18,
        name: "ECHO Coffee Table – Glass & Walnut Base",
        description: "Lightness and Warmth. A minimalist round coffee table, featuring a Tempered Glass top resting on a Sculptural Walnut Wood Base. Its chic, airy design maximizes space while adding an organic, warm touch.",
        handmade: false,
        image: "/assets/images/gallery/furnitures/echo_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/echo_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/echo_sans_fond.png",
        dimensions: "35.5D x 15.5H",
        color: '#F2F2F2',
        numberColor: '',
        category: 'coffee-table'
    },

    {
        id: 19,
        name: "OASIS Coffee Table – Golden Walnut",
        description: "Sculptural Flow. A low-profile coffee table featuring fluid, organic lines, sculpted from Golden Walnut Wood with a smooth, matte finish. Its unique shape brings a natural, artistic focal point to your living space.",
        handmade: true,
        image: "/assets/images/gallery/furnitures/oasis_fond.jpg",
        imageHover: "/assets/images/gallery/furnitures/oasis_environnement.jpg",
        imageFiche: "/assets/images/gallery/furnitures/oasis_sans_fond.png",
        dimensions: "51.0W x 31.5D x 13.5H",
        color: '#C6A882',
        numberColor: '',
        category: 'coffee-table'
    },




];

