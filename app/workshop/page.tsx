'use client'
import type { NextPage } from 'next';
import Image from "next/image";
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Calendar, MapPin, ExternalLink, Quote, Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { assetPath } from '@/lib/assets';

const WorkshopPage: NextPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  const carouselImages = [
    { src: "new_conf1.jpg", alt: "LEO Conference 2025 Session" },
    { src: "new_conf2.jpg", alt: "LEO Conference 2025 Panel Discussion" },
    { src: "p2.JPG", alt: "LEO Conference 2025 Keynote" },
    { src: "new_conf3.jpg", alt: "LEO Conference 2025 Audience" },
    { src: "new_conf4.jpg", alt: "LEO Conference 2025 Networking" },
    { src: "p4.JPG", alt: "LEO Conference 2025 Activities" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const workshopTopics = [
    "Future of Work",
    "Labour Economics",
    "Personnel Economics",
    "Behavioural Economics",
    "Development Economics",
    "Big Data & ML",
    "Environmental Economics",
    "Gig & Platform Economics",
    "Gender Economics",
    "Finance & Sustainability",
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const testimonials = [
    {
      name: "Prof. Farzana Afridi",
      institution: "Indian Statistical Institute (ISI), New Delhi",
      quote: "Covered a variety of topics in Economics. Diverse ideas, Varied Methodologies, Focus on Methods and Data, Linking to Policy. Provocative, thought-provoking and engaging.",
      linkedIn: "https://www.linkedin.com/posts/prakarshsingh_farzana-afridi-indian-statistical-institute-activity-7423393589466054656-ZKlY",
    },
    {
      name: "Prof. K. Narayanan",
      institution: "IIT Bombay",
      quote: "We'd like to stay on Plaksha University's campus itself — so that we can interact more with younger scholars!",
      linkedIn: "https://www.linkedin.com/posts/prakarshsingh_our-eminent-keynotes-at-the-leo-economics-activity-7325908794385879040-K43q",
    },
    {
      name: "Prof. Ashwini Deshpande",
      institution: "Ashoka University",
      quote: "Foundational skills are even more important to creating analytical and problem-solving minds, which in turn would make students more employable.",
      linkedIn: "https://www.linkedin.com/posts/prakarshsingh_professor-ashwini-deshpande-head-of-the-activity-7330421263951110145-hw7R",
    },
    {
      name: "Prof. Abhiroop Mukhopadhyay",
      institution: "ISI Delhi",
      quote: "Theoretical training is very important to underpin data with constructs that make sense.",
      linkedIn: "https://www.linkedin.com/posts/prakarshsingh_q-is-theoretical-training-in-economics-important-activity-7326637458517815296-dCu5",
    },
    {
      name: "Dr. Shabana Mitra",
      institution: "ICRIER",
      quote: "Interesting set of papers. Contemporary. Policy relevant. Geographically diverse cases. Excellent Selection. Variety of scholars at different stages.",
      linkedIn: "https://www.linkedin.com/posts/prakarshsingh_callforpapers-economicsconference-futureofwork-activity-7422896122463035393-SEJK",
    },
  ];

  const videos = [
    { src: "videos/leo_2025_1.mp4", title: "LEO Conference 2025 — Keynote Highlights" },
    { src: "videos/leo_2025_2.mp4", title: "LEO Conference 2025 — Panel Discussion" },
    { src: "videos/leo_2025_3.mp4", title: "LEO Conference 2025 — Speaker Remarks" },
    { src: "videos/leo_2025_4.mp4", title: "LEO Conference 2025 — Research Sessions" },
  ];

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-leo mb-12">Workshops &amp; Conferences</h1>

        {/* =========================================== */}
        {/* LEO ECONOMICS CONFERENCE 2026 */}
        {/* =========================================== */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
          <div className="bg-leo/5 p-4 sm:p-8 md:p-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-leo text-center">The LEO Economics Conference 2026</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">Join us for a transformative gathering of minds in economic research — Theme: <span className="font-semibold text-leo">Future of Work</span></p>

            {/* ======= FULL 2026 SCHEDULE ======= */}
            <div className="bg-white/70 p-6 rounded-lg shadow-sm">
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <div className="bg-leo/10 p-3 rounded-full">
                  <Calendar className="w-6 h-6 text-leo" />
                </div>
                <h3 className="text-xl font-semibold">Conference Schedule</h3>
              </div>

              <div className="mb-6">
                <div className="flex border-b border-gray-200">
                  {['24th April', '25th April', '26th April'].map((day, index) => (
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

              {/* Day 1 — 24th April 2026 */}
              <div className={`${activeTab === 0 ? 'block' : 'hidden'} space-y-4`}>
                <h4 className="font-semibold text-leo">24th April 2026</h4>
                <div className="space-y-3">
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">1:00 PM – 2:00 PM: Arrival, Welcome and Lunch</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">2:00 PM – 2:30 PM: Inauguration of Conference</div>
                    <div className="text-gray-700">Usha Hasteer Auditorium</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">2:30 PM – 3:00 PM: Keynote 1</div>
                    <div className="text-gray-700">Prof Tarun Jain, Indian Institute of Management Ahmedabad</div>
                    <div className="text-gray-700">Usha Hasteer Auditorium</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">3:00 PM – 3:30 PM: Keynote 2</div>
                    <div className="text-gray-700">Prof Partha Chatterjee, Shiv Nadar University</div>
                    <div className="text-gray-700">Usha Hasteer Auditorium</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">3:30 PM – 4:00 PM: Tea Break</div>
                  </div>

                  {/* Session 1 */}
                  <div className="bg-leo/10 p-4 rounded-lg">
                    <h5 className="text-lg font-semibold text-leo mb-3">Session 1 — How Do Firms and Institutions Adapt to External Signals?</h5>
                    <p className="text-sm text-gray-600 mb-3">Chair: Prof Prakarsh Singh | Usha Hasteer Auditorium</p>
                    <div className="space-y-3">
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">4:00 PM: Paper 1</div>
                        <div className="text-gray-700">Digital Connections: E-commerce in the North and Trade from the South</div>
                        <div className="text-gray-700">Sarur Chaudhary, Trinity College, University of Cambridge</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">4:30 PM: Paper 2</div>
                        <div className="text-gray-700">From Star to Threat: Lessons from Political Party Organizations</div>
                        <div className="text-gray-700">Arghya Banerjee, Indian Institute of Management, Calcutta</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">5:00 PM: Paper 3</div>
                        <div className="text-gray-700">Unorganized but Not Unaffected: Impact of Technological Change on Labor in the Indian Unorganized Manufacturing Industries</div>
                        <div className="text-gray-700">Lakhi Narayan Bharadwaj, Indian Institute of Technology, Guwahati</div>
                      </div>
                      <div className="bg-white/70 p-3 rounded-lg">
                        <div className="font-medium">5:30 PM: Paper 4</div>
                        <div className="text-gray-700">Rural Roads and Firm Behavior in India</div>
                        <div className="text-gray-700">Binay Shankar, Shiv Nadar University</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">6:00 PM – 6:30 PM: Tea / Coffee Break</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">6:30 PM – 7:30 PM: Traditional Night</div>
                    <div className="text-gray-700">Usha Hasteer Auditorium</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">7:30 PM: Dinner</div>
                    <div className="text-gray-700">Mess</div>
                  </div>
                </div>
              </div>

              {/* Day 2 — 25th April 2026 */}
              <div className={`${activeTab === 1 ? 'block' : 'hidden'} space-y-4`}>
                <h4 className="font-semibold text-leo">25th April 2026</h4>
                <div className="space-y-3">
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">9:00 AM – 9:30 AM: Tea / Coffee</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">9:30 AM: Keynote 3</div>
                    <div className="text-gray-700">Prof Somdeep Chatterjee, Indian Institute of Management Calcutta</div>
                    <div className="text-gray-700">Usha Hasteer Auditorium</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">10:00 AM: Keynote 4</div>
                    <div className="text-gray-700">Prof Kanika Mahajan, Ashoka University</div>
                    <div className="text-gray-700">Usha Hasteer Auditorium</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">10:30 AM: Keynote 5</div>
                    <div className="text-gray-700">Prof Nishith Prakash, Northeastern University</div>
                    <div className="text-gray-700">Usha Hasteer Auditorium</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">11:00 AM: Keynote 6</div>
                    <div className="text-gray-700">Prof Pritha Dev, Indian Institute of Management Ahmedabad</div>
                    <div className="text-gray-700">Usha Hasteer Auditorium</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">11:30 AM – 12:15 PM: Break and Campus Tour</div>
                  </div>

                  {/* Parallel Sessions 2A & 2B */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-leo/10 p-4 rounded-lg">
                      <h5 className="text-md font-semibold text-leo mb-2">Session 2A — How Do Environmental Risks Affect Health Decisions?</h5>
                      <p className="text-xs text-gray-600 mb-3">Chair: Dr. Abhishek Dureja | Room 2101</p>
                      <div className="space-y-2">
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">12:15 PM: Paper 1</div>
                          <div className="text-gray-700 text-sm">Air Pollution and Diabetes: Causal Evidence from Atmospheric Dispersion in India</div>
                          <div className="text-gray-600 text-xs">Sonali Mishran, IIT Bombay</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">12:45 PM: Paper 2</div>
                          <div className="text-gray-700 text-sm">Negative health effects of carbon emission reduction can outweigh the climate benefits in developing countries</div>
                          <div className="text-gray-600 text-xs">Dr. Raavi Aggarwal, ISI Delhi</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-leo/10 p-4 rounded-lg">
                      <h5 className="text-md font-semibold text-leo mb-2">Session 2B — What Drives Government Capacity Building?</h5>
                      <p className="text-xs text-gray-600 mb-3">Chair: Dr. Karan Babbar | Room 2102</p>
                      <div className="space-y-2">
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">12:15 PM: Paper 1</div>
                          <div className="text-gray-700 text-sm">Enhancing Revenue Collection Capacity through Automation: Evidence from a VAT</div>
                          <div className="text-gray-600 text-xs">Bhanu Gupta, Ashoka University</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">12:45 PM: Paper 2</div>
                          <div className="text-gray-700 text-sm">Decentralization under strain: Do own revenues enable local governments to manage public health emergencies?</div>
                          <div className="text-gray-600 text-xs">Abhishek Tripathy, IIM Ahmedabad</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">1:15 PM – 2:30 PM: Lunch</div>
                    <div className="text-gray-700">Mess</div>
                  </div>

                  {/* Parallel Sessions 3A & 3B */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-leo/10 p-4 rounded-lg">
                      <h5 className="text-md font-semibold text-leo mb-2">Session 3A — How Do Admissions and Training Shape Success in the Labor Market?</h5>
                      <p className="text-xs text-gray-600 mb-3">Chair: Prof Prakarsh Singh | Room 2101</p>
                      <div className="space-y-2">
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">2:30 PM: Paper 4</div>
                          <div className="text-gray-700 text-sm">Vocational Training and Challenge of Precarity: Evidence from Indian Labour Market</div>
                          <div className="text-gray-600 text-xs">Ram Prasad Behera, IIM Calcutta</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">3:00 PM: Paper 5</div>
                          <div className="text-gray-700 text-sm">Selective Admissions and Academic Value-Added: Evidence from Indian Higher Education</div>
                          <div className="text-gray-600 text-xs">Naveen Kumar G, BGS College of Engineering &amp; Technology</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">3:30 PM: Paper 6</div>
                          <div className="text-gray-700 text-sm">Education Tracks and Gender Role Attitudes</div>
                          <div className="text-gray-600 text-xs">Shraddha Yadav, IGIDR</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-leo/10 p-4 rounded-lg">
                      <h5 className="text-md font-semibold text-leo mb-2">Session 3B — How Do Policies and Norms Shape Women&apos;s Agency?</h5>
                      <p className="text-xs text-gray-600 mb-3">Chair: Dr. Karan Babbar | Room 2102</p>
                      <div className="space-y-2">
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">2:30 PM: Paper 4</div>
                          <div className="text-gray-700 text-sm">Banning the Bottle, Shifting the Balance: Impact of Reduced Alcohol Consumption on Women&apos;s Agency</div>
                          <div className="text-gray-600 text-xs">Manini Ojha, OP Jindal Global University</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">3:00 PM: Paper 5</div>
                          <div className="text-gray-700 text-sm">Gender, Culture, and Norms of Equality</div>
                          <div className="text-gray-600 text-xs">Kalyani Chaudhuri, Ashoka University</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">3:30 PM: Paper 6</div>
                          <div className="text-gray-700 text-sm">Paid Family Leave and Work Flexibility: Differential Effects on Women&apos;s Work across Occupations</div>
                          <div className="text-gray-600 text-xs">Mansi Wadhwa, Ashoka University</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">4:00 PM – 4:30 PM: Tea / Coffee Break</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">4:30 PM – 5:15 PM: Viksit Bharat Session</div>
                    <div className="text-gray-700">Room 2101</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">5:15 PM – 6:00 PM: Research at Plaksha</div>
                    <div className="text-gray-700">Room 2101</div>
                  </div>

                  {/* Parallel Sessions 4A & 4B */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-leo/10 p-4 rounded-lg">
                      <h5 className="text-md font-semibold text-leo mb-2">Session 4A — Do Institutional Policies Affect Market Efficiency?</h5>
                      <p className="text-xs text-gray-600 mb-3">Chair: Dr. Alok Ranjan | Room 2101</p>
                      <div className="space-y-2">
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">6:00 PM: Paper 7</div>
                          <div className="text-gray-700 text-sm">Assessing the Impact of Mukhyamantri Kanya Utthan Yojana (MKUY) on Preventing Child Marriage in Bihar, India</div>
                          <div className="text-gray-600 text-xs">Anzal Ahmad, IIT Roorkee</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">6:30 PM: Paper 8</div>
                          <div className="text-gray-700 text-sm">A Lesson in Discipline: How a State-led Ban on Corporal Punishment Affects Schooling in India</div>
                          <div className="text-gray-600 text-xs">Ahan Karmakar, IIM Calcutta</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">7:00 PM: Paper 9</div>
                          <div className="text-gray-700 text-sm">Working Capital, Caste, and Misallocation: Evidence from Rural India&apos;s Credit Markets</div>
                          <div className="text-gray-600 text-xs">Harpreet Singh, McGill University</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-leo/10 p-4 rounded-lg">
                      <h5 className="text-md font-semibold text-leo mb-2">Session 4B — Do Environmental Shocks Change Economic Behavior?</h5>
                      <p className="text-xs text-gray-600 mb-3">Chair: Dr. Vasudha Chopra | Room 2102</p>
                      <div className="space-y-2">
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">6:00 PM: Paper 7</div>
                          <div className="text-gray-700 text-sm">License to Kill: Moral Licensing in the Appropriation and Provision of Common-Pool Resources</div>
                          <div className="text-gray-600 text-xs">Mohan Rajagopal, Ashoka University</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">6:30 PM: Paper 8</div>
                          <div className="text-gray-700 text-sm">Climate Variability, Irrigation, and Farmers&apos; Crop Diversification Decisions</div>
                          <div className="text-gray-600 text-xs">Aryama Sarkar, IIT Madras</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">7:00 PM: Paper 9</div>
                          <div className="text-gray-700 text-sm">Monitoring the Air: Causal Evidence on Household and Institutional Responses in India</div>
                          <div className="text-gray-600 text-xs">Anomita Ghosh, IISER Bhopal</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">7:30 PM: Gala Dinner</div>
                    <div className="text-gray-700">Multi Purpose Hall</div>
                  </div>
                </div>
              </div>

              {/* Day 3 — 26th April 2026 */}
              <div className={`${activeTab === 2 ? 'block' : 'hidden'} space-y-4`}>
                <h4 className="font-semibold text-leo">26th April 2026</h4>
                <div className="space-y-3">
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">9:00 AM – 9:30 AM: Tea / Coffee</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">9:30 AM: Keynote 7</div>
                    <div className="text-gray-700">Prof Rohini Somanathan, Delhi School of Economics</div>
                    <div className="text-gray-700">Room 2101</div>
                  </div>

                  {/* Parallel Sessions 5A & 5B */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-leo/10 p-4 rounded-lg">
                      <h5 className="text-md font-semibold text-leo mb-2">Session 5A — Are Education Outcomes Driven by the Rule of Law?</h5>
                      <p className="text-xs text-gray-600 mb-3">Chair: Dr. Abhishek Dureja | Room 2101</p>
                      <div className="space-y-2">
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">10:00 AM: Paper 1</div>
                          <div className="text-gray-700 text-sm">From Backlash to Benefit: Inter-generational Effects of India&apos;s Anti-Dowry Law on Girls&apos; Education</div>
                          <div className="text-gray-600 text-xs">Tanya Suman, IISER Bhopal</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">10:30 AM: Paper 2</div>
                          <div className="text-gray-700 text-sm">Intergenerational Effects of Compulsory English Education: Evidence from India</div>
                          <div className="text-gray-600 text-xs">Shubham, IIM Calcutta</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-leo/10 p-4 rounded-lg">
                      <h5 className="text-md font-semibold text-leo mb-2">Session 5B — Do Smart Phones Improve Learning?</h5>
                      <p className="text-xs text-gray-600 mb-3">Chair: Dr. Vasudha Chopra | Room 2102</p>
                      <div className="space-y-2">
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">10:00 AM: Paper 1</div>
                          <div className="text-gray-700 text-sm">Phones Impede Learning: Evidence from a Massive Phone-free Classroom Experiment</div>
                          <div className="text-gray-600 text-xs">Pradeep Kumar Choudhury, JNU</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">10:30 AM: Paper 2</div>
                          <div className="text-gray-700 text-sm">Using Experimentation to Improve Phone-Based Education — Evidence from Multiple Field Experiments in Urban India</div>
                          <div className="text-gray-600 text-xs">Ambrish Dongre, IIM Ahmedabad</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">11:00 AM – 11:45 AM: Networking Session + Tea</div>
                  </div>

                  {/* Parallel Sessions 6A & 6B */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-leo/10 p-4 rounded-lg">
                      <h5 className="text-md font-semibold text-leo mb-2">Session 6A — Banking Sector Stability and Energy Consumption</h5>
                      <p className="text-xs text-gray-600 mb-3">Chair: Prof TV Ramanathan | Room 2101</p>
                      <div className="space-y-2">
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">11:45 AM: Paper 3</div>
                          <div className="text-gray-700 text-sm">Climate Transition Risk: Examining the Stability of Indian Banking System</div>
                          <div className="text-gray-600 text-xs">Ishika Goel, IISER Bhopal</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">12:15 PM: Paper 4</div>
                          <div className="text-gray-700 text-sm">Measuring Common Exposure and Contagion in Indian Banks: Fresh Learnings</div>
                          <div className="text-gray-600 text-xs">Shiv Ratan Tiwari, IIT Kanpur</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">12:45 PM: Paper 5</div>
                          <div className="text-gray-700 text-sm">Comparative Study of ML and Deep Learning Models for Short-Term Energy Consumption Prediction</div>
                          <div className="text-gray-600 text-xs">Alice Treesa, Madras School of Economics</div>
                        </div>
                      </div>
                    </div>
                    <div className="bg-leo/10 p-4 rounded-lg">
                      <h5 className="text-md font-semibold text-leo mb-2">Session 6B — Do Policies Like Free Bus Travel or WFH Affect Women&apos;s Labor Market Outcomes?</h5>
                      <p className="text-xs text-gray-600 mb-3">Chair: Dr. Alok Ranjan | Room 2102</p>
                      <div className="space-y-2">
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">11:45 AM: Paper 3</div>
                          <div className="text-gray-700 text-sm">Labour Market Impacts of Free Bus Travel for Women: Evidence from Time Use Data</div>
                          <div className="text-gray-600 text-xs">Vartika Singh, IISER Bhopal</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">12:15 PM: Paper 4</div>
                          <div className="text-gray-700 text-sm">Work-From-Home Revolution: Enhancing Women&apos;s Participation in STEM</div>
                          <div className="text-gray-600 text-xs">Pradyun Rame Mehrotra, IIM Bangalore</div>
                        </div>
                        <div className="bg-white/70 p-3 rounded-lg">
                          <div className="font-medium text-sm">12:45 PM: Paper 5</div>
                          <div className="text-gray-700 text-sm">Connectivity and Crime: The Impact of Broadband Availability on Sexual Assaults in India</div>
                          <div className="text-gray-600 text-xs">Anshika Mathur, Shiv Nadar Institution of Eminence</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">1:15 PM – 1:45 PM: Concluding Ceremony</div>
                    <div className="text-gray-700">Room 2101</div>
                  </div>
                  <div className="bg-leo/5 p-3 rounded-lg">
                    <div className="font-medium">2:00 PM: Lunch</div>
                    <div className="text-gray-700">Mess</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Registration and Download Section */}
            <div className="grid md:grid-cols-2 gap-8 items-start mt-8">
              <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-leo/10 p-3 rounded-full">
                    <Calendar className="w-6 h-6 text-leo" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">April 24–26, 2026</h3>
                    <p className="text-gray-600">Plaksha University, Mohali</p>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  Selected participants will present their work to senior faculty members from India&apos;s leading academic institutions.
                  Open to Faculty, Post-docs and PhD Candidates.
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white/70 p-6 rounded-lg shadow-sm flex flex-col items-center">
                  <h3 className="font-semibold mb-4">Register Now</h3>
                  <Button
                    className="bg-leo hover:bg-leo/90 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                    onClick={() => window.open('https://rzp.io/rzp/YQbvtuN', '_blank')}
                  >
                    Register for Conference <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                  <p className="text-sm text-gray-600 mt-4 text-center">Click to register to experience the conference at Plaksha University</p>
                </div>

                <div className="bg-white/70 p-6 rounded-lg shadow-sm flex flex-col items-center">
                  <h3 className="font-semibold mb-4">Download Agenda</h3>
                  <Link href="Conf_Schedule_2026.pdf" target="_blank" download>
                    <Button className="bg-leo hover:bg-leo/80 text-white px-4 py-2 text-sm">
                      Download Schedule PDF
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Conference Topics */}
            <div className="bg-white/70 p-6 rounded-lg shadow-sm mt-8">
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

            {/* Key Takeaways */}
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

            {/* Proud Partners */}
            <div className="pt-8 border-t border-leo/10">
              <h3 className="text-xl font-semibold text-center mb-6">Proud Partners</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white/80 p-6 rounded-lg text-center space-y-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative w-48 h-48 mx-auto">
                    <Image src="leo.png" alt="LEO Lab Logo" fill className="object-contain" />
                  </div>
                  <h4 className="font-semibold text-leo">LEO Lab</h4>
                  <p className="text-sm text-gray-600">Lab for Economic Behaviour in Organizations — Pioneering research in organizational economics and behavioral science</p>
                </div>
                <div className="bg-white/80 p-6 rounded-lg text-center space-y-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1">
                  <div className="relative w-48 h-48 mx-auto">
                    <Image src="tef.jpeg" alt="TEF Logo" fill className="object-contain" />
                  </div>
                  <h4 className="font-semibold text-leo">The Employability Foundation (TEF)</h4>
                  <p className="text-sm text-gray-600">Empowering workforce development through innovative research and practical solutions</p>
                </div>
              </div>
            </div>

            {/* Venue */}
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
                        <p className="text-gray-700">Join us at Plaksha University&apos;s state-of-the-art campus for three days of engaging discussions, presentations, and networking opportunities.</p>
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

        {/* =========================================== */}
        {/* PREVIOUS CONFERENCE — LEO 2025 */}
        {/* =========================================== */}
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl overflow-hidden">
          <div className="bg-leo/5 p-4 sm:p-8 md:p-12 space-y-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-center text-leo">LEO Economics Conference 2025</h2>
            <p className="text-center text-gray-600 max-w-2xl mx-auto">A look back at our inaugural conference — April 25–27, 2025 at Plaksha University</p>

            {/* Speaker Testimonials */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-center mb-6">What Our Keynote Speakers Said</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {testimonials.map((t, i) => (
                  <div key={i} className="bg-white/80 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow relative">
                    <Quote className="h-8 w-8 text-leo/20 absolute top-4 right-4" />
                    <p className="text-gray-700 italic mb-4">&ldquo;{t.quote}&rdquo;</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-leo">{t.name}</p>
                        <p className="text-sm text-gray-500">{t.institution}</p>
                      </div>
                      {t.linkedIn && (
                        <a
                          href={t.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#0A66C2] hover:text-[#004182] transition-colors ml-2 flex-shrink-0"
                          title="View on LinkedIn"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Videos from 2025 */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-center mb-6">Conference Videos</h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {videos.map((v, i) => (
                  <div key={i} className="rounded-xl overflow-hidden shadow-lg bg-black">
                    <video
                      controls
                      preload="metadata"
                      className="w-full aspect-video"
                      poster=""
                    >
                      <source src={v.src} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                    <div className="p-3 bg-white">
                      <p className="text-sm font-medium text-gray-700">{v.title}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Photo Gallery */}
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-center mb-6">Conference Photo Gallery</h3>
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
            </div>

            {/* 2025 Highlights Grid */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-leo/10 p-3 rounded-full">
                      <Calendar className="w-6 h-6 text-leo" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">April 25–27, 2025</h3>
                      <p className="text-gray-600">Plaksha University</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <p className="text-gray-700">
                      The inaugural LEO Economics Conference brought together researchers and faculty from India&apos;s leading institutions for three days of keynote presentations, paper sessions, and collaborative discussions.
                    </p>
                  </div>
                </div>

                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Featured Keynote Speakers</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {[
                      "Prof. Ashwini Deshpande — Ashoka University",
                      "Prof. Farzana Afridi — ISI Delhi",
                      "Prof. Abhiroop Mukhopadhyay — ISI Delhi",
                      "Prof. Rohini Somanathan — DSE",
                      "Prof. K. Narayanan — IIT Bombay",
                      "Prof. Sujoy Chakravarty — JNU",
                      "Dr. Shabana Mitra — ICRIER",
                      "Dr. Aparajita Dasgupta — Ashoka University",
                    ].map((speaker, index) => (
                      <div key={index} className="flex items-center space-x-2 p-2 rounded-md bg-leo/5 hover:bg-leo/10 transition-colors">
                        <svg className="w-4 h-4 text-leo flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        <span className="text-gray-700 text-sm">{speaker}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Conference Highlights</h3>
                  <p className="text-gray-700 leading-relaxed">
                    The 2025 conference featured 12 paper presentations across themes of Education &amp; Identity, Sustainability, Industrial Organisation, and Manufacturing &amp; Employment, along with lightning presentation sessions on Personnel Economics, Conflict &amp; Safety, and Identity &amp; Resource Economics.
                  </p>
                </div>

                <div className="bg-white/70 p-6 rounded-lg shadow-sm">
                  <h3 className="font-semibold mb-4">Outcomes</h3>
                  <div className="space-y-4">
                    {[
                      "Cutting-edge research exploration in personnel economics",
                      "Valuable connections and networking opportunities",
                      "Future collaboration opportunities identified",
                    ].map((outcome, idx) => (
                      <div key={idx} className="flex items-center space-x-3 p-3 bg-leo/5 rounded-lg">
                        <div className="bg-leo/10 p-2 rounded-full">
                          <svg className="w-5 h-5 text-leo" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <p className="text-gray-700">{outcome}</p>
                      </div>
                    ))}
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
