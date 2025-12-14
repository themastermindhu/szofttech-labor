import { Wrench, ExternalLink, Github } from 'lucide-react';

export default function ToolsPage() {
  const tools = [
    {
      id: '1',
      name: 'Határérték-kalkulátor',
      description:
        'Automatikusan azonosítja a határértékeket numerikus és dátumtartományokhoz a teszteseteidben.',
      features: ['Érvényes/érvénytelen határértékek', 'Több adattípus', 'Tesztesetek exportálása'],
      status: 'Available',
    },
    {
      id: '2',
      name: 'Döntési tábla generátor',
      description:
        'Készíts átfogó döntési táblákat üzleti szabályokból, és generálj optimalizált teszteseteket.',
      features: ['Szabályvalidálás', 'Ellentmondások felismerése', 'CSV export'],
      status: 'Available',
    },
    {
      id: '3',
      name: 'Páronkénti teszttervező',
      description:
        'Hatékony pairwise kombinációkat generál konfigurációs teszteléshez több paraméterrel.',
      features: ['N-utas kombinációk', 'Megkötések támogatása', 'Lefedettség-elemzés'],
      status: 'Available',
    },
    {
      id: '4',
      name: 'Állapotátmenet-modellező',
      description:
        'Vizuális eszköz állapotátmeneti diagramok készítéséhez és tesztútvonalak generálásához.',
      features: ['Vizuális szerkesztő', 'Útvonal-lefedettség', 'Teszteset export'],
      status: 'Coming Soon',
    },
  ];

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Ingyenes tesztelési eszközök
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Erőteljes, ingyenes eszközök a teszttervezési folyamat egyszerűsítéséhez és a
            hatékonyság növeléséhez. Minden eszköz nyílt forráskódú és elérhető a közösség számára.
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
                  {getStatusLabel(tool.status)}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{tool.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-900 mb-2">Fő funkciók:</h4>
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
                  Eszköz indítása
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
            <h2 className="text-3xl font-bold mb-4">Szeretnél hozzájárulni?</h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Minden eszközünk nyílt forráskódú. Csatlakozz fejlesztői közösségünkhöz, és segíts
              még jobb tesztelési eszközöket építeni mindenki számára.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-all flex items-center justify-center gap-2">
                <Github className="h-5 w-5" />
                Megtekintés a GitHubon
              </button>
              <button className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20">
                Csatlakozás a közösséghez
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
