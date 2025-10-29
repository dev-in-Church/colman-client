"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Check,
  X,
  ArrowRight,
  Zap,
  Shield,
  Database,
  Globe,
  Laptop,
  Smartphone,
  Paintbrush,
  Cloud,
  Code,
  BarChart,
  RefreshCw,
  Package,
} from "lucide-react";

const Pricing = () => {
  const [selectedPackage, setSelectedPackage] = useState("standard");

  // Define all services
  const services = [
    {
      id: "web-dev",
      name: "Web Development",
      icon: <Laptop className="w-5 h-5" />,
    },
    {
      id: "mobile-dev",
      name: "Mobile App Development",
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      id: "ui-ux",
      name: "UI/UX Design",
      icon: <Paintbrush className="w-5 h-5" />,
    },
    { id: "cloud", name: "Cloud Hosting", icon: <Cloud className="w-5 h-5" /> },
    {
      id: "backend",
      name: "Backend Development",
      icon: <Database className="w-5 h-5" />,
    },
    {
      id: "security",
      name: "Web Security",
      icon: <Shield className="w-5 h-5" />,
    },
    {
      id: "custom",
      name: "Custom Software",
      icon: <Code className="w-5 h-5" />,
    },
    {
      id: "seo",
      name: "SEO & Analytics",
      icon: <BarChart className="w-5 h-5" />,
    },
    {
      id: "reclamation",
      name: "Web Reclamation",
      icon: <RefreshCw className="w-5 h-5" />,
    },
  ];

  // Package options
  const packageOptions = [
    {
      id: "basic",
      name: "Basic",
      description: "Essential features for small projects",
    },
    {
      id: "standard",
      name: "Standard",
      description: "Comprehensive features for most businesses",
    },
    {
      id: "premium",
      name: "Premium",
      description: "Advanced features for complex requirements",
    },
  ];

  // Plans with different package options
  const plans = {
    basic: [
      {
        name: "Starter",
        description:
          "Essential digital solutions for small businesses and startups.",
        price: 15000,
        features: [
          { title: "Web Development (Basic)", included: true },
          { title: "UI/UX Design (Standard Templates)", included: true },
          { title: "Cloud Hosting (5GB Storage)", included: true },
          { title: "Web Reclamation (Basic)", included: true },
          { title: "SEO & Analytics (Basic Reports)", included: true },
          { title: "Mobile App Development", included: false },
          { title: "Backend Development", included: false },
          { title: "Custom Software Solutions", included: false },
          { title: "Advanced Security Features", included: false },
        ],
        serviceInclusions: [
          {
            id: "web-dev",
            tier: "Basic",
            details: "Up to 5 pages, responsive design",
          },
          {
            id: "ui-ux",
            tier: "Basic",
            details: "Standard templates, minimal customization",
          },
          {
            id: "cloud",
            tier: "Basic",
            details: "5GB storage, shared hosting",
          },
          { id: "seo", tier: "Basic", details: "Basic analytics and reports" },
          {
            id: "reclamation",
            tier: "Basic",
            details: "Basic website recovery and migration",
          },
        ],
        supportFeatures: [
          { title: "Email Support", included: true },
          { title: "Response Time", value: "Within 48 hours" },
          { title: "Updates & Maintenance", value: "3 months included" },
        ],
        cta: "Get Started",
        ctaLink: "/signup?plan=starter-basic",
        icon: <Globe className="w-6 h-6" />,
        popular: false,
      },
      {
        name: "Pro",
        description:
          "Comprehensive solutions for growing businesses with advanced requirements.",
        price: 30000,
        features: [
          { title: "Web Development (Advanced)", included: true },
          { title: "UI/UX Design (Custom)", included: true },
          { title: "Cloud Hosting (25GB Storage)", included: true },
          { title: "Web Reclamation (Advanced)", included: true },
          { title: "SEO & Analytics (Advanced)", included: true },
          { title: "Mobile App Development (Basic)", included: true },
          { title: "Backend Development", included: true },
          { title: "Custom Software Solutions", included: false },
          { title: "Advanced Security Features", included: true },
        ],
        serviceInclusions: [
          {
            id: "web-dev",
            tier: "Advanced",
            details: "Up to 15 pages, advanced features",
          },
          {
            id: "ui-ux",
            tier: "Custom",
            details: "Custom design, basic user testing",
          },
          {
            id: "cloud",
            tier: "Standard",
            details: "25GB storage, dedicated hosting",
          },
          {
            id: "mobile-dev",
            tier: "Basic",
            details: "Single platform (Android or iOS)",
          },
          {
            id: "backend",
            tier: "Standard",
            details: "Basic API development, database management",
          },
          {
            id: "security",
            tier: "Standard",
            details: "SSL, basic firewall, monitoring",
          },
          {
            id: "seo",
            tier: "Advanced",
            details: "Detailed analytics, monthly reports",
          },
          {
            id: "reclamation",
            tier: "Advanced",
            details: "Website recovery and basic optimization",
          },
        ],
        supportFeatures: [
          { title: "Priority Support", included: true },
          { title: "Response Time", value: "Within 24 hours" },
          { title: "Updates & Maintenance", value: "6 months included" },
        ],
        cta: "Get Started",
        ctaLink: "/signup?plan=pro-basic",
        icon: <Zap className="w-6 h-6" />,
        popular: true,
      },
      {
        name: "Enterprise",
        description:
          "Tailored solutions for large organizations with complex requirements and scale.",
        price: 45000,
        features: [
          { title: "Web Development (Premium)", included: true },
          { title: "UI/UX Design (Premium)", included: true },
          { title: "Cloud Hosting (100GB Storage)", included: true },
          { title: "Web Reclamation (Premium)", included: true },
          { title: "SEO & Analytics (Premium)", included: true },
          { title: "Mobile App Development (Full)", included: true },
          { title: "Backend Development (Advanced)", included: true },
          { title: "Custom Software Solutions", included: true },
          { title: "Advanced Security Features", included: true },
        ],
        serviceInclusions: [
          {
            id: "web-dev",
            tier: "Premium",
            details: "Up to 30 pages, advanced features",
          },
          {
            id: "ui-ux",
            tier: "Premium",
            details: "Premium design, basic user testing",
          },
          {
            id: "cloud",
            tier: "Premium",
            details: "100GB storage, dedicated servers",
          },
          {
            id: "mobile-dev",
            tier: "Full",
            details: "Single platform with advanced features",
          },
          {
            id: "backend",
            tier: "Advanced",
            details: "Advanced API, basic scalable architecture",
          },
          {
            id: "security",
            tier: "Premium",
            details: "Advanced security, basic monitoring",
          },
          {
            id: "custom",
            tier: "Basic",
            details: "Basic customized software solutions",
          },
          {
            id: "seo",
            tier: "Premium",
            details: "Comprehensive analytics, monthly reports",
          },
          {
            id: "reclamation",
            tier: "Premium",
            details: "Complete website recovery and basic enhancement",
          },
        ],
        supportFeatures: [
          { title: "Dedicated Support", included: true },
          { title: "Response Time", value: "Within 12 hours" },
          { title: "Updates & Maintenance", value: "12 months included" },
        ],
        cta: "Contact Sales",
        ctaLink: "/contact-sales",
        icon: <Database className="w-6 h-6" />,
        popular: false,
      },
    ],
    standard: [
      {
        name: "Starter",
        description:
          "Essential digital solutions for small businesses and startups.",
        price: 20000,
        features: [
          { title: "Web Development (Standard)", included: true },
          { title: "UI/UX Design (Custom Templates)", included: true },
          { title: "Cloud Hosting (10GB Storage)", included: true },
          { title: "Web Reclamation (Standard)", included: true },
          { title: "SEO & Analytics (Standard Reports)", included: true },
          { title: "Mobile App Development (Basic)", included: true },
          { title: "Backend Development (Basic)", included: true },
          { title: "Custom Software Solutions", included: false },
          { title: "Advanced Security Features", included: true },
        ],
        serviceInclusions: [
          {
            id: "web-dev",
            tier: "Standard",
            details: "Up to 10 pages, responsive design, animations",
          },
          {
            id: "ui-ux",
            tier: "Custom",
            details: "Custom templates, moderate customization",
          },
          {
            id: "cloud",
            tier: "Standard",
            details: "10GB storage, optimized hosting",
          },
          {
            id: "mobile-dev",
            tier: "Basic",
            details: "Single platform app (basic features)",
          },
          {
            id: "backend",
            tier: "Basic",
            details: "Basic API endpoints, database setup",
          },
          {
            id: "security",
            tier: "Standard",
            details: "SSL, firewall, basic monitoring",
          },
          {
            id: "seo",
            tier: "Standard",
            details: "Comprehensive analytics and reports",
          },
          {
            id: "reclamation",
            tier: "Standard",
            details: "Full website recovery and optimization",
          },
        ],
        supportFeatures: [
          { title: "Priority Email Support", included: true },
          { title: "Response Time", value: "Within 24 hours" },
          { title: "Updates & Maintenance", value: "6 months included" },
        ],
        cta: "Get Started",
        ctaLink: "/signup?plan=starter-standard",
        icon: <Globe className="w-6 h-6" />,
        popular: false,
      },
      {
        name: "Pro",
        description:
          "Comprehensive solutions for growing businesses with advanced requirements.",
        price: 40000,
        features: [
          { title: "Web Development (Advanced)", included: true },
          { title: "UI/UX Design (Premium)", included: true },
          { title: "Cloud Hosting (50GB Storage)", included: true },
          { title: "Web Reclamation (Advanced)", included: true },
          { title: "SEO & Analytics (Advanced)", included: true },
          { title: "Mobile App Development (Standard)", included: true },
          { title: "Backend Development (Advanced)", included: true },
          { title: "Custom Software Solutions (Basic)", included: true },
          { title: "Advanced Security Features", included: true },
        ],
        serviceInclusions: [
          {
            id: "web-dev",
            tier: "Advanced",
            details: "Up to 25 pages, advanced features, animations",
          },
          {
            id: "ui-ux",
            tier: "Premium",
            details: "Premium design, comprehensive user testing",
          },
          {
            id: "cloud",
            tier: "Advanced",
            details: "50GB storage, optimized dedicated hosting",
          },
          {
            id: "mobile-dev",
            tier: "Standard",
            details: "Single platform with advanced features",
          },
          {
            id: "backend",
            tier: "Advanced",
            details: "Advanced API, optimized database, caching",
          },
          {
            id: "security",
            tier: "Advanced",
            details: "SSL, advanced firewall, 24/7 monitoring",
          },
          {
            id: "custom",
            tier: "Basic",
            details: "Basic custom software development",
          },
          {
            id: "seo",
            tier: "Advanced",
            details: "Advanced analytics, bi-weekly reports",
          },
          {
            id: "reclamation",
            tier: "Advanced",
            details: "Complete website recovery and optimization",
          },
        ],
        supportFeatures: [
          { title: "Priority Support", included: true },
          { title: "Response Time", value: "Within 12 hours" },
          { title: "Updates & Maintenance", value: "12 months included" },
        ],
        cta: "Get Started",
        ctaLink: "/signup?plan=pro-standard",
        icon: <Zap className="w-6 h-6" />,
        popular: true,
      },
      {
        name: "Enterprise",
        description:
          "Tailored solutions for large organizations with complex requirements and scale.",
        price: 60000,
        features: [
          { title: "Web Development (Premium)", included: true },
          { title: "UI/UX Design (Premium)", included: true },
          { title: "Cloud Hosting (200GB Storage)", included: true },
          { title: "Web Reclamation (Premium)", included: true },
          { title: "SEO & Analytics (Premium)", included: true },
          { title: "Mobile App Development (Premium)", included: true },
          { title: "Backend Development (Premium)", included: true },
          { title: "Custom Software Solutions (Advanced)", included: true },
          { title: "Advanced Security Features", included: true },
        ],
        serviceInclusions: [
          {
            id: "web-dev",
            tier: "Premium",
            details: "Unlimited pages, premium features, animations",
          },
          {
            id: "ui-ux",
            tier: "Premium",
            details: "Premium design, comprehensive user testing",
          },
          {
            id: "cloud",
            tier: "Premium",
            details: "200GB storage, optimized dedicated servers",
          },
          {
            id: "mobile-dev",
            tier: "Premium",
            details: "Cross-platform with premium features",
          },
          {
            id: "backend",
            tier: "Premium",
            details: "Premium API, optimized architecture",
          },
          {
            id: "security",
            tier: "Premium",
            details: "Enterprise security, 24/7 monitoring",
          },
          {
            id: "custom",
            tier: "Advanced",
            details: "Advanced customized software solutions",
          },
          {
            id: "seo",
            tier: "Premium",
            details: "Premium analytics, weekly reports",
          },
          {
            id: "reclamation",
            tier: "Premium",
            details: "Complete website recovery, migration, and enhancement",
          },
        ],
        supportFeatures: [
          { title: "Dedicated Support Team", included: true },
          { title: "Response Time", value: "Within 6 hours" },
          { title: "Updates & Maintenance", value: "24 months included" },
        ],
        cta: "Contact Sales",
        ctaLink: "/contact-sales",
        icon: <Database className="w-6 h-6" />,
        popular: false,
      },
    ],
    premium: [
      {
        name: "Starter",
        description:
          "Essential digital solutions for small businesses and startups.",
        price: 45000,
        features: [
          { title: "Web Development (Advanced)", included: true },
          { title: "UI/UX Design (Premium)", included: true },
          { title: "Cloud Hosting (25GB Storage)", included: true },
          { title: "Web Reclamation (Advanced)", included: true },
          { title: "SEO & Analytics (Advanced)", included: true },
          { title: "Mobile App Development (Standard)", included: true },
          { title: "Backend Development (Standard)", included: true },
          { title: "Custom Software Solutions (Basic)", included: true },
          { title: "Advanced Security Features", included: true },
        ],
        serviceInclusions: [
          {
            id: "web-dev",
            tier: "Advanced",
            details: "Up to 20 pages, advanced features, animations",
          },
          {
            id: "ui-ux",
            tier: "Premium",
            details: "Premium design, comprehensive user testing",
          },
          {
            id: "cloud",
            tier: "Advanced",
            details: "25GB storage, optimized dedicated hosting",
          },
          {
            id: "mobile-dev",
            tier: "Standard",
            details: "Single platform with advanced features",
          },
          {
            id: "backend",
            tier: "Standard",
            details: "Standard API, optimized database",
          },
          {
            id: "security",
            tier: "Advanced",
            details: "Advanced security, 24/7 monitoring",
          },
          {
            id: "custom",
            tier: "Basic",
            details: "Basic custom software development",
          },
          {
            id: "seo",
            tier: "Advanced",
            details: "Advanced analytics, bi-weekly reports",
          },
          {
            id: "reclamation",
            tier: "Advanced",
            details: "Complete website recovery and optimization",
          },
        ],
        supportFeatures: [
          { title: "Priority Support", included: true },
          { title: "Response Time", value: "Within 12 hours" },
          { title: "Updates & Maintenance", value: "12 months included" },
        ],
        cta: "Get Started",
        ctaLink: "/signup?plan=starter-premium",
        icon: <Globe className="w-6 h-6" />,
        popular: false,
      },
      {
        name: "Pro",
        description:
          "Comprehensive solutions for growing businesses with advanced requirements.",
        price: 60000,
        features: [
          { title: "Web Development (Premium)", included: true },
          { title: "UI/UX Design (Premium)", included: true },
          { title: "Cloud Hosting (100GB Storage)", included: true },
          { title: "Web Reclamation (Premium)", included: true },
          { title: "SEO & Analytics (Premium)", included: true },
          { title: "Mobile App Development (Advanced)", included: true },
          { title: "Backend Development (Premium)", included: true },
          { title: "Custom Software Solutions (Advanced)", included: true },
          { title: "Advanced Security Features", included: true },
        ],
        serviceInclusions: [
          {
            id: "web-dev",
            tier: "Premium",
            details: "Unlimited pages, premium features, animations",
          },
          {
            id: "ui-ux",
            tier: "Premium",
            details: "Premium design, comprehensive user testing",
          },
          {
            id: "cloud",
            tier: "Premium",
            details: "100GB storage, optimized dedicated servers",
          },
          {
            id: "mobile-dev",
            tier: "Advanced",
            details: "Cross-platform with advanced features",
          },
          {
            id: "backend",
            tier: "Premium",
            details: "Premium API, optimized architecture",
          },
          {
            id: "security",
            tier: "Premium",
            details: "Premium security, 24/7 monitoring",
          },
          {
            id: "custom",
            tier: "Advanced",
            details: "Advanced customized software solutions",
          },
          {
            id: "seo",
            tier: "Premium",
            details: "Premium analytics, weekly reports",
          },
          {
            id: "reclamation",
            tier: "Premium",
            details: "Complete website recovery, migration, and enhancement",
          },
        ],
        supportFeatures: [
          { title: "Dedicated Support", included: true },
          { title: "Response Time", value: "Within 6 hours" },
          { title: "Updates & Maintenance", value: "24 months included" },
        ],
        cta: "Get Started",
        ctaLink: "/signup?plan=pro-premium",
        icon: <Zap className="w-6 h-6" />,
        popular: true,
      },
      {
        name: "Enterprise",
        description:
          "Tailored solutions for large organizations with complex requirements and scale.",
        price: 100000,
        features: [
          { title: "Web Development (Enterprise)", included: true },
          { title: "UI/UX Design (Enterprise)", included: true },
          { title: "Cloud Hosting (500GB+ Storage)", included: true },
          { title: "Web Reclamation (Enterprise)", included: true },
          { title: "SEO & Analytics (Enterprise)", included: true },
          { title: "Mobile App Development (Enterprise)", included: true },
          { title: "Backend Development (Enterprise)", included: true },
          { title: "Custom Software Solutions (Enterprise)", included: true },
          { title: "Enterprise Security Features", included: true },
        ],
        serviceInclusions: [
          {
            id: "web-dev",
            tier: "Enterprise",
            details: "Unlimited pages, enterprise features, animations",
          },
          {
            id: "ui-ux",
            tier: "Enterprise",
            details: "Enterprise design, comprehensive user testing",
          },
          {
            id: "cloud",
            tier: "Enterprise",
            details: "500GB+ storage, enterprise dedicated servers",
          },
          {
            id: "mobile-dev",
            tier: "Enterprise",
            details: "Cross-platform with enterprise features",
          },
          {
            id: "backend",
            tier: "Enterprise",
            details: "Enterprise API, optimized architecture",
          },
          {
            id: "security",
            tier: "Enterprise",
            details: "Enterprise security, 24/7 monitoring",
          },
          {
            id: "custom",
            tier: "Enterprise",
            details: "Enterprise customized software solutions",
          },
          {
            id: "seo",
            tier: "Enterprise",
            details: "Enterprise analytics, weekly reports",
          },
          {
            id: "reclamation",
            tier: "Enterprise",
            details: "Enterprise website recovery, migration, and enhancement",
          },
        ],
        supportFeatures: [
          { title: "Dedicated Support Team", included: true },
          { title: "Response Time", value: "Within 4 hours" },
          { title: "Updates & Maintenance", value: "36 months included" },
        ],
        cta: "Contact Sales",
        ctaLink: "/contact-sales",
        icon: <Database className="w-6 h-6" />,
        popular: false,
      },
    ],
  };

  // Format price with commas
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Get current plans based on selected package
  const currentPlans = plans[selectedPackage];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-gray-900 mt-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            One-Time Service Packages
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            All-inclusive packages for your digital needs. Pay once and get
            complete solutions.
          </motion.p>

          {/* Package Toggle */}
          <motion.div
            className="flex flex-col items-center justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center mb-4">
              <Package className="w-5 h-5 text-blue-500 mr-2" />
              <span className="text-lg font-medium text-gray-800">
                Select Package Specifications:
              </span>
            </div>
            <div className="bg-gray-100 p-1 rounded-lg inline-flex">
              {packageOptions.map((option) => (
                <button
                  key={option.id}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    selectedPackage === option.id
                      ? "bg-blue-600 text-white shadow-md"
                      : "bg-transparent text-gray-600 hover:bg-gray-200"
                  }`}
                  onClick={() => setSelectedPackage(option.id)}
                >
                  {option.name}
                </button>
              ))}
            </div>
            <p className="text-sm text-gray-500 mt-2">
              {
                packageOptions.find((option) => option.id === selectedPackage)
                  ?.description
              }
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {currentPlans.map((plan, index) => (
            <motion.div
              key={index}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden border ${
                plan.popular
                  ? "border-blue-500 md:scale-105 z-10"
                  : "border-gray-100 hover:border-blue-200 hover:shadow-2xl"
              } transition-all duration-300`}
              variants={itemVariants}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="flex items-center mb-4">
                  <div
                    className={`p-2 rounded-lg mr-3 ${
                      plan.popular
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {plan.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </h3>
                </div>

                <p className="text-gray-600 mb-6 min-h-[50px]">
                  {plan.description}
                </p>

                {/* One-time Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-gray-500 text-lg">Ksh</span>
                    <span className="text-4xl font-extrabold text-gray-900 mx-1">
                      {formatPrice(plan.price)}
                    </span>
                  </div>
                  <div className="text-sm text-gray-500 mt-1">
                    One-time payment
                  </div>
                </div>

                {/* Services Included */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                    Services Included
                  </h4>
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mt-0.5 mr-3 flex-shrink-0" />
                        )}
                        <span
                          className={
                            feature.included ? "text-gray-700" : "text-gray-400"
                          }
                        >
                          {feature.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Support Features */}
                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">
                    Support & Maintenance
                  </h4>
                  <ul className="space-y-3">
                    {plan.supportFeatures.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <span className="text-gray-700">{feature.title}</span>
                          {feature.value && (
                            <span className="block text-sm text-gray-500">
                              {feature.value}
                            </span>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={plan.ctaLink}
                  className={`block w-full py-3 px-4 rounded-lg text-center font-semibold transition-all duration-300 ${
                    plan.popular
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-blue-200"
                      : "bg-gray-100 hover:bg-gray-200 text-gray-800"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Service Details Table */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            {
              packageOptions.find((option) => option.id === selectedPackage)
                ?.name
            }{" "}
            Package Details
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="py-4 px-6 text-left text-gray-700 font-semibold">
                    Service
                  </th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold">
                    Starter
                  </th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold">
                    Pro
                  </th>
                  <th className="py-4 px-6 text-center text-gray-700 font-semibold">
                    Enterprise
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((service, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className="py-4 px-6 border-t border-gray-200">
                      <div className="flex items-center">
                        <span className="mr-2 text-blue-500">
                          {service.icon}
                        </span>
                        <span className="font-medium text-gray-800">
                          {service.name}
                        </span>
                      </div>
                    </td>

                    {/* Starter Tier */}
                    <td className="py-4 px-6 border-t border-gray-200 text-center">
                      {currentPlans[0].serviceInclusions.find(
                        (s) => s.id === service.id
                      ) ? (
                        <div>
                          <span className="text-green-500 font-medium">
                            {
                              currentPlans[0].serviceInclusions.find(
                                (s) => s.id === service.id
                              ).tier
                            }
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            {
                              currentPlans[0].serviceInclusions.find(
                                (s) => s.id === service.id
                              ).details
                            }
                          </p>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>

                    {/* Pro Tier */}
                    <td className="py-4 px-6 border-t border-gray-200 text-center">
                      {currentPlans[1].serviceInclusions.find(
                        (s) => s.id === service.id
                      ) ? (
                        <div>
                          <span className="text-green-500 font-medium">
                            {
                              currentPlans[1].serviceInclusions.find(
                                (s) => s.id === service.id
                              ).tier
                            }
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            {
                              currentPlans[1].serviceInclusions.find(
                                (s) => s.id === service.id
                              ).details
                            }
                          </p>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>

                    {/* Enterprise Tier */}
                    <td className="py-4 px-6 border-t border-gray-200 text-center">
                      {currentPlans[2].serviceInclusions.find(
                        (s) => s.id === service.id
                      ) ? (
                        <div>
                          <span className="text-green-500 font-medium">
                            {
                              currentPlans[2].serviceInclusions.find(
                                (s) => s.id === service.id
                              ).tier
                            }
                          </span>
                          <p className="text-xs text-gray-500 mt-1">
                            {
                              currentPlans[2].serviceInclusions.find(
                                (s) => s.id === service.id
                              ).details
                            }
                          </p>
                        </div>
                      ) : (
                        <span className="text-gray-400">—</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Web Reclamation Highlight */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 md:p-12 text-white shadow-xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="md:flex items-center justify-between">
            <div className="mb-8 md:mb-0 md:mr-8">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-white/20 rounded-lg mr-4">
                  <RefreshCw className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold">Web Reclamation Services</h3>
              </div>
              <p className="text-blue-100 text-lg mb-6 md:max-w-xl">
                Recover, restore, and revitalize your existing web assets. Our
                web reclamation services help you transform outdated websites
                into modern, high-performing digital experiences.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Website recovery from hacks or data loss</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Legacy system migration</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Content preservation and enhancement</span>
                </div>
                <div className="flex items-start">
                  <Check className="w-5 h-5 text-blue-300 mt-1 mr-2 flex-shrink-0" />
                  <span>Performance optimization</span>
                </div>
              </div>
            </div>
            <div className="flex-shrink-0">
              <a
                href="/services/web-reclamation"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-700 font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                Learn More
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h3>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Find answers to common questions about our services and pricing
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                What is included in the one-time payment?
              </h4>
              <p className="text-gray-600">
                Our one-time payment includes complete development of all
                services in your chosen package, along with the specified
                maintenance period. After the included maintenance period, you
                can purchase additional support if needed.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                What is Web Reclamation?
              </h4>
              <p className="text-gray-600">
                Web Reclamation is our service for recovering, restoring, and
                revitalizing existing websites. This includes recovering from
                hacks, migrating from legacy systems, preserving content, and
                optimizing performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                How do I choose the right package?
              </h4>
              <p className="text-gray-600">
                Consider your project's complexity and requirements. Basic
                packages are ideal for simple projects, Standard for most
                business needs, and Premium for complex, feature-rich
                applications. Our team can help you determine the best fit
                during consultation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md">
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                What happens after the maintenance period?
              </h4>
              <p className="text-gray-600">
                After your included maintenance period ends, you can purchase
                additional maintenance packages or pay-as-you-go support. We
                offer flexible options to ensure your digital assets remain
                secure and up-to-date.
              </p>
            </div>
          </div>

          <motion.div
            className="mt-12"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <a
              href="/faq"
              className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-800 transition-colors"
            >
              View all FAQs
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          className="mt-24 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to transform your digital presence?
          </h3>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Join thousands of satisfied customers who trust Colman Technologies
            for their complete digital needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/signup"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 hover:shadow-blue-500/30 hover:shadow-xl flex items-center justify-center"
            >
              Start Your Free Consultation
              <ArrowRight className="ml-2 w-4 h-4" />
            </a>
            <a
              href="/contact"
              className="bg-white hover:bg-gray-50 text-gray-800 border border-gray-300 font-semibold py-3 px-8 rounded-lg shadow-md transition-all duration-300 hover:shadow-lg"
            >
              Talk to Sales
            </a>
          </div>
          <p className="text-gray-500 mt-6">
            No commitment required. Free initial consultation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
