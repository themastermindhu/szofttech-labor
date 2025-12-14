import { Wrench, ExternalLink, Github } from 'lucide-react';

export default function ToolsPage() {
  const tools = [
    {
      id: '1',
      name: 'Boundary Value Calculator',
      description: 'Automatically identify boundary values for numeric and date ranges in your test scenarios.',
      features: ['Valid/Invalid boundaries', 'Multiple data types', 'Export test cases'],
      status: 'Available',
    },
    {
      id: '2',
      name: 'Decision Table Generator',
      description: 'Create comprehensive decision tables from business rules and generate optimized test cases.',
      features: ['Rule validation', 'Contradiction detection', 'CSV export'],
      status: 'Available',
    },
    {
      id: '3',
      name: 'Pairwise Test Designer',
      description: 'Generate efficient pairwise combinations for configuration testing with multiple parameters.',
      features: ['N-way combinations', 'Constraint support', 'Coverage analysis'],
      status: 'Available',
    },
    {
      id: '4',
      name: 'State Transition Modeler',
      description: 'Visual tool for creating state transition diagrams and generating test paths.',
      features: ['Visual editor', 'Path coverage', 'Test case export'],
      status: 'Coming Soon',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Free Testing Tools
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful, free tools to streamline your test design process and improve efficiency.
            All tools are open-source and available to the community.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {tools.map((tool) => (
            <div
              key={tool.id}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 hover:shadow-xl hover:border-cyan-300 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Wrench className="h-6 w-6 text-white" />
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-medium ${
                    tool.status === 'Available'
                      ? 'bg-green-100 text-green-700'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {tool.status}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="space-y-2">
                  {tool.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-600">
                      <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex gap-3">
                <button
                  disabled={tool.status !== 'Available'}
                  className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                    tool.status === 'Available'
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-sm hover:shadow-md'
                      : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  }`}
                >
                  <ExternalLink className="h-5 w-5" />
                  Launch Tool
                </button>
                <button className="p-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors">
                  <Github className="h-5 w-5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-3xl shadow-xl p-8 md:p-12 text-white">
          <div className="text-center max-w-3xl mx-auto">
            <Wrench className="h-16 w-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Want to Contribute?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              All our tools are open-source. Join our community of developers and help us build
              better testing tools for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Github className="h-5 w-5" />
                View on GitHub
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                Join Community
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
