import { Users, MessageSquare, BookOpen, Award, ArrowRight } from 'lucide-react';

export default function CommunityPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Globális hálózat',
      description: 'Kapcsolódj több mint 2 776 teszttervezőhöz 15+ országból világszerte.',
    },
    {
      icon: MessageSquare,
      title: 'Szakértői beszélgetések',
      description: 'Vegyél részt fórumokon, kérdezz–felelek alkalmakon és tudásmegosztásban iparági szakértőkkel.',
    },
    {
      icon: BookOpen,
      title: 'Exkluzív tartalmak',
      description: 'Férj hozzá csak tagoknak elérhető anyagokhoz, esettanulmányokhoz és haladó tanulási forrásokhoz.',
    },
    {
      icon: Award,
      title: 'Elismerés',
      description: 'Szerezz jelvényeket, tanúsítványokat és elismerést a hozzájárulásaidért.',
    },
  ];

  const stats = [
    { value: '2 776+', label: 'Aktív tag' },
    { value: '15+', label: 'Ország' },
    { value: '500+', label: 'Beszélgetés' },
    { value: '100%', label: 'Ingyenes csatlakozás' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Teszttervező Közösség
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Csatlakozz egy aktív teszttervező közösséghez, ahol tudásmegosztás,
            tapasztalatcsere és bevált gyakorlatok segítik a szoftvertesztelés fejlődését.
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
            Készen állsz a csatlakozásra?
          </h2>
          <p className="text-xl text-cyan-50 mb-8 max-w-2xl mx-auto leading-relaxed">
            A tagság teljesen ingyenes. Csatlakozz több ezer teszttervezőhöz,
            akik fejlesztik tudásukat és aktívan hozzájárulnak a közösséghez.
          </p>
          <button className="group px-8 py-4 bg-white text-cyan-700 rounded-xl text-lg font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto">
            Jelentkezés most
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
