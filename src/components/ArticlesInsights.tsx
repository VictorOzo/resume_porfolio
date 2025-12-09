"use client";
import Image from "next/image";

export default function ArticlesInsights() {
  const articles = [
    {
      image: "/image/throttle_debounce.webp",
      title: "Improving React Performance with Debounce and Throttle",
      description:
        "In today’s fast-paced web applications, delivering a seamless user experience is essential. React, with its component-based architecture, allows developers to create interactive and dynamic interfaces.",
      gradient: "from-orange-200 to-amber-100",
      url: "https://medium.com/@ozokweluvic/improving-react-performance-with-debounce-and-throttle-93f26ea50713",
    },
    {
      image: "/image/react_performanceImg.webp",
      title:
        "Beyond useState & useEffect — React’s Hidden Hooks for Performance & DX",
      description:
        "If you’ve been working with React for any length of time, you’re probably intimately familiar with useSate and useEffect. These two hooks form the backbone of most React applications, handling state management and side effects in functional components.",
      gradient: "from-orange-300 to-amber-200",
      url: "https://medium.com/@ozokweluvic/beyond-usestate-useeffect-reacts-hidden-hooks-for-performance-dx-6c2d872eca5e",
    },
    {
      image: "/image/react-openai_img.webp",
      title: "Creating a chatbot with React and chatGPT.",
      description:
        "ChatGPT(Chat Generative Pre-trained Transformer), an artificial intelligence tool launched by OpenAI is a highly popular AI-based program that is capable of generating human like dialogues.",
      gradient: "from-slate-200 to-blue-100",
      url: "https://medium.com/@ozokweluvic/creating-a-chatbot-with-react-and-chatgpt-dcc19e14277b",
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
            <a
              key={index}
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group">
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                data-aos-duration="700"
                className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer">
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
            </a>
          ))}
        </div>

        {/* Buttons */}
        <div
          className="flex flex-wrap gap-4"
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800">
          <a
            target="_blank"
            href="https://medium.com/@ozokweluvic"
            className="bg-gray-900 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
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
