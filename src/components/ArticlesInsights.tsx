"use client";
import Image from "next/image";

export default function ArticlesInsights() {
  const articles = [
    {
      image: "/image/clean-code.jpg",
      title: "The Art of Clean Code",
      description:
        "Principles for maintainable and readable software. Best practices for development.",
      gradient: "from-orange-200 to-amber-100",
    },
    {
      image: "/image/clean-code.jpg",
      title: "Demystifying Microservices",
      description:
        "A guide to building scalable architectures. Understanding the benefits and challenges.",
      gradient: "from-orange-300 to-amber-200",
    },
    {
      image: "/image/clean-code.jpg",
      title: "Optimizing Database Performance",
      description:
        "Techniques for faster data retrieval. Practical tips for developers.",
      gradient: "from-slate-200 to-blue-100",
    },
  ];

  return (
    <section id="articles" className="bg-gray-50 py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Articles & Insights
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mb-12">
            I believe in sharing knowledge and contributing to the tech
            community. Read my articles on various software development topics.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {articles.map((article, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer group">
              <div
                className={`h-48 bg-linear-to-br ${article.gradient} relative overflow-hidden`}>
                <Image
                  width={400}
                  height={500}
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 hover:underline transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {article.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="flex flex-wrap gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800">
          <a target="_blank" href="https://medium.com/@ozokweluvic" className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
            Visit Blog
          </a>
          <button className="bg-white text-gray-900 px-6 py-3 rounded-md font-medium border-2 border-gray-900 hover:bg-gray-50 transition-colors">
            Subscribe to Newsletter
          </button>
        </div>
      </div>
    </section>
  );
}
