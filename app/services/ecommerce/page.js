import Link from 'next/link';

export default function EcommercePage() {
  return (
    <main className="pt-20">
      <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center">
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-yellow-500 font-semibold mb-4">OUR SERVICES</p>
            <h1 className="text-6xl font-bold mb-6">E-COMMERCE SOLUTIONS</h1>
            <p className="text-xl text-gray-300">
              Build a powerful online store that converts visitors into customers with our comprehensive e-commerce solutions.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                COMPLETE <span className="text-yellow-500">E-COMMERCE</span> PLATFORM
              </h2>
              <p className="text-gray-300 text-lg mb-6">
                We create fully-featured online stores with shopping carts, payment gateways, inventory management, and more. Our e-commerce solutions are designed to maximize sales and provide excellent user experience.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Custom Shopping Cart Development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Multiple Payment Gateway Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Product & Inventory Management</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">✓</span>
                  <span>Order Tracking & Management</span>
                </li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-red-700/50 rounded-lg p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="text-9xl mb-4">🛒</div>
                <h3 className="text-3xl font-bold">Your Online Store</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">START SELLING ONLINE TODAY</h2>
          <Link href="/contact" className="inline-block px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all">
            GET STARTED
          </Link>
        </div>
      </section>
    </main>
  );
}
