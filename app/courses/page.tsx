
import { BookOpen } from "lucide-react";

const upcomingCourses = [];

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
      </div>
    </div>
  );
}
