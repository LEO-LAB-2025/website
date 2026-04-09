'use client';
import { Briefcase } from "lucide-react";

export default function CareersPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-leo">Careers at LEO Lab</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our team of researchers and contribute to groundbreaking work in economic behavior and organizational studies.
          </p>
        </div>

        <div className="flex items-center gap-3 md:gap-4 mb-8">
          <Briefcase className="h-8 w-8 md:h-12 md:w-12 text-leo" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Open Positions</h2>
        </div>

        <div className="text-center py-12 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
          <p className="text-xl text-gray-600">No positions currently open</p>
          <p className="text-gray-500 mt-2">Please check back later for new opportunities</p>
        </div>
      </div>
    </div>
  );
}