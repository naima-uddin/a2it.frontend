export default function HeroBanner() {
  return (
    <section className="flex flex-col md:flex-row w-full">

      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 bg-black text-white px-10 py-24">

        <h1 className="text-[50px] leading-tight font-extrabold">
          WE ARE THE MOST <br />
          PRESTIGIOUS{" "}
          <span className="text-yellow-400">DESIGN</span> <br />
          AGENCY IN TOWN
        </h1>

        <p className="text-gray-300 mt-4 text-lg leading-relaxed">
          We’re a full-service creative digital marketing agency,
          collaborating with brands all over the world.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 mt-8">
          <button className="px-6 py-3 border border-yellow-400 rounded text-yellow-400 hover:bg-yellow-400 hover:text-black transition font-semibold">
            ABOUT US
          </button>

          <button className="px-6 py-3 bg-yellow-400 text-black rounded font-semibold hover:bg-yellow-500 transition">
            TALK TO AN EXPERT →
          </button>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-1/2 relative bg-gradient-to-br from-yellow-600 to-yellow-400 flex justify-center items-end pt-10">

        {/* Person Image */}
        <img
          src="https://i.ibb.co/2yHPTN1/happy-guy-laptop.png"
          alt="guy"
          className="w-[350px] md:w-[480px] object-contain drop-shadow-xl"
        />

        {/* White Badge */}
        <div className="absolute top-10 right-10 bg-white shadow-xl px-6 py-4 rounded">
          <p className="text-xs text-gray-600">TOP DESIGN</p>
          <p className="text-2xl font-extrabold">AGENCY</p>
        </div>

      </div>
    </section>
  );
}
