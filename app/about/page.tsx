'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Building, Users, MapPin } from "lucide-react";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12 text-leo">About Us</h1>

        {/* Logos Section */}
        <section className="flex justify-center gap-12 items-center">
          <div className="relative w-48 h-48">
            {/* Placeholder for LEO Lab logo */}
            <div className="w-full h-full flex items-center justify-center rounded-lg border-2 border-black">
              <Image 
                src="/leo.png"
                alt="LEO Lab Logo"
                width={192}
                height={192}
                className="object-contain"
              />
            </div>
          </div>
          <div className="relative w-48 h-48">
            {/* Placeholder for Plaksha University logo */}
            <div className="w-full h-full flex items-center justify-center rounded-lg border-2 border-black">
              <Image 
                src="/pu.png"
                alt="Plaksha Logo"
                width={192}
                height={192}
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* About LEO Lab Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <Building className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">About LEO Lab</h2>
          </div>

          <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-4 text-lg">
                <p>
                  The Lab for Economic Behavior in Organizations (LEO) is a pioneering research facility
                  established at Plaksha University. Our mission is to advance the understanding of
                  organizational behavior through the lens of economics and data science.
                </p>
                <p>
                  LEO specializes in researching the science of hiring in organizations, combining
                  economic principles with cutting-edge data science to develop innovative approaches
                  to organizational decision-making.
                </p>
                
              </div>
            </CardContent>
          </Card>
        </section>

        {/* About Plaksha University Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <Building className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">About Plaksha University</h2>
          </div>

          <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-4 text-lg">
                <p>
                  Plaksha University is a pioneering institution reimagining technology education
                  for the future. Our unique CREATE framework - Curious, Rigorous, Enterprising,
                  Authentic, Thankful, and Exemplary - forms the foundation of our cultural values.
                </p>
                <p>
                  At Plaksha, we seek bold, imaginative, and passionate thinkers who have a
                  thirst for venturing into the unknown. Our goal is to foster fearless and
                  compassionate global leaders who can drive positive change in the world.
                </p>
                <p>
                  Through innovative programs and research initiatives like LEO Lab, Plaksha
                  University continues to push the boundaries of academic excellence and
                  practical innovation.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Affiliates Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <Users className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our Affiliates</h2>
          </div>

          <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-8 md:p-12">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Placeholder for affiliates - can be populated with actual data later */}
                <div className="p-4 bg-white rounded-lg shadow-sm border-black border-2">
                  <h3 className="text-xl font-semibold mb-2">Research Partners</h3>
                  <p className="text-gray-600">Leading academic institutions and research centers</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border-black border-2">
                  <h3 className="text-xl font-semibold mb-2">Industry Collaborators</h3>
                  <p className="text-gray-600">Organizations partnering in research initiatives</p>
                </div>
                <div className="p-4 bg-white rounded-lg shadow-sm border-black border-2">
                  <h3 className="text-xl font-semibold mb-2">Academic Network</h3>
                  <p className="text-gray-600">Global academic partnerships and collaborations</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Location Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <MapPin className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Our Location</h2>
          </div>

          <Card>
            <CardContent className="p-0 aspect-video">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.102853085538!2d76.72302317615498!3d30.631058774633445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe97919cad48b%3A0xf8f99185e7d5540!2sPlaksha%20University!5e0!3m2!1sen!2sin!4v1738991182835!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}