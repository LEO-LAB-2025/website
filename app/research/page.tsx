'use client';
import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollText, Presentation, Coins, BookOpen, FileText, Award } from 'lucide-react';
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

interface FundingProject {
  id: string;
  title: string;
  description: string;
  fundingNeeded: string;
  duration: string;
  principalInvestigator: string;
}

interface ResearchPapers {
  conferencePapers: Paper[];
  workingPapers: Paper[];
  worksInProgress: Paper[];
  fundingProjects: FundingProject[];
}


const ResearchPage: NextPage = () => {
  // Form Data States
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });

  const [sponsorFormData, setSponsorFormData] = useState({
    name: '',
    email: '',
    companyName: '',
    sponsorshipTier: '',
    message: ''
  });

  // Loading States
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSponsorSubmitting, setIsSponsorSubmitting] = useState(false);

  // Message States
  const [message, setMessage] = useState({ type: '', text: '' });
  const [sponsorMessage, setSponsorMessage] = useState({ type: '', text: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch('/api/research-funding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage({ type: 'success', text: 'Form submitted successfully!' });
        setFormData({ name: '', email: '', organization: '', message: '' });
      } else {
        setMessage({ type: 'error', text: data.error || 'Something went wrong' });
      }
    } catch (error) {
      setMessage({ type: 'error', text: 'Failed to submit form' });
    } finally {
      setIsSubmitting(false);
    }
  };

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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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

          <div className="grid gap-8 md:grid-cols-2">
            {(researchPapers?.conferencePapers || []).map((paper: Paper) => (
              <Card key={paper.id} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/2.jpeg"
                    alt={paper.title}
                    fill
                    className="object-cover"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <CardContent className="p-6 space-y-4 ">
                  <div className="space-y-2 ">
                    <h3 className="text-xl font-semibold">{paper.title}</h3>
                    <p className="text-sm text-gray-600">
                      {paper.authors.join(', ')}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Conference:</span> {paper.conference}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Location:</span> {paper.location}
                    </p>
                    <p className="text-sm text-gray-700">
                        <span className="font-medium">Date:</span> {paper.date ? new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' }) : 'N/A'}
                    </p>
                  </div>

                  <p className="text-sm text-gray-700">{paper.abstract}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Working Papers Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <BookOpen className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Working Papers</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {researchPapers.workingPapers.map((paper) => (
              <Card key={paper.id} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{paper.title}</h3>
                    <p className="text-sm text-gray-600">
                      {paper.authors.join(', ')}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Year:</span> {paper.year}
                    </p>
                  </div>

                  <p className="text-sm text-gray-700">{paper.abstract}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Works in Progress Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <FileText className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Works in Progress</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {researchPapers.worksInProgress.map((paper) => (
              <Card key={paper.id} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{paper.title}</h3>
                    <p className="text-sm text-gray-600">
                      {paper.authors.join(', ')}
                    </p>
                    <p className="text-sm text-gray-600">
                      <span className="font-medium">Expected Year:</span> {paper.year}
                    </p>
                  </div>

                  <p className="text-sm text-gray-700">{paper.abstract}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Funding Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <Coins className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Call for Funding</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {researchPapers.fundingProjects.map((project) => (
              <Card key={project.id} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-700">{project.description}</p>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Funding Needed:</span> {project.fundingNeeded}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Duration:</span> {project.duration}
                    </p>
                    <p className="text-sm text-gray-700">
                      <span className="font-medium">Principal Investigator:</span> {project.principalInvestigator}
                    </p>
                  </div>

                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Project ID:</span> #{project.id}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
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

          <div className="grid gap-8 md:grid-cols-3">
            {/* Partner Sponsor */}
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow border-t-4 border-blue-400">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-blue-600">Partner Sponsor</h3>
                  <div className="text-2xl font-bold">₹1,00,000</div>
                </div>

                <div className="space-y-3 pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Logo placement on the conference website and select materials</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Acknowledgment in the opening and closing sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Social media mention as a Partner Sponsor</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Impact Sponsor */}
            <Card className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow transform md:scale-105 border-t-4 border-purple-500">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-purple-600">Impact Sponsor</h3>
                  <div className="text-2xl font-bold">₹3,00,000</div>
                </div>

                <div className="space-y-3 pt-4">
                  <p className="text-sm text-gray-600 italic">All benefits of Partner Sponsor, plus:</p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Logo featured prominently on event banners and backdrops</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Dedicated mention in key conference sessions</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Opportunity to distribute branded materials to attendees</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Leadership Sponsor */}
            <Card className="bg-gradient-to-br from-gray-50 to-amber-50 hover:shadow-lg transition-shadow border-t-4 border-amber-500">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold text-amber-600">Leadership Sponsor</h3>
                  <div className="text-2xl font-bold">₹5,00,000</div>
                </div>

                <div className="space-y-3 pt-4">
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Exclusive branding as the Leadership Sponsor across all event communications</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Prime logo placement on all event materials and stage backdrops</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Speaking opportunity in the opening session</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-amber-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>Featured profile on the conference website and brochure</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

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
                      <option value="partner">Partner Sponsor (₹1,00,000)</option>
                      <option value="impact">Impact Sponsor (₹3,00,000)</option>
                      <option value="leadership">Leadership Sponsor (₹5,00,000)</option>
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
        </section>

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-6">
              <div className="mb-6 text-center space-y-2">
                <h3 className="text-xl font-semibold">Express Interest in Project Funding</h3>
                <p className="text-gray-600">If you're interested in funding any of our research projects, please fill out the form below. Make sure to include the Project ID from the project you're interested in.</p>
              </div>
              {message.text && (
                <div className={`mb-4 p-3 rounded ${
                  message.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                }`}>
                  {message.text}
                </div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">Name</label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">Email</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="organization" className="block text-sm font-medium">Organization</label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full min-h-[100px] px-3 py-2 rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-leo hover:bg-leo/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Interest'}
                </Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ResearchPage;