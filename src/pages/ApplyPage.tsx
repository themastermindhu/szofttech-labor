import { UserPlus, CheckCircle, ArrowRight } from 'lucide-react';
import { useState } from 'react';

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    organization: '',
    role: '',
    experience: '',
    motivation: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const benefits = [
    'Hozzáférés exkluzív tanulási anyagokhoz',
    'Ingyenes eszközök és segédletek',
    'Részvétel a közösségi fórumon',
    'Havi webináriumok és workshopok',
    'Kapcsolatépítési lehetőségek',
    'Tagsági tanúsítvány',
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-700 px-4 py-2 rounded-full mb-6 font-medium">
            <CheckCircle className="h-5 w-5" />
            100% ingyenes tagság
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Csatlakozz a közösségünkhöz
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Légy része egy globális teszttervező közösségnek, amely elkötelezett a
            kiváló szoftverminőség iránt.
          </p>
        </div>

        <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-2xl font-bold mb-4">A tagság előnyei</h2>
          <div className="grid md:grid-cols-2 gap-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <UserPlus className="h-5 w-5 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Jelentkezési űrlap</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Keresztnév
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-gray-900 mb-2">
                  Vezetéknév
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
                E-mail cím
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="country" className="block text-sm font-semibold text-gray-900 mb-2">
                  Ország
                </label>
                <input
                  type="text"
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-900 mb-2">
                  Szervezet / cég
                </label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="role" className="block text-sm font-semibold text-gray-900 mb-2">
                  Jelenlegi szerepkör
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Válaszd ki a szerepköröd</option>
                  <option value="tester">Szoftvertesztelő</option>
                  <option value="qa">QA mérnök</option>
                  <option value="lead">Tesztvezető</option>
                  <option value="manager">QA menedzser</option>
                  <option value="developer">Fejlesztő</option>
                  <option value="student">Diák</option>
                  <option value="other">Egyéb</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-gray-900 mb-2">
                  Tapasztalat (években)
                </label>
                <select
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  <option value="">Válaszd ki a tapasztalatot</option>
                  <option value="0-1">Kevesebb mint 1 év</option>
                  <option value="1-3">1–3 év</option>
                  <option value="3-5">3–5 év</option>
                  <option value="5-10">5–10 év</option>
                  <option value="10+">10+ év</option>
                </select>
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="motivation" className="block text-sm font-semibold text-gray-900 mb-2">
                Miért szeretnél csatlakozni? (opcionális)
              </label>
              <textarea
                id="motivation"
                name="motivation"
                value={formData.motivation}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                placeholder="Írd le, miért érdekel a teszttervezés..."
              />
            </div>

            <button
              type="submit"
              className="w-full group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all shadow-lg hover:shadow-xl"
            >
              Jelentkezés elküldése
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </form>
        </div>

        <p className="text-center text-gray-600 mt-8">
          A jelentkezéseket általában 2–3 munkanapon belül elbíráljuk.
          Jóváhagyás után visszaigazoló e-mailt küldünk.
        </p>
      </div>
    </div>
  );
}
