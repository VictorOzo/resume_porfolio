import Image from "next/image";
import aboutImg from "../../public/image/aboutImg.png";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="min-h-screen bg-linear-to-br from-gray-50 to-gray-100 py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-8 md:mb-12 text-center lg:text-left"
          data-aos="fade-down">
          Hello, World Welcome to My Story & Philosophy
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-start">
          {/* Text Content */}
          <div className="flex-1 space-y-4 md:space-y-6" data-aos="fade-right">
            <div className="space-y-4">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                I am a software engineer based in Vancouver, driven by
                curiosity. My journey began with a fascination for
                problem-solving. I thrive on transforming complex ideas into
                functional, user-friendly experiences.{" "}
              </p>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                My philosophy centers on clean code, continuous improvement, and
                collaborative development. I believe in writing software that is
                both robust and maintainable.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              {/* Resume Download */}
              <a
                href="/resume/Victor%20Ozokwelu_Dev_Resume.pdf"
                download
                className="bg-gray-900 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                Download Resume
              </a>

              {/* LinkedIn Profile */}
              <a
                href="https://www.linkedin.com/in/victor-ozokwelu-141157196/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 text-white px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center">
                LinkedIn Profile
              </a>
            </div>
          </div>
          {/* Illustration */}
          <div
            className="flex-1 w-full lg:w-auto mt-8 lg:mt-0"
            data-aos="fade-left"
            data-aos-delay="200">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={aboutImg}
                alt="Developer illustration"
                className="w-full h-[450px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
