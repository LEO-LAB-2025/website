'use client';
import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollText, Presentation, Coins } from 'lucide-react';
import researchPapers from '@/data/research-papers.json';

const ResearchPage: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    projectId: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
            {researchPapers.conferencePapers.map((paper) => (
              <Card key={paper.id} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48 w-full">
                  <Image
                    src="/1.jpeg"
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
                      <span className="font-medium">Date:</span> {new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
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

        {/* Contact Form */}
        <section className="max-w-2xl mx-auto">
          <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
            <CardContent className="p-6">
              <div className="mb-6 text-center space-y-2">
                <h3 className="text-xl font-semibold">Express Interest in Project Funding</h3>
                <p className="text-gray-600">If you're interested in funding any of our research projects, please fill out the form below. Make sure to include the Project ID from the project you're interested in.</p>
              </div>
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

                <Button type="submit" className="w-full">Submit Interest</Button>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ResearchPage;