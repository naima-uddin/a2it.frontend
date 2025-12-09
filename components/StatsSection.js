import Link from 'next/link';

export default function StatsSection() {
  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <p className="text-gray-400 text-sm mb-2">Who We are?</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              WE'RE A GLOBALLY RECOGNIZED
              <br />
              <span className="text-yellow-500">DIGITAL DESIGN AGENCY</span>
            </h2>
            <p className="text-gray-300 mb-8 leading-relaxed">
              Our industry experts make sure to deliver bespoke designs so that your brand stands out amongst competition.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="text-yellow-500 text-2xl font-bold">→</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">STRATEGIC VISION</h3>
                  <p className="text-gray-400 text-sm">
                    A client once told us that where the others won on one star one issue we see the whole sky.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-yellow-500 text-2xl font-bold">→</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">NETWORKS THAT SPAN SECTORS</h3>
                  <p className="text-gray-400 text-sm">
                    Over more than 20 years, we've fostered trusted relationships across government, industry and global forums.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="text-yellow-500 text-2xl font-bold">→</span>
                <div>
                  <h3 className="text-xl font-bold mb-2">ATTENTION TO DETAIL</h3>
                  <p className="text-gray-400 text-sm">
                    It's our attention to the small stuff, scheduling of timelines & keen project management that makes us stand out from the rest.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="relative w-64 h-64">
              <div className="text-9xl flex items-center justify-center h-full opacity-80">
                💡
              </div>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            WE ARE <span className="text-yellow-500">RELIABLE</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-6 opacity-60">
            <div className="bg-gray-800 px-8 py-4 text-sm font-semibold">ANDY CARD</div>
            <div className="bg-gray-800 px-8 py-4 text-sm font-semibold">COMMUNITY</div>
            <div className="bg-gray-800 px-8 py-4 text-sm font-semibold">DESIGN AWARD</div>
            <div className="bg-gray-800 px-8 py-4 text-sm font-semibold">BEST DESIGN</div>
            <div className="bg-gray-800 px-8 py-4 text-sm font-semibold">TOP RATED</div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gray-900 p-8 text-center border border-gray-800">
            <div className="text-4xl mb-3">🏆</div>
            <div className="text-4xl font-black text-yellow-500 mb-2">780+</div>
            <div className="text-sm text-gray-400">Completed Projects</div>
          </div>

          <div className="bg-gray-900 p-8 text-center border border-gray-800">
            <div className="text-4xl mb-3">🤝</div>
            <div className="text-4xl font-black text-yellow-500 mb-2">200+</div>
            <div className="text-sm text-gray-400">Industry Experts</div>
          </div>

          <div className="bg-gray-900 p-8 text-center border border-gray-800">
            <div className="text-4xl mb-3">🏅</div>
            <div className="text-4xl font-black text-yellow-500 mb-2">80+</div>
            <div className="text-sm text-gray-400">Award-Winning Projects</div>
          </div>

          <div className="bg-gray-900 p-8 text-center border border-gray-800">
            <div className="text-4xl mb-3">👍</div>
            <div className="text-4xl font-black text-yellow-500 mb-2">96%</div>
            <div className="text-sm text-gray-400">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
}
