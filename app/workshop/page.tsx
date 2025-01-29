'use client'
import type { NextPage } from 'next';
import Image from "next/image";
import { useState } from 'react';

const WorkshopPage: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    { src: "/vercel.svg", alt: "Workshop session 1" },
    { src: "/next.svg", alt: "Workshop session 2" },
    { src: "/vercel.svg", alt: "Workshop session 3" }
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
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-8 md:p-12 space-y-6 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold text-center mb-8">Call for Papers</h2>
          
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            <div className="w-full md:w-1/2 space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Workshop on Advanced Machine Learning</h3>
                <p className="text-gray-700">
                  Join us for an exciting workshop focused on the latest developments in machine learning.
                  We invite researchers and practitioners to submit papers on innovative approaches and applications.
                </p>
              </div>
              
              <div className="space-y-2">
                <p className="font-medium">Important Dates:</p>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Submission Deadline: March 15, 2024</li>
                  <li>Notification: April 1, 2024</li>
                  <li>Workshop Date: May 1-2, 2024</li>
                </ul>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Submission Guidelines:</p>
                <p className="text-gray-700">
                  Papers should be 6-8 pages in IEEE format. Submit through the QR code or visit our submission portal.
                </p>
              </div>
            </div>

            <div className="w-48 h-48 relative bg-white p-4 rounded-lg shadow-md">
              <Image
                src="/vercel.svg"
                alt="Submission QR Code"
                fill
                className="object-contain p-2"
              />
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
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
              >
                ←
              </button>
              <button
                onClick={nextSlide}
                className="bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity"
              >
                →
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
            <h3 className="text-xl font-semibold">Machine Learning Fundamentals Workshop 2023</h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Event Details</h4>
                  <div className="text-gray-700 space-y-2">
                    <p>Date: December 15-16, 2023</p>
                    <p>Location: Virtual Event</p>
                    <p>Participants: 150+ researchers and practitioners</p>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Key Topics Covered</h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    <li>Deep Learning Architecture Design</li>
                    <li>Natural Language Processing</li>
                    <li>Computer Vision Applications</li>
                    <li>Ethical AI Development</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Highlights</h4>
                  <p className="text-gray-700">
                    The workshop featured keynote speeches from leading researchers,
                    interactive sessions, and hands-on tutorials. Participants engaged
                    in discussions about the latest trends and challenges in machine learning.
                  </p>
                </div>

                <div>
                  <h4 className="font-medium mb-2">Outcomes</h4>
                  <p className="text-gray-700">
                    Participants gained practical insights into implementing machine
                    learning solutions, established valuable connections, and contributed
                    to the advancement of the field through collaborative discussions.
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
