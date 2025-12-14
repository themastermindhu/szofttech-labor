import { Target, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 p-2 rounded-lg">
                <Target className="h-6 w-6 text-white" />
              </div>
              <div>
                <div className="text-lg font-bold text-white">Test Design</div>
                <div className="text-xs text-gray-400">Learn. Exercise. Apply.</div>
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-4 max-w-md">
              Empowering software testers and QA professionals with the knowledge, tools,
              and community to design better tests and build higher quality software.
            </p>
            <div className="flex gap-3">
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Books</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">White Papers</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Tools</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-cyan-400 transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Test Design Manifesto</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2025 Test Design. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            <span className="text-cyan-400 font-semibold">2,776+</span> registered test designers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
}
