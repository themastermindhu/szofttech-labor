import { Users, MessageSquare, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function CommunityPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Global Network',
      description: 'Connect with 2,776+ test designers from 15+ countries worldwide.',
    },
    {
      icon: MessageSquare,
      title: 'Expert Discussions',
      description: 'Participate in forums, Q&A sessions, and knowledge sharing with industry experts.',
    },
    {
      icon: BookOpen,
      title: 'Exclusive Content',
      description: 'Access members-only resources, case studies, and advanced learning materials.',
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Earn badges, certifications, and recognition for your contributions.',
    },
  ];

  const stats = [
    { value: '2,776+', label: 'Active Members' },
    { value: '15+', label: 'Countries' },
    { value: '500+', label: 'Discussions' },
    { value: '100%', label: 'Free to Join' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Test Design Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join a vibrant community of test designers sharing knowledge, experiences, and
            best practices to advance the field of software testing.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-sm border border-gray-200"
            >
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-xl hover:border-cyan-300 transition-all"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                <benefit.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-xl p-8 md:p-12 text-white text-center">
          <Users className="h-16 w-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Join?
          </h2>
          <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            Membership is completely free. Join thousands of test designers who are elevating
            their skills and contributing to the community.
          </p>
          <button className="group px-8 py-4 bg-white text-cyan-700 rounded-xl text-lg font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            Apply Now
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
