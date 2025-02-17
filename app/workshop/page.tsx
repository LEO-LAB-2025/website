'use client'
import type { NextPage } from 'next';
import Image from "next/image";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const WorkshopPage: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    { src: "/1.jpeg", alt: "LEO Lab Research Activities" },
    { src: "/2.jpeg", alt: "LEO Lab Workshop Session" },
    { src: "/3.jpeg", alt: "LEO Lab Team" },
    { src: "/4.png", alt: "LEO Lab Team" }
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
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Workshops</h1>

        {/* Call for Papers Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 md:p-12 space-y-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">The LEO Economics Conference</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="w-full md:w-2/3 space-y-6">
              <div className="flex justify-between items-start space-x-8">
                <div className="space-y-4">
                  <div className='flex flex-col'>
                    <div className='flex-col'>
                      <p className="text-xl font-semibold mb-2">April 25-27, 2025</p>
                      <p className="text-lg">Plaksha University</p>
                    </div>
                    <p className="text-gray-700">
                      Selected participants will present their work to senior faculty members from India's leading academic institutions.
                      Open to Faculty, Post-docs and PhD Candidates.
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <p className="font-medium">Important Dates:</p>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      <li>Submission Deadline: February 28, 2025</li>
                      <li>Notification of Acceptance: March 15, 2025</li>
                    </ul>
                  </div>
                </div>
                
                <div className="flex-shrink-0">
                  <Image
                    src='/qr.png'
                    alt='qr code'
                    width={200}
                    height={200}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold">Topics Include:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {workshopTopics.map((topic, index) => (
                    <div key={index} className="bg-white/60 p-2 rounded-md text-sm">
                      {topic}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Previous Workshop Section */}
        <div className="space-y-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Our Previous Workshop</h2>
          
          {/* Photo Carousel */}
          <div className="relative w-full aspect-video max-w-4xl mx-auto mb-8">
            <div className="absolute inset-0 flex items-center justify-between z-10 px-4">
              <button
                onClick={prevSlide}
                className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={nextSlide}
                className="bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>
            
            <div className="relative h-full overflow-hidden rounded-xl">
              {carouselImages.map((image, index) => (
                <div
                  key={index}
                  className={`absolute inset-0 transition-transform duration-500 transform ${index === currentSlide ? 'translate-x-0' : 'translate-x-full'}`}
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

          {/* Workshop Details */}
          <div className="max-w-4xl mx-auto space-y-6 bg-white rounded-xl p-8 shadow-sm">
            <h3 className="text-xl font-semibold">LEO Lab Workshop Series 2023</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Event Details</h4>
                  <div className="text-gray-700 space-y-2">
                    <p>Date: December 2023</p>
                    <p>Location: Plaksha University</p>
                    <p>Participants: Faculty members and researchers from leading institutions</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Key Topics Covered</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Economic Behavior in Organizations</li>
                    <li>Personnel Economics Research</li>
                    <li>Data Science in Economics</li>
                    <li>Behavioral Economics Applications</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Highlights</h4>
                  <p className="text-gray-700">
                    The workshop series brought together researchers and practitioners
                    to discuss innovative approaches in economic behavior and organizational
                    decision-making. Sessions included keynote presentations and collaborative
                    research discussions.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Outcomes</h4>
                  <p className="text-gray-700">
                    Participants explored cutting-edge research in personnel economics
                    and organizational behavior, establishing valuable connections and
                    identifying opportunities for future collaboration.
                  </p>
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
