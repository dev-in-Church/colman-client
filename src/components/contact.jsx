"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Clock, Globe, Linkedin, Github, Twitter, CheckCircle2, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "",
    service: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      setShowPopup(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        budget: "",
        service: "",
        message: "",
      });
      setTimeout(() => setShowPopup(false), 5000);
    }, 1500);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      content: "hello@colmantechsavvy.com",
      subContent: "We'll respond within 24 hours",
      link: "mailto:hello@colmantechsavvy.com"
    },
    {
      icon: Phone,
      title: "Call Us",
      content: "+254 712 345 678",
      subContent: "Mon-Fri, 9AM-6PM EAT",
      link: "tel:+254712345678"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      content: "Westlands, Nairobi",
      subContent: "Kenya",
      link: "#"
    },
  ];

  const services = [
    "Web Development",
    "Mobile Development",
    "UI/UX Design",
    "Branding & Marketing",
    "AI & Automation",
    "Cloud & DevOps",
    "Other"
  ];

  const budgetRanges = [
    "Less than $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not sure yet"
  ];

  return (
    <motion.section
      className="relative bg-white text-gray-800 min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Hero Section */}
      <div className="relative max-w-6xl mx-auto text-center px-6 pt-20 pb-16">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-sm font-semibold rounded-full mb-6">
            Let's Work Together
          </span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Start Your Project Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Partner with Colman Tech Savvy to turn your ideas into impactful digital solutions.
            We combine innovation, technology, and strategy to bring your vision to life with excellence.
          </p>
        </motion.div>
      </div>

      {/* Contact Cards */}
      <div className="max-w-6xl mx-auto px-6 mb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.link}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
                  <Icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{info.content}</p>
                <p className="text-sm text-gray-500">{info.subContent}</p>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="max-w-6xl mx-auto px-6 mb-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <motion.div
            className="lg:col-span-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Get a Free Consultation</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours with a detailed proposal.
              </p>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Needed *
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, i) => (
                        <option key={i} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Budget
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition bg-white"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range, i) => (
                      <option key={i} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    placeholder="Tell us about your project goals, timeline, and any specific requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition resize-none"
                  />
                </div>

                <motion.button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-lg shadow-md transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <span className="animate-spin mr-2">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </motion.button>

                <p className="text-xs text-gray-500 mt-4">
                  By submitting this form, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            className="space-y-8"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {/* Why Choose Us */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Why Partner With Us?</h3>
              <div className="space-y-4">
                {[
                  "Expert team with 10+ years experience",
                  "Agile development methodology",
                  "24/7 dedicated support",
                  "100% satisfaction guarantee",
                  "Transparent pricing & timeline"
                ].map((item, i) => (
                  <div key={i} className="flex items-start">
                    <CheckCircle2 className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Clock className="w-5 h-5 text-blue-600 mr-2" />
                <h3 className="text-lg font-bold text-gray-900">Business Hours</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monday - Friday</span>
                  <span className="font-medium text-gray-900">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Saturday</span>
                  <span className="font-medium text-gray-900">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Sunday</span>
                  <span className="font-medium text-gray-900">Closed</span>
                </div>
                <div className="pt-3 mt-3 border-t border-gray-200">
                  <span className="text-gray-600">Timezone:</span>
                  <span className="font-medium text-gray-900 ml-2">EAT (UTC+3)</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Connect With Us</h3>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "#", label: "LinkedIn" },
                  { icon: Github, href: "#", label: "GitHub" },
                  { icon: Twitter, href: "#", label: "Twitter" },
                  { icon: Globe, href: "#", label: "Website" }
                ].map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={i}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 bg-gray-100 hover:bg-blue-600 hover:text-white text-gray-600 rounded-lg flex items-center justify-center transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <motion.div
        className="max-w-6xl mx-auto px-6 mb-20"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions? We've got answers. If you can't find what you're looking for, feel free to reach out.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              q: "What is your typical project timeline?",
              a: "Project timelines vary based on complexity. Web projects typically take 3-8 weeks, mobile apps 8-16 weeks, and enterprise solutions 3-6 months. We provide detailed timelines during consultation."
            },
            {
              q: "Do you offer ongoing maintenance and support?",
              a: "Yes, we provide comprehensive maintenance packages including bug fixes, security updates, feature enhancements, and 24/7 technical support to ensure your solution runs smoothly."
            },
            {
              q: "Can you work with our existing development team?",
              a: "Absolutely. We offer team augmentation services and seamlessly integrate with your existing workflows, tools, and processes to accelerate your development goals."
            },
            {
              q: "What is your pricing structure?",
              a: "We offer flexible pricing models including fixed-price projects, time and materials, and dedicated team arrangements. Each project receives a custom quote based on requirements and scope."
            },
            {
              q: "Do you sign NDAs and protect intellectual property?",
              a: "Yes, we prioritize confidentiality and intellectual property protection. We're happy to sign NDAs before any project discussions and ensure all IP rights belong to you."
            },
            {
              q: "What technologies do you specialize in?",
              a: "We work with modern tech stacks including React, Next.js, React Native, Node.js, Python, AWS, and more. We choose the best technology based on your specific needs and goals."
            }
          ].map((faq, i) => (
            <motion.div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-blue-300 hover:shadow-md transition-all duration-300"
              whileHover={{ y: -4 }}
            >
              <h3 className="font-semibold text-gray-900 mb-3 text-lg">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Banner */}
      <motion.div
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-16 mb-0"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg opacity-90 mb-8">
            Join hundreds of satisfied clients who have scaled their businesses with our solutions.
          </p>
          <a
            href="/services"
            className="inline-block bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
          >
            Explore Our Services
          </a>
        </div>
      </motion.div>

      {/* Success Popup */}
      {showPopup && (
        <motion.div
          className="fixed bottom-8 right-8 bg-green-600 text-white py-4 px-6 rounded-xl shadow-2xl flex items-center gap-3 max-w-md z-50"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
        >
          <CheckCircle2 className="w-6 h-6 flex-shrink-0" />
          <div>
            <p className="font-semibold">Message sent successfully!</p>
            <p className="text-sm opacity-90">We'll get back to you within 24 hours.</p>
          </div>
        </motion.div>
      )}
    </motion.section>
  );
};

export default Contact;