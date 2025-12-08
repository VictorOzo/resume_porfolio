export default function TechStack() {
  return (
    <section className="bg-[#faf9f6] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 max-w-2xl" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Stack</h2>
          <p className="text-gray-700 text-base md:text-lg">
            My expertise spans a wide array of modern technologies and
            programming languages. I am always eager to learn new tools.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 border border-gray-300">
          {/* AI Frameworks */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="p-8 border-b border-gray-300 md:border-b-0 md:border-r">
            <svg
              className="w-10 h-10 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M9 3a5 5 0 0 1 6 0M6 8a6 6 0 0 1 12 0M5 14h14M7 19h10" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">AI Frameworks</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              TensorFlow, PyTorch, Keras for advanced AI development.
            </p>
          </div>

          {/* Languages */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="p-8 border-b border-gray-300 md:border-b-0">
            <svg
              className="w-10 h-10 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M16 18l6-6-6-6M8 6l-6 6 6 6M10 20l4-16" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Python, JavaScript, and Next.js for diverse applications.
            </p>
          </div>

          {/* AWS */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="p-8 border-t border-gray-300 md:border-t md:border-r">
            <svg
              className="w-10 h-10 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M3 15a4 4 0 0 1 4-4h9a5 5 0 1 1 0 10H7a4 4 0 0 1-4-4z" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">AWS</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Cloud services, scalable deployments, and infrastructure
              management.
            </p>
          </div>

          {/* ML */}
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="p-8 border-t border-gray-300">
            <svg
              className="w-10 h-10 mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24">
              <path d="M4 4h16v16H4z" />
              <path d="M4 9h16M9 4v16" />
            </svg>
            <h3 className="text-xl font-semibold mb-2">ML</h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Model development, data pipelines, and predictive analytics.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
