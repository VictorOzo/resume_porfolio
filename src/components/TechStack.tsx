import Image from "next/image";

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
            <Image
              src="/image/brain.png"
              alt="brain icon"
              width={32}
              height={32}
            />
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
            <Image
              src="/image/programming.png"
              alt="brain icon"
              width={32}
              height={32}
            />

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
            <Image
              src="/image/cloud-computing.png"
              alt="brain icon"
              width={32}
              height={32}
            />
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
            <Image
              src="/image/machine-learning.png"
              alt="brain icon"
              width={32}
              height={32}
            />
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
