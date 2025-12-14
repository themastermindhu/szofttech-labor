import { useState } from 'react';
import { Menu, X, BookOpen, Target, Wrench, Users, Mail, LogIn } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Kezdőlap', icon: null },
    { id: 'learn', label: 'Tanulás', icon: BookOpen },
    { id: 'exercises', label: 'Gyakorlatok', icon: Target },
    { id: 'tools', label: 'Eszközök', icon: Wrench },
    { id: 'community', label: 'Közösség', icon: Users },
    { id: 'contact', label: 'Kapcsolat', icon: Mail },
  ];

  return (
    <nav className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center cursor-pointer" onClick={() => onNavigate('home')}>
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-gray-900">Teszttervezés</div>
                <div className="text-xs text-gray-600 -mt-1">Tanulj. Gyakorolj. Alkalmazd.</div>
              </div>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-cyan-50 text-cyan-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => onNavigate('apply')}
              className="ml-4 px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all shadow-sm hover:shadow-md"
            >
              Csatlakozás a közösséghez
            </button>
            <button
              onClick={() => onNavigate('login')}
              className="ml-2 p-2 text-gray-600 hover:text-gray-900 transition-colors"
            >
              <LogIn className="h-5 w-5" />
            </button>
          </div>

          <button
            className="md:hidden p-2 text-gray-600 hover:text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                  currentPage === item.id
                    ? 'bg-cyan-50 text-cyan-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                {item.icon && <item.icon className="h-5 w-5" />}
                {item.label}
              </button>
            ))}
            <button
              onClick={() => {
                onNavigate('apply');
                setMobileMenuOpen(false);
              }}
              className="w-full px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-sm font-medium hover:from-cyan-600 hover:to-blue-700 transition-all shadow-sm"
            >
              Csatlakozás a közösséghez
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
