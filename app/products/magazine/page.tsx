'use client';
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import Link from 'next/link';
import { assetPath } from '@/lib/assets';

export default function MagazinePage() {
  return (
    <div className="bg-gray-light min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-leo mb-12">LEO Magazine</h1>

        {/* 2026 Edition */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gradient-to-br from-leo/5 to-blue-50 rounded-xl p-6 flex items-center justify-center">
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-leo mb-2">LEO Magazine</h3>
                  <p className="text-lg text-gray-600">2026 Edition</p>
                  <p className="text-sm text-gray-500 mt-2">Download to read the full magazine</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="bg-leo text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
              <h2 className="text-2xl font-bold text-leo">Second Edition — 2026</h2>
            </div>

            <div className="prose max-w-none">
              <p>
                The second edition of LEO Magazine continues to explore how organizational processes shape individuals and institutions. 
                This edition features fresh perspectives on the Future of Work, cutting-edge economic research, and expert insights 
                from the LEO Economics Conference.
              </p>
            </div>

            <div className="pt-4">
              <Link href="magazine_2026.pdf" target="_blank" download>
                <Button className="bg-leo hover:bg-leo/80 text-white">
                  Download 2026 Magazine PDF
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 mb-16" />

        {/* 2024 Edition */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image 
              src="magazine.png" 
              alt="LEO Magazine Cover 2024" 
              width={500} 
              height={700} 
              className="rounded-lg shadow-lg mx-auto"
            />
          </div>
          
          <div className="flex flex-col justify-center space-y-6">
            <h2 className="text-2xl font-bold text-leo">First Edition — 2024</h2>
            
            <div className="prose max-w-none">
              <p>
                Dive into the first edition of LEO, a magazine from Plaksha University&apos;s Lab for Economic Behaviour in Organisations. 
                This issue explores how organizational processes shape individuals and institutions, offering fresh insights through 
                a blend of research and expert perspectives.
              </p>
              
              <h3 className="text-xl font-semibold mt-4">Key Highlights:</h3>
              
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Researcher&apos;s Notes:</strong> Articles on rethinking hiring strategies in higher education, 
                  leveraging surveys to gauge organizational health, the dynamics of performance incentives and motivation, 
                  and an analysis of malnutrition determinants in India.
                </li>
                <li>
                  <strong>Through the Looking Glass:</strong> A look at Plaksha&apos;s &quot;Create Culture,&quot; reflecting the university&apos;s core values.
                </li>
                <li>
                  <strong>Interview Spotlight:</strong> Conversations with Nobel laureate Dr. David Card on labor economics and 
                  institution-building, and Dr. Oliver Vanden Eynde on the economics of conflict in India.
                </li>
              </ul>
              
              <p className="mt-4">
                Join us in uncovering actionable solutions to today&apos;s institutional challenges—download the full magazine for in-depth details!
              </p>
            </div>
            
            <div className="pt-4">
              <Link href="magazine_2024.pdf" target="_blank" download>
                <Button className="bg-leo hover:bg-leo/80 text-white">
                  Download 2024 Magazine PDF
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
                  <li><strong>Chaitanya Modi</strong> - Class of &apos;26, Editor-in-chief</li>
                  <li><strong>Tanushi Khandelwal</strong> - Class of &apos;26, Co-editor and lead designer</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-3">Contributors</h3>
                <ul className="space-y-2">
                  <li>Sakarth Brar (Class of &apos;26)</li>
                  <li>Vijeta Raghuvanshi (Class of &apos;26)</li>
                  <li>Arman Ghosh (Class of &apos;26)</li>
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
