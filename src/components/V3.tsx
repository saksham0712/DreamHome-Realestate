// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef, useEffect } from 'react';
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
}, 5000);
return () => clearInterval(interval);
}, []);
return (
<div className="min-h-screen bg-gray-900 text-white font-sans">
{/* Header */}
<header className="bg-[#1A1A1A] py-4 px-6 fixed w-full z-50">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<div className="flex items-center">
<h1 className="text-2xl font-light tracking-wider">DREAM<span className="text-[#1A237E] font-bold">HOME</span></h1>
</div>
<nav className="hidden md:flex space-x-8">
<a href="#" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">Home</a>
<a href="#" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">Properties</a>
<a href="#" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">Design Studio</a>
<a href="https://readdy.ai/home/72315c46-b69b-454e-b386-d360fcc79209/90bf79a9-3277-4015-8cb2-4d8b13ce342b" data-readdy="true" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">About</a>
<a href="#" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">Contact</a>
</nav>
<div className="flex items-center space-x-4">
<button className="text-white hover:text-[#1A237E] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fa fa-search text-lg"></i>
</button>
<button className="text-white hover:text-[#1A237E] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fa fa-user text-lg"></i>
</button>
<button className="md:hidden text-white hover:text-[#1A237E] transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fa fa-bars text-lg"></i>
</button>
</div>
</div>
</header>
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
<h2 className="text-6xl font-light mb-6 leading-tight tracking-wide">{slide.title}</h2>
<p className="text-2xl text-gray-200 mb-10 font-light">{slide.subtitle}</p>
<div className="flex space-x-6">
<button className="bg-[#1A237E] hover:bg-[#0D47A1] text-white px-8 py-4 text-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
Explore Properties
</button>
<button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1A1A1A] text-white px-8 py-4 text-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
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
className="absolute left-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-[#1A237E] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap hover:scale-110"
>
<i className="fa fa-chevron-left text-xl"></i>
</button>
<button
onClick={nextSlide}
className="absolute right-8 top-1/2 -translate-y-1/2 z-30 bg-black/30 hover:bg-[#1A237E] w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap hover:scale-110"
>
<i className="fa fa-chevron-right text-xl"></i>
</button>
{/* Slider indicators */}
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex space-x-3">
{heroSlides.map((_, index) => (
<button
key={index}
onClick={() => setActiveSlide(index)}
className={`w-4 h-4 rounded-full transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
index === activeSlide ? 'bg-[#1A237E] scale-125' : 'bg-white/50 hover:bg-white'
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
<div className="lg:col-span-2 bg-[#1A1A1A] p-4 rounded-lg">
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
className={`flex items-center w-full p-2 rounded transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
selectedTool === tool.id ? 'bg-[#1A237E] text-white' : 'hover:bg-[#2A2A2A]'
}`}
>
<i className={`fa ${tool.icon} w-6`}></i>
<span className="ml-2">{tool.name}</span>
</button>
))}
</div>
<h3 className="text-xl mt-6 mb-4 font-light">Color Palette</h3>
<div className="grid grid-cols-5 gap-2">
{[
'#ffffff', '#cccccc', '#999999', '#666666', '#333333',
'#1A237E', '#0D47A1', '#01579B', '#006064', '#004D40'
].map((color, index) => (
<button
key={index}
onClick={() => setSelectedColor(color)}
className={`w-8 h-8 rounded-full cursor-pointer !rounded-button whitespace-nowrap ${
selectedColor === color ? 'ring-2 ring-white' : ''
}`}
style={{ backgroundColor: color }}
></button>
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
</div>
{/* Canvas Area */}
<div className="lg:col-span-7 bg-[#212121] rounded-lg overflow-hidden">
<canvas
ref={canvasRef}
className="w-full h-[500px]"
onMouseDown={(e) => {
if (!context) return;
setIsDrawing(true);
const rect = canvasRef.current?.getBoundingClientRect();
if (!rect) return;
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
context.beginPath();
context.moveTo(x, y);
context.strokeStyle = selectedColor;
context.lineWidth = 2;
}}
onMouseMove={(e) => {
if (!isDrawing || !context) return;
const rect = canvasRef.current?.getBoundingClientRect();
if (!rect) return;
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
context.lineTo(x, y);
context.stroke();
}}
onMouseUp={() => {
if (context) {
context.closePath();
}
setIsDrawing(false);
}}
onMouseLeave={() => {
if (context) {
context.closePath();
}
setIsDrawing(false);
}}
></canvas>
</div>
{/* Property Details Panel */}
<div className="lg:col-span-3 bg-[#1A1A1A] p-4 rounded-lg">
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
</div>
</div>
</div>
</section>
{/* Footer */}
<footer className="bg-gradient-to-r from-[#1A1A1A] to-[#1A237E] py-12">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
<div>
<h3 className="text-2xl font-light mb-4">DREAM<span className="text-white font-bold">HOME</span></h3>
<p className="text-gray-300 mb-4">
Redefining luxury real estate with innovative design tools and premium property listings.
</p>
<div className="flex space-x-4">
<a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fa fa-facebook"></i>
</a>
<a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fa fa-twitter"></i>
</a>
<a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fa fa-instagram"></i>
</a>
<a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">
<i className="fa fa-linkedin"></i>
</a>
</div>
</div>
<div>
<h4 className="text-lg font-medium mb-4">Quick Links</h4>
<ul className="space-y-2">
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Home</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Properties</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Design Studio</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">About Us</a></li>
<li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-medium mb-4">Contact Us</h4>
<ul className="space-y-2">
<li className="flex items-start">
<i className="fa fa-map-marker mt-1 mr-3 text-[#1A237E]"></i>
<span className="text-gray-300">123 Luxury Lane, New York, NY 10001</span>
</li>
<li className="flex items-center">
<i className="fa fa-phone mr-3 text-[#1A237E]"></i>
<span className="text-gray-300">+1 (212) 555-1234</span>
</li>
<li className="flex items-center">
<i className="fa fa-envelope mr-3 text-[#1A237E]"></i>
<span className="text-gray-300">info@dreamhome.com</span>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-medium mb-4">Newsletter</h4>
<p className="text-gray-300 mb-4">Subscribe to our newsletter for the latest property listings and design tips.</p>
<form className="flex">
<input
type="email"
placeholder="Your email"
className="bg-white/10 border-none text-white py-2 px-3 rounded-l focus:outline-none focus:ring-1 focus:ring-[#1A237E] w-full"
/>
<button className="bg-[#1A237E] hover:bg-[#0D47A1] text-white py-2 px-4 rounded-r transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
<i className="fa fa-paper-plane"></i>
</button>
</form>
</div>
</div>
<div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
<p className="text-gray-400 text-sm">© 2025 DREAMHOME. All rights reserved.</p>
<div className="flex items-center space-x-4 mt-4 md:mt-0">
<a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer">Privacy Policy</a>
<a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300 cursor-pointer">Terms of Service</a>
<div className="flex items-center space-x-2">
<i className="fa fa-cc-visa text-gray-300 text-xl"></i>
<i className="fa fa-cc-mastercard text-gray-300 text-xl"></i>
<i className="fa fa-cc-paypal text-gray-300 text-xl"></i>
</div>
</div>
</div>
</div>
</footer>
</div>
);
};
export default App
