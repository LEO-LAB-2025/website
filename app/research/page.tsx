'use client';
import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollText, Presentation, BookOpen, FileText, Award, ChevronLeft, ChevronRight } from 'lucide-react';
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

interface ResearchPapers {
  conferencePapers: Paper[];
  workingPapers: Paper[];
  worksInProgress: Paper[];
}



const ResearchPage: NextPage = () => {
  const [sponsorFormData, setSponsorFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    message: ''
  });

  const [isSponsorSubmitting, setIsSponsorSubmitting] = useState(false);

  const [sponsorMessage, setSponsorMessage] = useState({ type: '', text: '' });

  const handleSponsorSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSponsorSubmitting(true);
    setSponsorMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/conference-sponsorship', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sponsorFormData),
      });

      const data = await response.json();

      if (response.ok) {
        setSponsorMessage({ type: 'success', text: 'Form submitted successfully!' });
        setSponsorFormData({ name: '', email: '', companyName: '', message: '' });
      } else {
        setSponsorMessage({ type: 'error', text: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setSponsorMessage({ type: 'error', text: 'Failed to submit form' });
    } finally {
      setIsSponsorSubmitting(false);
    }
  };

  const handleSponsorInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setSponsorFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-leo mb-12">Research</h1>

        {/* Conference Sponsorship Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <Award className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Conference Sponsorship</h2>
          </div>
          
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-leo mb-4">Support Economic Research Excellence</h3>
            <p className="text-lg max-w-3xl mx-auto text-gray-700">
              Join us in advancing economic research and innovation. Your sponsorship helps foster groundbreaking research and meaningful discussions at the LEO Conference.
            </p>
          </div>

          {/* Sponsorship Form */}
          <div className="max-w-2xl mx-auto mt-12">
            <Card className="bg-gradient-to-br from-white to-gray-50 shadow-xl">
              <CardContent className="p-6 sm:p-8">
                <div className="mb-6 sm:mb-8 text-center space-y-3">
                  <h3 className="text-xl sm:text-2xl font-bold text-leo">Become a Sponsor</h3>
                  <p className="text-sm sm:text-base text-gray-600">Fill out the form below to express your interest in sponsoring. Our team will reach out with more details.</p>
                </div>
                {sponsorMessage.text && (
                  <div className={`mb-6 p-4 rounded-lg ${
                    sponsorMessage.type === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'
                  }`}>
                    {sponsorMessage.text}
                  </div>
                )}
                <form onSubmit={handleSponsorSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-1.5">
                      <label htmlFor="sponsorName" className="block text-sm font-medium text-gray-700">Name</label>
                      <Input
                        id="sponsorName"
                        name="name"
                        value={sponsorFormData.name}
                        onChange={handleSponsorInputChange}
                        className="w-full"
                        required
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="sponsorEmail" className="block text-sm font-medium text-gray-700">Email</label>
                      <Input
                        id="sponsorEmail"
                        name="email"
                        type="email"
                        value={sponsorFormData.email}
                        onChange={handleSponsorInputChange}
                        className="w-full"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="companyName" className="block text-sm font-medium text-gray-700">Company/Organization Name</label>
                    <Input
                      id="companyName"
                      name="companyName"
                      value={sponsorFormData.companyName}
                      onChange={handleSponsorInputChange}
                      className="w-full"
                      required
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="sponsorMessage" className="block text-sm font-medium text-gray-700">Additional Message (Optional)</label>
                    <textarea
                      id="sponsorMessage"
                      name="message"
                      value={sponsorFormData.message}
                      onChange={handleSponsorInputChange}
                      className="w-full min-h-[100px] px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-leo resize-none"
                      placeholder="Any specific requirements or questions..."
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-leo hover:bg-leo/90 transition-colors py-3 sm:py-6 text-base sm:text-lg font-semibold"
                    disabled={isSponsorSubmitting}
                  >
                    {isSponsorSubmitting ? 'Submitting...' : 'Submit Sponsorship Interest'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

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