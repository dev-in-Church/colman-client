"use client";

import { motion } from "framer-motion";
import { Laptop, Smartphone, Paintbrush, Cloud, ArrowRight } from "lucide-react";

const HomeServices = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "High-performance websites tailored to your business goals and built to scale.",
      icon: <Laptop className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Mobile App Development",
      description:
        "Cross-platform apps designed for seamless user experiences and strong performance.",
      icon: <Smartphone className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Crafting beautiful, intuitive interfaces that leave lasting impressions.",
      icon: <Paintbrush className="w-8 h-8 text-blue-600" />,
    },
    {
      title: "Cloud Hosting",
      description:
        "Reliable cloud infrastructure to keep your business secure and online 24/7.",
      icon: <Cloud className="w-8 h-8 text-blue-600" />,
    },
  ];

  return (
    <section className="py-20 bg-white text-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold mb-5 text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          What We Do
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          At Colman Tech Savvy, we build digital products that help businesses
          thrive — from web apps to mobile experiences.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <a
            href="/services"
            className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HomeServices;
