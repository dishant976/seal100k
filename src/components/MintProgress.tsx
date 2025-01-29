export default function MintProgress() {
  return (
    <section className="bg-black/50 backdrop-blur-sm py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-white mb-2">Mint Progress</h2>
            <p className="text-white/60">Join the Ancient Seals collection on Bitcoin</p>
          </div>
          
          <div className="flex gap-8 text-center">
            <div>
              <p className="text-3xl font-bold text-white">2,431</p>
              <p className="text-sm text-white/60">Minted</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-white">10,000</p>
              <p className="text-sm text-white/60">Total Supply</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-500">0.01 ₿</p>
              <p className="text-sm text-white/60">Mint Price</p>
            </div>
          </div>
        </div>
        
        {/* Progress bar */}
        <div className="mt-8 bg-white/10 rounded-full h-4 overflow-hidden">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full" style={{ width: '24.31%' }} />
        </div>
      </div>
    </section>
  );
} 