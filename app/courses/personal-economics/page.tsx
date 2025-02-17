'use client';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users } from "lucide-react";

const studentProjects = [
  {
    id: 1,
    title: "Economic Decision Making in SMEs",
    students: ["John Doe", "Jane Smith"],
    description: "Analysis of economic decision-making patterns in small and medium enterprises."
  },
  {
    id: 2,
    title: "Behavioral Economics in HR",
    students: ["Alex Johnson", "Maria Garcia"],
    description: "Study of behavioral economics principles applied to human resource management."
  }
];

export default function PersonalEconomicsPage() {
  return (
    <div className="container mx-auto px-4 lg:px-8 py-8">
      <div className="space-y-12">
        {/* Course Information Section */}
        <section className="space-y-8">
          <div className="flex items-center gap-3 md:gap-4">
            <BookOpen className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h1 className="text-3xl md:text-4xl font-bold">Personal Economics</h1>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-xl font-semibold">Course Overview</p>
                  <p className="text-gray-700">
                    This course explores the fundamentals of personal economic decision-making and its applications
                    in organizational contexts. Students will learn about behavioral economics principles and how
                    they influence individual and collective decision-making processes.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Course Details</p>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-medium">Instructor:</span> Dr. Prakarsh Singh</p>
                      <p><span className="font-medium">Duration:</span> 6 weeks</p>
                      <p><span className="font-medium">Next Start Date:</span> March 15, 2024</p>
                      <p><span className="font-medium">Format:</span> In-person lectures and workshops</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Learning Outcomes</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Understand core principles of behavioral economics</li>
                      <li>Analyze decision-making patterns in organizations</li>
                      <li>Apply economic theories to real-world scenarios</li>
                      <li>Develop research and analytical skills</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Student Projects Section */}
        <section className="space-y-6">
          <div className="flex items-center gap-3 md:gap-4 mb-8">
            <Users className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Student Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {studentProjects.map((project) => (
              <Card key={project.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-600">{project.description}</p>
                    <div>
                      <p className="font-medium mb-2">Team Members:</p>
                      <div className="flex flex-wrap gap-2">
                        {project.students.map((student, index) => (
                          <span
                            key={index}
                            className="bg-leo/10 text-leo px-3 py-1 rounded-full text-sm"
                          >
                            {student}
                          </span>
                        ))}
                      </div>
                    </div>
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