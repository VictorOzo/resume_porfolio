export default function Hero() {
  return (
    <section className="relative w-full min-h-[70vh] flex items-center bg-[#f7f4ef] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{
          backgroundImage: "url('/hero-bg.png')",
        }}
      />

      {/* Content */}
      <div className="relative max-w-5xl w-full mx-auto px-4">
        <div
          className="flex flex-col gap-6 
          items-center text-center 
          md:items-start md:text-left">
          {/* Title */}
          <h1
            data-aos="fade-up"
            className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Victor Ozokwelu | Software Engineer & Writer
          </h1>

          {/* Subtitle */}
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="max-w-2xl text-base sm:text-lg text-gray-700">
            Crafting elegant solutions and building innovative applications.
            Passionate about technology and constant learning.
          </p>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="flex gap-4 flex-wrap 
              justify-center md:justify-start">
            <button className="bg-black rounded-lg text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition">
              Get in Touch
            </button>

            <button className="border rounded-lg border-black px-6 py-3 text-sm font-semibold hover:bg-black hover:text-white transition">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
