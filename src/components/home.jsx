"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import backgroundImage from "../assets/image0.jpg";
import Services from "./services";
import About from "./about";
import TechStack from "./blog";
import {
  ChevronDown,
  Star,
  Users,
  Code,
  Award,
  ArrowRight,
} from "lucide-react";

const Home = () => {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Simulate image preloading
  useEffect(() => {
    const img = new Image();
    img.src = backgroundImage;
    img.onload = () => setIsLoaded(true);
  }, []);

  // Stats data
  const stats = [
    {
      icon: <Users className="w-8 h-8 text-blue-400" />,
      value: "200+",
      label: "Happy Clients",
    },
    {
      icon: <Code className="w-8 h-8 text-blue-400" />,
      value: "500+",
      label: "Projects Completed",
    },
    {
      icon: <Star className="w-8 h-8 text-blue-400" />,
      value: "10+",
      label: "Years Experience",
    },
    {
      icon: <Award className="w-8 h-8 text-blue-400" />,
      value: "25+",
      label: "Industry Awards",
    },
  ];

  // Client logos (placeholder URLs - replace with actual client logos)
  const clientLogos = [
    "/svg/coa.png?height=60&width=120",
    "/svg/jumia.png?height=60&width=120",
    "/svg/bolt.jpeg?height=60&width=120",
    "/svg/bobby.png?height=60&width=120",
    "/svg/uoe.png?height=60&width=120",
    "/svg/kilimall.png?height=60&width=120",
    "/svg/kcb.png?height=60&width=120",
    "/svg/safaricom.png?height=60&width=120",
  ];

  return (
    <main ref={mainRef} className="overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        className="relative bg-cover bg-center bg-no-repeat min-h-screen flex items-center justify-center text-white w-full"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.6), rgba(0,0,0,0.7)), url(${backgroundImage})`,
          backgroundAttachment: "fixed",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Particles Background */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 6 + 2 + "px",
                height: Math.random() * 6 + 2 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 10 + 10}s linear infinite`,
              }}
            ></div>
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-gray-900/70 to-blue-900/50 opacity-80"></div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Web Development & Digital Solutions
          </motion.span>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Empowering Your Digital Success with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              Colman
            </span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            We create high-performing websites and applications that help your
            business thrive in the digital world. Our solutions are tailored to
            your unique needs.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4 sm:space-x-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="/contact"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-xl flex items-center justify-center"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="#about"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-white/10 hover:shadow-xl"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          className="absolute top-1/4 left-10 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="bg-blue-500 w-16 h-16 sm:w-24 sm:h-24 rounded-full blur-3xl opacity-40 animate-pulse"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-10 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="bg-purple-500 w-20 h-20 sm:w-32 sm:h-32 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hidden md:absolute bottom-10 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-sm text-gray-300 mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-white animate-bounce" />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-xl border border-gray-700 text-center hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{stat.icon}</div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-center text-2xl font-semibold text-indigo-900 mb-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 md:gap-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={logo || "/user.jpg"}
                  alt={`Client ${index + 1}`}
                  className="h-12 md:h-16"
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Content Sections */}
      <Services />
      <TechStack />
      <About />

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2)_0%,transparent_70%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-lg text-blue-100 mb-8">
              Let's collaborate to create innovative solutions that drive your
              business forward.
            </p>
            <a
              href="/contact"
              className="inline-block bg-white text-blue-900 font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      {/* Custom Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) translateX(0);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
          100% {
            transform: translateY(0) translateX(0);
          }
        }
      `}</style>
    </main>
  );
};

export default Home;
