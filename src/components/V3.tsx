// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef, useEffect } from 'react';
import V6 from './V6';
import Canvas from './canvas';

const App: React.FC = () => {
    const [activeSlide, setActiveSlide] = useState(0);
    const [isDrawing, setIsDrawing] = useState(false);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [context, setContext] = useState<CanvasRenderingContext2D | null>(null);
    const [selectedTool, setSelectedTool] = useState('pencil');
    const [selectedColor, setSelectedColor] = useState('#ffffff');
    // Hero slider data
    const heroSlides = [
        {
            id: 1,
            title: "Luxury Living Redefined",
            subtitle: "Discover exclusive properties in prime locations",
            image: "https://readdy.ai/api/search-image?query=stunning%20luxury%20penthouse%20with%20panoramic%20city%20views%20at%20dusk%2C%20floor%20to%20ceiling%20windows%2C%20modern%20architecture%2C%20dramatic%20lighting%2C%20professional%20real%20estate%20photography%2C%20high%20contrast%2C%20elegant%20interior%20visible%2C%20empty%20balcony%20with%20city%20lights%20background&width=1440&height=600&seq=7&orientation=landscape"
        },
        {
            id: 2,
            title: "Design Your Dream Space",
            subtitle: "Use our interactive tools to visualize your perfect home",
            image: "https://readdy.ai/api/search-image?query=modern%20architectural%20masterpiece%20with%20clean%20lines%2C%20dramatic%20lighting%2C%20infinity%20pool%20overlooking%20ocean%20view%2C%20twilight%20photography%2C%20luxury%20real%20estate%2C%20high%20contrast%2C%20minimalist%20design%2C%20empty%20interior%20visible%20through%20glass%20walls%2C%20professional%20photography&width=1440&height=600&seq=8&orientation=landscape"
        },
        {
            id: 3,
            title: "Premium Properties",
            subtitle: "Curated selection of the world's finest real estate",
            image: "https://readdy.ai/api/search-image?query=elegant%20mansion%20with%20dramatic%20lighting%2C%20modern%20luxury%20architecture%2C%20water%20features%2C%20professional%20twilight%20photography%2C%20high%20contrast%2C%20empty%20courtyard%2C%20sophisticated%20landscaping%2C%20high-end%20real%20estate%2C%20cinematic%20composition&width=1440&height=600&seq=9&orientation=landscape"
        },
        {
            id: 4,
            title: "Premium Properties",
            subtitle: "Curated selection of the world's finest real estate",
            image: "https://readdy.ai/api/search-image?query=luxurious%20modern%20mansion%20with%20infinity%20pool%20at%20night%2C%20dramatic%20lighting%2C%20sleek%20architecture%2C%20minimalist%20design%2C%20dark%20moody%20atmosphere%2C%20high-end%20real%20estate%20photography%2C%20ultra-wide%20angle%2C%20professional%20lighting%2C%20deep%20shadows%2C%20reflective%20surfaces&width=1920&height=1080&seq=1&orientation=landscape"
        }
    ];
    // Slider controls
    const nextSlide = () => {
        setActiveSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
    };
    const prevSlide = () => {
        setActiveSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    };
    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, []);
    return (
        <div className="min-h-screen bg-gray-900 text-white font-sans">
            {/* Header */}

            {/* Hero Section */}
            <section className="relative h-screen pt-16">
                {heroSlides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === activeSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <div className="absolute inset-0 bg-black/40 z-10"></div>
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover object-top"
                        />
                        <div className="absolute inset-0 z-20 flex items-center">
                            <div className="container mx-auto px-6">
                                <div className="max-w-xl">
                                    <h2 className="text-4xl md:text-6xl font-light mb-6 leading-tight tracking-wide">{slide.title}</h2>
                                    <p className="text-xl md:text-2xl text-gray-200 mb-10 font-light">{slide.subtitle}</p>
                                    <div className="flex space-x-6">
                                        <button className="bg-[#1A237E] hover:bg-[#0D47A1] text-white px-4 md:px-8 py-2 md:py-4 text-base md:text-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                            Explore Properties
                                        </button>
                                        <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1A1A1A] text-white px-4 md:px-8 py-2 md:py-4 text-base md:text-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                            Design Your Home
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
                {/* Slider controls */}
                <button
                    onClick={prevSlide}
                    className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-[#1A237E] opacity-0 md:opacity-100 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap hover:scale-110"
                >
                    {/* <i className="fa fa-chevron-left text-xl"></i> */}
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
                    </svg>
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-[#1A237E] opacity-0 md:opacity-100 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap hover:scale-110"
                >
                    {/* <i className="fa fa-chevron-right text-xl"></i> */}
                    <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 8 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
                    </svg>
                </button>
                {/* Slider indicators */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setActiveSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap ${index === activeSlide ? 'bg-[#1A237E] scale-100' : 'bg-white/50 hover:bg-white'
                                }`}
                        ></button>
                    ))}
                </div>
            </section>
            {/* Interactive Design Studio Section */}
            <section className="py-16 bg-[#121212]">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-light mb-4">Design Your Dream Home</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Use our interactive canvas to visualize and plan your perfect living space. Experiment with layouts,
                            furniture placement, and design elements to create your ideal home.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                        {/* Tools Panel */}
                        {/* <div className="lg:col-span-2 bg-[#1A1A1A] p-4 rounded-lg">
                            <h3 className="text-xl mb-4 font-light">Design Tools</h3>
                            <div className="space-y-3">
                                {[
                                    { id: 'pencil', name: 'Pencil', icon: 'fa-pencil' },
                                    { id: 'eraser', name: 'Eraser', icon: 'fa-eraser' },
                                    { id: 'line', name: 'Line', icon: 'fa-minus' },
                                    { id: 'rectangle', name: 'Rectangle', icon: 'fa-square-o' },
                                    { id: 'circle', name: 'Circle', icon: 'fa-circle-o' },
                                    { id: 'text', name: 'Text', icon: 'fa-font' }
                                ].map(tool => (
                                    <button
                                        key={tool.id}
                                        onClick={() => setSelectedTool(tool.id)}
                                        className={`flex items-center w-full p-2 rounded transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap ${selectedTool === tool.id ? 'bg-[#1A237E] text-white' : 'hover:bg-[#2A2A2A]'
                                            }`}
                                    >
                                        <i className={`fa ${tool.icon} w-6`}></i>
                                        <span className="ml-2">{tool.name}</span>
                                    </button>
                                ))}
                            </div>
                            <div className="mt-6 space-y-2">
                                <button className="w-full bg-[#333333] hover:bg-[#444444] text-white py-2 px-4 rounded transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    Clear Canvas
                                </button>
                                <button className="w-full bg-[#1A237E] hover:bg-[#0D47A1] text-white py-2 px-4 rounded transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                    Save Design
                                </button>
                            </div>
                        </div> */}
                        {/* Canvas Area */}
                        <div className="lg:col-span-12 bg-[#21212100] rounded-lg overflow-y-hidden">

                            <Canvas />
                        </div>
                        {/* Property Details Panel */}
                        {/* <div className="lg:col-span-3 bg-[#1A1A1A] p-4 rounded-lg">
                            <h3 className="text-xl mb-4 font-light">Property Details</h3>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-gray-400 mb-1">Room Type</label>
                                    <div className="relative">
                                        <select className="w-full bg-[#2A2A2A] border-none text-white py-2 px-3 rounded appearance-none cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#1A237E]">
                                            <option>Living Room</option>
                                            <option>Bedroom</option>
                                            <option>Kitchen</option>
                                            <option>Bathroom</option>
                                            <option>Office</option>
                                        </select>
                                        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                            <i className="fa fa-chevron-down text-gray-400"></i>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-1">Dimensions</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Width (ft)"
                                                className="w-full bg-[#2A2A2A] border-none text-white py-2 px-3 rounded focus:outline-none focus:ring-1 focus:ring-[#1A237E]"
                                            />
                                        </div>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                placeholder="Length (ft)"
                                                className="w-full bg-[#2A2A2A] border-none text-white py-2 px-3 rounded focus:outline-none focus:ring-1 focus:ring-[#1A237E]"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-1">Materials</label>
                                    <div className="grid grid-cols-2 gap-2">
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="hardwood" className="rounded bg-[#2A2A2A] border-none text-[#1A237E] focus:ring-0" />
                                            <label htmlFor="hardwood">Hardwood</label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="marble" className="rounded bg-[#2A2A2A] border-none text-[#1A237E] focus:ring-0" />
                                            <label htmlFor="marble">Marble</label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="carpet" className="rounded bg-[#2A2A2A] border-none text-[#1A237E] focus:ring-0" />
                                            <label htmlFor="carpet">Carpet</label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <input type="checkbox" id="tile" className="rounded bg-[#2A2A2A] border-none text-[#1A237E] focus:ring-0" />
                                            <label htmlFor="tile">Tile</label>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-gray-400 mb-1">Estimated Cost</label>
                                    <div className="bg-[#2A2A2A] p-3 rounded">
                                        <p className="text-2xl font-light">$24,500</p>
                                        <p className="text-sm text-gray-400">Based on current selections</p>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <button className="w-full bg-[#1A237E] hover:bg-[#0D47A1] text-white py-2 px-4 rounded transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                                        Request Consultation
                                    </button>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </section>

            <V6 />

        </div>
    );
};
export default App
