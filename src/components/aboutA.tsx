// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.

import React, { useState, useEffect } from 'react';

const aboutA: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Team members data
  const teamMembers = [
    {
      id: 1,
      name: "Alexandra Reynolds",
      position: "Founder & CEO",
      bio: "With over 20 years of experience in luxury real estate, Alexandra founded DREAMHOME with a vision to combine cutting-edge technology with exceptional property offerings.",
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520elegant%2520female%2520CEO%2520in%2520her%252040s%2520with%2520confident%2520expression%252C%2520neutral%2520background%252C%2520business%2520attire%252C%2520studio%2520lighting%252C%2520high%2520quality%2520corporate%2520photography%252C%2520realistic%2520portrait%252C%2520professional%2520appearance&width=300&height=300&seq=10&orientation=squarish",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 2,
      name: "Marcus Chen",
      position: "Chief Design Officer",
      bio: "Marcus brings his award-winning architectural expertise to lead our design studio, helping clients transform spaces into personalized masterpieces.",
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520asian%2520male%2520design%2520executive%2520in%2520his%252030s%252C%2520creative%2520yet%2520professional%2520appearance%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520corporate%2520photography%252C%2520realistic%2520portrait%252C%2520confident%2520expression&width=300&height=300&seq=11&orientation=squarish",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 3,
      name: "Sophia Martinez",
      position: "Head of Property Acquisitions",
      bio: "Sophia's keen eye for value and potential has helped DREAMHOME curate one of the most exclusive property portfolios in the industry.",
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520latina%2520female%2520executive%2520in%2520her%252030s%252C%2520business%2520professional%2520attire%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520corporate%2520photography%252C%2520realistic%2520portrait%252C%2520warm%2520confident%2520smile&width=300&height=300&seq=12&orientation=squarish",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 4,
      name: "James Wilson",
      position: "Technology Director",
      bio: "James leads our tech innovations, developing the interactive tools that set DREAMHOME apart from traditional real estate companies.",
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520african%2520american%2520male%2520tech%2520executive%2520in%2520his%252030s%252C%2520smart%2520casual%2520attire%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520corporate%2520photography%252C%2520realistic%2520portrait%252C%2520friendly%2520professional%2520expression&width=300&height=300&seq=13&orientation=squarish",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 5,
      name: "Olivia Thompson",
      position: "Client Relations Manager",
      bio: "Olivia ensures every client receives personalized attention and exceptional service throughout their DREAMHOME journey.",
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520female%2520customer%2520service%2520executive%2520in%2520her%252020s%252C%2520business%2520casual%2520attire%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520corporate%2520photography%252C%2520realistic%2520portrait%252C%2520approachable%2520warm%2520smile&width=300&height=300&seq=14&orientation=squarish",
      socials: {
        linkedin: "#",
        twitter: "#",
        instagram: "#"
      }
    },
    {
      id: 6,
      name: "Daniel Nakamura",
      position: "Marketing Director",
      bio: "Daniel crafts our brand story and ensures DREAMHOME properties receive the spotlight they deserve in the luxury market.",
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520japanese%2520male%2520marketing%2520executive%2520in%2520his%252030s%252C%2520stylish%2520business%2520attire%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520corporate%2520photography%252C%2520realistic%2520portrait%252C%2520confident%2520expression&width=300&height=300&seq=15&orientation=squarish",
      socials: {
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
      text: "Working with DREAMHOME transformed our vision into reality. Their design studio helped us visualize our dream space before making any commitments.",
      name: "Jonathan & Claire Bennet",
      property: "Oceanfront Villa, Malibu",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520elegant%2520middle%2520aged%2520couple%2520in%2520business%2520casual%2520attire%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520photography%252C%2520realistic%2520portrait%252C%2520warm%2520genuine%2520smiles%252C%2520sophisticated%2520appearance&width=120&height=120&seq=16&orientation=squarish"
    },
    {
      id: 2,
      text: "The attention to detail and personalized service we received was exceptional. DREAMHOME found us a property that exceeded our expectations in every way.",
      name: "Michael Rodriguez",
      property: "Penthouse, New York City",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=professional%2520headshot%2520of%2520latino%2520businessman%2520in%2520his%252040s%252C%2520wearing%2520suit%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520photography%252C%2520realistic%2520portrait%252C%2520confident%2520expression%252C%2520successful%2520appearance&width=120&height=120&seq=17&orientation=squarish"
    },
    {
      id: 3,
      text: "As international buyers, we appreciated DREAMHOME's virtual design tools that allowed us to customize our property remotely before finalizing the purchase.",
      name: "Emma & Liu Zhang",
      property: "Modern Estate, San Francisco",
      rating: 5,
      image: "https://readdy.ai/api/search-image?query=professional%2520portrait%2520of%2520international%2520couple%2520asian%2520man%2520and%2520caucasian%2520woman%2520in%2520their%252030s%252C%2520business%2520casual%2520attire%252C%2520neutral%2520background%252C%2520studio%2520lighting%252C%2520high%2520quality%2520photography%252C%2520realistic%2520portrait%252C%2520friendly%2520smiles&width=120&height=120&seq=18&orientation=squarish"
    }
  ];

  // Awards data
  const awards = [
    {
      id: 1,
      title: "Best Luxury Real Estate Platform",
      organization: "International Property Awards",
      year: "2024",
      image: "https://readdy.ai/api/search-image?query=elegant%2520gold%2520and%2520crystal%2520trophy%2520award%2520for%2520luxury%2520real%2520estate%2520on%2520black%2520marble%2520base%252C%2520professional%2520product%2520photography%252C%2520studio%2520lighting%252C%2520neutral%2520background%252C%2520high%2520quality%2520detailed%2520image%252C%2520prestigious%2520appearance&width=200&height=200&seq=19&orientation=squarish"
    },
    {
      id: 2,
      title: "Most Innovative PropTech Solution",
      organization: "Real Estate Technology Awards",
      year: "2023",
      image: "https://readdy.ai/api/search-image?query=modern%2520sleek%2520technology%2520award%2520trophy%2520with%2520blue%2520glass%2520and%2520metal%2520elements%252C%2520professional%2520product%2520photography%252C%2520studio%2520lighting%252C%2520neutral%2520background%252C%2520high%2520quality%2520detailed%2520image%252C%2520futuristic%2520design&width=200&height=200&seq=20&orientation=squarish"
    },
    {
      id: 3,
      title: "Excellence in Customer Experience",
      organization: "Luxury Lifestyle Awards",
      year: "2024",
      image: "https://readdy.ai/api/search-image?query=premium%2520customer%2520service%2520award%2520trophy%2520with%2520silver%2520and%2520crystal%2520elements%252C%2520professional%2520product%2520photography%252C%2520studio%2520lighting%252C%2520neutral%2520background%252C%2520high%2520quality%2520detailed%2520image%252C%2520elegant%2520sophisticated%2520design&width=200&height=200&seq=21&orientation=squarish"
    },
    {
      id: 4,
      title: "Top 10 Luxury Real Estate Companies",
      organization: "Forbes Business Review",
      year: "2023",
      image: "https://readdy.ai/api/search-image?query=prestigious%2520business%2520award%2520plaque%2520with%2520gold%2520emblem%2520and%2520dark%2520wood%2520base%252C%2520professional%2520product%2520photography%252C%2520studio%2520lighting%252C%2520neutral%2520background%252C%2520high%2520quality%2520detailed%2520image%252C%2520corporate%2520recognition%2520award&width=200&height=200&seq=22&orientation=squarish"
    }
  ];

  // Partners data
  const partners = [
    {
      id: 1,
      name: "Architectural Digest",
      description: "Media Partner",
      logo: "fa-newspaper-o"
    },
    {
      id: 2,
      name: "LuxuryBuild Construction",
      description: "Development Partner",
      logo: "fa-building"
    },
    {
      id: 3,
      name: "Elite Interior Design",
      description: "Design Partner",
      logo: "fa-paint-brush"
    },
    {
      id: 4,
      name: "Global Luxury Realty",
      description: "International Partner",
      logo: "fa-globe"
    },
    {
      id: 5,
      name: "Smart Home Technologies",
      description: "Technology Partner",
      logo: "fa-microchip"
    },
    {
      id: 6,
      name: "Sustainable Living Initiative",
      description: "Environmental Partner",
      logo: "fa-leaf"
    }
  ];

  // Company milestones
  const milestones = [
    {
      id: 1,
      year: "2015",
      title: "DREAMHOME Founded",
      description: "Alexandra Reynolds establishes DREAMHOME with a vision to revolutionize luxury real estate."
    },
    {
      id: 2,
      year: "2017",
      title: "Interactive Design Studio Launch",
      description: "Introduction of our proprietary design technology, allowing clients to visualize their dream spaces."
    },
    {
      id: 3,
      year: "2019",
      title: "International Expansion",
      description: "Opening of offices in London, Dubai, and Hong Kong to serve our global clientele."
    },
    {
      id: 4,
      year: "2021",
      title: "Sustainability Initiative",
      description: "Commitment to carbon-neutral operations and promotion of sustainable luxury properties."
    },
    {
      id: 5,
      year: "2023",
      title: "AI-Enhanced Property Matching",
      description: "Implementation of advanced algorithms to better connect clients with their perfect properties."
    },
    {
      id: 6,
      year: "2025",
      title: "10th Anniversary & Future Vision",
      description: "Celebrating a decade of excellence and unveiling our vision for the next chapter of luxury real estate."
    }
  ];

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    }, 8000);
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
      <section className="relative pt-16 h-[600px]">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://readdy.ai/api/search-image?query=elegant%2520team%2520of%2520diverse%2520real%2520estate%2520professionals%2520in%2520modern%2520luxury%2520office%2520with%2520city%2520views%252C%2520sophisticated%2520interior%2520design%252C%2520subtle%2520lighting%252C%2520professional%2520photography%252C%2520dark%2520blue%2520tones%2520on%2520left%2520side%2520gradually%2520transitioning%2520to%2520lighter%2520tones%252C%2520business%2520meeting%2520atmosphere&width=1440&height=600&seq=23&orientation=landscape" 
            alt="DREAMHOME Team" 
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0D1B3A]/90 to-[#0D1B3A]/60"></div>
        </div>
        <div className="relative z-10 container mx-auto px-6 h-full flex items-center">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="inline-block px-4 py-1 bg-[#1A237E] text-sm font-medium rounded-full">Our Story</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-light mb-6 leading-tight">About DREAMHOME</h1>
            <p className="text-xl text-gray-200 mb-8">
              We're redefining luxury real estate through innovation, exceptional service, and a passion for creating dream living spaces.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#team" className="bg-[#1A237E] hover:bg-[#0D47A1] text-white px-8 py-4 text-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Meet Our Team
              </a>
              <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1A1A1A] text-white px-8 py-4 text-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#1A1A1A] py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-light text-[#1A237E] mb-2">10+</div>
              <p className="text-gray-300">Years of Excellence</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-light text-[#1A237E] mb-2">500+</div>
              <p className="text-gray-300">Luxury Properties</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-light text-[#1A237E] mb-2">1,200+</div>
              <p className="text-gray-300">Satisfied Clients</p>
            </div>
            <div className="p-6">
              <div className="text-4xl md:text-5xl font-light text-[#1A237E] mb-2">15+</div>
              <p className="text-gray-300">International Awards</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story Section */}
      <section id="story" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-light mb-6">Our Story</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Founded in 2015 by Alexandra Reynolds, DREAMHOME began with a simple yet ambitious vision: to transform how people discover, design, and acquire luxury properties. With a background in both architecture and real estate, Alexandra identified a gap in the market for a service that combined cutting-edge technology with personalized luxury experiences.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                What started as a boutique agency in New York has grown into an international luxury real estate platform with a presence in major cities worldwide. Our journey has been defined by innovation, excellence, and an unwavering commitment to helping our clients find and create their perfect living spaces.
              </p>
              <div className="mb-8">
                <h3 className="text-2xl font-light mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower clients with innovative tools and exceptional service that transform the luxury real estate experience from transaction to creation.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-light mb-4">Our Values</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {["Innovation", "Excellence", "Integrity", "Sustainability", "Client-Centricity", "Collaboration"].map((value, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fa fa-check-circle text-[#1A237E] mr-3"></i>
                      <span className="text-gray-300">{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-light mb-4">Company Milestones</h3>
              <div className="relative border-l-2 border-[#1A237E] pl-8 space-y-8">
                {milestones.map((milestone) => (
                  <div key={milestone.id} className="relative">
                    <div className="absolute -left-10 w-6 h-6 rounded-full bg-[#1A237E] flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white"></div>
                    </div>
                    <div className="bg-[#1A1A1A] p-6 rounded-lg">
                      <span className="inline-block px-3 py-1 bg-[#1A237E]/20 text-[#1A237E] text-sm font-medium rounded-full mb-2">
                        {milestone.year}
                      </span>
                      <h4 className="text-xl font-medium mb-2">{milestone.title}</h4>
                      <p className="text-gray-400">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-[#0D1B3A]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-4">Meet Our Team</h2>
            <p className="text-gray-300">
              Our diverse team of experts brings together decades of experience in real estate, architecture, design, and technology to deliver exceptional results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-[#1A1A1A] rounded-lg overflow-hidden transition-transform duration-300 hover:transform hover:scale-105">
                <div className="h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-light mb-1">{member.name}</h3>
                  <p className="text-[#1A237E] font-medium mb-4">{member.position}</p>
                  <p className="text-gray-300 mb-6">{member.bio}</p>
                  <div className="flex space-x-4">
                    <a href={member.socials.linkedin} className="text-gray-400 hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href={member.socials.twitter} className="text-gray-400 hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href={member.socials.instagram} className="text-gray-400 hover:text-[#1A237E] transition-colors duration-300 cursor-pointer">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-4">Awards & Recognition</h2>
            <p className="text-gray-300">
              Our commitment to excellence has been recognized by industry leaders and prestigious organizations worldwide.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award) => (
              <div key={award.id} className="bg-[#1A1A1A] rounded-lg p-6 text-center transition-all duration-300 hover:bg-[#1A237E]/10">
                <div className="w-32 h-32 mx-auto mb-6">
                  <img 
                    src={award.image} 
                    alt={award.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2">{award.title}</h3>
                <p className="text-gray-400 mb-1">{award.organization}</p>
                <p className="text-[#1A237E]">{award.year}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <p className="text-gray-300 mb-8">
              DREAMHOME has been featured in leading publications and media outlets around the world
            </p>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              {["Forbes", "Architectural Digest", "Wall Street Journal", "Robb Report", "Luxury Living"].map((publication, index) => (
                <div key={index} className="text-gray-400 text-lg font-light">
                  {publication}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-b from-[#0D1B3A] to-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-4">Client Testimonials</h2>
            <p className="text-gray-300">
              Hear what our clients have to say about their experience working with DREAMHOME.
            </p>
          </div>
          <div className="relative h-80 md:h-64">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className={`absolute inset-0 transition-opacity duration-1000 ${index === activeTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
              >
                <div className="bg-[#1A1A1A] p-8 rounded-lg border border-[#1A237E]/20 h-full">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name} 
                        className="w-24 h-24 rounded-full object-cover border-4 border-[#1A237E]"
                      />
                    </div>
                    <div className="flex-grow">
                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <i key={i} className="fa fa-star text-[#1A237E]"></i>
                        ))}
                      </div>
                      <p className="text-gray-300 italic mb-6 text-lg">"{testimonial.text}"</p>
                      <div>
                        <h4 className="text-xl font-medium">{testimonial.name}</h4>
                        <p className="text-[#1A237E]">{testimonial.property}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer !rounded-button whitespace-nowrap ${
                  index === activeTestimonial ? 'bg-[#1A237E] scale-125' : 'bg-white/50 hover:bg-white'
                }`}
              ></button>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-light mb-4">Our Partners</h2>
            <p className="text-gray-300">
              We collaborate with industry leaders to deliver exceptional experiences and results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner) => (
              <div key={partner.id} className="bg-[#1A1A1A] rounded-lg p-8 text-center transition-all duration-300 hover:bg-[#1A237E]/10">
                <div className="w-20 h-20 mx-auto mb-6 bg-[#1A237E]/10 rounded-full flex items-center justify-center">
                  <i className={`fa ${partner.logo} text-4xl text-[#1A237E]`}></i>
                </div>
                <h3 className="text-xl font-medium mb-2">{partner.name}</h3>
                <p className="text-gray-400">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="py-20 bg-[#0D1B3A] relative">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://readdy.ai/api/search-image?query=abstract%2520luxury%2520architectural%2520details%2520with%2520dramatic%2520lighting%252C%2520modern%2520clean%2520lines%252C%2520geometric%2520patterns%252C%2520blue%2520and%2520dark%2520tones%252C%2520professional%2520photography%252C%2520minimal%2520composition%252C%2520sophisticated%2520design%2520elements%252C%2520high%2520contrast&width=1440&height=600&seq=24&orientation=landscape" 
            alt="Background pattern" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl font-light mb-6">Work With Us</h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Whether you're looking to find your dream property, design your perfect space, or join our team, we'd love to hear from you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-[#1A1A1A] p-8 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#1A237E]/20 rounded-full flex items-center justify-center">
                  <i className="fa fa-home text-2xl text-[#1A237E]"></i>
                </div>
                <h3 className="text-2xl font-light mb-4">Find Your Dream Home</h3>
                <p className="text-gray-300 mb-6">
                  Schedule a consultation with our property experts to discover exclusive listings tailored to your preferences.
                </p>
                <button className="bg-[#1A237E] hover:bg-[#0D47A1] text-white px-8 py-4 w-full text-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                  Schedule Consultation
                </button>
              </div>
              <div className="bg-[#1A1A1A] p-8 rounded-lg">
                <div className="w-16 h-16 mx-auto mb-6 bg-[#1A237E]/20 rounded-full flex items-center justify-center">
                  <i className="fa fa-users text-2xl text-[#1A237E]"></i>
                </div>
                <h3 className="text-2xl font-light mb-4">Join Our Team</h3>
                <p className="text-gray-300 mb-6">
                  We're always looking for talented individuals who are passionate about luxury real estate and innovative design.
                </p>
                <button className="bg-transparent border-2 border-[#1A237E] hover:bg-[#1A237E] text-white px-8 py-4 w-full text-lg transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
                  View Opportunities
                </button>
              </div>
            </div>
            <div className="mt-16 flex flex-col md:flex-row justify-center items-center gap-8">
              <div className="flex items-center">
                <i className="fa fa-map-marker text-[#1A237E] text-2xl mr-4"></i>
                <span>123 Luxury Lane, New York, NY 10001</span>
              </div>
              <div className="flex items-center">
                <i className="fa fa-phone text-[#1A237E] text-2xl mr-4"></i>
                <span>+1 (212) 555-1234</span>
              </div>
              <div className="flex items-center">
                <i className="fa fa-envelope text-[#1A237E] text-2xl mr-4"></i>
                <span>info@dreamhome.com</span>
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

export default aboutA;

