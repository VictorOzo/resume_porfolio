"use client";
import Image from "next/image";

export default function ConnectSection() {
  const cards = [
    {
      img: "/image/handshake.png",
      title: "Project Collaboration",
      description:
        "Seeking innovative projects that push boundaries. Let's build something amazing together.",
    },
    {
      img: "/image/take-off.png",
      title: "Career Opportunities",
      description:
        "Interested in roles that offer growth and impact. Open to exploring new horizons in tech.",
    },
    {
      img: "/image/mentorship.png",
      title: "Mentorship",
      description:
        "Happy to share my experience and guide emerging talent. Fostering the next generation of engineers.",
    },
  ];

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:ozokweluvic@gmail.com?subject=Collaboration%20Inquiry",
    },
    { name: "GitHub", url: "https://github.com/VictorOzo" },
    { name: "Twitter", url: "https://x.com/vic_ozoo" },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/victor-ozokwelu-141157196/",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div data-aos="fade-up" data-aos-duration="800">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Lets Connect: Collaboration & Opportunities
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mb-12">
            I am always open to new challenges and meaningful collaborations.
            Reach out to discuss potential projects or opportunities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((card, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="700"
              className="bg-gray-50 rounded-lg p-8 transition-all duration-500 hover:shadow-lg hover:-translate-y-1">
              <div className="w-14 h-14  rounded-full flex items-center justify-center text-white mb-6">
                <Image src={card.img} alt={card.title} width={32} height={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div
          data-aos="fade-up"
          data-aos-delay="300"
          data-aos-duration="800"
          className="flex justify-center items-center flex-wrap">
          {socialLinks.map((link, index) => (
            <div key={index} className="flex items-center">
              <a
                href={link.url}
                target="_blank"
                className="text-gray-900 font-semibold hover:underline transition-colors px-4">
                {link.name}
              </a>

              {/* Vertical Divider */}
              {index !== socialLinks.length - 1 && (
                <span className="h-6 w-px bg-gray-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
