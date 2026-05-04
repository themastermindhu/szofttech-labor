import { useState } from 'react';
import { Wrench, ExternalLink, Github } from 'lucide-react';
import { Tool } from '../types';
import ToolDetailPage from './ToolDetailPage';

interface ToolsPageProps {
  onNavigate: (page: string) => void;
}

const toolData: Tool[] = [
  {
    id: '1',
    name: 'Határérték-kalkulátor',
    description:
      'Automatikusan azonosítja a határértékeket numerikus és dátumtartományokhoz a teszteseteidben.',
    features: ['Érvényes/érvénytelen határértékek', 'Több adattípus', 'Tesztesetek exportálása'],
    status: 'Available',
    longDescription:
      'A Határérték-kalkulátor segít a tesztelőknek szisztematikusan azonosítani a határértékeket bármilyen numerikus vagy dátumtartományú bemenethez. Add meg a tartomány paramétereit, és az eszköz teljes határérték-tesztkészletet generál, beleértve a minimum, minimum feletti, névleges, maximum alatti és maximum értékeket.\n\nAz eszköz támogatja az egész számokat, tizedes tartományokat és dátumtartományokat. Kezeli a speciális eseteket is, például a kizáró határokat és a nyílt/zárt intervallumokat. Az eredmények több formátumban exportálhatók tesztmenedzsment rendszerbe történő integrációhoz.',
    howToUse: [
      'Válaszd ki a bemenet adattípusát: egész szám, tizedes szám vagy dátum.',
      'Add meg a tartomány minimum és maximum értékét.',
      'Válaszd ki, hogy a határok befoglalók vagy kizárók legyenek.',
      'Kattints a „Generálás” gombra a határérték-tesztesetek létrehozásához.',
      'Ellenőrizd a generált tesztértékeket és az elvárt eredményeket.',
      'Exportáld a teszteseteket a kívánt formátumban: CSV, JSON vagy XML.',
    ],
    useCases: [
      'Pénzügyi alkalmazások tesztelése pénzösszeg-tartományokkal',
      'Életkori korlátozások validálása regisztrációs űrlapokon',
      'Dátumtartomány-szűrők tesztelése riporting rendszerekben',
      'Mennyiségi limitek ellenőrzése e-kereskedelmi platformokon',
      'Szenzorérték-küszöbök tesztelése IoT alkalmazásokban',
    ],
    limitations: [
      'Jelenleg csak egydimenziós tartományokat támogat.',
      'Egyedi határérték-stratégiák, például robusztus legrosszabb eset, még nem támogatottak.',
      'Az eszköz nem generál teszteseteket nem numerikus bemenetekhez.',
    ],
  },
  {
    id: '2',
    name: 'Döntési tábla generátor',
    description:
      'Készíts átfogó döntési táblákat üzleti szabályokból, és generálj optimalizált teszteseteket.',
    features: ['Szabályvalidálás', 'Ellentmondások felismerése', 'CSV export'],
    status: 'Available',
    longDescription:
      'A Döntési tábla generátor az üzleti szabályokat strukturált döntési táblákká alakítja, így könnyen azonosíthatók a feltételek lehetséges kombinációi és a hozzájuk tartozó műveletek. Az eszköz automatikusan felismeri az ellentmondásokat és redundanciákat, így a tesztesetek egyszerre lesznek teljesek és minimálisak.\n\nAdd meg a feltételeket és műveleteket, definiáld a szabályokat, majd az eszköz elkészíti a teljes döntési táblát optimalizált tesztlefedettséggel.',
    howToUse: [
      'Definiáld az összes feltételt és azok lehetséges értékeit.',
      'Definiáld az összes műveletet vagy kimenetet.',
      'Add meg az üzleti szabályokat, amelyek a feltételkombinációkat műveletekhez rendelik.',
      'Kattints a „Tábla generálása” gombra a teljes döntési tábla létrehozásához.',
      'Ellenőrizd az eszköz elemzését az ellentmondásokra és redundanciákra.',
      'Exportáld az optimalizált teszteseteket megvalósításhoz.',
    ],
    useCases: [
      'Kedvezményjogosultsági szabályok tesztelése e-kereskedelmi rendszerekben',
      'Hiteljóváhagyási logika validálása banki alkalmazásokban',
      'Hozzáférés-kezelési szabályok tesztelése biztonsági rendszerekben',
      'Szállítási költségszámítási szabályok ellenőrzése',
      'Biztosítási kárigény-feldolgozási logika tesztelése',
    ],
    limitations: [
      'Legfeljebb 15 feltételt támogat táblánként.',
      'Nem támogat szekvenciális vagy állapotfüggő szabályokat.',
      'Meglévő követelménydokumentumokból történő importálás még nem érhető el.',
    ],
  },
  {
    id: '3',
    name: 'Páronkénti teszttervező',
    description:
      'Hatékony pairwise kombinációkat generál konfigurációs teszteléshez több paraméterrel.',
    features: ['N-utas kombinációk', 'Megkötések támogatása', 'Lefedettség-elemzés'],
    status: 'Available',
    longDescription:
      'A Páronkénti teszttervező kombinatorikus tesztelési technikákkal hoz létre hatékony tesztkészleteket. Ahelyett, hogy minden lehetséges kombinációt tesztelnél, a páronkénti tesztelés biztosítja, hogy minden paraméterérték-pár legalább egyszer együtt szerepeljen. Ez jelentősen csökkenti a tesztesetek számát, miközben magas hibafelderítési arányt biztosít.\n\nAz eszköz támogatja a 2-utas, vagyis pairwise teszteléstől az N-utas kombinatorikus tesztelésig terjedő lefedettséget, valamint az érvénytelen kombinációk kizárását megkötések segítségével.',
    howToUse: [
      'Definiáld az összes tesztparamétert és azok lehetséges értékeit.',
      'Adj meg megkötéseket a paraméterek között.',
      'Válaszd ki a kombinatorikus lefedettség erősségét: 2-utas, 3-utas vagy egyedi N-utas.',
      'Kattints a „Generálás” gombra az optimalizált tesztkészlet létrehozásához.',
      'Ellenőrizd a lefedettség-elemzést, hogy minden pár lefedésre került-e.',
      'Exportáld a tesztkészletet paraméterkombinációkkal és elvárt eredményekkel.',
    ],
    useCases: [
      'Szoftverkonfigurációk tesztelése több platformon és böngészőben',
      'API paraméterkombinációk validálása',
      'Mobilalkalmazások tesztelése különböző eszköztípusokon és operációs rendszereken',
      'Funkciókapcsolók különböző kombinációinak ellenőrzése',
      'Adatbázis-kompatibilitás tesztelése különböző motorokkal és verziókkal',
    ],
    limitations: [
      'Nagyon nagy paraméterhalmazok feldolgozása jelentős időt vehet igénybe.',
      'Az eszköz nem határozza meg automatikusan az elvárt eredményeket.',
      'Összetett, egymásba ágyazott megkötések kézi egyszerűsítést igényelhetnek.',
    ],
  },
  {
    id: '4',
    name: 'Állapotátmenet-modellező',
    description:
      'Vizuális eszköz állapotátmeneti diagramok készítéséhez és tesztútvonalak generálásához.',
    features: ['Vizuális szerkesztő', 'Útvonal-lefedettség', 'Teszteset export'],
    status: 'Coming Soon',
    longDescription:
      'Az Állapotátmenet-modellező intuitív vizuális felületet biztosít állapotátmeneti diagramok készítéséhez. Definiálhatsz állapotokat, eseményeket és átmeneteket, majd automatikusan generálhatsz teszteseteket, amelyek lefedik az összes átmenetet, illetve az átmenetsorozatokat.\n\nAz eszköz jelenleg fejlesztés alatt áll, és hamarosan elérhető lesz.',
    howToUse: [
      'Hozz létre egy új állapotátmeneti modellt.',
      'Adj hozzá állapotokat a vászonra kattintva.',
      'Definiálj átmeneteket az állapotok között eseményekkel és őrfeltételekkel.',
      'Jelöld meg a kezdő és végállapotokat.',
      'Válaszd ki a lefedettségi szintet.',
      'Generálj teszteseteket és exportáld az eredményeket.',
    ],
    useCases: [
      'Bejelentkezési és munkamenet-kezelési folyamatok tesztelése',
      'Rendelésfeldolgozási állapotgépek validálása',
      'IoT eszközök állapotátmeneteinek tesztelése',
      'Workflow motorok viselkedésének ellenőrzése',
      'Játékállapot-kezelés tesztelése',
    ],
    limitations: [
      'Az eszköz még nem érhető el, jelenleg fejlesztés alatt áll.',
      'A tervezett első verzió legfeljebb 20 állapotot támogat modellenként.',
      'A valós idejű együttműködés egy későbbi verzióban várható.',
    ],
  },
];

export { toolData };

export default function ToolsPage({ onNavigate }: ToolsPageProps) {
  const [selectedTool, setSelectedTool] = useState<Tool | null>(null);

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

  if (selectedTool) {
    return (
      <ToolDetailPage
        tool={selectedTool}
        onBack={() => setSelectedTool(null)}
      />
    );
  }

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
          {toolData.map((tool) => (
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
                  onClick={() => setSelectedTool(tool)}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 shadow-sm hover:shadow-md"
                >
                  <ExternalLink className="h-5 w-5" />
                  Részletek megtekintése
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
              <button
                onClick={() => onNavigate('apply')}
                className="px-8 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all border border-white/20"
              >
                Csatlakozás a közösséghez
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
