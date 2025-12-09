import Link from 'next/link';

export default function ServicesSection() {
  const services = [
    'LOGOS',
    'WEBSITES',
    'ANIMATIONS',
    'MOBILE APPS',
    'PRINTING',
    'NFT DESIGN',
    'SMM',
    'E-COMMERCE'
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gray-500 text-sm mb-2">What We Do</p>
          <h2 className="text-5xl font-bold text-black">
            OUR <span className="text-yellow-500">SERVICES</span>
          </h2>
        </div>

        <div className="flex gap-8">
          {/* Left Sidebar - Services List */}
          <div className="w-56 shrink-0">
            <div className="bg-gray-50 border border-gray-200">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block py-3 px-4 text-base font-bold text-black hover:text-blue-600 hover:bg-white cursor-pointer transition-colors border-l-4 border-transparent hover:border-blue-600"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side - Portfolio Grid */}
          <div className="flex-1 grid grid-cols-2 gap-6">
            {/* Card 1 - Purple Ninja */}
            <div className="bg-purple-700 rounded-lg p-8 flex flex-col items-center justify-center text-white aspect-square">
              <div className="w-24 h-24 bg-purple-900 rounded-full flex items-center justify-center mb-4">
                <div className="text-4xl">👤</div>
              </div>
              <h3 className="text-2xl font-bold mb-1">NINJA</h3>
              <p className="text-sm opacity-80">Gaming Design</p>
            </div>

            {/* Card 2 - White Tight */}
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center aspect-square">
              <h3 className="text-7xl font-bold text-black" style={{ fontFamily: 'serif' }}>tight</h3>
            </div>

            {/* Card 3 - Black Rocket */}
            <div className="bg-black rounded-lg p-8 flex flex-col items-center justify-center text-white aspect-square">
              <div className="text-8xl mb-4">🚀</div>
              <p className="text-sm">Space Design</p>
            </div>

            {/* Card 4 - White Tekni */}
            <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center aspect-square">
              <h3 className="text-5xl font-bold text-black">Tekni.</h3>
            </div>

            {/* Card 5 - Panda (Full Width) */}
            <div className="col-span-2 bg-gray-200 rounded-lg p-8 flex items-center justify-center">
              <h3 className="text-7xl font-bold text-black" style={{ fontFamily: 'cursive' }}>panda</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
