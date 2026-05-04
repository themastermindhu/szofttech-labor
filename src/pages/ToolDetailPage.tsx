import { Wrench, ArrowLeft, ExternalLink, Github, ListChecks, Briefcase, AlertTriangle } from 'lucide-react';
import { Tool } from '../types';

interface ToolDetailPageProps {
  tool: Tool;
  onBack: () => void;
}

export default function ToolDetailPage({ tool, onBack }: ToolDetailPageProps) {
  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'Available':
        return 'Elérhető';
      case 'Coming Soon':
        return 'Hamarosan';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="group flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-8 transition-colors"
        >
          <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Vissza az eszközökhöz</span>
        </button>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-xl p-8 md:p-12 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                Eszköz
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  tool.status === 'Available'
                    ? 'bg-green-100 text-green-700'
                    : 'bg-gray-100 text-gray-700'
                }`}
              >
                {getStatusLabel(tool.status)}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {tool.name}
            </h1>

            <p className="text-lg text-cyan-50 mb-6 leading-relaxed">
              {tool.description}
            </p>

            <div className="flex flex-wrap gap-3">
              {tool.status === 'Available' && (
                <button className="group flex items-center gap-2 px-6 py-3 bg-white text-cyan-700 rounded-xl font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl">
                  <ExternalLink className="h-5 w-5" />
                  Eszköz indítása
                  <ArrowLeft className="h-4 w-4 rotate-180 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
              <button className="flex items-center gap-2 px-6 py-3 bg-white/20 backdrop-blur-sm text-white rounded-xl font-semibold hover:bg-white/30 transition-all border border-white/20">
                <Github className="h-5 w-5" />
                Forráskód megtekintése
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tool.features.map((feature, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium shadow-sm"
            >
              {feature}
            </span>
          ))}
        </div>

        {tool.longDescription && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Wrench className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Az eszközről</h2>
            </div>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {tool.longDescription}
            </p>
          </div>
        )}

        {tool.howToUse && tool.howToUse.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <ListChecks className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Használat</h2>
            </div>
            <ol className="space-y-4">
              {tool.howToUse.map((step, index) => (
                <li key={index} className="flex gap-4">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <p className="text-gray-600 leading-relaxed pt-1">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        )}

        {tool.useCases && tool.useCases.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Briefcase className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Felhasználási esetek</h2>
            </div>
            <ul className="space-y-3">
              {tool.useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">{useCase}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {tool.limitations && tool.limitations.length > 0 && (
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <AlertTriangle className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Korlátok</h2>
            </div>
            <ul className="space-y-3">
              {tool.limitations.map((limitation, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{limitation}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          {tool.status === 'Available' && (
            <button className="group flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
              <ExternalLink className="h-5 w-5" />
              Eszköz indítása
            </button>
          )}
          <button
            onClick={onBack}
            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-300 text-gray-700 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all"
          >
            <ArrowLeft className="h-5 w-5" />
            Vissza az eszközökhöz
          </button>
        </div>
      </div>
    </div>
  );
}
