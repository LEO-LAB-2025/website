'use client';
import { assetPath } from '@/lib/assets';

export default function MagazinePage() {
  return (
    <div className="bg-gray-light min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-leo mb-12">LEO Magazine</h1>

        {/* 2026 Edition */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <a href={assetPath('magazine_2026.pdf')} download className="bg-gradient-to-br from-leo/5 to-blue-50 rounded-xl p-6 flex items-center justify-center cursor-pointer hover:from-leo/10 hover:to-blue-100 transition-all">
            <div className="relative w-full max-w-[400px] aspect-[3/4]">
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg shadow-lg flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="text-2xl font-bold text-leo mb-2">LEO Magazine</h3>
                  <p className="text-lg text-gray-600">2026 Edition</p>
                  <p className="text-sm text-gray-500 mt-4 underline">Click to download the full magazine</p>
                </div>
              </div>
            </div>
          </a>

          <div className="flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2">
              <span className="bg-leo text-white text-xs font-bold px-3 py-1 rounded-full">NEW</span>
              <h2 className="text-2xl font-bold text-leo">Third Edition — 2026</h2>
            </div>

            <div className="prose max-w-none">
              <p>
                The second edition of LEO Magazine continues to explore how organizational processes shape individuals and institutions. 
                This edition features fresh perspectives on the Future of Work, cutting-edge economic research, and expert insights 
                from the LEO Economics Conference.
              </p>
            </div>

            <div className="pt-4">
              <a href={assetPath('magazine_2026.pdf')} download className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-leo hover:bg-leo/80 text-white h-10 py-2 px-4">
                Download 2026 Magazine PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
