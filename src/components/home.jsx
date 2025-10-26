"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import {
  ChevronDown,
  Star,
  Users,
  Code,
  Award,
  ArrowRight,
} from "lucide-react";
import About from "./about";
import Services from "./services";

const Home = () => {
  const mainRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: mainRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Auto-rotate client logos
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(clientLogos.length / 4));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const stats = [
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      value: 200,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      icon: <Code className="w-8 h-8 text-cyan-400" />,
      value: 500,
      suffix: "+",
      label: "Projects Completed",
    },
    {
      icon: <Star className="w-8 h-8 text-cyan-400" />,
      value: 10,
      suffix: "+",
      label: "Years Experience",
    },
    {
      icon: <Award className="w-8 h-8 text-cyan-400" />,
      value: 25,
      suffix: "+",
      label: "Industry Awards",
    },
  ];

  // Counter animation component
  const Counter = ({ value, suffix, duration = 2000 }) => {
    const [count, setCount] = useState(0);
    const [hasAnimated, setHasAnimated] = useState(false);
    const counterRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const endTime = startTime + duration;

            const updateCount = () => {
              const now = Date.now();
              const progress = Math.min((now - startTime) / duration, 1);
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentCount = Math.floor(easeOutQuart * value);
              
              setCount(currentCount);

              if (now < endTime) {
                requestAnimationFrame(updateCount);
              } else {
                setCount(value);
              }
            };

            updateCount();
          }
        },
        { threshold: 0.5 }
      );

      if (counterRef.current) {
        observer.observe(counterRef.current);
      }

      return () => observer.disconnect();
    }, [value, duration, hasAnimated]);

    return (
      <span ref={counterRef}>
        {count}{suffix}
      </span>
    );
  };

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
    <main ref={mainRef} className="overflow-x-hidden bg-slate-950">
      {/* Hero Section */}
      <motion.section
        className="relative min-h-screen flex items-center justify-center text-white w-full overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0c4a6e 100%)",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
                             linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="absolute rounded-full"
              style={{
                background: index % 3 === 0 
                  ? 'radial-gradient(circle, rgba(6, 182, 212, 0.4) 0%, transparent 70%)'
                  : index % 3 === 1
                  ? 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
                  : 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 70%)',
                width: Math.random() * 300 + 100 + "px",
                height: Math.random() * 300 + 100 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
                animation: `float ${Math.random() * 20 + 15}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            ></div>
          ))}
        </div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
          style={{ opacity: heroOpacity }}
        >
          <motion.span
            className="inline-block py-2 px-4 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-sm font-semibold mb-6 backdrop-blur-sm mt-24"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Enterprise Software Solutions & Digital Innovation
          </motion.span>

          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Empowering Your Digital Success with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
              Colman
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl max-w-4xl mx-auto mb-10 text-slate-300 font-light"
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
              className="group bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold py-4 px-10 rounded-lg shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-400/40 hover:shadow-2xl flex items-center justify-center hover:-translate-y-1"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#about"
              className="bg-slate-800/50 backdrop-blur-sm hover:bg-slate-700/50 text-white border border-slate-600/50 hover:border-cyan-400/50 font-semibold py-4 px-10 rounded-lg shadow-lg transition-all duration-300 hover:shadow-slate-700/50 hover:shadow-xl hover:-translate-y-1"
            >
              Learn More
            </a>
          </motion.div>
        </motion.div>

        {/* Decorative Blurs */}
        <motion.div
          className="absolute top-1/4 left-10 hidden lg:block pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <div className="bg-cyan-500 w-96 h-96 rounded-full blur-3xl"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 right-10 hidden lg:block pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <div className="bg-purple-600 w-96 h-96 rounded-full blur-3xl"></div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="hidden md:absolute bottom-10 left-1/2 transform -translate-x-1/2 md:flex flex-col items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <span className="text-sm text-slate-400 mb-2 font-medium">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-cyan-400 animate-bounce" />
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-900 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-slate-900"></div>
        <div className="container mx-auto px-4 relative z-10">
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
                className="group bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 text-center transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold text-white mb-2">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </h3>
                <p className="text-slate-400 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2
            className="text-center text-3xl font-bold text-slate-900 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Trusted by Industry Leaders
          </motion.h2>

          {/* Desktop View - Grid */}
          <motion.div
            className="hidden md:flex flex-wrap justify-center items-center gap-12 md:gap-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {clientLogos.map((logo, index) => (
              <motion.div
                key={index}
                className="grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={logo || "/user.jpg"}
                  alt={`Client ${index + 1}`}
                  className="h-14 md:h-20 object-contain"
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Mobile View - Slider */}
          <div className="md:hidden relative">
            <div className="overflow-hidden">
              <motion.div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {Array.from({ length: Math.ceil(clientLogos.length / 4) }).map((_, slideIndex) => (
                  <div key={slideIndex} className="min-w-full flex flex-col gap-8">
                    {clientLogos.slice(slideIndex * 4, (slideIndex + 1) * 4).map((logo, logoIndex) => (
                      <div
                        key={logoIndex}
                        className="grayscale opacity-60 flex justify-center"
                      >
                        <img
                          src={logo || "/user.jpg"}
                          alt={`Client ${slideIndex * 4 + logoIndex + 1}`}
                          className="h-12 object-contain"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Slider Dots */}
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: Math.ceil(clientLogos.length / 4) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentSlide === index
                      ? 'bg-cyan-500 w-8'
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      {/* <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(6,182,212,0.15)_0%,transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(139,92,246,0.15)_0%,transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Let's collaborate to create innovative solutions that drive your
              business forward.
            </p>
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-5 px-12 rounded-lg shadow-xl shadow-cyan-500/20 hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-300 hover:-translate-y-1"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
        <About/>
      </section> */}

      <Services/>
        <About/>

      {/* Custom Animation Keyframes */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translate(0, 0);
          }
          25% {
            transform: translate(20px, -20px);
          }
          50% {
            transform: translate(-15px, 15px);
          }
          75% {
            transform: translate(15px, 10px);
          }
        }
        
        @keyframes gridMove {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(50px, 50px);
          }
        }
      `}</style>
    </main>
  );
};

export default Home;