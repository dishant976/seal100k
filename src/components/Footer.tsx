'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-white/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">About</h3>
            <p className="text-sm">
              Discover the fascinating world of ancient seals, featuring historical artifacts
              from various civilizations throughout human history.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-white text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><button className="hover:text-white transition-colors">Collection</button></li>
              <li><button className="hover:text-white transition-colors">Categories</button></li>
              <li><button className="hover:text-white transition-colors">Time Periods</button></li>
              <li><button className="hover:text-white transition-colors">Civilizations</button></li>
            </ul>
          </div>

          {/* Collaboration & Strategic Reserve */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLScQMMi5HrxkxF0dJC5c0cs51Q4Fjk_RaX6dWEdNi2Fjc6V2Rg/viewform?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors inline-block"
            >
              Want to Collab
            </a>
            <div className="space-y-2">
              <button className="bg-black border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">
                Strategic Reserve
              </button>
              <p className="text-white text-sm animate-pulse">Coming Soon</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 text-sm text-center">
          <p>© 2024 Ancient Seals Collection. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
