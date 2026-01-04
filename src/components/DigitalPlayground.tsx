import { Code2, Palette, Zap, Sparkles } from "lucide-react";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      {/* Main Content */}
      <div className="pt-16 min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center py-12 sm:py-20">
          {/* Icon Grid */}
          <div
            className="flex justify-center gap-4 sm:gap-6 mb-8 sm:mb-12"
            data-aos="fade-up">
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
              <Code2 className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-900 dark:text-white" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
              <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-900 dark:text-white" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
              <Zap className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-900 dark:text-white" />
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 flex items-center justify-center">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-neutral-900 dark:text-white" />
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-neutral-900 dark:text-white mb-6 sm:mb-8"
            data-aos="fade-up"
            data-aos-delay="100">
            Digital Playground
          </h1>

          {/* Subheading */}
          <p
            className="text-xl sm:text-2xl lg:text-3xl text-neutral-600 dark:text-neutral-400 mb-6 sm:mb-8 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="200">
            Crafting elegant solutions and building innovative applications.
          </p>

          {/* Description */}
          <p
            className="text-base sm:text-lg text-neutral-500 dark:text-neutral-500 mb-10 sm:mb-16 max-w-2xl mx-auto px-4"
            data-aos="fade-up"
            data-aos-delay="300">
            A space for experimentation, creativity, and innovation. Where ideas
            come to life through code and design. Passionate about technology
            and constant learning.
          </p>

          {/* Coming Soon Badge */}
          <div
            className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-sm sm:text-base font-medium mb-12 sm:mb-16"
            data-aos="fade-up"
            data-aos-delay="400">
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            <span>Coming Soon</span>
          </div>

          <p
            className="mt-12 sm:mt-16 text-sm text-neutral-400 dark:text-neutral-600"
            data-aos="fade-up"
            data-aos-delay="600">
            Stay tuned for something special
          </p>
        </div>
      </div>
    </div>
  );
}
