import { Target, Clock, Tag, ArrowRight, TrendingUp } from 'lucide-react';
import { Exercise } from '../types';

export default function ExercisesPage() {
  const exercises: Exercise[] = [
    {
      id: '1',
      title: 'SafeMoney Bank alkalmazás',
      difficulty: 'beginner',
      description:
        'Gyakorold az ekvivalenciaosztály-elemzést és a határérték-analízist egy banki alkalmazás példáján. Tanuld meg az érvényes és érvénytelen partíciók azonosítását a tranzakciók során.',
      duration: '45 perc',
      tags: ['Ekvivalenciaosztályok', 'Határérték-analízis', 'Banki rendszer'],
    },
    {
      id: '2',
      title: 'E-kereskedelmi fizetési folyamat',
      difficulty: 'intermediate',
      description:
        'Tervezd meg a teszteseteket egy összetett fizetési folyamathoz többféle fizetési móddal, kedvezménykódokkal és szállítási opciókkal döntési táblák segítségével.',
      duration: '60 perc',
      tags: ['Döntési táblák', 'Állapotátmenet', 'E-kereskedelem'],
    },
    {
      id: '3',
      title: 'Mobilalkalmazás állapotátmenetek',
      difficulty: 'intermediate',
      description:
        'Készíts átfogó állapotátmeneti diagramokat és teszteseteket egy mobilalkalmazáshoz bejelentkezéssel, offline móddal és szinkronizációs funkciókkal.',
      duration: '90 perc',
      tags: ['Állapotátmenet', 'Mobil', 'Szinkronizáció'],
    },
    {
      id: '4',
      title: 'API konfiguráció tesztelése',
      difficulty: 'advanced',
      description:
        'Alkalmazz páronkénti tesztelést (pairwise) egy REST API hatékony teszteléséhez több konfigurációs paraméterrel és függőséggel.',
      duration: '120 perc',
      tags: ['Páronkénti tesztelés', 'API', 'Kombinatorikus'],
    },
    {
      id: '5',
      title: 'Kockázatalapú tesztprioritás',
      difficulty: 'advanced',
      description:
        'Elemezz egy összetett rendszert, és rangsorold a teszteseteket kockázatelemzés, üzleti hatás és technikai összetettség alapján.',
      duration: '90 perc',
      tags: ['Kockázatalapú tesztelés', 'Tesztstratégia', 'Prioritás'],
    },
    {
      id: '6',
      title: 'Űrlapvalidációs kihívás',
      difficulty: 'beginner',
      description:
        'Tervezd meg a hatékony teszteseteket egy regisztrációs űrlaphoz különböző mezőtípusokkal, validációs szabályokkal és hibakezeléssel.',
      duration: '30 perc',
      tags: ['Határérték-analízis', 'Ekvivalenciaosztályok', 'Űrlapok'],
    },
  ];

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

  const featuredExercise = exercises[0];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Gyakorló feladatok
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Alkalmazd a teszttervezési tudásodat iparági szakértők által készített,
            gyakorlatorientált feladatokon. Kezdőtől haladó szintig mindenki talál kihívást.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-3xl shadow-xl p-8 md:p-12 mb-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="relative">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                Kiemelt feladat
              </div>
              <div
                className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                  featuredExercise.difficulty
                )}`}
              >
                {featuredExercise.difficulty === 'beginner'
                  ? 'kezdő'
                  : featuredExercise.difficulty === 'intermediate'
                  ? 'középhaladó'
                  : 'haladó'}
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {featuredExercise.title}
            </h2>

            <p className="text-lg text-cyan-50 mb-6 max-w-3xl leading-relaxed">
              {featuredExercise.description}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>{featuredExercise.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="h-5 w-5" />
                <span>{featuredExercise.tags.length} technika</span>
              </div>
            </div>

            <button className="group px-8 py-4 bg-white text-cyan-700 rounded-xl text-lg font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2">
              Feladat indítása
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Összes feladat</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-medium">
              {exercises.length} feladat érhető el
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {exercises.map((exercise) => (
            <div
              key={exercise.id}
              className="group bg-white rounded-2xl shadow-sm border border-gray-200 p-6 hover:shadow-xl hover:border-cyan-300 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${getDifficultyColor(
                      exercise.difficulty
                    )}`}
                  >
                    {exercise.difficulty === 'beginner'
                      ? 'kezdő'
                      : exercise.difficulty === 'intermediate'
                      ? 'középhaladó'
                      : 'haladó'}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-gray-600">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">{exercise.duration}</span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                {exercise.title}
              </h3>

              <p className="text-gray-600 mb-4 leading-relaxed">
                {exercise.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {exercise.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-lg text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <button className="w-full group/btn flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md">
                Feladat indítása
                <ArrowRight className="h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 p-8 text-center">
          <Target className="h-12 w-12 text-cyan-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Több gyakorlásra vágysz?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Csatlakozz közösségünkhöz, hogy exkluzív haladó feladatokhoz férj hozzá,
            részt vegyél kihívásokban, és visszajelzést kapj tapasztalt teszttervezőktől.
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl">
            Csatlakozás a közösséghez
          </button>
        </div>
      </div>
    </div>
  );
}
