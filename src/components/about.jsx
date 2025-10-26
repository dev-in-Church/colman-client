"use client";

import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  Shield,
  ArrowRight,
  Award,
  Clock,
  Heart,
} from "lucide-react";
import colaman from "../assets/colman.jpg";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const coreValues = [
    {
      title: "Innovation",
      description:
        "We foster a culture of creativity and forward-thinking, constantly evolving to meet the demands of the future.",
      icon: <Lightbulb className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Collaboration",
      description:
        "We believe in the power of teamwork and open communication to achieve the best results for our clients.",
      icon: <Users className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Integrity",
      description:
        "We value honesty, transparency, and delivering on our promises. Trust is the foundation of our client relationships.",
      icon: <Shield className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Excellence",
      description:
        "We strive for excellence in everything we do, setting high standards and continuously improving our skills and processes.",
      icon: <Award className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Reliability",
      description:
        "We deliver on time, every time. Our clients can count on us to meet deadlines and exceed expectations.",
      icon: <Clock className="w-10 h-10 text-blue-500" />,
    },
    {
      title: "Passion",
      description:
        "We're passionate about technology and dedicated to creating solutions that make a positive impact for our clients.",
      icon: <Heart className="w-10 h-10 text-blue-500" />,
    },
  ];

  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.span
            className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-600 text-sm font-medium mb-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            ABOUT US
          </motion.span>
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            About Colman Technologies
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Building innovative digital solutions since 2024
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-gray-900">Our Story</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Colman Technologies, we specialize in creating innovative,
              cutting-edge digital solutions that propel businesses forward. We
              believe in empowering our clients through technology, delivering
              products that are not only functional but also beautifully
              designed and user-centric.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our team consists of dedicated professionals with expertise in web
              development, mobile applications, and UI/UX design. We're
              committed to transforming your ideas into reality and driving
              success.
            </p>

            <div className="pt-4 flex flex-wrap gap-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Award className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">10+ Years</h4>
                  <p className="text-gray-600">Industry Experience</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">200+</h4>
                  <p className="text-gray-600">Satisfied Clients</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">500+</h4>
                  <p className="text-gray-600">Projects Delivered</p>
                </div>
              </div>
            </div>

            <motion.div
              className="pt-6"
              whileHover={{ x: 5 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <a
                href="/about"
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
              >
                Learn more about our journey
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-blue-500 rounded-lg opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-500 rounded-full opacity-20 animate-pulse"></div>

            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={colaman || "/placeholder.svg"}
                alt="Colman Technologies Team"
                className="w-full h-auto object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="p-6">
                  <h4 className="text-white text-xl font-bold">Our Team</h4>
                  <p className="text-white/80">
                    Passionate experts dedicated to your success
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values */}
        <motion.div
          className="pt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          <div className="text-center mb-16">
            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-4"
              variants={itemVariants}
            >
              Our Core Values
            </motion.h3>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              variants={itemVariants}
            >
              These principles guide everything we do
            </motion.p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border border-gray-100 group"
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <div className="text-blue-600 group-hover:text-white transition-colors duration-300">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="/contact"
            className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-xl"
          >
            Get In Touch
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
