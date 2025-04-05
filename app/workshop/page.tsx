'use client'
import type { NextPage } from 'next';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WorkshopPage: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);
  
 
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000); // Changes slide every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const carouselImages = [
    { src: "p2.JPG", alt: "LEO Lab Research Activities" },
    { src: "p1.JPG", alt: "LEO Lab Workshop Session" },
    { src: "p3.JPG", alt: "LEO Lab Team" },
    { src: "p4.JPG", alt: "LEO Lab Team" },
    { src: "p5.JPG", alt: "LEO Lab Team" },
  ];

  const workshopTopics = [
    "Labour Economics",
    "Personnel Economics",
    "Behavioural Economics",
    "Development Economics",
    "Big Data & ML",
    "Environmental Economics",
    "Gig & Platform Economics",
    "Gender Economics",
    "Finance & Sustainability",
    "Vocational Education & Training"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-leo mb-12">Workshops</h1>

        {/* Call for Papers Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
          <div className="bg-leo/5 p-4 sm:p-8 md:p-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-leo text-center">The LEO Economics Conference 2025</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">Join us for a transformative gathering of minds in economic research and behavioral studies</p>

            {/* Conference Schedule Section */}
            <div className="bg-white/70 p-6 rounded-lg shadow-sm mb-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-leo/10 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-leo" />
                </div>
                <h3 className="text-xl font-semibold">Conference Schedule</h3>
              </div>
              
              {/* Tabs for different days */}
              <div className="mb-6">
                <div className="flex border-b border-gray-200">
                  {['25th April', '26th April', '27th April'].map((day, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTab(index)}
                      className={`py-2 px-4 font-medium text-sm md:text-base transition-colors ${activeTab === index ? 'border-b-2 border-leo text-leo' : 'text-gray-500 hover:text-leo'}`}
                    >
                      {day}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Day 1 Schedule */}
              <div className={`${activeTab === 0 ? 'block' : 'hidden'} space-y-4`}>
                <h4 className="font-semibold text-leo">25th April 2025</h4>
                <div className="space-y-3">
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">2:00 PM: Welcome</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">2:15 PM: Keynote 1</div>
                    <div className="text-gray-700">Rimy Oberoi with Prof. Ashwini Deshpande and Dr. Vidhya Soundararajan</div>
                  </div>

                  {/* EDUCATION AND IDENTITY Section */}
                  <div className="bg-leo/10 p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-leo mb-3">EDUCATION AND IDENTITY</h5>
                    <div className="space-y-3">
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">3:00 PM: Paper 1</div>
                        <div className="text-gray-700">Religious Identity, Lost Learning: Evidence from Colonial India</div>
                        <div className="text-gray-700">Dr. Yatish Arya, Ashoka University</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">3:25 PM: Paper 2</div>
                        <div className="text-gray-700">Does negative marking lead to gendered exam taking behavior: experimental evidence from India</div>
                        <div className="text-gray-700">Dr. Swati Sharma, IIT Delhi</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">3:50 PM: Paper 3</div>
                        <div className="text-gray-700">The Long-Run Eﬀects of a Schooling System Targeted Towards Historically Disadvantaged Communities</div>
                        <div className="text-gray-700">Dr. Naveen Kumar G, BGS College of Engineering & Technology, Bangalore</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">4:15 PM: Tea & Campus Tour</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">5:00 PM: Paper 4</div>
                        <div className="text-gray-700">Computer Literacy and discrimination between Scheduled and non-scheduled groups among the Working Age Population in India (15-59 Years of Age)</div>
                        <div className="text-gray-700">Dr. Jadhav Chakradhar, CESS</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">5:25 PM: Paper 5</div>
                        <div className="text-gray-700">The Persistence of Disadvantages: Theory and Evidence</div>
                        <div className="text-gray-700">Dr. Nishtha Sharma, New York University, Abu Dhabi</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">5:50 PM: Lightning Presentations: Personnel Economics</div>
                    <ul className="list-disc list-inside text-gray-700 pl-2 pt-2 space-y-1">
                      <li>The Impact of Migration on Self-Employment of Locals - Sohini Mazumder, IIM Calcutta</li>
                      <li>Job Search: Bridging the Miles to Non-Metro Locations - Vandana Saini, IIM Bangalore</li>
                      <li>Technological Progress and Labor Market Outcomes: Evidence from Indian Organized Manufacturing Sector - Lakhi Narayan Bhardwaj, IIT Guwahati</li>
                      <li>Precision of Monitoring and its Impact on Performance in Competition - Divyanshu Jain, IIM Ahmedabad</li>
                      <li>Weaving Well-being: The Changing Landscape of Female Job Opportunities and Child Survival in Bangladesh - Kirti Tater, Shiv Nadar Institute of Eminence</li>
                      <li>Labor Market Penalty for Single Mothers - Shubham Ojha, IIM Calcutta</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Day 2 Schedule */}
              <div className={`${activeTab === 1 ? 'block' : 'hidden'} space-y-4`}>
                <h4 className="font-semibold text-leo">26th April 2025</h4>
                <div className="space-y-3">
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">9:45 AM: Keynote 2</div>
                    <div className="text-gray-700">Prof. Abhiroop Mukhopadhyay, ISI Delhi</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">10:15 AM: Keynote 3</div>
                    <div className="text-gray-700">Dr. Aparajita Dasgupta, Ashoka University</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">10:45 AM: Keynote 4</div>
                    <div className="text-gray-700">Prof. Farzana Afridi, ISI Delhi</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">11:15 AM: Paper 6</div>
                    <div className="text-gray-700">Regularized Opinion Pools for Density Forecasts under Bayesian Inspired Framework</div>
                    <div className="text-gray-700">Dr. Parush Arora, Ashoka University</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">11:40 AM: Keynote 5</div>
                    <div className="text-gray-700">Prof. Rohini Somanathan, DSE</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">12:10 PM: Tea</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">12:30 PM: Keynote 6</div>
                    <div className="text-gray-700">Prof. K Narayanan, IIT Bombay</div>
                  </div>

                  {/* SUSTAINABILITY Section */}
                  <div className="bg-leo/10 p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-leo mb-3">SUSTAINABILITY</h5>
                    <div className="space-y-3">
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">1:00 PM: Paper 7</div>
                        <div className="text-gray-700">Heat stress and hospitalization in India</div>
                        <div className="text-gray-700">Dr. Abhishek Dureja, Plaksha University</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">1:25 PM: Paper 8</div>
                        <div className="text-gray-700">Improving household waste segregation in developing country with two-sided interventions: an experimental study in Bangladesh</div>
                        <div className="text-gray-700">Dr. Shivani Wadehra, UPES</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">1:50 PM: Lunch</div>
                  </div>

                  {/* INDUSTRIAL ORGANISATION Section */}
                  <div className="bg-leo/10 p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-leo mb-3">INDUSTRIAL ORGANISATION</h5>
                    <div className="space-y-3">
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">3:00 PM: Paper 9</div>
                        <div className="text-gray-700">Competition authorities and merger-induced demand changes</div>
                        <div className="text-gray-700">Dr. Kiriti Kanjilal, IIIT Delhi</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">3:25 PM: Paper 10</div>
                        <div className="text-gray-700">Can Mergers Drive Drastic Innovations?</div>
                        <div className="text-gray-700">Dr. Saish Nevrekar, Ashoka University</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">3:50 PM: Paper 11</div>
                        <div className="text-gray-700">The Impact of Process and Product Innovation on Employment across Indian Innovative Manufacturing Firms and the Role of Foreign-Ownership</div>
                        <div className="text-gray-700">Dr. Smruti Ranjan Behera, IIT Ropar</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">4:15 PM: Tea and Tour</div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">5:00 PM: Lightning Presentations: Conflict, Violence, and Safety</div>
                    <ul className="list-disc list-inside text-gray-700 pl-2 pt-2 space-y-1">
                      <li>Impact of Terrorism on Capital Investment by Firms: Evidence from the State Jammu and Kashmir, India - Rohit Duwadi, Arcus Policy Research</li>
                      <li>Violence, son preference and fertility: Evidence from India - Ather Hassan Dar, IIT Kanpur</li>
                      <li>Homes of Harm: Spousal Violence and Child Malnutrition in India - Noyel Sebastian, JNU</li>
                      <li>Signing for Safety: Can mandatory marriage registration reduce domestic violence? - Rikhia Bhukta, IIT Kanpur</li>
                      <li>Safe Travels: Transport Development and Women's Safety in India - Anisha Garg, University of Warwick</li>
                      <li>Breaking the Night Shift Barrier: How Legal Reforms Impact Demand for Women's Work in India - Sarvnipun Kaur, Plaksha University</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Day 3 Schedule */}
              <div className={`${activeTab === 2 ? 'block' : 'hidden'} space-y-4`}>
                <h4 className="font-semibold text-leo">27th April 2025</h4>
                <div className="space-y-3">
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">9:35 AM: Keynote 7</div>
                    <div className="text-gray-700">Prof. Sujoy Chakravarty, JNU</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">10:15 AM: Keynote 8</div>
                    <div className="text-gray-700">Dr. Shabana Mitra, ICRIER</div>
                  </div>

                  {/* MANUFACTURING AND EMPLOYMENT Section */}
                  <div className="bg-leo/10 p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-leo mb-3">MANUFACTURING AND EMPLOYMENT</h5>
                    <div className="space-y-3">
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">10:30 AM: Paper 12</div>
                        <div className="text-gray-700">Chinese Import Competition and Expenditure of Domestic Manufacturing Firms: Evidence from India</div>
                        <div className="text-gray-700">Dr. Subhasree Sarkar, Ashoka University</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">10:55 AM: Paper 13</div>
                        <div className="text-gray-700">Trade Shocks and the Changing Economic Geography of the US</div>
                        <div className="text-gray-700">Dr. Priyam Verma, Ashoka University</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">11:45 AM: Tea</div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">12:00 PM: Lightning Presentations: Resource Economics</div>
                    <ul className="list-disc list-inside text-gray-700 pl-2 pt-2 space-y-1">
                      <li>Decoding Crude Oil Trade Dynamics: A Comparative Analysis of Machine Learning and Deep Learning Models - Ritu Singh, IIT Kanpur</li>
                      <li>Bureaucratic Learning and Environmental Clearances in India - Pranav Gupta, University of California, Berkeley</li>
                      <li>Comparative Study of the Impact of the Indian Transportation Infrastructure on Firm-level Performance with Focus on Inland Waterways - Manish Chauhan, IIT Kanpur</li>
                    </ul>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">Lightning Presentations: Identity</div>
                    <ul className="list-disc list-inside text-gray-700 pl-2 pt-2 space-y-1">
                      <li>Linguistic Diversity and Development at a Finer Geographic Scale: A Study of Indian Districts - Saarthak Anand, ISI Delhi</li>
                      <li>A Wedding Gift from the Government!! - On Marriage Subsidies and Fertility Preferences in India - Sulagna Bhattacharya, IIM Calcutta</li>
                      <li>Colourism, confidence and productivity: Experimental evidence from India - Nishat Anjum, Jawaharlal Nehru University</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Conference Info */}
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-9">
                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-leo/10 p-3 rounded-full">
                      <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">April 25-27, 2025</h3>
                      <p className="text-gray-600">Plaksha University</p>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    Selected participants will present their work to senior faculty members from India's leading academic institutions.
                    Open to Faculty, Post-docs and PhD Candidates.
                  </p>
                </div>

                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4 flex items-center">
                    <svg className="w-5 h-5 text-leo mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Important Dates
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-700 bg-leo/5 p-3 rounded-lg">
                      <span className="w-40 font-medium">Submission Deadline:</span>
                      <span className="font-medium text-leo">February 28, 2025</span>
                    </li>
                    <li className="flex items-center text-gray-700 bg-leo/5 p-3 rounded-lg">
                      <span className="w-40 font-medium">Paper Acceptance:</span>
                      <span className="font-medium text-leo">March 11, 2025</span>
                    </li>
                    <li className="flex items-center text-gray-700 bg-leo/5 p-3 rounded-lg">
                      <span className="w-40 font-medium">Conference:</span>
                      <span className="font-medium text-leo">April 25-27, 2025</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
              <div className="bg-white/70 p-6 rounded-lg shadow-sm flex flex-col items-center">
                  <h3 className="font-semibold mb-4">Register Now</h3>
                  <Button
                    className="bg-leo hover:bg-leo/90 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    onClick={() => window.open('https://forms.office.com/pages/responsepage.aspx?id=M4x5RUMbAUy_PtjWVdM4nNAi0Zt6FWdBitsxdxfVHfxUMDBHM1BPUkxRWkpFR0kxQVZTVUhBV09SVC4u&route=shorturl', '_blank')}
                  >
                    Register for Conference
                  </Button>
                  <p className="text-sm text-gray-600 mt-4 text-center">Click to register to experience the conference at Plaksha University </p>
                </div>
                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Conference Topics</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {workshopTopics.map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 rounded-md bg-leo/5 hover:bg-leo/10 transition-colors">
                        <svg className="w-4 h-4 text-leo flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>

               
              </div>
            </div>

           

            {/* Key Takeaways Section */}
            <div className="pt-8 border-t border-leo/10">
              <h3 className="text-xl font-semibold text-center mb-6">Key Conference Takeaways</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white/80 p-4 rounded-lg text-center space-y-2 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
                  <div className="w-12 h-12 mx-auto bg-leo/10 rounded-full flex items-center justify-center mb-2">
                    <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-leo">Knowledge Dissemination</h3>
                  <p className="text-sm text-gray-600">Sharing insights and research findings</p>
                </div>
                
                <div className="bg-white/80 p-4 rounded-lg text-center space-y-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-leo/10 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-leo">Data-Driven</h3>
                <p className="text-sm text-gray-600">Evidence-based research approaches</p>
              </div>
              
              <div className="bg-white/80 p-4 rounded-lg text-center space-y-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-leo/10 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-leo">Industry Connect</h3>
                <p className="text-sm text-gray-600">Bridging academia and industry</p>
              </div>
              
              <div className="bg-white/80 p-4 rounded-lg text-center space-y-2 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto bg-leo/10 rounded-full flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-leo">Academic Research</h3>
                <p className="text-sm text-gray-600">Cutting-edge economic studies</p>
              </div>
              </div>
            </div>
            {/* Proud Partners Section */}
            <div className="pt-8 border-t border-leo/10">
              <h3 className="text-xl font-semibold text-center mb-6">Proud Partners</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 p-6 rounded-lg text-center space-y-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative w-48 h-48 mx-auto">
                    <Image
                      src="leo.png"
                      alt="LEO Lab Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-leo">LEO Lab</h4>
                  <p className="text-sm text-gray-600">Lab for Economic Behaviour in Organizations - Pioneering research in organizational economics and behavioral science</p>
                </div>

                <div className="bg-white/80 p-6 rounded-lg text-center space-y-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative w-48 h-48 mx-auto">
                    <Image
                      src="tef.jpeg"
                      alt="TEF Logo"
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-leo">The Employability Foundation (TEF)</h4>
                  <p className="text-sm text-gray-600">Empowering workforce development through innovative research and practical solutions</p>
                </div>
              </div>
            </div>

            {/* Venue Information Section */}
            <section className="space-y-6">
              <div className="flex items-center gap-3 md:gap-4 mb-8">
                <MapPin className="h-8 w-8 md:h-12 md:w-12 text-leo" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Venue Information</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <Card className="bg-gradient-to-br from-gray-50 to-gray-100">
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-2">Plaksha University</h3>
                        <p className="text-gray-600">Alpha, Sector 101, IT City Rd, Sahibzada Ajit Singh Nagar, Punjab 140306</p>
                      </div>
                      <div className="space-y-2">
                        <p className="text-gray-700">Join us at Plaksha University's state-of-the-art campus for three days of engaging discussions, presentations, and networking opportunities.</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-0 aspect-video">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3433.102853085538!2d76.72302317615498!3d30.631058774633445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fe97919cad48b%3A0xf8f99185e7d5540!2sPlaksha%20University!5e0!3m2!1sen!2sin!4v1738991182835!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
         
          

        </div>
        

        {/* Previous Workshop Section */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
          <div className="bg-leo/5 p-4 sm:p-8 md:p-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-leo">Our Previous Workshop</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">LEO Lab Workshop Series 2024: Exploring Economic Behavior and Organizational Dynamics</p>

            {/* Photo Carousel */}
            <div className="relative w-full aspect-video max-w-4xl mx-auto rounded-xl overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-between z-10 px-2 md:px-4">
                <button
                  onClick={prevSlide}
                  className="bg-leo/30 hover:bg-leo/50 text-white p-2 md:p-3 rounded-full transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 md:h-7 md:w-7" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-leo/30 hover:bg-leo/50 text-white p-2 md:p-3 rounded-full transition-colors"
                >
                  <ChevronRight className="h-5 w-5 md:h-7 md:w-7" />
                </button>
              </div>
              <div className="relative h-full overflow-hidden">
                {carouselImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-transform duration-500 transform ${
                      index === currentSlide ? 'translate-x-0' : 'translate-x-full'
                    }`}
                    style={{ transform: `translateX(${(index - currentSlide) * 100}%)` }}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Workshop Details Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-leo/10 p-3 rounded-full">
                      <svg className="w-6 h-6 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">April 2024</h3>
                      <p className="text-gray-600">Plaksha University</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      Faculty members and researchers from leading institutions participated in this collaborative workshop.
                    </p>
                  </div>
                </div>

                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Key Topics Covered</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {["Economic Behavior in Organizations", "Personnel Economics Research", "Data Science in Economics", "Behavioral Economics Applications"].map((topic, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 rounded-md bg-leo/5 hover:bg-leo/10 transition-colors">
                        <svg className="w-4 h-4 text-leo flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-700">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Highlights</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The workshop series brought together researchers and practitioners
                    to discuss innovative approaches in economic behavior and organizational
                    decision-making. Sessions included keynote presentations and collaborative
                    research discussions.
                  </p>
                </div>

                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Outcomes</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3 p-3 bg-leo/5 rounded-lg">
                      <div className="bg-leo/10 p-2 rounded-full">
                        <svg className="w-5 h-5 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Cutting-edge research exploration in personnel economics</p>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-leo/5 rounded-lg">
                      <div className="bg-leo/10 p-2 rounded-full">
                        <svg className="w-5 h-5 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Valuable connections and networking opportunities</p>
                    </div>
                    <div className="flex items-center space-x-3 p-3 bg-leo/5 rounded-lg">
                      <div className="bg-leo/10 p-2 rounded-full">
                        <svg className="w-5 h-5 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <p className="text-gray-700">Future collaboration opportunities identified</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopPage;
