export default function AboutPage() {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex items-center">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl font-bold mb-4">
            ABOUT <span className="text-yellow-500">US</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We're a globally recognized digital design agency dedicated to creating exceptional experiences
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Content */}
            <div>
              <p className="text-gray-400 mb-2">Who We are?</p>
              <h2 className="text-5xl font-bold mb-6">
                WE'RE A GLOBALLY RECOGNIZED
                <br />
                <span className="text-yellow-500">DIGITAL DESIGN AGENCY</span>
              </h2>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Our industry experts make sure to deliver bespoke designs so that your brand stands out amongst competition. With over 780 completed projects and 96% satisfaction rate, we've established ourselves as a trusted partner for businesses worldwide.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <span className="text-yellow-500 text-2xl font-bold">→</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">STRATEGIC VISION</h3>
                    <p className="text-gray-400">
                      A client once told us that where the others won on one star one issue we see the whole sky. Our strategic approach ensures comprehensive solutions that address both immediate needs and long-term goals.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-yellow-500 text-2xl font-bold">→</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">NETWORKS THAT SPAN SECTORS</h3>
                    <p className="text-gray-400">
                      Over more than 20 years, we've fostered trusted relationships across government, industry and global forums. Our diverse network enables us to bring unique perspectives and innovative solutions to every project.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <span className="text-yellow-500 text-2xl font-bold">→</span>
                  <div>
                    <h3 className="text-xl font-bold mb-2">ATTENTION TO DETAIL</h3>
                    <p className="text-gray-400">
                      It's our attention to the small stuff, scheduling of timelines & keen project management that makes us stand out from the rest. Every pixel, every line of code, and every interaction is crafted with precision.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Image */}
            <div className="relative flex items-center justify-center">
              <div className="relative w-full h-[500px] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-9xl">💡</div>
                </div>
                <div className="absolute bottom-8 left-8 right-8 bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                  <p className="text-lg font-semibold">Illuminating Ideas</p>
                  <p className="text-sm text-gray-300 mt-2">
                    Bringing brightness to your brand's digital presence
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">
              OUR <span className="text-yellow-500">VALUES</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-2xl font-bold mb-3">Excellence</h3>
                <p className="text-gray-400">
                  We strive for excellence in every project, ensuring the highest quality standards and attention to detail in all our deliverables.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="text-2xl font-bold mb-3">Collaboration</h3>
                <p className="text-gray-400">
                  We believe in working together with our clients as partners, fostering open communication and shared success throughout every project.
                </p>
              </div>

              <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg border border-gray-800 hover:border-yellow-500 transition-all">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-3">Innovation</h3>
                <p className="text-gray-400">
                  We stay ahead of the curve by embracing new technologies and creative approaches to solve complex challenges in unique ways.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-6">
              MEET OUR <span className="text-yellow-500">EXPERTS</span>
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
              Our team comprises 200+ industry experts from diverse backgrounds, each bringing unique skills and perspectives to create outstanding digital experiences.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-5xl font-black text-yellow-500 mb-2">780+</div>
                <div className="text-sm text-gray-400">Completed Projects</div>
              </div>
              <div>
                <div className="text-5xl font-black text-yellow-500 mb-2">200+</div>
                <div className="text-sm text-gray-400">Industry Experts</div>
              </div>
              <div>
                <div className="text-5xl font-black text-yellow-500 mb-2">80+</div>
                <div className="text-sm text-gray-400">Award-Winning Projects</div>
              </div>
              <div>
                <div className="text-5xl font-black text-yellow-500 mb-2">96%</div>
                <div className="text-sm text-gray-400">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-black mb-6">
            TAKE THE FIRST STEP TOWARDS THE
            <br />
            RIGHT DIRECTION!
          </h2>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            <a
              href="tel:+13218002759"
              className="flex items-center space-x-2 text-black hover:underline text-lg font-semibold"
            >
              <span>📞</span>
              <div>
                <div className="text-sm">CALL TOLL FREE</div>
                <div>+1 (321) 800-2759</div>
              </div>
            </a>
            <a
              href="/contact"
              className="px-8 py-4 bg-black text-white font-bold hover:bg-gray-800 transition-all"
            >
              REQUEST A QUOTE
            </a>
            <a
              href="mailto:info@a2itltd.com"
              className="flex items-center space-x-2 text-black hover:underline text-lg font-semibold"
            >
              <span>✉️</span>
              <div>
                <div className="text-sm">NEED HELP?</div>
                <div>info@a2itltd.com</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
