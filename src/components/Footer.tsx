import React from 'react'

const Footer = () => {
  return (
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
  )
}

export default Footer