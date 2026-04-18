'use client';
import { useState } from 'react';
import type { NextPage } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { BookOpen, FileText, ChevronLeft, ChevronRight } from 'lucide-react';
import researchPapers from '@/data/research-papers.json';

interface Paper {
  id: string;
  title: string;
  authors: string[];
  conference?: string;
  location?: string;
  date?: string;
  year?: string;
  abstract: string;
}

const ResearchPage: NextPage = () => {

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-leo mb-12">Research</h1>

        {/* Working Papers Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <BookOpen className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Working Papers</h2>
          </div>

          <PaperCarousel papers={researchPapers.workingPapers} />
        </section>

        {/* Works in Progress Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <FileText className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Works in Progress</h2>
          </div>
          <PaperCarousel papers={researchPapers.worksInProgress} />
        </section>
      </div>
    </div>
  );
};

// Paper Carousel Component
const PaperCarousel = ({ papers }: { papers: Paper[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPapers = papers.length;
  
  const nextPaper = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPapers);
  };
  
  const prevPaper = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPapers) % totalPapers);
  };
  
  if (papers.length === 0) {
    return <p className="text-center text-gray-500">No papers available</p>;
  }
  
  const currentPaper = papers[currentIndex];
  
  return (
    <div className="relative">
      <Card className="bg-white shadow-md">
        <CardContent className="p-6">
          <h3 className="text-xl font-bold mb-2">{currentPaper.title}</h3>
          <p className="text-sm text-gray-600 mb-4">
            {currentPaper.authors.join(', ')} 
            {currentPaper.year && ` (${currentPaper.year})`}
            {currentPaper.conference && ` - ${currentPaper.conference}`}
          </p>
          <p className="text-gray-700">{currentPaper.abstract}</p>
        </CardContent>
      </Card>
      
      <div className="flex justify-between mt-4">
        <Button 
          variant="outline" 
          size="icon" 
          onClick={prevPaper}
          className="rounded-full"
          aria-label="Previous paper"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <div className="text-sm text-gray-500">
          {currentIndex + 1} of {totalPapers}
        </div>
        <Button 
          variant="outline" 
          size="icon" 
          onClick={nextPaper}
          className="rounded-full"
          aria-label="Next paper"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ResearchPage;