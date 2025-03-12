'use client';
import { useState, useRef } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollText, Presentation, BookOpen, FileText, Award, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
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

const sponsorshipDetails = [
  {
    benefit: 'A short introduction about your organisation & its objectives during the conference',
    silver: true,
    gold: true,
  },
  {
    benefit: 'Logo featured prominently on event banners and backdrops between sessions',
    silver: true,
    gold: true,
  },
  {
    benefit: 'Logo placed prominently on conference website & social media posts',
    silver: true,
    gold: true,
  },
  {
    benefit: 'Acknowledgement in opening and closing sessions by anchor of the conference',
    silver: true,
    gold: true,
  },
  {
    benefit: 'Opportunity to distribute branded goodies to attendees',
    silver: true,
    gold: true,
  },
  {
    benefit: 'No registration fees for upto 2 delegates',
    silver: false,
    gold: true,
  },
  {
    benefit: '45 minutes panel discussion led by upto 2 delegates and a faculty member',
    silver: false,
    gold: true,
  },
  {
    benefit: '2N / 3D stay at a 5 star hotel for upto 2 delegates',
    silver: false,
    gold: true,
  },
  {
    benefit: 'Full access to all conference events, including the Gala dinner with the attendees for the 2 delegates',
    silver: false,
    gold: true,
  },
  {
    benefit: 'Opportunity to host and share a new Call for Papers post-conference with the LEO lab faculty affiliates',
    silver: false,
    gold: true,
  },
];

// PaperCarousel component for displaying papers with navigation
const PaperCarousel = ({ papers, imageUrl }: { papers: Paper[], imageUrl?: string }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const papersPerPage = 2; // Show only 2 papers at a time on desktop
  const totalPages = Math.ceil(papers.length / papersPerPage);

  const goToNextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const goToPrevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentPapers = papers.slice(
    currentPage * papersPerPage,
    (currentPage + 1) * papersPerPage
  );

  return (
    <div className="relative">
      <div className="grid gap-8 md:grid-cols-2">
        {currentPapers.map((paper) => (
          <Card key={paper.id} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
            {imageUrl && (
              <div className="relative h-48 w-full">
                <Image
                  src={imageUrl}
                  alt={paper.title}
                  fill
                  className="object-cover"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            )}
            <CardContent className="p-6 space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{paper.title}</h3>
                <p className="text-sm text-gray-600">
                  {paper.authors.join(', ')}
                </p>
                {paper.conference && (
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Conference:</span> {paper.conference}
                  </p>
                )}
                {paper.location && (
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Location:</span> {paper.location}
                  </p>
                )}
                {paper.date && (
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Date:</span> {new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
                  </p>
                )}
                {paper.year && (
                  <p className="text-sm text-gray-600">
                    <span className="font-medium">{paper.conference ? '' : (paper.year === '2024' ? 'Year:' : 'Expected Year:')}</span> {paper.year}
                  </p>
                )}
              </div>
              <p className="text-sm text-gray-700">{paper.abstract}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Navigation controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-4">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={goToPrevPage}
            className="rounded-full h-10 w-10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <div className="flex items-center space-x-1">
            {Array.from({ length: totalPages }).map((_, index) => (
              <span 
                key={index} 
                className={`h-2 w-2 rounded-full ${currentPage === index ? 'bg-leo' : 'bg-gray-300'}`}
              />
            ))}
          </div>
          <Button 
            variant="outline" 
            size="icon" 
            onClick={goToNextPage}
            className="rounded-full h-10 w-10"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  );
};

const ResearchPage: NextPage = () => {
  const [sponsorFormData, setSponsorFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    sponsorshipTier: '',
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
        setSponsorFormData({ name: '', email: '', companyName: '', sponsorshipTier: '', message: '' });
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

        {/* Conference Papers Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <Presentation className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Papers Presented at Conferences</h2>
          </div>

          {researchPapers.conferencePapers.length > 0 ? (
            <PaperCarousel 
              papers={researchPapers.conferencePapers}
              imageUrl="/2.jpeg" 
            />
          ) : (
            <p className="text-gray-500 text-center py-8">No conference papers available at this time.</p>
          )}
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

        {/* Conference Sponsorship Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <Award className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Conference Sponsorship</h2>
          </div>
          
          <div className="text-center mb-8">
            <p className="text-lg md:text-xl max-w-3xl mx-auto">
              Support the LEO Conference and showcase your organization's commitment to economic research and innovation.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-left">Conference Sponsorship</th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-center">Silver Sponsor (4 Lakhs)</th>
                  <th className="px-4 py-2 border-b border-gray-200 bg-gray-100 text-center">Gold Sponsor (5 Lakhs)</th>
                </tr>
              </thead>
              <tbody>
                {sponsorshipDetails.map((detail, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="px-4 py-2 border-b border-gray-200 text-left">{detail.benefit}</td>
                    <td className="px-4 py-2 border-b border-gray-200 text-center">
                      {detail.silver && <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />}
                    </td>
                    <td className="px-4 py-2 border-b border-gray-200 text-center">
                      {detail.gold && <CheckCircle className="h-5 w-5 text-green-500 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Sponsorship Contact Form */}
        <div className="mt-12 max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-6">
              <div className="mb-6 text-center space-y-2">
                <h3 className="text-xl font-semibold">Become a Conference Sponsor</h3>
                <p className="text-gray-600">If you're interested in sponsoring our conference, please fill out the form below. Our team will contact you with more details.</p>
              </div>
              {sponsorMessage.text && (
                <div className={`mb-4 p-3 rounded ${
                  sponsorMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {sponsorMessage.text}
                </div>
              )}
              <form onSubmit={handleSponsorSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="sponsorName" className="block text-sm font-medium">Name</label>
                  <Input
                    id="sponsorName"
                    name="name"
                    value={sponsorFormData.name}
                    onChange={handleSponsorInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="sponsorEmail" className="block text-sm font-medium">Email</label>
                  <Input
                    id="sponsorEmail"
                    name="email"
                    type="email"
                    value={sponsorFormData.email}
                    onChange={handleSponsorInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="companyName" className="block text-sm font-medium">Company/Organization Name</label>
                  <Input
                    id="companyName"
                    name="companyName"
                    value={sponsorFormData.companyName}
                    onChange={handleSponsorInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="sponsorshipTier" className="block text-sm font-medium">Sponsorship Tier</label>
                  <select
                    id="sponsorshipTier"
                    name="sponsorshipTier"
                    value={sponsorFormData.sponsorshipTier}
                    onChange={handleSponsorInputChange}
                    className="w-full px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Select a sponsorship tier</option>
                    <option value="silver">Silver Sponsor (4 Lakhs)</option>
                    <option value="gold">Gold Sponsor (5 Lakhs)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="sponsorMessage" className="block text-sm font-medium">Message (Optional)</label>
                  <textarea
                    id="sponsorMessage"
                    name="message"
                    value={sponsorFormData.message}
                    onChange={handleSponsorInputChange}
                    className="w-full min-h-[100px] px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-leo hover:bg-leo/90"
                  disabled={isSponsorSubmitting}
                >
                  {isSponsorSubmitting ? 'Submitting...' : 'Submit Sponsorship Interest'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;