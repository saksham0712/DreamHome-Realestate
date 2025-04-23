// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alexandra Reynolds",
      position: "Founder & CEO",
      bio: "With over 20 years in luxury real estate, Alexandra founded DREAMHOME with a vision to combine innovative design with exceptional properties.",
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520confident%2520female%2520CEO%2520in%2520her%252040s%2520with%2520elegant%2520business%2520attire%252C%2520neutral%2520background%252C%2520warm%2520smile%252C%2520sophisticated%2520appearance%252C%2520studio%2520lighting%252C%2520high%2520quality%2520corporate%2520portrait%252C%2520professional%2520photography%252C%2520clean%2520composition&width=400&height=400&seq=1&orientation=portrait",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Marcus Chen",
      position: "Chief Design Officer",
      bio: "Award-winning architect with a passion for sustainable luxury design. Marcus leads our innovative design studio and property transformation projects.",
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520Asian%2520male%2520architect%2520in%2520his%252030s%2520wearing%2520stylish%2520business%2520casual%2520attire%252C%2520neutral%2520background%252C%2520confident%2520expression%252C%2520studio%2520lighting%252C%2520high%2520quality%2520corporate%2520portrait%252C%2520professional%2520photography%252C%2520clean%2520composition&width=400&height=400&seq=2&orientation=portrait",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      name: "Sophia Martinez",
      position: "Head of Property Acquisitions",
      bio: "Sophia's exceptional market knowledge and negotiation skills have helped DREAMHOME secure the most exclusive properties in prime locations worldwide.",
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520latina%2520female%2520executive%2520in%2520her%252030s%2520with%2520business%2520attire%252C%2520neutral%2520background%252C%2520confident%2520smile%252C%2520studio%2520lighting%252C%2520high%2520quality%2520corporate%2520portrait%252C%2520professional%2520photography%252C%2520clean%2520composition&width=400&height=400&seq=3&orientation=portrait",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 4,
      name: "Jonathan Williams",
      position: "Client Relations Director",
      bio: "With a background in luxury hospitality, Jonathan ensures our clients receive personalized service that exceeds expectations at every touchpoint.",
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520African%2520American%2520male%2520executive%2520in%2520his%252040s%2520wearing%2520elegant%2520suit%252C%2520neutral%2520background%252C%2520warm%2520professional%2520smile%252C%2520studio%2520lighting%252C%2520high%2520quality%2520corporate%2520portrait%252C%2520professional%2520photography%252C%2520clean%2520composition&width=400&height=400&seq=4&orientation=portrait",
      social: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Emily & James Thompson",
      location: "Manhattan Penthouse",
      rating: 5,
      text: "DREAMHOME helped us find and design our perfect city sanctuary. Their interactive design tools allowed us to visualize our space before making any decisions. The result exceeded our expectations.",
      image: "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520elegant%2520couple%2520in%2520their%252040s%2520in%2520luxury%2520home%2520setting%252C%2520warm%2520lighting%252C%2520sophisticated%2520casual%2520attire%252C%2520neutral%2520background%252C%2520genuine%2520smiles%252C%2520high%2520quality%2520photography%252C%2520clean%2520composition&width=120&height=120&seq=5&orientation=squarish"
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Malibu Beachfront Villa",
      rating: 5,
      text: "Working with DREAMHOME was transformative. Their team understood my vision perfectly and found me a property that checked every box. Their design studio made customization seamless and enjoyable.",
      image: "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520successful%2520Asian%2520businessman%2520in%2520his%252050s%2520in%2520casual%2520luxury%2520attire%252C%2520neutral%2520background%252C%2520confident%2520expression%252C%2520high%2520quality%2520photography%252C%2520clean%2520composition%252C%2520warm%2520lighting&width=120&height=120&seq=6&orientation=squarish"
    },
    {
      id: 3,
      name: "Sophia & Robert Garcia",
      location: "Hamptons Estate",
      rating: 5,
      text: "From property search to final design touches, DREAMHOME provided exceptional service. Their attention to detail and understanding of our family's needs resulted in our forever home.",
      image: "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520middle%2520aged%2520Hispanic%2520couple%2520in%2520elegant%2520casual%2520attire%252C%2520neutral%2520background%252C%2520warm%2520smiles%252C%2520high%2520quality%2520photography%252C%2520clean%2520composition%252C%2520sophisticated%2520appearance&width=120&height=120&seq=7&orientation=squarish"
    }
  ];

  // Awards data
  const awards = [
    {
      id: 1,
      title: "Best Luxury Real Estate Agency",
      organization: "International Property Awards",
      year: "2024",
      image: "https://readdy.ai/api/search-image?query=elegant%2520gold%2520and%2520crystal%2520trophy%2520award%2520for%2520luxury%2520real%2520estate%2520on%2520black%2520background%252C%2520professional%2520product%2520photography%252C%2520dramatic%2520lighting%252C%2520high%2520contrast%252C%2520minimalist%2520composition%252C%2520high%2520quality%2520detailed%2520image&width=300&height=200&seq=8&orientation=landscape"
    },
    {
      id: 2,
      title: "Innovation in Real Estate Technology",
      organization: "PropTech Global Summit",
      year: "2023",
      image: "https://readdy.ai/api/search-image?query=modern%2520sleek%2520technology%2520award%2520trophy%2520with%2520blue%2520glass%2520and%2520metal%2520elements%2520on%2520dark%2520background%252C%2520professional%2520product%2520photography%252C%2520dramatic%2520lighting%252C%2520high%2520contrast%252C%2520minimalist%2520composition%252C%2520high%2520quality%2520detailed%2520image&width=300&height=200&seq=9&orientation=landscape"
    },
    {
      id: 3,
      title: "Excellence in Client Satisfaction",
      organization: "Luxury Lifestyle Awards",
      year: "2024",
      image: "https://readdy.ai/api/search-image?query=premium%2520silver%2520and%2520glass%2520award%2520trophy%2520for%2520client%2520excellence%2520on%2520dark%2520background%252C%2520professional%2520product%2520photography%252C%2520dramatic%2520lighting%252C%2520high%2520contrast%252C%2520minimalist%2520composition%252C%2520high%2520quality%2520detailed%2520image&width=300&height=200&seq=10&orientation=landscape"
    },
    {
      id: 4,
      title: "Sustainable Luxury Design",
      organization: "Architectural Digest",
      year: "2023",
      image: "https://readdy.ai/api/search-image?query=elegant%2520sustainable%2520design%2520award%2520with%2520natural%2520wood%2520and%2520recycled%2520metal%2520elements%2520on%2520dark%2520background%252C%2520professional%2520product%2520photography%252C%2520dramatic%2520lighting%252C%2520high%2520contrast%252C%2520minimalist%2520composition%252C%2520high%2520quality%2520detailed%2520image&width=300&height=200&seq=11&orientation=landscape"
    }
  ];

  // Partners data
  const partners = [
    {
      id: 1,
      name: "Luxe Interiors",
      description: "Premium interior design and furnishings",
      logo: <i className="fa fa-paint-brush text-4xl text-[#1A237E]"></i>
    },
    {
      id: 2,
      name: "EcoSmart Homes",
      description: "Sustainable home technology solutions",
      logo: <i className="fa fa-leaf text-4xl text-[#1A237E]"></i>
    },
    {
      id: 3,
      name: "Global Finance Group",
      description: "Exclusive property financing options",
      logo: <i className="fa fa-university text-4xl text-[#1A237E]"></i>
    },
    {
      id: 4,
      name: "Precision Architects",
      description: "Award-winning architectural services",
      logo: <i className="fa fa-building text-4xl text-[#1A237E]"></i>
    },
    {
      id: 5,
      name: "Elite Security Systems",
      description: "State-of-the-art home security",
      logo: <i className="fa fa-shield text-4xl text-[#1A237E]"></i>
    },
    {
      id: 6,
      name: "Horizon Landscapes",
      description: "Luxury outdoor space design",
      logo: <i className="fa fa-tree text-4xl text-[#1A237E]"></i>
    }
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header className="bg-[#1A1A1A] py-4 px-6 fixed w-full z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <h1 className="text-2xl font-light tracking-wider">DREAM<span className="text-[#1A237E] font-bold">HOME</span></h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="https://readdy.ai/home/72315c46-b69b-454e-b386-d360fcc79209/37547528-0668-4827-b05f-b9fcb57c053a" data-readdy="true" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">Home</a>
            <a href="#" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">Properties</a>
            <a href="#" className="text-white hover:text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">Design Studio</a>
            <a href="#" className="text-[#1A237E] transition-colors duration-300 font-light tracking-wide cursor-pointer">About</a>
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
      <section className="relative pt-24 pb-20 h-[600px]">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A1A] to-transparent z-10"></div>
          <img 
            src="https://readdy.ai/api/search-image?query=elegant%2520team%2520of%2520diverse%2520luxury%2520real%2520estate%2520professionals%2520in%2520modern%2520office%2520with%2520glass%2520walls%252C%2520city%2520skyline%2520view%252C%2520sophisticated%2520interior%2520design%252C%2520warm%2520lighting%252C%2520professional%2520business%2520attire%252C%2520collaborative%2520atmosphere%252C%2520high%2520end%2520finishes%252C%2520cinematic%2520composition&width=1440&height=600&seq=12&orientation=landscape" 
            alt="DREAMHOME Team" 
            className="w-full h-full object-cover object-top"
          />
        </div>
        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-2xl">
            <h1 className="text-5xl font-light mb-6 leading-tight tracking-wide">About DREAMHOME</h1>
            <p className="text-xl text-gray-200 mb-8">
              Redefining luxury real estate through innovative design and exceptional service. We connect discerning clients with extraordinary properties and transform spaces into personalized sanctuaries.
            </p>
            <div className="flex flex-wrap gap-6 mt-8">
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-light text-[#1A237E]">15+</p>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-light text-[#1A237E]">500+</p>
                <p className="text-sm text-gray-300">Properties Sold</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-light text-[#1A237E]">12</p>
                <p className="text-sm text-gray-300">Global Locations</p>
              </div>
              <div className="bg-black/30 backdrop-blur-sm p-4 rounded-lg">
                <p className="text-3xl font-light text-[#1A237E]">98%</p>
                <p className="text-sm text-gray-300">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light mb-6">Our Story</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A237E] flex items-center justify-center">
                      <span className="text-white">2010</span>
                    </div>
                    <div className="h-full w-0.5 bg-[#1A237E] mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-xl font-light mb-2">Foundation</h3>
                    <p className="text-gray-300">
                      DREAMHOME was founded by Alexandra Reynolds with a vision to revolutionize the luxury real estate market by combining exceptional properties with innovative design solutions.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A237E] flex items-center justify-center">
                      <span className="text-white">2015</span>
                    </div>
                    <div className="h-full w-0.5 bg-[#1A237E] mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-xl font-light mb-2">Global Expansion</h3>
                    <p className="text-gray-300">
                      After establishing a strong presence in New York, DREAMHOME expanded to international markets, opening offices in London, Dubai, and Hong Kong.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A237E] flex items-center justify-center">
                      <span className="text-white">2020</span>
                    </div>
                    <div className="h-full w-0.5 bg-[#1A237E] mt-2"></div>
                  </div>
                  <div className="pb-6">
                    <h3 className="text-xl font-light mb-2">Interactive Design Studio</h3>
                    <p className="text-gray-300">
                      Launching our proprietary Interactive Design Studio, DREAMHOME pioneered a new approach to property visualization and customization, allowing clients to experience their future homes before purchase.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-4 flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-[#1A237E] flex items-center justify-center">
                      <span className="text-white">2025</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-light mb-2">Today</h3>
                    <p className="text-gray-300">
                      Today, DREAMHOME stands as an industry leader, combining cutting-edge technology with unparalleled market expertise to create exceptional living experiences for our discerning clientele.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-light mb-6">Our Mission & Values</h2>
              <p className="text-gray-300 mb-8">
                At DREAMHOME, we believe that exceptional properties should be matched with exceptional experiences. Our mission is to redefine luxury real estate by combining innovative technology, personalized service, and design excellence to create homes that reflect our clients' unique lifestyles and aspirations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#1A1A1A] p-6 rounded-lg">
                  <div className="text-[#1A237E] mb-4">
                    <i className="fa fa-star text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-light mb-2">Excellence</h3>
                  <p className="text-gray-300">
                    We pursue excellence in every aspect of our business, from property curation to client service.
                  </p>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-lg">
                  <div className="text-[#1A237E] mb-4">
                    <i className="fa fa-lightbulb-o text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-light mb-2">Innovation</h3>
                  <p className="text-gray-300">
                    We continuously innovate to enhance the real estate experience through technology and design.
                  </p>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-lg">
                  <div className="text-[#1A237E] mb-4">
                    <i className="fa fa-handshake-o text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-light mb-2">Integrity</h3>
                  <p className="text-gray-300">
                    We operate with transparency and honesty in all our client and business relationships.
                  </p>
                </div>
                <div className="bg-[#1A1A1A] p-6 rounded-lg">
                  <div className="text-[#1A237E] mb-4">
                    <i className="fa fa-users text-2xl"></i>
                  </div>
                  <h3 className="text-xl font-light mb-2">Client-Focused</h3>
                  <p className="text-gray-300">
                    We place our clients' needs and satisfaction at the center of everything we do.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 bg-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Meet Our Team</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our team of industry experts brings together decades of experience in luxury real estate, architecture, interior design, and client service to deliver exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden group">
                <div className="relative overflow-hidden h-80">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <div className="flex space-x-4 justify-center">
                        <a href={member.social.linkedin} className="text-white hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">
                          <i className="fa fa-linkedin"></i>
                        </a>
                        <a href={member.social.twitter} className="text-white hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href={member.social.instagram} className="text-white hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">
                          <i className="fa fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-1">{member.name}</h3>
                  <p className="text-[#1A237E] mb-4">{member.position}</p>
                  <p className="text-gray-300 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition Section */}
      <section className="py-20 bg-gradient-to-b from-[#121212] to-[#0A0A0A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Awards & Recognition</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and publications worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award) => (
              <div key={award.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden hover:shadow-lg hover:shadow-[#1A237E]/20 transition-all duration-300 transform hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-medium mb-2">{award.title}</h3>
                  <p className="text-[#1A237E] mb-1">{award.organization}</p>
                  <p className="text-gray-400 text-sm">{award.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-[#0A0A0A]" style={{
        backgroundImage: "url('https://readdy.ai/api/search-image?query=abstract%2520luxury%2520pattern%2520with%2520subtle%2520geometric%2520shapes%2520in%2520dark%2520blue%2520and%2520black%252C%2520elegant%2520background%2520texture%252C%2520minimalist%2520design%252C%2520sophisticated%2520aesthetic%252C%2520high%2520quality%2520detailed%2520image%252C%2520seamless%2520pattern&width=1440&height=800&seq=13&orientation=landscape')",
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Client Testimonials</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              Discover what our clients have to say about their experience working with DREAMHOME.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`transition-opacity duration-1000 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 absolute inset-0'}`}
                >
                  <div className="bg-[#1A1A1A]/80 backdrop-blur-sm p-8 rounded-lg">
                    <div className="flex items-center mb-6">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-16 h-16 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="text-xl font-medium">{testimonial.name}</h3>
                        <p className="text-[#1A237E]">{testimonial.location}</p>
                        <div className="flex mt-1">
                          {[...Array(5)].map((_, i) => (
                            <i 
                              key={i} 
                              className={`fa fa-star ${i < testimonial.rating ? 'text-[#FFD700]' : 'text-gray-600'}`}
                            ></i>
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 text-lg italic">"{testimonial.text}"</p>
                  </div>
                </div>
              ))}
              
              {/* Testimonial controls */}
              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 mx-2 rounded-full transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                      index === activeTestimonial ? 'bg-[#1A237E] scale-125' : 'bg-white/50 hover:bg-white'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4">Our Partners</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We collaborate with industry-leading brands to provide comprehensive solutions for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-[#1A1A1A] p-6 rounded-lg hover:bg-[#1A1A1A]/80 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  <div className="mr-4">
                    {partner.logo}
                  </div>
                  <h3 className="text-xl font-medium">{partner.name}</h3>
                </div>
                <p className="text-gray-300">{partner.description}</p>
                <a href="#" className="text-[#1A237E] hover:text-white mt-4 inline-block transition-colors duration-300 cursor-pointer">
                  View Partnership <i className="fa fa-arrow-right ml-2"></i>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#1A1A1A] to-[#1A237E]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-light mb-6">Work With Us</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-10">
            Whether you're looking for your dream property, seeking to transform your current space, or interested in joining our team, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="bg-white text-[#1A1A1A] hover:bg-gray-200 px-8 py-4 text-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Schedule Consultation
            </button>
            <button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1A1A1A] text-white px-8 py-4 text-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
              Join Our Team
            </button>
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
                <li><a href="https://readdy.ai/home/72315c46-b69b-454e-b386-d360fcc79209/37547528-0668-4827-b05f-b9fcb57c053a" data-readdy="true" className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer">Home</a></li>
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

export default App;

