import Link from 'next/link';

export default function DesignDevelopmentPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <p className="text-yellow-500 font-semibold mb-4">OUR SERVICES</p>
            <h1 className="text-6xl font-bold mb-6">
              DESIGN & DEVELOPMENT
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              A smooth, attractive and clean website ensures customer satisfaction and it is our job to make sure it stands out.
            </p>
          </div>
        </div>
      </section>

      {/* Service Details */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left Content */}
            <div>
              <h2 className="text-5xl font-bold mb-6">
                OUR WEBSITE
                <br />
                <span className="text-yellow-500">EXPERTISE</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Our expertise is in designing and constructing websites using content management systems. Without a developer's help, you may manage and change the entire website using a CMS. The best feature of CMS is that it allows anyone, regardless of technical proficiency, to modify, add, and remove text or images from a website. This not only provides you total control over your website but also allows you to avoid paying an HTML developer a large sum of money each time you need to make a change.
              </p>
            </div>

            {/* Right Content - Visual */}
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-900/50 to-purple-700/50 rounded-lg p-12 border border-purple-500 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-9xl mb-4">💻</div>
                  <h3 className="text-3xl font-bold">Grow your online</h3>
                  <h3 className="text-3xl font-bold text-purple-400">business faster!</h3>
                  <p className="text-gray-300 mt-4">
                    Professional web solutions for your business
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center mb-12">
              OUR <span className="text-yellow-500">CAPABILITIES</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h4 className="font-bold mb-2">E-COMMERCE</h4>
                <p className="text-gray-400 text-sm">Complete online store solutions</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all text-center">
                <div className="text-4xl mb-4">🌐</div>
                <h4 className="font-bold mb-2">B2B & B2C PORTALS</h4>
                <p className="text-gray-400 text-sm">Business portals and platforms</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all text-center">
                <div className="text-4xl mb-4">⚙️</div>
                <h4 className="font-bold mb-2">WEB APPLICATIONS</h4>
                <p className="text-gray-400 text-sm">Custom web applications</p>
              </div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all text-center">
                <div className="text-4xl mb-4">📱</div>
                <h4 className="font-bold mb-2">CMS WEBSITES</h4>
                <p className="text-gray-400 text-sm">Easy to manage websites</p>
              </div>
            </div>
          </div>

          {/* Technology Stack */}
          <div className="mb-20">
            <h3 className="text-4xl font-bold text-center mb-12">
              TECHNOLOGIES WE <span className="text-yellow-500">USE</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {['React', 'Next.js', 'Node.js', 'WordPress', 'Shopify', 'WooCommerce', 'PHP', 'Python', 'MongoDB', 'MySQL', 'AWS', 'Docker'].map((tech, index) => (
                <div key={index} className="bg-gray-900 p-4 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all text-center">
                  <div className="font-bold">{tech}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Process */}
          <div>
            <h3 className="text-4xl font-bold text-center mb-12">
              OUR <span className="text-yellow-500">PROCESS</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-black text-3xl font-bold mx-auto mb-4">
                  1
                </div>
                <h4 className="text-xl font-bold mb-2">Discovery</h4>
                <p className="text-gray-400">Understanding your business goals and requirements</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-black text-3xl font-bold mx-auto mb-4">
                  2
                </div>
                <h4 className="text-xl font-bold mb-2">Design</h4>
                <p className="text-gray-400">Creating beautiful and functional designs</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-black text-3xl font-bold mx-auto mb-4">
                  3
                </div>
                <h4 className="text-xl font-bold mb-2">Development</h4>
                <p className="text-gray-400">Building robust and scalable solutions</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-500 rounded-full flex items-center justify-center text-black text-3xl font-bold mx-auto mb-4">
                  4
                </div>
                <h4 className="text-xl font-bold mb-2">Launch</h4>
                <p className="text-gray-400">Deploying and supporting your project</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-4xl font-bold text-center mb-12">
            OUR <span className="text-yellow-500">WORK</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-gray-800 rounded-lg overflow-hidden hover:scale-105 transition-all">
                <div className="aspect-video bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
                  <div className="text-6xl">🌐</div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-bold mb-2">Project Title {item}</h4>
                  <p className="text-gray-400 mb-4">Professional website design and development</p>
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm rounded">Design</span>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded">Development</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/portfolio" className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold hover:bg-yellow-400 transition-all">
              VIEW ALL PROJECTS
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            LET'S GET STARTED
          </h2>
          <p className="text-xl text-black/80 mb-8">
            Ready to bring your project to life? Get in touch with us today!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/contact"
              className="px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all"
            >
              REQUEST A QUOTE
            </Link>
            <Link
              href="/pricing"
              className="px-8 py-4 bg-white text-black font-bold hover:bg-gray-100 transition-all"
            >
              VIEW PRICING
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
