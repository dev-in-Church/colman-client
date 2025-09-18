import React, { useState } from "react";
import backgroundImage from "../assets/image0.jpg";
import PopupMessage from "./popupMessage";

const Contact = ({ title = "Contact Us", image = backgroundImage }) => {
  // State for form inputs
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [popup, setPopup] = useState({ show: false, message: "", type: "" });
  const [loading, setLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // FAQ State
  const [openFaq, setOpenFaq] = useState(null);

  // Function to show popup
  const showPopup = (message, type) => {
    setPopup({ show: true, message, type });
    setTimeout(() => {
      setPopup({ show: false, message: "", type: "" });
    }, 3000);
  };

  // Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      showPopup("Please fill in all fields.", "error");
      return;
    }

    setLoading(true);
    const formData = { name, email, message };

    try {
      const response = await fetch(
        "https://colman-backend.onrender.com/send-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        showPopup("Email sent successfully!", "success");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        showPopup("Something went wrong. Please try again later.", "error");
      }
    } catch (error) {
      showPopup("Network error. Please try again.", "error");
    } finally {
      setLoading(false);
    }
  };

  // Contact methods data
  const contactMethods = [
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      title: "Email Us",
      description: "Send us an email anytime",
      contact: "hello@company.com",
      action: "mailto:hello@company.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
      ),
      title: "Call Us",
      description: "Mon-Fri from 8am to 5pm",
      contact: "+1 (555) 000-0000",
      action: "tel:+15550000000",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      ),
      title: "Visit Us",
      description: "Come say hello at our office",
      contact: "123 Business St, City 12345",
      action: "https://maps.google.com",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          />
        </svg>
      ),
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available 24/7",
      action: "#",
      color: "from-orange-500 to-red-500",
    },
  ];

  // FAQ data
  const faqs = [
    {
      question: "How quickly do you respond to inquiries?",
      answer:
        "We aim to respond to all inquiries within 24 hours during business days. For urgent matters, please call us directly.",
    },
    {
      question: "What information should I include in my message?",
      answer:
        "Please include details about your project, timeline, budget range, and any specific requirements. This helps us provide you with the most accurate response.",
    },
    {
      question: "Do you offer free consultations?",
      answer:
        "Yes! We offer a free 30-minute consultation to discuss your project needs and how we can help bring your vision to life.",
    },
    {
      question: "What are your business hours?",
      answer:
        "Our office hours are Monday to Friday, 8:00 AM to 5:00 PM (EST). However, you can reach us anytime through our contact form or email.",
    },
    {
      question: "Do you work with international clients?",
      answer:
        "Absolutely! We work with clients worldwide and have experience managing projects across different time zones and cultural contexts.",
    },
  ];

  // Office locations data
  const offices = [
    {
      city: "New York",
      address: "123 Broadway Ave, Suite 456, New York, NY 10001",
      phone: "+1 (555) 123-4567",
      email: "ny@company.com",
      hours: "Mon-Fri: 8am-6pm EST",
    },
    {
      city: "Los Angeles",
      address: "789 Sunset Blvd, Floor 12, Los Angeles, CA 90028",
      phone: "+1 (555) 987-6543",
      email: "la@company.com",
      hours: "Mon-Fri: 8am-6pm PST",
    },
    {
      city: "London",
      address: "456 Oxford Street, Suite 789, London, UK W1C 1AP",
      phone: "+44 20 7123 4567",
      email: "london@company.com",
      hours: "Mon-Fri: 9am-5pm GMT",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-8 md:pt-12">
      {/* Enhanced Hero Section */}
      <section
        id="contact"
        aria-label="Contact Section"
        className="relative bg-cover bg-center bg-no-repeat h-[70vh] flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(37, 99, 235, 0.9)), url(${image})`,
        }}
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

        <div className="relative text-center px-4 z-10 max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 transform hover:scale-105 transition-transform duration-300">
            {title}
          </h1>
          <div className="w-32 h-1 bg-white mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-blue-50 max-w-3xl mx-auto font-light leading-relaxed mb-8">
            Ready to transform your ideas into reality? Let's start a
            conversation that could change everything.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm">Available Now</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm">5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-sm">24h Response</span>
            </div>
          </div>
        </div>

        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-float-delayed"></div>
      </section>

      {/* Contact Methods Grid */}
      <section className="relative -mt-10 z-20 pb-16">
        <div className="container mx-auto px-6">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, index) => (
              <a
                key={index}
                href={method.action}
                className="group bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/20 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-3">{method.description}</p>
                <p className="text-sm font-semibold text-blue-600">
                  {method.contact}
                </p>
              </a>
            ))}
          </div> */}

          {/* Main Contact Form */}
          <form
            className="max-w-4xl mx-auto bg-white/90 backdrop-blur-sm shadow-2xl rounded-2xl p-8 md:p-12 border border-white/20 mb-16"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col gap-8">
              <div className="text-center mb-4">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  Let's Connect
                </h3>
                <p className="text-gray-600 text-lg">
                  We're here to help bring your ideas to life
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name Input */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-hover:text-blue-600">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className={`w-full p-4 text-gray-800 bg-gray-50/50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg ${
                      focusedField === "name"
                        ? "border-blue-500 ring-4 ring-blue-100"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    aria-label="Name"
                    name="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>

                {/* Email Input */}
                <div className="relative group">
                  <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-hover:text-blue-600">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className={`w-full p-4 text-gray-800 bg-gray-50/50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg ${
                      focusedField === "email"
                        ? "border-blue-500 ring-4 ring-blue-100"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                    aria-label="Email"
                    name="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative group">
                <label className="block text-sm font-semibold text-gray-700 mb-2 transition-colors group-hover:text-blue-600">
                  Your Message *
                </label>
                <textarea
                  placeholder="Tell us about your project, ideas, or how we can help you..."
                  rows="6"
                  className={`w-full p-4 text-gray-800 bg-gray-50/50 border-2 rounded-xl transition-all duration-300 focus:outline-none focus:bg-white focus:shadow-lg resize-none ${
                    focusedField === "message"
                      ? "border-blue-500 ring-4 ring-blue-100"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                ></textarea>
              </div>

              {/* Enhanced Submit Button */}
              <div className="flex justify-center pt-4">
                <button
                  type="submit"
                  className={`group relative overflow-hidden font-bold py-4 px-8 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                    loading
                      ? "bg-gradient-to-r from-blue-600 to-blue-700 w-48 h-16 text-lg cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 hover:bg-pos-100 text-white shadow-lg hover:shadow-xl"
                  }`}
                  disabled={loading}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                  <span className="relative flex items-center justify-center gap-3">
                    {loading ? (
                      <>
                        <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <svg
                          className="w-5 h-5 transition-transform group-hover:translate-x-1"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                          />
                        </svg>
                      </>
                    )}
                  </span>
                </button>
              </div>

              <div className="text-center pt-4 border-t border-gray-200">
                <p className="text-sm text-gray-500">
                  We'll get back to you within 24 hours. Your privacy is
                  important to us.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our services and
              process
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg mb-4 overflow-hidden"
              >
                <button
                  className="w-full text-left p-6 focus:outline-none focus:bg-blue-50 transition-colors duration-200 flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <h3 className="text-lg font-semibold text-gray-800 pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-6 h-6 text-blue-600 transition-transform duration-200 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Our Offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at any of our locations or schedule a virtual meeting
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {offices.map((office, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 rounded-2xl p-8 shadow-xl border border-blue-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-white mr-4">
                    <svg
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    {office.city}
                  </h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <svg
                      className="w-5 h-5 text-gray-500 mt-1 mr-3 flex-shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="text-gray-600">{office.address}</p>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p className="text-gray-600">{office.phone}</p>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-blue-600 hover:underline cursor-pointer">
                      {office.email}
                    </p>
                  </div>

                  <div className="flex items-center">
                    <svg
                      className="w-5 h-5 text-gray-500 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <p className="text-gray-600">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Map Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Us</h2>
            <p className="text-xl text-gray-600">
              Located in the heart of the business district
            </p>
          </div>

          <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Visit Our Main Office</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Address:</h4>
                  <p className="text-blue-100">
                    Eldoret, Uasin Gishu
                    {/* <br />
                    Innovation District, Tech City 12345 */}
                  </p>
                </div>
                {/* <div>
                  <h4 className="font-semibold mb-2">Directions:</h4>
                  <p className="text-blue-100">
                    2 blocks from Metro Station
                    <br />
                    Parking available on-site
                  </p>
                </div> */}
              </div>
            </div>

            <div className="h-96 bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-16 h-16 text-blue-500 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-gray-600 text-lg">
                  Interactive Map Coming Soon
                </p>
                <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Directions
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Media & Newsletter */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Stay Connected</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Follow us on social media and subscribe to our newsletter for the
              latest updates
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Social Media Links */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
              <div className="flex justify-center lg:justify-start space-x-6 mb-8">
                {[
                  {
                    name: "Facebook",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                      </svg>
                    ),
                    color: "hover:text-blue-400",
                  },
                  {
                    name: "Twitter",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    ),
                    color: "hover:text-blue-300",
                  },
                  {
                    name: "LinkedIn",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    ),
                    color: "hover:text-blue-300",
                  },
                  {
                    name: "Instagram",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.618 5.367 11.986 11.988 11.986s11.987-5.368 11.987-11.986C24.004 5.367 18.635.001 12.017.001zM8.449 16.988c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348zm7.718 0c-1.297 0-2.348-1.051-2.348-2.348s1.051-2.348 2.348-2.348 2.348 1.051 2.348 2.348-1.051 2.348-2.348 2.348z" />
                      </svg>
                    ),
                    color: "hover:text-pink-400",
                  },
                  {
                    name: "YouTube",
                    icon: (
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                      </svg>
                    ),
                    color: "hover:text-red-400",
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110 ${social.color} hover:bg-white/20`}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6">
                <h4 className="text-lg font-semibold mb-4">Recent Updates</h4>
                <div className="space-y-3 text-sm text-blue-200">
                  <p>🎉 Just launched our new project management platform!</p>
                  <p>🚀 We're expanding to serve clients in Asia Pacific</p>
                  <p>🏆 Awarded "Best Digital Agency 2024" by Tech Review</p>
                </div>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold mb-6">Newsletter</h3>
              <p className="text-blue-200 mb-6">
                Get the latest insights, tips, and updates delivered straight to
                your inbox.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                <form className="space-y-4">
                  <div>
                    <input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                  >
                    Subscribe Now
                  </button>
                </form>

                <div className="mt-6 flex items-center justify-center lg:justify-start space-x-4 text-xs text-blue-300">
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    No spam
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    Secure
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="w-4 h-4 mr-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    Monthly
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 leading-relaxed">
              Don't let great ideas wait. Let's discuss how we can help
              transform your vision into reality.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <button className="bg-white text-blue-600 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transform hover:scale-105 transition-all duration-300 shadow-lg">
                Schedule Free Consultation
              </button>
              <button className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-blue-600 transform hover:scale-105 transition-all duration-300">
                View Our Portfolio
              </button>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Free consultation
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                No commitment required
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 mr-2 text-green-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                Expert guidance
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Show Popup Message if exists */}
      {popup.show && (
        <PopupMessage
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup({ show: false, message: "", type: "" })}
        />
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }

        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(-3deg);
          }
        }

        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite 2s;
        }

        .bg-size-200 {
          background-size: 200% auto;
        }

        .bg-pos-100 {
          background-position: 100% 0;
        }
      `}</style>
    </div>
  );
};

export default Contact;
