import { motion } from "framer-motion";
import { Code, Smartphone, Palette, TrendingUp, Cpu, Cloud, Shield, Zap, Users, BarChart } from "lucide-react";

const services = [
  {
    icon: Code,
    title: "Web Development",
    desc: "We craft fast, responsive, and SEO-friendly websites tailored for your business goals. Our expertise includes modern frameworks like React, Next.js, and Tailwind CSS.",
    points: [
      "Custom web apps & landing pages",
      "E-commerce platforms with secure checkout",
      "Progressive Web Apps (PWAs)",
      "API integration & authentication",
      "Performance optimization & caching",
      "Content Management Systems (CMS)",
    ],
    tech: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    desc: "Build cross-platform mobile apps using React Native and Flutter that deliver smooth performance and beautiful design on both Android and iOS.",
    points: [
      "iOS and Android development",
      "Real-time chat and location tracking",
      "Secure payment integrations",
      "Offline-first architecture",
      "Push notifications & deep linking",
      "App store optimization & deployment",
    ],
    tech: ["React Native", "Flutter", "Firebase", "Redux"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    desc: "We create visually appealing, user-centered designs that ensure a delightful experience. From wireframes to polished prototypes — we make design intuitive and functional.",
    points: [
      "Figma prototyping & design systems",
      "Interactive mockups & animations",
      "Usability testing & feedback",
      "Responsive design for all devices",
      "Accessibility compliance (WCAG)",
      "Brand style guide development",
    ],
    tech: ["Figma", "Adobe XD", "Sketch", "InVision"],
  },
  {
    icon: TrendingUp,
    title: "Branding & Digital Marketing",
    desc: "Elevate your brand's online presence with modern marketing strategies and strong visual identity that resonates with your target audience.",
    points: [
      "Brand identity & logo design",
      "Social media strategy & management",
      "SEO & content marketing",
      "Email marketing campaigns",
      "Google Ads & social media advertising",
      "Analytics & performance tracking",
    ],
    tech: ["Google Analytics", "SEMrush", "Mailchimp", "HubSpot"],
  },
  {
    icon: Cpu,
    title: "AI & Automation",
    desc: "Streamline your workflow using intelligent automation tools powered by AI. We integrate OpenAI APIs for chatbots, smart assistants, and predictive analytics.",
    points: [
      "AI chatbot integration (GPT-4, Claude)",
      "Workflow automation & RPA",
      "Predictive analytics & ML models",
      "Natural language processing",
      "Computer vision applications",
      "Custom AI tool development",
    ],
    tech: ["OpenAI", "TensorFlow", "LangChain", "Python"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    desc: "Deploy, scale, and manage your applications with modern cloud infrastructure and DevOps practices that ensure reliability and performance.",
    points: [
      "AWS, Azure, Google Cloud setup",
      "CI/CD pipeline implementation",
      "Docker & Kubernetes orchestration",
      "Server monitoring & maintenance",
      "Database optimization & backup",
      "Auto-scaling & load balancing",
    ],
    tech: ["AWS", "Docker", "Kubernetes", "GitHub Actions"],
  },
];

const features = [
  {
    icon: Shield,
    title: "Enterprise Security",
    desc: "Bank-level encryption and security protocols to protect your data and users.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    desc: "Optimized performance with load times under 2 seconds for better user engagement.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    desc: "24/7 technical support and maintenance to keep your systems running smoothly.",
  },
  {
    icon: BarChart,
    title: "Data-Driven Insights",
    desc: "Comprehensive analytics and reporting to help you make informed decisions.",
  },
];

const Services = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-gray-50 to-white">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold text-gray-900 mb-4 mt-10"
        >
          Our Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
        >
        At Colman Tech Savvy, we transform ideas into powerful digital experiences.
          We craft modern, scalable, and user-centric web and mobile solutions — from design to development —         that deliver real impact and surpass expectations.
        </motion.p>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-7 h-7 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-5 leading-relaxed">{service.desc}</p>
                <ul className="text-gray-600 space-y-2 mb-5">
                  {service.points.map((point, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-gray-100">
                  <p className="text-xs text-gray-500 mb-2 font-medium">Technologies:</p>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            What Sets Us Apart
          </motion.h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center p-6 bg-white rounded-xl shadow-sm"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-6"
          >
            Why Choose Colman Tech Savvy?
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-8 text-gray-600"
          >
            <div className="space-y-4">
              <p className="leading-relaxed">
                We're not just developers — we're problem solvers and innovation partners. Our team is passionate 
                about building solutions that are functional, scalable, and visually stunning. Every project we 
                undertake is driven by a commitment to excellence and client satisfaction.
              </p>
              <p className="leading-relaxed">
                With years of experience across multiple industries, we understand the unique challenges businesses 
                face in the digital landscape. We don't just deliver code; we deliver complete solutions that align 
                with your business objectives and drive measurable results.
              </p>
            </div>
            <div className="space-y-4">
              <p className="leading-relaxed">
                Our agile development process ensures transparency, flexibility, and rapid iteration. We work 
                closely with you at every stage, from initial concept to final deployment and beyond. Regular 
                updates, clear communication, and collaborative problem-solving are at the heart of everything we do.
              </p>
              <p className="leading-relaxed">
                With Colman, you get the perfect blend of cutting-edge technology, exceptional design, and 
                strategic innovation — all customized for your success. Let's build something extraordinary together.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-gray-900 text-center mb-12"
          >
            Our Process
          </motion.h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discovery", desc: "We listen to your needs, understand your vision, and define clear project goals." },
              { step: "02", title: "Design", desc: "Our designers create intuitive interfaces and engaging user experiences." },
              { step: "03", title: "Develop", desc: "We build robust, scalable solutions using the latest technologies." },
              { step: "04", title: "Deploy", desc: "Launch your product with confidence, backed by our ongoing support." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-5xl font-bold text-blue-600 mb-3">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-center text-white"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 opacity-90">
            Let's turn your vision into a fully functional digital product. Get a free consultation and project estimate today.
          </p>
          <a href="/contact">
          <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Get in Touch
          </button>
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default Services;