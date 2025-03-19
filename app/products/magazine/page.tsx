'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';

export default function MagazinePage() {
  return (
    <div className="bg-gray-light min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-leo mb-12">LEO Magazine</h1>
        
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image 
              src="/magazine.png" 
              alt="LEO Magazine Cover" 
              width={500} 
              height={700} 
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-bold text-leo">First Edition - 2024</h2>
            
            <div className="prose max-w-none">
              <p>
                Dive into the first edition of LEO, a magazine from Plaksha University's Lab for Economic Behaviour in Organisations. 
                This issue explores how organizational processes shape individuals and institutions, offering fresh insights through 
                a blend of research and expert perspectives.
              </p>
              
              <h3 className="text-xl font-semibold mt-4">Key Highlights:</h3>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Researcher's Notes:</strong> Articles on rethinking hiring strategies in higher education, 
                  leveraging surveys to gauge organizational health, the dynamics of performance incentives and motivation, 
                  and an analysis of malnutrition determinants in India.
                </li>
                <li>
                  <strong>Through the Looking Glass:</strong> A look at Plaksha's "Create Culture," reflecting the university's core values.
                </li>
                <li>
                  <strong>Interview Spotlight:</strong> Conversations with Nobel laureate Dr. David Card on labor economics and 
                  institution-building, and Dr. Oliver Vanden Eynde on the economics of conflict in India.
                </li>
              </ul>
              
              <p className="mt-4">
                Join us in uncovering actionable solutions to today's institutional challenges—download the full magazine for in-depth details!
              </p>
            </div>
            
            <div className="pt-4">
              <Link href="/magazine_2024.pdf" target="_blank" download>
                <Button className="bg-leo hover:bg-leo/80 text-white">
                  Download Magazine PDF
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        <Card className="bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold text-leo mb-6">Credits</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-3">Editorial Team</h3>
                <ul className="space-y-2">
                  <li><strong>Prof. Prakarsh Singh</strong> - Director, Lab for Economic behaviour in Organisations</li>
                  <li><strong>Chaitanya Modi</strong> - Class of '26, Editor-in-chief</li>
                  <li><strong>Tanushi Khandelwal</strong> - Class of '26, Co-editor and lead designer</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Contributors</h3>
                <ul className="space-y-2">
                  <li>Sakarth Brar (Class of '26)</li>
                  <li>Vijeta Raghuvanshi (Class of '26)</li>
                  <li>Arman Ghosh (Class of '26)</li>
                </ul>
                
                <h3 className="text-lg font-semibold mt-6 mb-3">Special Thanks</h3>
                <p>Anshika Arora, Teaching fellow at Plaksha University</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}