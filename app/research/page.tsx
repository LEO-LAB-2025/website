'use client'
import type { NextPage } from 'next';
import { Card, CardContent } from '@/components/ui/card';
import researchData from '@/data/research.json';

const ResearchPage: NextPage = () => {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">Research</h1>

        {/* Filter Section */}
        <div className="flex justify-end items-center gap-2 mb-8">
          <span className="text-sm font-medium">Filter By</span>
          <select className="rounded-md border border-gray-200 px-3 py-1.5 text-sm">
            <option value="all">All Types</option>
            <option value="journal">Journal Papers</option>
            <option value="conference">Conference Papers</option>
          </select>
        </div>

        {/* Research Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {researchData.research.map((paper) => (
            <Card key={paper.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardContent className="p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold line-clamp-2">{paper.title}</h3>
                  <p className="text-sm text-gray-600">
                    {paper.authors.join(', ')}
                  </p>
                </div>

                <div className="space-y-2">
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Published:</span> {new Date(paper.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Venue:</span> {paper.venue}
                  </p>
                  <p className="text-sm text-gray-700">
                    <span className="font-medium">Type:</span> {paper.type.charAt(0).toUpperCase() + paper.type.slice(1)}
                  </p>
                </div>

                <p className="text-sm text-gray-700 line-clamp-3">{paper.abstract}</p>

                <div className="pt-4 border-t space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Citations: {paper.citations}</span>
                    <a
                      href={`https://doi.org/${paper.doi}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-blue-600 hover:text-blue-800"
                    >
                      DOI: {paper.doi}
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {paper.keywords.map((keyword, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs bg-gray-100 text-gray-700 rounded-full"
                      >
                        {keyword}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResearchPage;