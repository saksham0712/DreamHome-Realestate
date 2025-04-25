// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useRef, useEffect } from "react";

const v1: React.FC = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [canvasMode, setCanvasMode] = useState("draw");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      const context = canvas.getContext("2d");
      if (context) {
        context.lineJoin = "round";
        context.lineCap = "round";
        context.lineWidth = 2;
        setCtx(context);
      }
    }
  }, []);

  const startDrawing = (e: React.MouseEvent) => {
    if (!ctx) return;
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setIsDrawing(true);
    setLastPosition({ x, y });
  };

  const draw = (e: React.MouseEvent) => {
    if (!isDrawing || !ctx || !canvasRef.current) return;

    const rect = canvasRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(lastPosition.x, lastPosition.y);
    ctx.lineTo(x, y);
    ctx.stroke();

    setLastPosition({ x, y });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    if (ctx && canvasRef.current) {
      ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="bg-[#1A1A1A] fixed w-full z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <h1 className="text-2xl font-light tracking-wider mr-10">
                LUXE<span className="font-bold">ESTATE</span>
              </h1>
              <nav className="hidden md:flex space-x-8">
                <a
                  href="#"
                  className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  Properties
                </a>
                <a
                  href="#"
                  className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  Agents
                </a>
                <a
                  href="#"
                  className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </a>
              </nav>
            </div>
            <div className="flex items-center space-x-6">
              <button className="hidden md:block text-sm bg-[#1A237E] hover:bg-[#283593] px-4 py-2 rounded-none transition-colors duration-300 whitespace-nowrap !rounded-button cursor-pointer">
                List Property
              </button>
              <div className="flex space-x-4">
                <i className="fas fa-search text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"></i>
                <i className="fas fa-user text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"></i>
              </div>
              <button
                className="md:hidden text-white focus:outline-none cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4">
              <nav className="flex flex-col space-y-4">
                <a
                  href="#"
                  className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  Properties
                </a>
                <a
                  href="#"
                  className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  Agents
                </a>
                <a
                  href="#"
                  className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-sm font-light tracking-wide hover:text-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  Contact
                </a>
                <button className="text-sm bg-[#1A237E] hover:bg-[#283593] px-4 py-2 self-start rounded-none transition-colors duration-300 whitespace-nowrap !rounded-button cursor-pointer">
                  List Property
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=luxurious%20modern%20mansion%20with%20infinity%20pool%20at%20night%2C%20dramatic%20lighting%2C%20sleek%20architecture%2C%20minimalist%20design%2C%20dark%20moody%20atmosphere%2C%20high-end%20real%20estate%20photography%2C%20ultra-wide%20angle%2C%20professional%20lighting%2C%20deep%20shadows%2C%20reflective%20surfaces&width=1920&height=1080&seq=1&orientation=landscape"
            alt="Luxury Property"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 h-full flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-6">
              Discover Your <span className="font-bold">Dream Home</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-200 mb-8 font-light">
              Explore exclusive properties and design your perfect living space
              with our interactive tools.
            </p>

            <div className="bg-[#1A1A1A] bg-opacity-80 p-6 backdrop-blur-sm">
              <div className="flex mb-6 border-b border-gray-700">
                <button
                  className={`px-4 py-2 text-sm font-light ${activeTab === "buy" ? "text-white border-b-2 border-[#1A237E]" : "text-gray-400"} whitespace-nowrap !rounded-button cursor-pointer`}
                  onClick={() => setActiveTab("buy")}
                >
                  Buy
                </button>
                <button
                  className={`px-4 py-2 text-sm font-light ${activeTab === "rent" ? "text-white border-b-2 border-[#1A237E]" : "text-gray-400"} whitespace-nowrap !rounded-button cursor-pointer`}
                  onClick={() => setActiveTab("rent")}
                >
                  Rent
                </button>
                <button
                  className={`px-4 py-2 text-sm font-light ${activeTab === "sell" ? "text-white border-b-2 border-[#1A237E]" : "text-gray-400"} whitespace-nowrap !rounded-button cursor-pointer`}
                  onClick={() => setActiveTab("sell")}
                >
                  Sell
                </button>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <input
                      type="text"
                      placeholder="Location"
                      className="w-full bg-transparent border border-gray-700 py-3 pl-10 pr-3 text-sm focus:outline-none focus:border-[#1A237E] transition-colors duration-300"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <i className="fas fa-home absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <select className="w-full bg-transparent border border-gray-700 py-3 pl-10 pr-3 text-sm focus:outline-none focus:border-[#1A237E] transition-colors duration-300 appearance-none cursor-pointer">
                      <option value="">Property Type</option>
                      <option value="house">House</option>
                      <option value="apartment">Apartment</option>
                      <option value="condo">Condo</option>
                      <option value="villa">Villa</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <i className="fas fa-dollar-sign absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
                    <select className="w-full bg-transparent border border-gray-700 py-3 pl-10 pr-3 text-sm focus:outline-none focus:border-[#1A237E] transition-colors duration-300 appearance-none cursor-pointer">
                      <option value="">Price Range</option>
                      <option value="100k-500k">$100k - $500k</option>
                      <option value="500k-1m">$500k - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m+">$5M+</option>
                    </select>
                    <i className="fas fa-chevron-down absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"></i>
                  </div>
                </div>
                <button className="bg-[#1A237E] hover:bg-[#283593] text-white py-3 px-6 text-sm font-medium transition-colors duration-300 whitespace-nowrap !rounded-button cursor-pointer">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Canvas Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-light mb-4">
              Design Your <span className="font-bold">Dream Space</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Use our interactive canvas to visualize and customize your future
              home. Drag, draw, and design with our intuitive tools.
            </p>
          </div>

          <div className="bg-[#212121] p-6 rounded-lg shadow-xl">
            <div className="flex flex-col md:flex-row gap-6">
              {/* Tools Panel */}
              <div className="w-full md:w-64 bg-[#1A1A1A] p-4 rounded">
                <h3 className="text-lg font-medium mb-4">Design Tools</h3>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Mode</p>
                  <div className="flex gap-2">
                    <button
                      className={`px-3 py-1 text-xs ${canvasMode === "draw" ? "bg-[#1A237E]" : "bg-gray-800"} rounded whitespace-nowrap !rounded-button cursor-pointer`}
                      onClick={() => setCanvasMode("draw")}
                    >
                      Draw
                    </button>
                    <button
                      className={`px-3 py-1 text-xs ${canvasMode === "erase" ? "bg-[#1A237E]" : "bg-gray-800"} rounded whitespace-nowrap !rounded-button cursor-pointer`}
                      onClick={() => setCanvasMode("erase")}
                    >
                      Erase
                    </button>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Color</p>
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      "#ffffff",
                      "#ff5252",
                      "#4caf50",
                      "#2196f3",
                      "#ffeb3b",
                      "#9c27b0",
                      "#ff9800",
                      "#607d8b",
                    ].map((clr) => (
                      <button
                        key={clr}
                        className={`w-8 h-8 rounded-full cursor-pointer ${color === clr ? "ring-2 ring-white" : ""}`}
                        style={{ backgroundColor: clr }}
                        onClick={() => setColor(clr)}
                      />
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-sm text-gray-400 mb-2">Elements</p>
                  <div className="space-y-2">
                    <button className="w-full text-left px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm flex items-center whitespace-nowrap !rounded-button cursor-pointer">
                      <i className="fas fa-couch mr-2"></i> Furniture
                    </button>
                    <button className="w-full text-left px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm flex items-center whitespace-nowrap !rounded-button cursor-pointer">
                      <i className="fas fa-door-open mr-2"></i> Doors & Windows
                    </button>
                    <button className="w-full text-left px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm flex items-center whitespace-nowrap !rounded-button cursor-pointer">
                      <i className="fas fa-tree mr-2"></i> Outdoor
                    </button>
                    <button className="w-full text-left px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm flex items-center whitespace-nowrap !rounded-button cursor-pointer">
                      <i className="fas fa-bath mr-2"></i> Bathroom
                    </button>
                    <button className="w-full text-left px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded text-sm flex items-center whitespace-nowrap !rounded-button cursor-pointer">
                      <i className="fas fa-utensils mr-2"></i> Kitchen
                    </button>
                  </div>
                </div>

                <div>
                  <button
                    className="w-full bg-red-900 hover:bg-red-800 text-white py-2 rounded mb-2 text-sm whitespace-nowrap !rounded-button cursor-pointer"
                    onClick={clearCanvas}
                  >
                    Clear Canvas
                  </button>
                  <button className="w-full bg-[#1A237E] hover:bg-[#283593] text-white py-2 rounded text-sm whitespace-nowrap !rounded-button cursor-pointer">
                    Save Design
                  </button>
                </div>
              </div>

              {/* Canvas Area */}
              <div className="flex-1 bg-[#2A2A2A] rounded relative">
                <canvas
                  ref={canvasRef}
                  className="w-full h-[500px] border border-gray-800 rounded cursor-crosshair"
                  onMouseDown={startDrawing}
                  onMouseMove={draw}
                  onMouseUp={stopDrawing}
                  onMouseLeave={stopDrawing}
                />
                <div className="absolute bottom-4 right-4 bg-[#1A1A1A] bg-opacity-80 backdrop-blur-sm p-2 rounded">
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
                      <i className="fas fa-search-plus"></i>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
                      <i className="fas fa-search-minus"></i>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
                      <i className="fas fa-undo"></i>
                    </button>
                    <button className="w-8 h-8 flex items-center justify-center bg-gray-800 rounded hover:bg-gray-700 cursor-pointer">
                      <i className="fas fa-redo"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-light mb-2">
                Featured <span className="font-bold">Properties</span>
              </h2>
              <p className="text-gray-400">
                Discover our handpicked selection of premium properties
              </p>
            </div>
            <button className="text-sm border border-[#1A237E] hover:bg-[#1A237E] px-4 py-2 transition-colors duration-300 whitespace-nowrap !rounded-button cursor-pointer">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Property Card 1 */}
            <div className="bg-[#2A2A2A] rounded-lg overflow-hidden group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20luxury%20penthouse%20with%20floor%20to%20ceiling%20windows%2C%20city%20skyline%20view%2C%20sleek%20interior%20design%2C%20contemporary%20furniture%2C%20ambient%20lighting%2C%20professional%20real%20estate%20photography%2C%20ultra-wide%20angle%20lens%2C%20dramatic%20shadows%2C%20reflective%20surfaces&width=600&height=400&seq=2&orientation=landscape"
                  alt="Luxury Penthouse"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1A237E] text-white text-xs px-3 py-1 rounded">
                    Featured
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
                    $4,500,000
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Skyline Penthouse</h3>
                <p className="text-gray-400 text-sm mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i>Downtown, New
                  York
                </p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>
                    <i className="fas fa-bed mr-2"></i>4 Beds
                  </span>
                  <span>
                    <i className="fas fa-bath mr-2"></i>3 Baths
                  </span>
                  <span>
                    <i className="fas fa-ruler-combined mr-2"></i>3,200 sqft
                  </span>
                </div>
              </div>
            </div>

            {/* Property Card 2 */}
            <div className="bg-[#2A2A2A] rounded-lg overflow-hidden group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20beachfront%20villa%20with%20infinity%20pool%2C%20ocean%20view%2C%20palm%20trees%2C%20sunset%20lighting%2C%20luxurious%20outdoor%20space%2C%20minimalist%20architecture%2C%20professional%20real%20estate%20photography%2C%20wide%20angle%20lens%2C%20dramatic%20shadows%2C%20reflective%20water%20surfaces&width=600&height=400&seq=3&orientation=landscape"
                  alt="Beachfront Villa"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1A237E] text-white text-xs px-3 py-1 rounded">
                    New
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
                    $8,900,000
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Oceanfront Villa</h3>
                <p className="text-gray-400 text-sm mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i>Malibu,
                  California
                </p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>
                    <i className="fas fa-bed mr-2"></i>6 Beds
                  </span>
                  <span>
                    <i className="fas fa-bath mr-2"></i>7 Baths
                  </span>
                  <span>
                    <i className="fas fa-ruler-combined mr-2"></i>5,800 sqft
                  </span>
                </div>
              </div>
            </div>

            {/* Property Card 3 */}
            <div className="bg-[#2A2A2A] rounded-lg overflow-hidden group cursor-pointer">
              <div className="relative h-64 overflow-hidden">
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20mountain%20retreat%20with%20glass%20walls%2C%20snowy%20mountain%20views%2C%20stone%20and%20wood%20exterior%2C%20cozy%20interior%20with%20fireplace%2C%20luxury%20cabin%20design%2C%20professional%20real%20estate%20photography%2C%20wide%20angle%20lens%2C%20dramatic%20lighting%2C%20reflective%20surfaces&width=600&height=400&seq=4&orientation=landscape"
                  alt="Mountain Retreat"
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-[#1A237E] text-white text-xs px-3 py-1 rounded">
                    Exclusive
                  </span>
                </div>
                <div className="absolute bottom-4 right-4">
                  <span className="bg-black bg-opacity-70 text-white text-sm px-3 py-1 rounded">
                    $6,200,000
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">Mountain Retreat</h3>
                <p className="text-gray-400 text-sm mb-4">
                  <i className="fas fa-map-marker-alt mr-2"></i>Aspen, Colorado
                </p>
                <div className="flex justify-between text-sm text-gray-400">
                  <span>
                    <i className="fas fa-bed mr-2"></i>5 Beds
                  </span>
                  <span>
                    <i className="fas fa-bath mr-2"></i>4 Baths
                  </span>
                  <span>
                    <i className="fas fa-ruler-combined mr-2"></i>4,500 sqft
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-[#1A1A1A] to-[#1A237E] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div>
              <h3 className="text-2xl font-light mb-6">
                LUXE<span className="font-bold">ESTATE</span>
              </h3>
              <p className="text-gray-300 text-sm mb-6">
                Providing exceptional real estate services and innovative design
                solutions for discerning clients worldwide.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#212121] flex items-center justify-center hover:bg-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#212121] flex items-center justify-center hover:bg-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#212121] flex items-center justify-center hover:bg-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-[#212121] flex items-center justify-center hover:bg-[#1A237E] transition-colors duration-300 cursor-pointer"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    Agents
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm cursor-pointer"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6">Contact Us</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <i className="fas fa-map-marker-alt mt-1 mr-3 text-[#1A237E]"></i>
                  <span className="text-gray-300 text-sm">
                    123 Luxury Lane, Beverly Hills, CA 90210
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-phone-alt mr-3 text-[#1A237E]"></i>
                  <span className="text-gray-300 text-sm">
                    +1 (800) 123-4567
                  </span>
                </li>
                <li className="flex items-center">
                  <i className="fas fa-envelope mr-3 text-[#1A237E]"></i>
                  <span className="text-gray-300 text-sm">
                    info@luxeestate.com
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-medium mb-6">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-4">
                Subscribe to our newsletter for the latest property news and
                design inspiration.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-[#212121] border-none py-2 px-4 text-sm flex-1 focus:outline-none focus:ring-1 focus:ring-[#1A237E]"
                />
                <button className="bg-[#1A237E] hover:bg-[#283593] text-white py-2 px-4 text-sm transition-colors duration-300 whitespace-nowrap !rounded-button cursor-pointer">
                  Subscribe
                </button>
              </div>
              <div className="mt-6">
                <p className="text-gray-400 text-xs">We accept:</p>
                <div className="flex space-x-3 mt-2">
                  <i className="fab fa-cc-visa text-2xl text-gray-300"></i>
                  <i className="fab fa-cc-mastercard text-2xl text-gray-300"></i>
                  <i className="fab fa-cc-amex text-2xl text-gray-300"></i>
                  <i className="fab fa-cc-paypal text-2xl text-gray-300"></i>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} LUXEESTATE. All rights reserved. |
              Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default v1;
