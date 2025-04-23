// The exported code uses Tailwind CSS. Install Tailwind CSS in your dev environment to ensure all styles work.
import React, { useState, useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import * as echarts from 'echarts';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
const V6: React.FC = () => {
// All existing state and data from original code...
// New data for statistics section
const [activeTab, setActiveTab] = useState('marketplace');
const [searchQuery, setSearchQuery] = useState('');
const [selectedCategory, setSelectedCategory] = useState('all');

const categories = [
  { id: 'all', name: 'All Properties', icon: 'fa-home' },
  { id: 'residential', name: 'Residential', icon: 'fa-house' },
  { id: 'commercial', name: 'Commercial', icon: 'fa-building' },
  { id: 'industrial', name: 'Industrial', icon: 'fa-industry' },
];

const properties = [
  {
    id: 1,
    title: 'Modern Luxury Villa',
    price: '$1,250,000',
    location: 'Beverly Hills, CA',
    specs: '5 bed • 4 bath • 4,500 sqft',
    category: 'residential',
    image: 'https://readdy.ai/api/search-image?query=modern%20luxury%20villa%20with%20clean%20lines%20large%20windows%20and%20infinity%20pool%20surrounded%20by%20lush%20landscaping%20professional%20real%20estate%20photography%20with%20natural%20lighting&width=400&height=300&seq=1&orientation=landscape'
  },
  {
    id: 2,
    title: 'Downtown Office Space',
    price: '$2,500,000',
    location: 'Manhattan, NY',
    specs: '10,000 sqft • Open Plan',
    category: 'commercial',
    image: 'https://readdy.ai/api/search-image?query=modern%20office%20building%20with%20glass%20facade%20in%20downtown%20area%20professional%20architectural%20photography%20with%20dramatic%20lighting&width=400&height=300&seq=2&orientation=landscape'
  },
  {
    id: 3,
    title: 'Warehouse Complex',
    price: '$3,750,000',
    location: 'Houston, TX',
    specs: '50,000 sqft • Industrial',
    category: 'industrial',
    image: 'https://readdy.ai/api/search-image?query=modern%20industrial%20warehouse%20complex%20with%20loading%20docks%20and%20office%20space%20professional%20real%20estate%20photography%20with%20natural%20lighting&width=400&height=300&seq=3&orientation=landscape'
  },
  {
    id: 4,
    title: 'Seaside Apartment',
    price: '$850,000',
    location: 'Miami, FL',
    specs: '3 bed • 2 bath • 1,800 sqft',
    category: 'residential',
    image: 'https://readdy.ai/api/search-image?query=luxury%20beachfront%20apartment%20with%20modern%20architecture%20and%20ocean%20views%20professional%20real%20estate%20photography%20during%20golden%20hour&width=400&height=300&seq=4&orientation=landscape'
  }
];

const stats = [
{
icon: 'fa-home',
value: '15,000+',
label: 'Properties Listed'
},
{
icon: 'fa-users',
value: '50,000+',
label: 'Happy Clients'
},
{
icon: 'fa-star',
value: '4.9/5',
label: 'Client Rating'
},
{
icon: 'fa-globe',
value: '100+',
label: 'Cities Covered'
}
];
// New data for testimonials
const testimonials = [
{
id: 1,
name: 'Sarah Johnson',
role: 'Property Investor',
image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20confident%20female%20executive%20in%20her%2030s%20with%20a%20warm%20smile%20wearing%20business%20attire%20against%20neutral%20background%20professional%20photography%20studio%20lighting&width=100&height=100&seq=10&orientation=squarish',
quote: 'DREAMHOME helped me find my perfect investment property. Their design tools made visualization incredibly easy.'
},
{
id: 2,
name: 'Michael Chen',
role: 'First-time Homebuyer',
image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20an%20asian%20male%20professional%20in%20his%20early%2030s%20with%20glasses%20wearing%20business%20casual%20attire%20against%20neutral%20background%20professional%20photography%20studio%20lighting&width=100&height=100&seq=11&orientation=squarish',
quote: 'The interactive design studio helped me plan my space perfectly before moving in. Exceptional service!'
},
{
id: 3,
name: 'Emma Davis',
role: 'Interior Designer',
image: 'https://readdy.ai/api/search-image?query=professional%20headshot%20of%20a%20creative%20female%20designer%20in%20her%20late%2020s%20with%20artistic%20style%20wearing%20fashionable%20outfit%20against%20neutral%20background%20professional%20photography%20studio%20lighting&width=100&height=100&seq=12&orientation=squarish',
quote: 'As a designer, I appreciate the attention to detail in their property listings and visualization tools.'
}
];
// Chart initialization
useEffect(() => {
const chartDom = document.getElementById('propertyChart');
if (chartDom) {
const myChart = echarts.init(chartDom);
const option = {
animation: false,
tooltip: {
trigger: 'axis'
},
legend: {
data: ['Property Value', 'Market Trend'],
textStyle: {
color: '#fff'
}
},
grid: {
left: '3%',
right: '4%',
bottom: '3%',
containLabel: true
},
xAxis: {
type: 'category',
boundaryGap: false,
data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
axisLabel: {
color: '#fff'
}
},
yAxis: {
type: 'value',
axisLabel: {
color: '#fff'
}
},
series: [
{
name: 'Property Value',
type: 'line',
data: [3200, 3400, 3600, 3800, 4200, 4500],
smooth: true,
lineStyle: {
color: '#1A237E'
},
areaStyle: {
color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
{
offset: 0,
color: 'rgba(26, 35, 126, 0.5)'
},
{
offset: 1,
color: 'rgba(26, 35, 126, 0.1)'
}
])
}
},
{
name: 'Market Trend',
type: 'line',
data: [3000, 3200, 3400, 3600, 3900, 4200],
smooth: true,
lineStyle: {
color: '#0D47A1'
}
}
]
};
myChart.setOption(option);
}
}, []);
// All existing functions from original code...
return (
<div className="min-h-screen bg-gray-900 text-white font-sans">
{/* Navigation Tabs */}
<div className="container mx-auto px-6 py-8">
  <div className="flex justify-center space-x-4 mb-12">
    <button
      onClick={() => setActiveTab('marketplace')}
      className={`px-6 py-3 rounded-lg transition-all duration-300 ${
        activeTab === 'marketplace'
          ? 'bg-[#1A237E] text-white'
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
      } !rounded-button whitespace-nowrap`}
    >
      Property Marketplace
    </button>
    <button
      onClick={() => setActiveTab('designer')}
      className={`px-6 py-3 rounded-lg transition-all duration-300 ${
        activeTab === 'designer'
          ? 'bg-[#1A237E] text-white'
          : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
      } !rounded-button whitespace-nowrap`}
    >
      Interior Designer
    </button>
  </div>

  {activeTab === 'marketplace' && (
    <>
      {/* Search and Filter Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <div className="relative flex-1 max-w-xl">
            <input
              type="text"
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-3 bg-gray-800 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1A237E] border-none"
            />
            <i className="fa fa-search absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-300 whitespace-nowrap ${
                selectedCategory === category.id
                  ? 'bg-[#1A237E] text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              } !rounded-button`}
            >
              <i className={`fa ${category.icon}`}></i>
              <span>{category.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Property Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {properties
          .filter(
            (property) =>
              (selectedCategory === 'all' || property.category === selectedCategory) &&
              (property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                property.location.toLowerCase().includes(searchQuery.toLowerCase()))
          )
          .map((property) => (
            <div
              key={property.id}
              className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="relative h-48">
                <img
                  src={property.image}
                  alt={property.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-2xl text-[#1A237E] mb-2">{property.price}</p>
                <p className="text-gray-400 mb-2">
                  <i className="fa fa-location-dot mr-2"></i>
                  {property.location}
                </p>
                <p className="text-gray-400">
                  <i className="fa fa-info-circle mr-2"></i>
                  {property.specs}
                </p>
              </div>
            </div>
          ))}
      </div>
    </>
  )}

  {activeTab === 'designer' && (
    <div className="text-center mb-12">
      <h2 className="text-4xl font-light mb-4">Interior Design Studio</h2>
      <p className="text-gray-400 max-w-2xl mx-auto mb-8">
        Use our advanced 3D tools to visualize and plan your perfect space
      </p>
      {/* Add your designer tool component here */}
    </div>
  )}
<section className="py-16 bg-[#0F0F0F]">
<div className="container mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
{stats.map((stat, index) => (
<div
key={index}
className="text-center p-6 bg-gradient-to-br from-[#1A1A1A] to-[#2A2A2A] rounded-lg transform hover:scale-105 transition-all duration-300"
>
<i className={`fa ${stat.icon} text-4xl text-[#1A237E] mb-4`}></i>
<h3 className="text-3xl font-light mb-2">{stat.value}</h3>
<p className="text-gray-400">{stat.label}</p>
</div>
))}
</div>
</div>
</section>
{/* Market Trends Section */}
<section className="py-16 bg-[#121212]">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl font-light mb-4">Market Trends</h2>
<p className="text-gray-400 max-w-2xl mx-auto">
Track real estate market trends and make informed investment decisions
</p>
</div>
<div className="bg-[#1A1A1A] p-6 rounded-lg">
<div id="propertyChart" style={{ height: '400px' }}></div>
</div>
</div>
</section>
{/* Testimonials Section */}
<section className="py-16 bg-[#0A0A0A]">
<div className="container mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-4xl font-light mb-4">What Our Clients Say</h2>
<p className="text-gray-400 max-w-2xl mx-auto">
Hear from our satisfied clients about their experience with DREAMHOME
</p>
</div>
<Swiper
modules={[Pagination, Autoplay, EffectFade]}
spaceBetween={30}
slidesPerView={1}
effect="fade"
pagination={{ clickable: true }}
autoplay={{ delay: 5000 }}
className="testimonials-swiper"
>
{testimonials.map(testimonial => (
<SwiperSlide key={testimonial.id}>
<div className="bg-[#1A1A1A] p-8 rounded-lg text-center max-w-3xl mx-auto">
<img
src={testimonial.image}
alt={testimonial.name}
className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
/>
<p className="text-xl italic mb-6">"{testimonial.quote}"</p>
<h4 className="text-lg font-medium">{testimonial.name}</h4>
<p className="text-gray-400">{testimonial.role}</p>
</div>
</SwiperSlide>
))}
</Swiper>
</div>
</section>
{/* Call to Action Section */}
<section className="py-16 bg-[#1A237E]">
<div className="container mx-auto px-6 text-center">
<h2 className="text-4xl font-light mb-6">Transform Your Space Today</h2>
<p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
Whether you're buying, selling, or redesigning, we have the tools and expertise you need
</p>
<div className="flex justify-center space-x-4">
<button className="bg-white text-[#1A237E] hover:bg-gray-100 px-8 py-4 rounded transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
Browse Properties
</button>
<button className="bg-transparent border-2 border-white hover:bg-white hover:text-[#1A237E] text-white px-8 py-4 rounded transition-colors duration-300 cursor-pointer !rounded-button whitespace-nowrap">
Try Design Studio
</button>
</div>
</div>
</section>
{/* Existing Featured Properties Section */}
{/* Existing Footer */}
</div>
);
{/* Existing Featured Properties Section */}
{/* Existing Footer */}
</div>
);
};
export default V6
