import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-800 to-black text-white">
      {/* Header */}
      <header className="flex justify-between items-center p-4 bg-transparent">
        <div className="text-2xl font-bold">G</div>
        <button type="button" className="bg-blue-600 text-white px-4 py-2 rounded-lg">
          Discuss Your Idea
        </button>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center py-16">
        <div className="bg-purple-700 p-4 rounded-full mb-4">
          <span className="text-4xl font-bold"><UserButton/></span>
        </div>
        <h1 className="text-4xl font-extrabold mb-4">
          We develop your app idea MVP in 80 hours
        </h1>
        <p className="max-w-md mb-6">
          Receive a fully functional mobile app in only 80 hours.
        </p>
        <Link href="/User">
        <button type="button" className="bg-blue-600 px-6 py-3 rounded-lg">
          Discuss Your Idea
        </button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gradient-to-b from-purple-900 to-purple-700">
        <h2 className="text-center text-3xl font-bold mb-12">
          App Genie Helps You to Grow Faster
        </h2>
        <div className="flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8">
          <FeatureCard
            title="Mobile App Development"
            description="Crafting Exceptional Mobile Experiences"
            detail="Delivering tailored mobile apps to enhance your brand and engage customers."
            icon="📱"
          />
          <FeatureCard
            title="AI Solutions"
            description="Empowering Businesses with AI"
            detail="Drive growth with AI—automate processes, gain insights, and personalize experiences."
            icon="🤖"
          />
          <FeatureCard
            title="Design Services"
            description="Designing Intuitive Digital Experiences"
            detail="Creating user-centric designs that captivate and convert your audience smoothly."
            icon="🎨"
          />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-8">Why Choose Us?</h2>
        <p className="max-w-md mx-auto mb-12">
          You do not need a development team. You need a partner who works with you.
        </p>
        <div className="flex justify-center">
          <WhyChooseUsGraphic />
        </div>
        <ul className="mt-8 space-y-4 text-left max-w-2xl mx-auto">
          <li><strong>Agile:</strong> Our youthful team brings fresh perspectives...</li>
          <li><strong>Collaboration:</strong> We value teamwork and open communication...</li>
          <li><strong>Customer Focus:</strong> We prioritize your success...</li>
        </ul>
      </section>
    </div>
  );
};

// Feature Card Component
const FeatureCard = ({ title, description, detail, icon }:{title: string, description: string, detail: string, icon: string}) => (
  <div className="bg-purple-800 p-6 rounded-lg max-w-xs text-center mx-auto">
    <div className="text-4xl">{icon}</div>
    <h3 className="text-2xl font-bold mt-4">{title}</h3>
    <p className="mt-2 text-purple-300">{description}</p>
    <p className="mt-2">{detail}</p>
  </div>
);

// Placeholder for Why Choose Us Graphic
const WhyChooseUsGraphic = () => (
  <div className="bg-purple-600 rounded-full p-10">
    {/* Customize with SVG or other graphic content */}
    <div className="text-4xl">🔒</div>
  </div>
);

export default HomePage;
