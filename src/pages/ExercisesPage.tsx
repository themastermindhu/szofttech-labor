import { useState } from 'react';
import { Target, Clock, Tag, ArrowRight, TrendingUp } from 'lucide-react';
import { Exercise } from '../types';
import ExerciseDetailPage from './ExerciseDetailPage';

interface ExercisesPageProps {
  onNavigate: (page: string) => void;
}

const exerciseData: Exercise[] = [
  {
    id: '1',
    title: 'SafeMoney Bank alkalmazás',
    difficulty: 'beginner',
    description:
      'Gyakorold az ekvivalenciaosztály-elemzést és a határérték-analízist egy banki alkalmazás példáján. Tanuld meg az érvényes és érvénytelen partíciók azonosítását a tranzakciók során.',
    duration: '45 perc',
    tags: ['Ekvivalenciaosztályok', 'Határérték-analízis', 'Banki rendszer'],
    scenario:
      'A SafeMoney Bank új online banki alkalmazást indított. Az ügyfelek befizetéseket, készpénzfelvételeket és átutalásokat végezhetnek. A rendszer tranzakciós összegeket fogad, és ezeket üzleti szabályok alapján kell validálnia.\n\nA feladatod olyan tesztesetek tervezése, amelyek hatékonyan lefedik a tranzakciós összegek bemeneti tartományát ekvivalenciaosztály-elemzés és határérték-analízis segítségével.',
    steps: [
      'Azonosítsd az összes tesztelendő bemeneti paramétert, például tranzakciós összeg, számlaegyenleg, átutalási cél.',
      'Alkalmazz ekvivalenciaosztály-elemzést, és oszd fel a bemeneteket érvényes és érvénytelen osztályokra.',
      'Alkalmazz határérték-analízist, és határozd meg az egyes partíciók szélein lévő tesztértékeket.',
      'Dokumentáld a teszteseteket strukturált táblázatban: bemenet, elvárt eredmény és lefedett partíció.',
      'Ellenőrizd a tesztkészlet teljességét, és távolítsd el a redundáns eseteket.',
    ],
    inputs: [
      'Befizetési összeg: 0,01 USD - 10 000 USD',
      'Készpénzfelvételi összeg: 0,01 USD - 5 000 USD',
      'Számlaegyenleg: 0,00 USD - 100 000 USD',
      'Átutalási összeg: 0,01 USD - 5 000 USD tranzakciónként',
    ],
    expectedOutputs: [
      'Az érvényes tranzakciók sikeresen feldolgozásra kerülnek',
      'A minimális összeg alatti tranzakciókat a rendszer megfelelő hibaüzenettel elutasítja',
      'A maximális összeget meghaladó tranzakciókat a rendszer megfelelő hibaüzenettel elutasítja',
      'A határértékeket a rendszer helyesen kezeli: pontos minimum, pontos maximum, minimum alatti és maximum feletti érték',
      'A számlaegyenleg minden érvényes tranzakció után helyesen frissül',
    ],
    hints: [
      'Minden bemenetnél gondolj pozitív és negatív ekvivalenciaosztályokra is.',
      'Ne felejtsd el a partíciók mindkét oldalán lévő határokat tesztelni.',
      'Vedd figyelembe a speciális eseteket is, például nulla összeg és negatív értékek.',
      'Gondold végig, mi történik, ha a felvételi összeg pontosan megegyezik a számlaegyenleggel.',
    ],
  },
  {
    id: '2',
    title: 'E-kereskedelmi fizetési folyamat',
    difficulty: 'intermediate',
    description:
      'Tervezd meg a teszteseteket egy összetett fizetési folyamathoz többféle fizetési móddal, kedvezménykódokkal és szállítási opciókkal döntési táblák segítségével.',
    duration: '60 perc',
    tags: ['Döntési táblák', 'Állapotátmenet', 'E-kereskedelem'],
    scenario:
      'A ShopEasy egy e-kereskedelmi platform többlépéses fizetési folyamattal. A vásárlók különböző fizetési módok közül választhatnak, kedvezménykódokat alkalmazhatnak, és szállítási opciókat választhatnak. A végső ár ezek kombinációjától függ.\n\nKészíts döntési táblát, amely lefedi a releváns kombinációkat, és hatékony teszteseteket eredményez.',
    steps: [
      'Azonosítsd a feltételeket: fizetési mód, kedvezménykód érvényessége, szállítási opció, rendelési összeg.',
      'Sorold fel az egyes feltételek lehetséges értékeit.',
      'Készíts döntési táblát az összes feltételkombinációval.',
      'Határozd meg az egyes kombinációkhoz tartozó műveletet: végső ár számítása, hibaüzenet stb.',
      'Egyszerűsítsd a döntési táblát a lehetetlen vagy redundáns kombinációk eltávolításával.',
      'Vezesd le a teszteseteket az egyszerűsített döntési táblából.',
    ],
    inputs: [
      'Fizetési mód: bankkártya, PayPal, banki átutalás, utánvét',
      'Kedvezménykód: érvényes 10%, érvényes 20%, lejárt, érvénytelen, nincs kód',
      'Szállítás: standard, expressz, másnapi',
      'Rendelési összeg: 0 USD - 500 USD',
    ],
    expectedOutputs: [
      'A végső ár minden érvényes kombináció esetén helyesen kerül kiszámításra',
      'A lejárt kedvezménykódokat a rendszer megfelelő üzenettel elutasítja',
      'Az érvénytelen kedvezménykódokat a rendszer megfelelő üzenettel elutasítja',
      'A szállítási költségek helyesen kerülnek alkalmazásra a módszer és rendelési összeg alapján',
      'A fizetési módokra vonatkozó korlátozások érvényesülnek',
    ],
    hints: [
      'Nem minden kombináció lehetséges — egyes fizetési módokhoz korlátozások tartozhatnak.',
      'Használhatsz összevont döntési táblákat a tesztesetek számának csökkentésére.',
      'A kedvezménykódokhoz minimális rendelési összeg is tartozhat.',
      'Egyes szállítási módok bizonyos célországoknál nem érhetők el.',
    ],
  },
  {
    id: '3',
    title: 'Mobilalkalmazás állapotátmenetek',
    difficulty: 'intermediate',
    description:
      'Készíts átfogó állapotátmeneti diagramokat és teszteseteket egy mobilalkalmazáshoz bejelentkezéssel, offline móddal és szinkronizációs funkciókkal.',
    duration: '90 perc',
    tags: ['Állapotátmenet', 'Mobil', 'Szinkronizáció'],
    scenario:
      'A SyncApp egy mobilalkalmazás, amely feladatok kezelését teszi lehetővé. Az alkalmazás több állapotban lehet, például kijelentkezett, bejelentkezett, offline mód és szinkronizálás. Az állapotok közötti átmeneteket a hálózati elérhetőség és a felhasználói műveletek váltják ki.\n\nKészíts állapotátmeneti diagramot, majd vezess le belőle teszteseteket.',
    steps: [
      'Azonosítsd az alkalmazás lehetséges állapotait: kijelentkezett, bejelentkezett, offline, szinkronizálás, hiba.',
      'Azonosítsd az állapotátmeneteket kiváltó eseményeket.',
      'Rajzold meg az állapotátmeneti diagramot az összes állapottal és átmenettel.',
      'Készíts állapotátmeneti táblázatot az érvényes átmenetekről.',
      'Azonosítsd az érvénytelen átmeneteket, amelyeket hibakezelési szempontból tesztelni kell.',
      'Generálj teszteseteket az összes átmenet és átmenetsorozat lefedésére.',
    ],
    inputs: [
      'Felhasználói hitelesítő adatok: érvényes, érvénytelen, lejárt munkamenet',
      'Hálózati állapot: online, offline, instabil',
      'Adatállapot: helyi módosítások, nincs módosítás, konfliktus',
      'Szinkronizáció indítása: manuális, automatikus, háttérben',
    ],
    expectedOutputs: [
      'Az alkalmazás helyesen vált állapotot az események alapján',
      'Offline mód aktiválódik hálózatvesztéskor',
      'Az adatok szinkronizálódnak, amikor a hálózat helyreáll',
      'A konfliktusokat a rendszer felismeri és megfelelően kezeli',
      'A felhasználó kijelentkezik lejárt munkamenet esetén',
      'A hibaállapotok felhasználóbarát visszajelzéssel kezelődnek',
    ],
    hints: [
      'Minden átmenetnél vizsgáld a sikeres és hibás forgatókönyveket is.',
      'Teszteld, mi történik, ha több esemény egyszerre következik be.',
      'Ne felejtsd el a háttérből visszatérés mobilos forgatókönyvét.',
      'Vedd figyelembe az energiatakarékos módokat is.',
    ],
  },
  {
    id: '4',
    title: 'API konfiguráció tesztelése',
    difficulty: 'advanced',
    description:
      'Alkalmazz páronkénti tesztelést egy REST API hatékony teszteléséhez több konfigurációs paraméterrel és függőséggel.',
    duration: '120 perc',
    tags: ['Páronkénti tesztelés', 'API', 'Kombinatorikus'],
    scenario:
      'A ConfigAPI egy REST API szolgáltatás, amely több konfigurációs paramétert fogad. Minden paraméter több értéket vehet fel, ezért az összes kombináció tesztelése több ezer tesztesetet igényelne. Használj páronkénti tesztelést a tesztesetek számának csökkentésére úgy, hogy minden paraméterérték-pár legalább egyszer lefedésre kerüljön.',
    steps: [
      'Azonosítsd az összes konfigurációs paramétert és azok lehetséges értékeit.',
      'Határozd meg, mely paraméterpárok okozhatnak legnagyobb valószínűséggel hibát.',
      'Használj páronkénti tesztelést egy minimális tesztkészlet létrehozásához.',
      'Adj hozzá további teszteseteket az ismert, magas kockázatú kombinációkhoz.',
      'Dokumentáld az egyes tesztesetek paraméterkombinációját és az elvárt API választ.',
      'Ellenőrizd, hogy a tesztkészlet teljes páronkénti lefedettséget biztosít.',
    ],
    inputs: [
      'Hitelesítés: API-kulcs, OAuth token, Basic Auth, nincs',
      'Content-Type: JSON, XML, Form-URL-Encoded, Multipart',
      'Sebességkorlát: 100/perc, 1000/perc, korlátlan',
      'Verzió: v1, v2, v3 béta',
      'Környezet: éles, staging, fejlesztői',
      'Lapozás: nincs, offset alapú, cursor alapú',
    ],
    expectedOutputs: [
      'Minden paraméterpár legalább egy tesztesetben szerepel',
      'Az API minden érvényes kombinációra helyesen válaszol',
      'Az érvénytelen kombinációk megfelelő hibakódot adnak',
      'A hitelesítési hibák minden tartalomtípusnál konzisztensen kezelődnek',
      'A sebességkorlátozás más paraméterektől függetlenül helyesen működik',
    ],
    hints: [
      'Használhatsz ortogonális tömböt vagy Allpairs algoritmust.',
      'Vegyél figyelembe megkötéseket, mert egyes kombinációk tervezetten érvénytelenek lehetnek.',
      'A legnagyobb kölcsönhatási kockázatú paraméterpárokat priorizáld.',
      'Ne felejtsd el az alapértelmezett értékek tesztelését sem.',
    ],
  },
  {
    id: '5',
    title: 'Kockázatalapú tesztprioritás',
    difficulty: 'advanced',
    description:
      'Elemezz egy összetett rendszert, és rangsorold a teszteseteket kockázatelemzés, üzleti hatás és technikai összetettség alapján.',
    duration: '90 perc',
    tags: ['Kockázatalapú tesztelés', 'Tesztstratégia', 'Prioritás'],
    scenario:
      'A MegaCorp egy új vállalatirányítási rendszert vezet be 15 modullal. A tesztcsapat ideje és erőforrásai korlátozottak. Fel kell mérned az egyes modulok kockázatát, majd ennek alapján priorizálnod kell a tesztelési erőfeszítéseket.',
    steps: [
      'Sorold fel a rendszer moduljait és azok fő funkcióit.',
      'Becsüld meg a hibák valószínűségét modulonként.',
      'Becsüld meg a hibák üzleti hatását modulonként.',
      'Számíts kockázati prioritási értéket a valószínűség és hatás alapján.',
      'Rangsorold a modulokat kockázat alapján, és oszd el arányosan a tesztelési erőforrásokat.',
      'Először a legmagasabb kockázatú modulokra tervezz teszteseteket.',
    ],
    inputs: [
      'Modulok összetettségi értékelése',
      'Fejlesztői tapasztalat és korábbi hibastatisztikák',
      'Üzleti kritikalitási értékelések',
      'Szabályozási és megfelelőségi követelmények',
      'Rendelkezésre álló tesztelési idő és erőforrás',
    ],
    expectedOutputs: [
      'Kockázati mátrix az összes modulra',
      'Prioritásos tesztterv erőforrás-elosztással',
      'Tesztesetek az 5 legmagasabb kockázatú modulra',
      'Indoklás a kockázati értékelésekhez és prioritásokhoz',
      'Tartalékterv a csökkentett tesztelést kapó modulokra',
    ],
    hints: [
      'Használj kockázati mátrixot a prioritások vizualizálására.',
      'Vedd figyelembe a funkcionális és nem funkcionális kockázatokat is.',
      'A korábbi hibastatisztikák segíthetnek a valószínűség becslésében.',
      'Ne feledkezz meg a modulok közötti integrációs kockázatokról.',
    ],
  },
  {
    id: '6',
    title: 'Űrlapvalidációs kihívás',
    difficulty: 'beginner',
    description:
      'Tervezd meg a hatékony teszteseteket egy regisztrációs űrlaphoz különböző mezőtípusokkal, validációs szabályokkal és hibakezeléssel.',
    duration: '30 perc',
    tags: ['Határérték-analízis', 'Ekvivalenciaosztályok', 'Űrlapok'],
    scenario:
      'Egy weboldal regisztrációs űrlapja a következő mezőket tartalmazza: felhasználónév, email, jelszó és életkor. A felhasználónév 3-20 karakter hosszú és csak alfanumerikus lehet. Az emailnek érvényes formátumúnak kell lennie. A jelszónak 8-32 karakter hosszúnak kell lennie, és tartalmaznia kell nagybetűt, kisbetűt, számot és speciális karaktert. Az életkor 18 és 120 közötti egész szám lehet.',
    steps: [
      'Azonosítsd az összes bemeneti mezőt és validációs szabályt.',
      'Alkalmazz ekvivalenciaosztály-elemzést minden mezőre.',
      'Alkalmazz határérték-analízist a hossz- és számtartományokra.',
      'Kombináld a teszteseteket, előnyben részesítve azokat, amelyek több érvénytelen osztályt fednek le.',
      'Dokumentáld az egyes teszteseteket bemenettel, elvárt eredménnyel és alkalmazott technikával.',
    ],
    inputs: [
      'Felhasználónév: 3-20 karakter, csak alfanumerikus',
      'Email: érvényes email formátum',
      'Jelszó: 8-32 karakter, nagybetű, kisbetű, szám és speciális karakter szükséges',
      'Életkor: 18-120 közötti egész szám',
    ],
    expectedOutputs: [
      'Az érvényes űrlapbeküldések elfogadásra kerülnek',
      'A túl rövid felhasználónév elutasításra kerül',
      'A túl hosszú felhasználónév elutasításra kerül',
      'A speciális karaktert tartalmazó felhasználónév elutasításra kerül',
      'Az érvénytelen email formátumok elutasításra kerülnek',
      'A hiányos jelszókövetelmények elutasításra kerülnek',
      'A 18 alatti vagy 120 feletti életkor elutasításra kerül',
    ],
    hints: [
      'Először mezőnként külön tesztelj, majd kombinációkat is.',
      'A jelszóhoz készíts külön teszteket minden hiányzó karaktertípusra.',
      'Teszteld a pontos határértékeket is.',
      'Az üres mezőket külön ekvivalenciaosztályként kezeld.',
    ],
  },
];

export { exerciseData };

export default function ExercisesPage({ onNavigate }: ExercisesPageProps) {
  const [selectedExercise, setSelectedExercise] = useState<Exercise | null>(null);

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
        return 'kezdő';
      case 'intermediate':
        return 'középhaladó';
      case 'advanced':
        return 'haladó';
      default:
        return difficulty;
    }
  };

  if (selectedExercise) {
    return (
      <ExerciseDetailPage
        exercise={selectedExercise}
        onBack={() => setSelectedExercise(null)}
      />
    );
  }

  const featuredExercise = exerciseData[0];

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
                {getDifficultyLabel(featuredExercise.difficulty)}
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

            <button
              onClick={() => setSelectedExercise(featuredExercise)}
              className="group px-8 py-4 bg-white text-cyan-700 rounded-xl text-lg font-semibold hover:bg-cyan-50 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              Feladat megtekintése
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Összes feladat</h2>
          <div className="flex items-center gap-2 text-gray-600">
            <TrendingUp className="h-5 w-5" />
            <span className="text-sm font-medium">
              {exerciseData.length} feladat érhető el
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {exerciseData.map((exercise) => (
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
                    {getDifficultyLabel(exercise.difficulty)}
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

              <button
                onClick={() => setSelectedExercise(exercise)}
                className="w-full group/btn flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
              >
                Feladat megtekintése
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
          <button
            onClick={() => onNavigate('apply')}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Csatlakozás a közösséghez
          </button>
        </div>
      </div>
    </div>
  );
}
