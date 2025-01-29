import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Database, Newspaper, ScrollText, Search } from "lucide-react";

const dataSets = Array(4).fill({
  title: "examples of data sets available",
});

const recentNews = Array(3).fill({
  title: "Some information about this news",
});

export default function Home() {
  return (
    <div className="bg-basewhite min-h-screen">
      <div className="container mx-auto px-4 lg:px-8 py-8">
        <section className="mb-12 md:mb-16">
          <div className="inline-block border border-black p-3 md:p-4 mb-6">
            <p className="text-sm md:text-base font-extrabold">
              Leo logo and plaksha university
            </p>
          </div>

          <Card className="mb-8">
            <CardContent className="p-4 md:p-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold">
                A small description of LEO lab
              </h1>
            </CardContent>
          </Card>

          <div className="relative max-w-2xl">
            <Input
              className="w-full pl-10 pr-24 py-2 md:py-3 bg-[var(--input-field-background)]"
              placeholder="Article name or keywords.."
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-graygray-600" />
            <Button className="absolute right-0 top-0 h-full bg-gradient-to-b from-blueblue-400 to-blueblue-600 text-basewhite px-4 md:px-6">
              Search
            </Button>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <Database className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Data Sets</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {dataSets.map((set, index) => (
              <Card key={index} className="border border-black hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <p className="text-lg md:text-xl font-extrabold">{set.title}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <BookOpen className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Recent Workshops</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <Card className="col-span-1 lg:col-span-2 bg-[var(--variable-collection-primary)] hover:shadow-lg transition-shadow">
              <CardContent className="p-4 md:p-6">
                <h3 className="text-2xl md:text-3xl font-extrabold mb-4">
                  Details About workshop
                </h3>
                <Button className="mt-6 md:mt-8">Read more about workshops</Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              {Array(2).fill(null).map((_, index) => (
                <Card key={index} className="border border-black hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6">
                    <p className="text-xl md:text-2xl font-extrabold">
                      Some photos of workshops
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <Newspaper className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Recent News</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {recentNews.map((news, index) => (
              <div key={index} className="space-y-3 md:space-y-4">
                <Card className="bg-[var(--variable-collection-primary)] hover:shadow-lg transition-shadow">
                  <CardContent className="p-4 md:p-6 aspect-video flex items-center justify-center">
                    <p className="text-2xl md:text-3xl">photo</p>
                  </CardContent>
                </Card>
                <p className="text-xl md:text-2xl font-extrabold">{news.title}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8">
            <ScrollText className="h-8 w-8 md:h-12 md:w-12 text-leo" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold">Latest Research</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {Array(2).fill(null).map((_, index) => (
              <Card key={index} className="bg-[var(--variable-collection-primary)] hover:shadow-lg transition-shadow">
                <CardContent className="p-4 md:p-6">
                  <div className="bg-basewhite p-4 mb-4 aspect-video flex items-center justify-center">
                    <p className="text-2xl md:text-3xl">Photo</p>
                  </div>
                  <div className="bg-basewhite p-4">
                    <p className="text-xl md:text-2xl">Description</p>
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