import Link from 'next/link';

export default function SEOPage() {
  return (
    <main className="pt-20">
      <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-yellow-500 font-semibold mb-4">OUR SERVICES</p>
            <h1 className="text-6xl font-bold mb-6">SEO / SEM / PPC</h1>
            <p className="text-xl text-gray-300">
              Increase your online visibility and drive targeted traffic with our comprehensive digital marketing services.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                GROW YOUR <span className="text-yellow-500">ONLINE PRESENCE</span>
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                Our SEO, SEM, and PPC services help you reach your target audience, improve search rankings, and maximize ROI through strategic digital marketing campaigns.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-blue-700/50 rounded-lg p-12 flex items-center justify-center">
              <div className="text-9xl">📊</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">BOOST YOUR RANKINGS</h2>
          <Link href="/contact" className="inline-block px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all">
            GET STARTED
          </Link>
        </div>
      </section>
    </main>
  );
}
