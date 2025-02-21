'use client';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap } from "lucide-react";
import Link from 'next/link';

const upcomingCourses = [
  {
    id: 1,
    title: "Personal Economics",
    instructor: "Dr. Prakarsh Singh",
    duration: "6 weeks",
    startDate: "March 15, 2024",
    description: "Explore the fundamentals of personal economic decision-making and behavioral economics in organizational contexts."
  }
];

const previousCourses = [
  {
    id: 1,
    title: "Personal Economics",
    instructor: "Dr. Prakarsh Singh",
    year: "2023",
    term: "Fall"
  }
];

export default function CoursesPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold text-leo">Courses</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our comprehensive range of courses in economics and organizational behavior.
          </p>
        </div>

        {/* Upcoming Courses Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <BookOpen className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Upcoming Courses</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingCourses.map((course) => (
              <Card key={course.id} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{course.title}</h3>
                    <div className="space-y-2">
                      <p className="text-gray-700"><span className="font-medium">Instructor:</span> {course.instructor}</p>
                      <p className="text-gray-700"><span className="font-medium">Duration:</span> {course.duration}</p>
                      <p className="text-gray-700"><span className="font-medium">Starts:</span> {course.startDate}</p>
                    </div>
                    <p className="text-gray-600">{course.description}</p>
                    <Link href={`/courses/${course.title.toLowerCase().replace(/ /g, '-')}`}>
                      <Button className="w-full bg-leo text-white hover:bg-leo/90">Learn More</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Previously Taught Courses Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <GraduationCap className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Previously Taught Courses</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {previousCourses.map((course) => (
              <Card key={course.id} className="bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold">{course.title}</h3>
                    <div className="space-y-1 text-gray-600">
                      <p>{course.instructor}</p>
                      <p>{course.term} {course.year}</p>
                    </div>
                    <Link href={`/courses/${course.title.toLowerCase().replace(/ /g, '-')}`}>
                      <Button variant="outline" className="w-full border-leo text-leo hover:bg-leo hover:text-white">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}