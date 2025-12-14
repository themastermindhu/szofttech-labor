import { ArrowRight, BookOpen, Target, Wrench, TrendingDown, Award, Users, CheckCircle, Zap } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Reduce Costs',
      description: 'Design efficient test suites that find more bugs with fewer test cases, dramatically reducing testing time and costs.',
    },
    {
      icon: Award,
      title: 'Improve Quality',
      description: 'Apply proven test design techniques to achieve better coverage and catch critical defects before production.',
    },
    {
      icon: Zap,
      title: 'Faster Delivery',
      description: 'Streamline your testing process with structured methodologies that accelerate time-to-market without sacrificing quality.',
    },
  ];

  const methodology = [
    {
      step: '01',
      icon: BookOpen,
      title: 'Learn',
      description: 'Master test design techniques through comprehensive books, white papers, and expert guidance.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      step: '02',
      icon: Target,
      title: 'Exercise',
      description: 'Practice your skills with real-world exercises and scenarios designed by industry experts.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      step: '03',
      icon: Wrench,
      title: 'Apply',
      description: 'Use our free tools and join a community of professionals applying test design in production.',
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  const stats = [
    { value: '2,776+', label: 'Test Designers' },
    { value: '50+', label: 'Practice Exercises' },
    { value: '100%', label: 'Free Resources' },
    { value: '15+', label: 'Countries' },
  ];

  const features = [
    'Equivalence Partitioning',
    'Boundary Value Analysis',
    'Decision Tables',
    'State Transition Testing',
    'Pairwise Testing',
    'Risk-Based Testing',
  ];

  return (
    <div className="min-h-screen">
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/20">
              <Users className="h-4 w-4 text-cyan-400" />
              <span className="text-sm">Join 2,776+ test designers worldwide</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Let's Learn Test Design{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Together
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Master the art and science of software test design. Build higher quality software,
              reduce costs, and accelerate delivery with proven methodologies and a supportive community.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onNavigate('exercises')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
              >
                Start Practicing
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('learn')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                Explore Resources
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Test Design Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic test design is the foundation of effective quality assurance.
              It's not just about testing more—it's about testing smarter.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 hover:border-cyan-300 hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The LEA Methodology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our proven three-step approach to mastering test design
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((step, index) => (
              <div
                key={index}
                className="relative group"
              >
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </div>

                {index < methodology.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <ArrowRight className="h-8 w-8 text-gray-300" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Master Essential Test Design Techniques
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our comprehensive resources cover all the critical test design methods used by
                leading QA teams worldwide. From foundational techniques to advanced strategies,
                we'll help you build the skills that matter.
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-cyan-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('learn')}
                className="group px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                View All Techniques
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-8 border border-cyan-200">
                <div className="bg-white rounded-xl p-6 shadow-lg mb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Featured Exercise</h4>
                      <p className="text-sm text-gray-600">
                        SafeMoney Bank Application: Practice equivalence partitioning and
                        boundary value analysis on a real-world scenario.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="bg-white rounded-xl p-4 text-center shadow">
                      <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <Users className="h-16 w-16 mx-auto mb-6 text-cyan-400" />
          <h2 className="text-4xl font-bold mb-6">
            Join the Test Design Community
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Connect with 2,776+ test designers from around the world. Get access to exclusive
            tools, participate in discussions, and grow your expertise alongside industry peers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('apply')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Join Now - It's Free
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('community')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
