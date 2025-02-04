'use client';

export default function OrdinalsInfo() {
  const totalSupply = 100;
  const remaining = 69;
  const minted = totalSupply - remaining;
  const mintedPercentage = (minted / totalSupply) * 100;

  return (
    <section className="bg-black/50 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Seal of 100K Collection</h2>
            <p className="text-white/60">Exclusive Bitcoin Ordinals Collection</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            {/* Discord Button */}
            <a 
              href="https://discord.com/invite/WeWeDetxBJ" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-[#5865F2] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#4752C4] transition-colors flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Discord
            </a>

            {/* Magic Eden Button */}
            <a 
              href="https://magiceden.io/ordinals/marketplace/s100k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              Trade on Magic Eden
            </a>

            {/* OrdinalsBot Button */}
            <a 
              href="https://ordinalsbot.com/mint/sealof100k" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Mint on OrdinalsBot
            </a>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <h3 className="text-white/60 text-sm mb-2">Remaining</h3>
            <p className="text-white font-bold">{remaining} / {totalSupply}</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <h3 className="text-white/60 text-sm mb-2">Mint Price</h3>
            <p className="text-white font-bold flex items-center justify-center gap-1">
              0.00035
              <span className="text-orange-500">₿</span>
            </p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <h3 className="text-white/60 text-sm mb-2">Marketplace</h3>
            <div className="flex items-center justify-center gap-2">
              <img 
                src="/images/magiceden-logo.png"
                alt="Magic Eden" 
                className="h-6 w-6"
              />
              <p className="text-white font-bold">Magic Eden</p>
            </div>
          </div>
          <div className="bg-white/5 rounded-xl p-6 text-center">
            <h3 className="text-white/60 text-sm mb-2">Blockchain</h3>
            <p className="text-white font-bold">Bitcoin</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-8">
          <div className="flex justify-between text-sm text-white/60 mb-2">
            <span>Progress</span>
            <span>{mintedPercentage}% Minted</span>
          </div>
          <div className="h-3 rounded-full overflow-hidden bg-neutral-800">
            <div 
              className="bg-gradient-to-r from-orange-500 to-red-500 h-full transition-all duration-500"
              style={{ 
                width: `${mintedPercentage}%`,
                boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)'
              }} 
            />
          </div>
          <div className="flex justify-between text-xs text-white/40 mt-2">
            <span>{minted} Minted</span>
            <span>{remaining} Remaining</span>
          </div>
        </div>

        {/* Links */}
        <div className="mt-8 flex justify-center gap-6 text-sm">
          <a 
            href="https://discord.com/invite/WeWeDetxBJ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
            </svg>
            Join our Community →
          </a>
          <a 
            href="https://magiceden.io/ordinals/marketplace/s100k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            View Collection on Magic Eden →
          </a>
          <a 
            href="https://ordinalsbot.com/mint/sealof100k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/60 hover:text-white transition-colors"
          >
            Mint on OrdinalsBot →
          </a>
        </div>
      </div>
    </section>
  );
} 