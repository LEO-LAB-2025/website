'use client';
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, ScrollText, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { assetPath } from '@/lib/assets';

const carouselImages = [
  { src: assetPath("/h4.JPG"), alt: "LEO Lab Research Activities 1" },
  { src: assetPath("/2.jpeg"), alt: "LEO Lab Workshop Session" },
  { src: assetPath("/h1.JPG"), alt: "LEO Lab Team" },
  { src: assetPath("/h2.JPG"), alt: "LEO Lab Conference Session" },
  { src: assetPath("/h3.JPG"), alt: "LEO Lab Panel Discussion" }
];

const workshopTopics = [
  "Future of Work",
  "Labour Economics",
  "Personnel Economics",
  "Behavioural Economics",
  "Development Economics",
  "Big Data & ML",
  "Environmental Economics",
  "Gig & Platform Economics",
  "Gender Economics",
  "Finance & Sustainability",
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gray-light min-h-screen">
      {/* Full-width Carousel */}
      <div className="relative w-full h-[60vh] mb-12">
        {carouselImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute inset-x-0 bottom-8 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">LEO Lab</h1>
          <p className="text-xl md:text-2xl">Lab for Economic Behaviour in Organizations</p>
        </div>
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-leo/30 hover:bg-leo/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % carouselImages.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white p-2 rounded-full transition-colors"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      <div className="container mx-auto px-4 lg:px-8">
        {/* About LEO Lab */}
        <section className="mb-16 md:mb-24">
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-leo">About LEO Lab</h2>
              <div className="space-y-4 text-lg">
                <p>
                  The newly established lab at Plaksha University, LEO (Lab for Economic Behavior in Organizations), 
                  facilitates research into the science of hiring in organizations, combining economics with data science 
                  to make insightful hiring decisions for organizations.
                </p>
                <p>
                  LEO's vision is to innovate in and learn from the latest scientific advances in personnel, behavioral, 
                  experimental and organizational economics, offering insights to address grand challenges.
                </p>
                
                <Link href="/about" className="mt-6 block">
                  <Button variant="outline" className="border-leo text-leo hover:bg-leo hover:text-white">Learn More</Button>
                </Link>
                
              </div>
            </CardContent>
          </Card>
        </section>

        {/* LEO Conference 2026 Banner */}
        <section className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <BookOpen className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-leo-dark">The LEO Economics Conference 2026</h2>
          </div>

          <Card className="bg-gradient-to-br from-gray-50 to-gray-100 overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                {/* Poster */}
                <div className="relative aspect-[3/4] md:aspect-auto">
                  <Image
                    src={assetPath("/leo_poster_2026.png")}
                    alt="LEO Economics Conference 2026 Call for Papers Poster"
                    fill
                    className="object-contain p-4"
                  />
                </div>
                {/* Info */}
                <div className="p-8 md:p-12 space-y-6">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2 text-leo">April 24–26, 2026</h3>
                    <p className="text-lg text-gray-600">Plaksha University, Mohali</p>
                    <p className="text-md text-gray-500 mt-2 font-medium">Theme: Future of Work</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Selected participants will present their work to senior faculty members from India&apos;s leading academic institutions</p>
                    <p className="text-sm text-gray-600">Open to Faculty, Post-docs and PhD Candidates</p>
                  </div>
                  <div className="space-y-2">
                    <p className="font-medium">Conference: April 24–26, 2026</p>
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

                  <div className="flex flex-wrap gap-3 pt-4">
                    <Link href="/workshop">
                      <Button variant="outline" className="border-leo text-leo hover:bg-leo hover:text-white">View Full Schedule</Button>
                    </Link>
                    <Button
                      className="bg-leo hover:bg-leo/90 text-white"
                      onClick={() => window.open('https://rzp.io/rzp/YQbvtuN', '_blank')}
                    >
                      Register Now <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Research Highlights */}
        <section className="mb-16 md:mb-24">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <ScrollText className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-leo-dark">Research Highlights</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-leo">Latest Publications</h3>
                <p className="text-gray-700 mb-6">Explore our recent research publications in personnel economics, behavioral science, and organizational development.</p>
                <Link href="/research">
                  <Button variant="outline" className="border-leo text-leo hover:bg-leo hover:text-white">View Publications</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <h3 className="text-xl font-semibold mb-4 text-leo">Research Areas</h3>
                <p className="text-gray-700 mb-6">Our research focuses on the intersection of economics, data science, and organizational behavior to improve hiring decisions and workplace productivity.</p>
                <Link href="/research">
                  <Button variant="outline" className="border-leo text-leo hover:bg-leo hover:text-white">Learn More</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
