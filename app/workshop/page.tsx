'use client'
import type { NextPage } from 'next';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkshopPage: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const carouselImages = [
    { src: "/p2.JPG", alt: "LEO Lab Research Activities" },
    { src: "/p1.JPG", alt: "LEO Lab Workshop Session" },
    { src: "/p3.JPG", alt: "LEO Lab Team" },
    { src: "/p4.JPG", alt: "LEO Lab Team" },
    { src: "/p5.JPG", alt: "LEO Lab Team" },
  ];

  const workshopTopics = [
    "Labour Economics",
    "Personnel Economics",
    "Behavioural Economics",
    "Development Economics",
    "Big Data & ML",
    "Environmental Economics",
    "Gig & Platform Economics",
    "Gender Economics",
    "Finance & Sustainability",
    "Vocational Education & Training"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-leo mb-12">Workshops</h1>

        {/* Call for Papers Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
          <div className="bg-leo/5 p-4 sm:p-8 md:p-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-leo text-center">The LEO Economics Conference</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">Join us for a transformative gathering of minds in economic research and behavioral studies</p>

            {/* Main Conference Info */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-9">
                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-leo/10 p-3 rounded-full">
                      <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">April 25-27, 2025</h3>
                      <p className="text-gray-600">Plaksha University</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Selected participants will present their work to senior faculty members from India's leading academic institutions.
                    Open to Faculty, Post-docs and PhD Candidates.
                  </p>
                </div>

                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <svg className="w-5 h-5 text-leo mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Important Dates
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700 bg-leo/5 p-3 rounded-lg">
                      <span className="w-40 font-medium">Submission Deadline:</span>
                      <span className="font-medium text-leo">February 28, 2025</span>
                    </li>
                    <li className="flex items-center text-gray-700 bg-leo/5 p-3 rounded-lg">
                      <span className="w-40 font-medium">Notification:</span>
                      <span className="font-medium text-leo">March 15, 2025</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
              <div className="bg-white/70 p-6 rounded-lg shadow-sm flex flex-col items-center">
                  <h3 className="font-semibold mb-4">Register Now</h3>
                  <Image
                    src='/qr.png'
                    alt='QR Code for Registration'
                    width={180}
                    height={180}
                    className="rounded-lg shadow-md"
                  />
                  <p className="text-sm text-gray-600 mt-4 text-center">Scan to register for the conference</p>
                </div>
                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Conference Topics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {workshopTopics.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 rounded-md bg-leo/5 hover:bg-leo/10 transition-colors">
                        <svg className="w-4 h-4 text-leo flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

               
              </div>
            </div>

           

            {/* Key Takeaways Section */}
            <div className="pt-8 border-t border-leo/10">
              <h3 className="text-xl font-semibold text-center mb-6">Key Conference Takeaways</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/80 p-4 rounded-lg text-center space-y-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto bg-leo/10 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-leo">Knowledge Dissemination</h3>
                  <p className="text-sm text-gray-600">Sharing insights and research findings</p>
                </div>
                
                <div className="bg-white/80 p-4 rounded-lg text-center space-y-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-leo/10 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-leo">Data-Driven</h3>
                <p className="text-sm text-gray-600">Evidence-based research approaches</p>
              </div>
              
              <div className="bg-white/80 p-4 rounded-lg text-center space-y-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-leo/10 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-leo">Industry Connect</h3>
                <p className="text-sm text-gray-600">Bridging academia and industry</p>
              </div>
              
              <div className="bg-white/80 p-4 rounded-lg text-center space-y-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-leo/10 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-leo">Academic Research</h3>
                <p className="text-sm text-gray-600">Cutting-edge economic studies</p>
              </div>
              </div>
            </div>
            {/* Proud Partners Section */}
            <div className="pt-8 border-t border-leo/10">
              <h3 className="text-xl font-semibold text-center mb-6">Proud Partners</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 p-6 rounded-lg text-center space-y-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative w-48 h-48 mx-auto">
                    <Image
                      src="/leo.png"
                      alt="LEO Lab Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-leo">LEO Lab</h4>
                  <p className="text-sm text-gray-600">Lab for Economic Behaviour in Organizations - Pioneering research in organizational economics and behavioral science</p>
                </div>

                <div className="bg-white/80 p-6 rounded-lg text-center space-y-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative w-48 h-48 mx-auto">
                    <Image
                      src="/tef.jpeg"
                      alt="TEF Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-leo">The Employability Foundation (TEF)</h4>
                  <p className="text-sm text-gray-600">Empowering workforce development through innovative research and practical solutions</p>
                </div>
              </div>
            </div>
          </div>

        </div>
        

        {/* Previous Workshop Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
          <div className="bg-leo/5 p-4 sm:p-8 md:p-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-leo">Our Previous Workshop</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">LEO Lab Workshop Series 2023: Exploring Economic Behavior and Organizational Dynamics</p>

            {/* Photo Carousel */}
            <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-between z-10 px-2 md:px-4">
                <button
                  onClick={prevSlide}
                  className="bg-leo/30 hover:bg-leo/50 text-white p-2 md:p-3 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 md:h-7 md:w-7" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-leo/30 hover:bg-leo/50 text-white p-2 md:p-3 rounded-full transition-colors"
                >
                  <ChevronRight className="h-5 w-5 md:h-7 md:w-7" />
                </button>
              </div>
              <div className="relative h-full overflow-hidden">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-500 transform ${
                      index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Workshop Details Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-leo/10 p-3 rounded-full">
                      <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">December 2023</h3>
                      <p className="text-gray-600">Plaksha University</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      Faculty members and researchers from leading institutions participated in this collaborative workshop.
                    </p>
                  </div>
                </div>

                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Key Topics Covered</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {["Economic Behavior in Organizations", "Personnel Economics Research", "Data Science in Economics", "Behavioral Economics Applications"].map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 rounded-md bg-leo/5 hover:bg-leo/10 transition-colors">
                        <svg className="w-4 h-4 text-leo flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Highlights</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The workshop series brought together researchers and practitioners
                    to discuss innovative approaches in economic behavior and organizational
                    decision-making. Sessions included keynote presentations and collaborative
                    research discussions.
                  </p>
                </div>

                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Outcomes</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-leo/5 rounded-lg">
                      <div className="bg-leo/10 p-2 rounded-full">
                        <svg className="w-5 h-5 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Cutting-edge research exploration in personnel economics</p>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-leo/5 rounded-lg">
                      <div className="bg-leo/10 p-2 rounded-full">
                        <svg className="w-5 h-5 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Valuable connections and networking opportunities</p>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-leo/5 rounded-lg">
                      <div className="bg-leo/10 p-2 rounded-full">
                        <svg className="w-5 h-5 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Future collaboration opportunities identified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopPage;
