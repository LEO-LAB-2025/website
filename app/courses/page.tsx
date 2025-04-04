
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, GraduationCap } from "lucide-react";
import Link from 'next/link';

const upcomingCourses = [];

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
          <div>
              <p className="mt-2 text-gray-600 text-lg font-light leading-relaxed bg-gradient-to-r from-leo/10 to-transparent p-3 rounded-md border-l-4 border-leo">
                Stay updated with our upcoming courses and join us for exciting learning experiences.
              </p>
            </div> 

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
           
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
                    <h3 className="text-lg font-semibold">Personnel Economics</h3>
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
