import { Target, Clock, Tag, ArrowLeft, ArrowRight, Lightbulb, ListChecks, FileInput, FileOutput } from 'lucide-react';
import { Exercise } from '../types';

interface ExerciseDetailPageProps {
  exercise: Exercise;
  onBack: () => void;
}

export default function ExerciseDetailPage({ exercise, onBack }: ExerciseDetailPageProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'bg-green-100 text-green-700';
      case 'intermediate':
        return 'bg-blue-100 text-blue-700';
      case 'advanced':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner':
        return 'Kezdő';
      case 'intermediate':
        return 'Középhaladó';
      case 'advanced':
        return 'Haladó';
      default:
        return difficulty;
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
          <span className="font-medium">Vissza a feladatokhoz</span>
        </button>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-xl p-8 md:p-12 mb-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                Feladat
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(exercise.difficulty)}`}>
                {getDifficultyLabel(exercise.difficulty)}
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              {exercise.title}
            </h1>

            <p className="text-lg text-cyan-50 mb-6 leading-relaxed">
              {exercise.description}
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{exercise.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5" />
                <span>{exercise.tags.length} technika</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {exercise.tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 py-2 bg-white border border-gray-200 text-gray-700 rounded-lg text-sm font-medium shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {exercise.scenario && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Forgatókönyv</h2>
            </div>
            <p className="text-gray-600 leading-relaxed whitespace-pre-line">
              {exercise.scenario}
            </p>
          </div>
        )}

        {exercise.steps && exercise.steps.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <ListChecks className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Lépések</h2>
            </div>
            <ol className="space-y-4">
              {exercise.steps.map((step, index) => (
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

        {exercise.inputs && exercise.inputs.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FileInput className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Bemenetek</h2>
            </div>
            <ul className="space-y-3">
              {exercise.inputs.map((input, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">{input}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {exercise.expectedOutputs && exercise.expectedOutputs.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                <FileOutput className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Elvárt eredmények</h2>
            </div>
            <ul className="space-y-3">
              {exercise.expectedOutputs.map((output, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-600 leading-relaxed">{output}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        {exercise.hints && exercise.hints.length > 0 && (
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-2xl border border-amber-200 p-8 mb-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-yellow-600 rounded-lg flex items-center justify-center">
                <Lightbulb className="h-5 w-5 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">Tippek</h2>
            </div>
            <ul className="space-y-3">
              {exercise.hints.map((hint, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-gray-700 leading-relaxed">{hint}</p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="group flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
            Feladat indítása
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={onBack}
            className="flex-1 flex items-center justify-center gap-2 px-8 py-4 bg-white border border-gray-300 text-gray-700 rounded-xl text-lg font-semibold hover:bg-gray-50 transition-all"
          >
            <ArrowLeft className="h-5 w-5" />
            Vissza a feladatokhoz
          </button>
        </div>
      </div>
    </div>
  );
}
