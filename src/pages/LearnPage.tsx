import { useState } from 'react';
import { BookOpen, FileText, Download, Filter, Search } from 'lucide-react';
import { Resource } from '../types';

export default function LearnPage() {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'book' | 'whitepaper' | 'tool'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const resources: Resource[] = [
    {
      id: '1',
      title: 'Teljes útmutató a teszttervezéshez',
      type: 'book',
      description:
        'Átfogó útmutató, amely a teszttervezés minden lényeges technikáját lefedi az alapoktól a haladó stratégiákig.',
      imageUrl:
        'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '#',
    },
    {
      id: '2',
      title: 'Ekvivalenciaosztály-elemzés – bevált gyakorlatok',
      type: 'whitepaper',
      description:
        'Mélységi áttekintés az ekvivalenciaosztály-elemzésről valós példákkal, és a leggyakoribb buktatókkal, amelyeket érdemes elkerülni.',
      imageUrl:
        'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '#',
    },
    {
      id: '3',
      title: 'Teszttervezési mintakönyvtár',
      type: 'book',
      description:
        'Újrahasznosítható teszttervezési minták gyakori szoftvertesztelési helyzetekhez és kihívásokhoz.',
      imageUrl:
        'https://images.pexels.com/photos/256417/pexels-photo-256417.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '#',
    },
    {
      id: '4',
      title: 'Kockázatalapú tesztelési keretrendszer',
      type: 'whitepaper',
      description:
        'Tanuld meg, hogyan priorizáld a tesztelési erőfeszítéseket kockázatelemzés és üzleti hatás alapján.',
      imageUrl:
        'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '#',
    },
    {
      id: '5',
      title: 'Határérték-analízis eszközkészlet',
      type: 'tool',
      description:
        'Interaktív eszközök, amelyek segítenek az alkalmazásaid határértékeinek azonosításában és tesztelésében.',
      imageUrl:
        'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '#',
    },
    {
      id: '6',
      title: 'Döntési tábla generátor',
      type: 'tool',
      description:
        'Készíts átfogó döntési táblákat üzleti szabályokból és követelményekből.',
      imageUrl:
        'https://images.pexels.com/photos/5474305/pexels-photo-5474305.jpeg?auto=compress&cs=tinysrgb&w=800',
      downloadUrl: '#',
    },
  ];

  const filteredResources = resources.filter((resource) => {
    const matchesFilter = selectedFilter === 'all' || resource.type === selectedFilter;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'book':
        return <BookOpen className="h-5 w-5" />;
      case 'whitepaper':
        return <FileText className="h-5 w-5" />;
      default:
        return <Download className="h-5 w-5" />;
    }
  };

  const getTypeBadgeColor = (type: string) => {
    switch (type) {
      case 'book':
        return 'bg-cyan-100 text-cyan-700';
      case 'whitepaper':
        return 'bg-blue-100 text-blue-700';
      default:
        return 'bg-green-100 text-green-700';
    }
  };

  const getFilterLabel = (filter: 'all' | 'book' | 'whitepaper' | 'tool') => {
    switch (filter) {
      case 'all':
        return 'Összes';
      case 'book':
        return 'Könyvek';
      case 'whitepaper':
        return 'White paper-ek';
      case 'tool':
        return 'Eszközök';
      default:
        return filter;
    }
  };

  const getTypeLabel = (type: 'book' | 'whitepaper' | 'tool') => {
    switch (type) {
      case 'book':
        return 'Könyv';
      case 'whitepaper':
        return 'White paper';
      case 'tool':
        return 'Eszköz';
      default:
        return type;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Teszttervezés tanulása
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Férj hozzá könyvek, white paper-ek és eszközök átfogó gyűjteményéhez, hogy
            elsajátítsd a teszttervezési technikákat és magasabb szintre emeld a tesztelési tudásod.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Keresés az anyagok között..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-600" />
              <div className="flex gap-2">
                {(['all', 'book', 'whitepaper', 'tool'] as const).map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 rounded-lg font-medium transition-all ${
                      selectedFilter === filter
                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {getFilterLabel(filter)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="group bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-xl transition-all"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={resource.imageUrl}
                  alt={resource.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${getTypeBadgeColor(
                      resource.type
                    )}`}
                  >
                    {getTypeIcon(resource.type)}
                    {getTypeLabel(resource.type)}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                  {resource.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {resource.description}
                </p>

                <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md">
                  <Download className="h-5 w-5" />
                  Letöltés {resource.type === 'tool' ? 'Eszköz' : 'PDF'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredResources.length === 0 && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Nincs találat
            </h3>
            <p className="text-gray-600">
              Próbáld meg módosítani a keresést vagy a szűrési feltételeket
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
