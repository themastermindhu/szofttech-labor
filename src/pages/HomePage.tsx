import { ArrowRight, BookOpen, Target, Wrench, TrendingDown, Award, Users, CheckCircle, Zap } from 'lucide-react';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const benefits = [
    {
      icon: TrendingDown,
      title: 'Költségcsökkentés',
      description:
        'Tervezd meg a hatékony tesztcsomagokat úgy, hogy kevesebb tesztesettel több hibát találj – jelentősen csökkentve a tesztelési időt és költségeket.',
    },
    {
      icon: Award,
      title: 'Jobb minőség',
      description:
        'Alkalmazz bevált teszttervezési technikákat a jobb lefedettségért, és fogd meg a kritikus hibákat még élesítés előtt.',
    },
    {
      icon: Zap,
      title: 'Gyorsabb szállítás',
      description:
        'Tedd gördülékenyebbé a tesztelési folyamatot strukturált módszertanokkal, amelyek gyorsítják a piacra kerülést a minőség feláldozása nélkül.',
    },
  ];

  const methodology = [
    {
      step: '01',
      icon: BookOpen,
      title: 'Tanulj',
      description:
        'Sajátítsd el a teszttervezési technikákat átfogó könyvekből, white paper-ekből és szakértői útmutatásokból.',
      color: 'from-cyan-500 to-blue-600',
    },
    {
      step: '02',
      icon: Target,
      title: 'Gyakorolj',
      description:
        'Fejleszd a készségeidet valós példákon és feladatokon, amelyeket iparági szakértők állítottak össze.',
      color: 'from-blue-500 to-indigo-600',
    },
    {
      step: '03',
      icon: Wrench,
      title: 'Alkalmazd',
      description:
        'Használd az ingyenes eszközeinket, és csatlakozz a közösséghez, ahol szakemberek éles környezetben alkalmazzák a teszttervezést.',
      color: 'from-indigo-500 to-purple-600',
    },
  ];

  const stats = [
    { value: '2 776+', label: 'Teszttervező' },
    { value: '50+', label: 'Gyakorló feladat' },
    { value: '100%', label: 'Ingyenes anyagok' },
    { value: '15+', label: 'Ország' },
  ];

  const features = [
    'Ekvivalenciaosztály-elemzés',
    'Határérték-analízis',
    'Döntési táblák',
    'Állapotátmenet-tesztelés',
    'Páronkénti tesztelés',
    'Kockázatalapú tesztelés',
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
              <span className="text-sm">Csatlakozz 2 776+ teszttervezőhöz világszerte</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Tanuljunk teszttervezést{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                együtt
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
              Sajátítsd el a szoftveres teszttervezés művészetét és tudományát. Építs jobb minőségű
              szoftvert, csökkentsd a költségeket, és gyorsítsd a szállítást bevált módszertanokkal
              és egy támogató közösséggel.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => onNavigate('exercises')}
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-2"
              >
                Gyakorlás indítása
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => onNavigate('learn')}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition-all border border-white/20 flex items-center gap-2"
              >
                <BookOpen className="h-5 w-5" />
                Anyagok felfedezése
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Miért fontos a teszttervezés?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A stratégiai teszttervezés a hatékony minőségbiztosítás alapja.
              Nem arról szól, hogy többet tesztelünk – hanem arról, hogy okosabban.
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
              A LEA módszertan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bevált, háromlépéses megközelítésünk a teszttervezés elsajátításához
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {methodology.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-transparent hover:shadow-2xl transition-all h-full">
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {step.step}
                  </div>

                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                  >
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
                Sajátítsd el a legfontosabb teszttervezési technikákat
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Átfogó anyagaink lefedik a vezető QA csapatok által világszerte használt
                kritikus teszttervezési módszereket. Az alapoktól a haladó stratégiákig segítünk
                felépíteni azokat a készségeket, amelyek igazán számítanak.
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
                Összes technika megtekintése
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
                      <h4 className="font-semibold text-gray-900 mb-2">Kiemelt feladat</h4>
                      <p className="text-sm text-gray-600">
                        SafeMoney Bank alkalmazás: gyakorold az ekvivalenciaosztály-elemzést és a
                        határérték-analízist egy valós forgatókönyvön.
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
            Csatlakozz a Teszttervező Közösséghez
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Kapcsolódj 2 776+ teszttervezőhöz a világ minden tájáról. Férj hozzá exkluzív eszközökhöz,
            vegyél részt beszélgetésekben, és fejlődj iparági társak mellett.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('apply')}
              className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2"
            >
              Csatlakozz most – ingyenes
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onNavigate('community')}
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl text-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
            >
              Tudj meg többet
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
