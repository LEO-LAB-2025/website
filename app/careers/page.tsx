'use client';
import { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import careers from "@/data/careers.json";

export default function CareersPage() {
  const [selectedType, setSelectedType] = useState<string>('all');

  const filteredPositions = selectedType === 'all'
    ? careers.positions
    : careers.positions.filter(position => position.type === selectedType);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold">Careers at LEO Lab</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join our team of researchers and contribute to groundbreaking work in economic behavior and organizational studies.
          </p>
        </div>

        <div className="flex items-center gap-3 md:gap-4 mb-8">
          <Briefcase className="h-8 w-8 md:h-12 md:w-12 text-leo" />
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Open Positions</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPositions.map((position) => (
            <Card key={position.id} className="bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <p className="text-gray-600">{position.type} · {position.location}</p>
                  </div>

                  <p className="text-gray-700">{position.description}</p>

                  <div>
                    <h4 className="font-medium mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {position.responsibilities.map((resp, index) => (
                        <li key={index}>{resp}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-gray-700 space-y-1">
                      {position.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">
                      Application Deadline: {new Date(position.deadline).toLocaleDateString()}
                    </p>
                    <Button className="w-full bg-leo text-white hover:bg-leo/90">
                      Apply Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}