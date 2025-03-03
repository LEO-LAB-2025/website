'use client';
import { Card, CardContent } from "@/components/ui/card";
import { BookOpen, Users, Calendar, UserPlus } from "lucide-react";

const studentProjects = [
  {
    id: 1,
    title: "Risk Assessment: A Perspective on Wage-Benefit Disparity Debates",
    students: ["Divith Narendra", "Soham Petkar", "Siddhant Deshpande", "Sauhard Sharma", "Prashant Tiwari"],
    description: "This report examines wage-benefit disparities within the public sector using a dataset of 168,622 government employees in San Francisco. By integrating empirical data and theoretical constructs, including Tournament Theory, risk assessments, and compensating wage differentials, the study provides comprehensive analysis of how risk, competition, and organizational structures influence compensation. The research utilizes standardized risk metrics, regression models, and correlation analyses to identify key patterns and deviations across eight representative job families. Our findings reveal strong correlations between job risk and salary increments, highlighting the economic valuation of hazardous roles. However, a decline in the proportion of benefits for high-risk roles indicates a shift towards short-term financial incentives at the expense of long-term employee welfare. Additionally, deviations in expected trends—such as flatter compensation structures in nursing—underscore the influence of external factors like union negotiations and budgetary constraints."
  },
  {
    id: 2,
    title: "Paying It Fair: Decoding Compensation Dynamics at Deutsche Bank",
    students: ["Jahnavi", "Roma", "Ronak", "Shikhar"],
    description: "Disparities in compensation increments across hierarchical levels are a common challenge in many organizations. Our analysis focuses on Deutsche Bank, where certain levels receive significantly lower rewards than others. Additionally, these disparities vary between front-office and back-office roles. This project aims to uncover the factors driving such inequities and provide insights to design reward structures that ensure promotions are perceived as fair, motivating, and balanced across roles and levels."
  },
  {
    id: 3,
    title: "Climbing the Corporate Ladder: An Empirical Analysis of CEO/MD Career Trajectories in India",
    students: ["Arya Lamba", "Ayush Bhatnagar", "Samarth Anand", "Tanushi Khandelwal"],
    description: "This study investigates the career trajectories of CEO/MDs from companies listed on the Indian stock market and did initial public offerings (IPOs) between 2017 and 2024. By analysing work experience, educational qualification and demographic data, the study identifies factors that influence the time taken to reach the top leadership position. The dataset, curated from LinkedIn profiles, SEBI Red Herring Prospectus, and company disclosures, includes educational backgrounds, promotions, industry expertise, and hiring pathways. Using OLS regression, we concluded that factors such as MBA qualifications or internal versus external hiring play a less significant role. T-tests further explore differences across binary variables like Indian vs. international education and internal vs. external hires, finding no significant differences in mean times to CEO/MD ascension. The results emphasize the complexity of career progression and challenge conventional assumptions about the value of advanced education or specific pathways."
  },
  {
    id: 4,
    title: "Leadership in Play: The Cricket Effect",
    students: ["Aanya Patil", "Sarthak Sachdev", "Shaurya Sighadia", "Suhani Jain"],
    description: "The role of managerial leadership in influencing organizational performance remains a debated and nuanced topic. While Adam Smith (Smith, 1776) argued that managers play a limited role as mere \"principal clerks\" in a firm's operations, contrasting views in modern economics and the popular press suggest that corporate leaders, particularly CEOs, hold significant sway over organizational outcomes. Recent empirical studies highlight the importance of managers; however, these findings often conflate the contributions of CEOs, managerial teams, and the broader organizational context, making it challenging to isolate the manager's specific impact. Additionally, separating managerial contributions from the abilities and performance of the workers they oversee is complex and poorly understood. This study aims to address this gap by examining the impact of managerial leadership changes on team performance within the Indian Premier League (IPL). Using coaches and captains as proxies for managerial leadership, the project explores whether transitions in leadership significantly influence team outcomes."
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
            <h1 className="text-3xl md:text-4xl font-bold">Personnel Economics</h1>
          </div>

          <Card className="bg-gradient-to-br from-blue-50 to-blue-100">
            <CardContent className="p-8 md:p-12">
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-xl font-semibold">Course Description</p>
                  <p className="text-gray-700">
                    This course delves into how information, resources, constraints, and incentives within an organization affect outcomes for personnel or employees inside the firm, structured around four main sections:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
                    <li><span className="font-medium">Sorting and Investing in Employees</span>, which covers the necessity of firms and strategies for effective recruitment, training, and retention.</li>
                    <li><span className="font-medium">Organizational and Job Design</span>, focusing on job structure, team size, and organizational architecture.</li>
                    <li><span className="font-medium">Paying for Performance</span>, analyzing incentive mechanisms like absolute and relative bonuses, promotions and their effects.</li>
                    <li><span className="font-medium">Recent Applications of Personnel Economics</span>, exploring modern applications in management and business.</li>
                  </ul>
                  <p className="text-gray-700 mt-4">
                    This comprehensive approach provides students with a deep understanding of how economic theories are applied to real-world organizational issues, preparing them to resolve complex workplace challenges effectively.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Course Details</p>
                    <div className="space-y-2 text-gray-700">
                      <p><span className="font-medium">Instructor:</span> Dr. Prakarsh Singh</p>
                      <p><span className="font-medium">Semester:</span> Fall 2024</p>
                      <p><span className="font-medium">Teaching Assistants:</span> Anshika Arora, Harshit Singh</p>
                      <p><span className="font-medium">Format:</span> In-person lectures and workshops</p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <p className="text-lg font-semibold">Learning Outcomes</p>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Know about the stylized facts around personnel economics</li>
                      <li>Understand tradeoffs associated with hiring, training, attrition, and organization structure</li>
                      <li>Analyze and evaluate correction of inefficiencies within firms through empirical papers that apply data science and economics to personnel issues</li>
                      <li>Synthesize learnings from the course to answer new and original questions in personnel economics through data analysis</li>
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