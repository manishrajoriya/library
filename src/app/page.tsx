import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Calendar, Award, ArrowRight } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="min-h-screen" style={{ background: 'linear-gradient(135deg, rgb(25, 118, 210) 0%, rgb(81, 45, 168) 100%)' }}>
      <header className="p-6 flex justify-between items-center" style={{ backgroundColor: 'rgba(0, 0, 0, 0.1)' }}>
        <div className="text-white font-bold text-2xl">StudyBuddy</div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="#features" className="text-white hover:text-yellow-300 transition">Features</Link></li>
            <li><Link href="#" className="text-white hover:text-yellow-300 transition">Pricing</Link></li>
            <li><Link href="#" className="text-white hover:text-yellow-300 transition">Contact</Link></li>
          </ul>
        </nav>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Manage Your Studies with Ease</h1>
          <p className="text-xl text-white mb-8">Organize, track, and excel in your academic journey</p>
          <Button size="lg" style={{ backgroundColor: 'rgb(255, 193, 7)', color: 'rgb(0, 0, 0)' }} className="hover:opacity-90">
            Get Started <ArrowRight className="ml-2" />
          </Button>
        </section>

        <section id="features" className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard 
            icon={<BookOpen className="h-12 w-12" style={{ color: 'rgb(255, 87, 34)' }} />}
            title="Course Management"
            description="Easily organize and access all your course materials in one place."
            bgColor="rgb(255, 235, 238)"
          />
          <FeatureCard 
            icon={<Users className="h-12 w-12" style={{ color: 'rgb(76, 175, 80)' }} />}
            title="Collaboration Tools"
            description="Connect with classmates for group projects and study sessions."
            bgColor="rgb(232, 245, 233)"
          />
          <FeatureCard 
            icon={<Calendar className="h-12 w-12" style={{ color: 'rgb(3, 169, 244)' }} />}
            title="Schedule Planner"
            description="Keep track of classes, assignments, and exams with our intuitive calendar."
            bgColor="rgb(227, 242, 253)"
          />
          <FeatureCard 
            icon={<Award className="h-12 w-12" style={{ color: 'rgb(156, 39, 176)' }} />}
            title="Progress Tracking"
            description="Monitor your academic progress and celebrate your achievements."
            bgColor="rgb(243, 229, 245)"
          />
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Boost Your Academic Success?</h2>
          <p className="text-xl text-white mb-8">Join thousands of students already using StudyBuddy</p>
          <Button size="lg" style={{ backgroundColor: 'rgb(0, 230, 118)', color: 'rgb(0, 0, 0)' }} className="hover:opacity-90">
            Sign Up Now
          </Button>
        </section>
      </main>

      <footer className="text-white py-8 mt-16" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 StudyBuddy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ icon, title, description, bgColor }: { icon: React.ReactNode; title: string; description: string; bgColor: string }) {
  return (
    <Card className="transition hover:shadow-lg" style={{ backgroundColor: bgColor }}>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  )
}

