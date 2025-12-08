import Link from "next/link";
import Image from "next/image";

const projects = [
  {
    title: "Data Visualization Dashboard",
    description:
      "Developed a real-time dashboard for complex datasets. Provided actionable insights through interactive charts.",
    href: "/projects/data-visualization-dashboard",
    img: "/image/dashboardImg.png",
  },
  {
    title: "Cross-Platform Mobile App",
    description:
      "Designed and built a mobile application for a niche market. Achieved high user engagement and satisfaction.",
    href: "/projects/cross-platform-mobile-app",
    img: "/image/mobileImg.png",
  },
  {
    title: "Scalable Backend Service",
    description:
      "Engineered a high-performance, scalable backend API. Supported millions of daily requests efficiently.",
    href: "/projects/scalable-backend-service",
    img: "/image/backendImg.png",
  },
  {
    title: "AI-Powered Recommendation Engine",
    description:
      "Implemented a machine learning model for personalized recommendations. Enhanced user experience significantly.",
    href: "/projects/ai-recommendation-engine",
    img: "/Image/AIimg.png",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-[#faf9f6] py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Featured Projects: Innovating with Code
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Explore a selection of my most impactful and innovative projects.
            Each project showcases a unique challenge and my approach to solving
            it.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              className="group block bg-[#f0ede6] rounded-lg overflow-hidden transition hover:-translate-y-1 hover:shadow-xl">
              {/* Image */}
              <div className="relative w-full h-[220px] bg-gray-300">
                <Image
                  src={project.img}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold mb-2 group-hover:underline">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-700">{project.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12">
          <Link href="/projects">
            <button className="bg-black rounded-lg text-white px-6 py-3 text-sm font-semibold hover:bg-gray-800 transition">
              View All Projects
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
