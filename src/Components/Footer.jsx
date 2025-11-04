import React from "react";
import {
  FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn,
  FaYoutube
} from "react-icons/fa";
import MyContainer from "../MyContainer.jsx/MyContainer";

export default function Footer() {
  return (
    <MyContainer className="bg-footer text-gray-800 py-10 mt-20 rounded-2xl">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">
            ToyTopia
          </h3>
          <p className="text-gray-700">
            Your favorite place for amazing toys! We provide fun, creativity,
            and joy for kids of all ages.
          </p>
        </div>

        <div>
          <h4 className="text-xl font-semibold mb-4">About</h4>
          <ul className="space-y-2">
               <li><a className="hover:text-yellow-500">About Us</a></li>
               <li><a className="hover:text-yellow-500">Careers</a></li>
               <li><a className="hover:text-yellow-500">Blog</a></li>
               <li><a className="hover:text-yellow-500">Contact</a></li>
          </ul>
        </div>
        
 <div>
          <h4 className="text-xl font-semibold mb-4">Customer Service</h4>
          <ul className="space-y-2">
               <li><a className="hover:text-yellow-500">FAQ</a></li>
               <li><a className="hover:text-yellow-500">Shipping</a></li>
               <li><a className="hover:text-yellow-500">Returns</a></li>
               <li><a className="hover:text-yellow-500">Support</a></li>
          </ul>
        </div>

        <div>
           <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-4">
            <a className="text-blue-600 hover:text-blue-800"><FaFacebookF size={20} /></a>
            <a className="text-blue-400 hover:text-blue-600"><FaTwitter size={20} /></a>
            <a className="text-pink-500 hover:text-pink-700"><FaInstagram size={20} /></a>
            <a className="text-blue-700 hover:text-blue-900"><FaLinkedinIn size={20} /></a>
            <a className="text-red-600 hover:text-red-800"><FaYoutube size={20} /></a>
          </div>
        </div>
      </div>
       <div className="mt-10 border-t border-gray-300 pt-6 text-center text-gray-600 text-sm">
        ©2025 Toytopia. All rights reserved.
      </div>
    </MyContainer>
  );
}
