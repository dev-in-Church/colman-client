"use client";

import { useState, useEffect } from "react";
import {
  Terminal,
  Menu,
  X,
  Laptop,
  Smartphone,
  Paintbrush,
  Cloud,
  ChevronDown,
  Home,
  Phone,
  Mail,
  Search,
  User,
  ShoppingCart,
  Heart,
  Globe,
  BookOpen,
  FileText,
  BarChart,
  Users,
  Building,
  Briefcase,
  HelpCircle,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Shield,
  Video,
} from "lucide-react";

function DoubleNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeItem, setActiveItem] = useState("/");
  const [searchOpen, setSearchOpen] = useState(false);
  const [topBarVisible, setTopBarVisible] = useState(true);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      setTopBarVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);

    // Set active item based on current path
    setActiveItem(window.location.pathname);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  // Handle escape key to close menu and search
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const mainMenuItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="w-4 h-4 ml-1" />,
    },
    {
      label: "About",
      href: "#about",
      hasSubmenu: true,
      icon: <Building className="w-4 h-4 ml-1" />,
      submenu: [
        {
          label: "Our Story",
          href: "#about",
          icon: <FileText className="w-4 h-4 ml-1" />,
        },
        {
          label: "Team",
          href: "/about#team",
          icon: <Users className="w-4 h-4 ml-1" />,
        },
        {
          label: "Careers",
          href: "/careers",
          icon: <Briefcase className="w-4 h-4 ml-1" />,
        },
        {
          label: "Press Kit",
          href: "/press",
          icon: <FileText className="w-4 h-4 ml-1" />,
        },
      ],
    },
    {
      label: "Services",
      href: "/services",
      hasSubmenu: true,
      icon: <Laptop className="w-4 h-4 ml-1" />,
      megaMenu: true,
      columns: [
        {
          title: "Development",
          items: [
            {
              label: "Web Development",
              href: "/services#web-dev",
              icon: <Laptop className="w-4 h-4 ml-1" />,
            },
            {
              label: "Mobile App Dev",
              href: "/services#mobile-dev",
              icon: <Smartphone className="w-4 h-4 ml-1" />,
            },
            {
              label: "Custom Software",
              href: "/services#custom",
              icon: <Terminal className="w-4 h-4 ml-1" />,
            },
            {
              label: "E-commerce",
              href: "/services#ecommerce",
              icon: <ShoppingCart className="w-4 h-4 ml-1" />,
            },
          ],
        },
        {
          title: "Design",
          items: [
            {
              label: "UI/UX Design",
              href: "/services#uiux",
              icon: <Paintbrush className="w-4 h-4 ml-1" />,
            },
            {
              label: "Brand Identity",
              href: "/services#brand",
              icon: <Heart className="w-4 h-4 ml-1" />,
            },
            {
              label: "Prototyping",
              href: "/services#prototype",
              icon: <Smartphone className="w-4 h-4 ml-1" />,
            },
          ],
        },
        {
          title: "Infrastructure",
          items: [
            {
              label: "Cloud Hosting",
              href: "/services#cloudhosting",
              icon: <Cloud className="w-4 h-4 ml-1" />,
            },
            {
              label: "DevOps",
              href: "/services#devops",
              icon: <Terminal className="w-4 h-4 ml-1" />,
            },
            {
              label: "Security",
              href: "/services#security",
              icon: <Shield className="w-4 h-4 ml-1" />,
            },
          ],
        },
      ],
    },
    {
      label: "Portfolio",
      href: "/portfolio",
      icon: <Briefcase className="w-4 h-4 ml-1" />,
      hasSubmenu: true,
      submenu: [
        {
          label: "Web Projects",
          href: "/portfolio#web",
          icon: <Globe className="w-4 h-4 ml-1" />,
        },
        {
          label: "Mobile Apps",
          href: "/portfolio#mobile",
          icon: <Smartphone className="w-4 h-4 ml-1" />,
        },
        {
          label: "Case Studies",
          href: "/portfolio#case-studies",
          icon: <FileText className="w-4 h-4 ml-1" />,
        },
      ],
    },
    {
      label: "Resources",
      href: "/resources",
      icon: <BookOpen className="w-4 h-4 ml-1" />,
      hasSubmenu: true,
      submenu: [
        {
          label: "Blog",
          href: "/blog",
          icon: <FileText className="w-4 h-4 ml-1" />,
        },
        {
          label: "Documentation",
          href: "/docs",
          icon: <BookOpen className="w-4 h-4 ml-1" />,
        },
        {
          label: "Tutorials",
          href: "/tutorials",
          icon: <BookOpen className="w-4 h-4 ml-1" />,
        },
        {
          label: "Webinars",
          href: "/webinars",
          icon: <Video className="w-4 h-4 ml-1" />,
        },
      ],
    },
    {
      label: "Pricing",
      href: "/pricing",
      icon: <BarChart className="w-4 h-4 ml-1" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Phone className="w-4 h-4 ml-1" />,
    },
  ];

  // Mobile menu items - flattened structure for easier navigation
  const mobileMenuItems = [
    {
      label: "Home",
      href: "/",
      icon: <Home className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "About Us",
      href: "#about",
      icon: <Building className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "Our Team",
      href: "/about#team",
      icon: <Users className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "Careers",
      href: "/careers",
      icon: <Briefcase className="w-5 h-5 ml-2 text-blue-400" />,
    },

    // Services section
    { label: "Services", href: "/services", isSection: true },
    {
      label: "Web Development",
      href: "/services#web-dev",
      icon: <Laptop className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "Mobile App Dev",
      href: "/services#mobile-dev",
      icon: <Smartphone className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "UI/UX Design",
      href: "/services#uiux",
      icon: <Paintbrush className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "Cloud Hosting",
      href: "/services#cloudhosting",
      icon: <Cloud className="w-5 h-5 ml-2 text-blue-400" />,
    },

    // Portfolio section
    { label: "Portfolio", href: "/portfolio", isSection: true },
    {
      label: "Web Projects",
      href: "/portfolio#web",
      icon: <Globe className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "Mobile Apps",
      href: "/portfolio#mobile",
      icon: <Smartphone className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "Case Studies",
      href: "/portfolio#case-studies",
      icon: <FileText className="w-5 h-5 ml-2 text-blue-400" />,
    },

    // Resources section
    { label: "Resources", href: "/resources", isSection: true },
    {
      label: "Blog",
      href: "/blog",
      icon: <FileText className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "Documentation",
      href: "/docs",
      icon: <BookOpen className="w-5 h-5 ml-2 text-blue-400" />,
    },

    {
      label: "Pricing",
      href: "/pricing",
      icon: <BarChart className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "Contact",
      href: "/contact",
      icon: <Phone className="w-5 h-5 ml-2 text-blue-400" />,
    },
    {
      label: "Support",
      href: "/support",
      icon: <HelpCircle className="w-5 h-5 ml-2 text-blue-400" />,
    },
  ];

  return (
    <header className="fixed w-full z-50 top-0 flex flex-col">
      {/* Top Bar */}
      <div
        className={`bg-gray-900 text-white transition-all duration-300 ${
          topBarVisible
            ? "py-2 opacity-100"
            : "py-0 opacity-0 h-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 md:px-8 lg:px-12 flex flex-wrap justify-between items-center">
          {/* Contact Info */}
          <div className="flex items-center space-x-4 text-sm">
            <a
              href="tel:+254795198141"
              className="flex items-center hover:text-blue-300 transition-colors"
            >
              <Phone className="w-3 h-3 mr-1" />
              <span className="hidden sm:inline text-xs">
                +254 745 733 370/+254 795 198 141
              </span>
            </a>
            <a
              href="mailto:info@colman.com"
              className="flex items-center hover:text-blue-300 transition-colors"
            >
              <Mail className="w-3 h-3 mr-1" />
              <span className="hidden sm:inline text-xs">info@colman.com</span>
            </a>
          </div>

          {/* Social & Language */}
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <div className="border-l border-gray-700 h-5 mx-2 hidden sm:block"></div>

            <div className="flex items-center space-x-3">
              <div className="relative group">
                <button className="flex items-center text-sm hover:text-blue-300 transition-colors">
                  <Globe className="w-3 h-3 mr-1" />
                  <span>EN</span>
                  <ChevronDown className="w-3 h-3 ml-1" />
                </button>
                <div className="absolute right-0 mt-1 w-24 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-1">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700"
                    >
                      English
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700"
                    >
                      Español
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-100 hover:bg-gray-700"
                    >
                      Français
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="border-l border-gray-700 h-5 mx-1"></div>

              <div className="flex items-center space-x-2">
                <a
                  href="/login"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Login
                </a>
                <span className="text-gray-600">/</span>
                <a
                  href="/register"
                  className="text-sm hover:text-blue-300 transition-colors"
                >
                  Register
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-gradient-to-r from-gray-200 via-blue-900 to-indigo-900 py-1 sm:py-2 md:py-4">
        <div className="container mx-auto px-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <a href="/" className="flex items-center space-x-2">
                <img
                  src="/new_logo2.png"
                  alt="Logo"
                  className="h-6 sm:h-10 md:h-12"
                />
              </a>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {mainMenuItems.map((item, index) => (
                <div key={index} className="relative group">
                  <a
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center transition-all duration-200 hover:bg-white/10 ${
                      activeItem === item.href
                        ? "text-blue-300"
                        : "text-white hover:text-blue-200"
                    }`}
                  >
                    {item.label}
                    {item.hasSubmenu && (
                      <ChevronDown className="ml-1 w-4 h-4 transition-transform group-hover:rotate-180" />
                    )}
                    {!item.hasSubmenu && item.icon}
                  </a>

                  {/* Standard Dropdown */}
                  {item.hasSubmenu && !item.megaMenu && (
                    <div className="absolute left-0 mt-1 w-56 origin-top-left rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 z-50">
                      <div className="py-1">
                        {item.submenu.map((subItem, subIndex) => (
                          <a
                            key={subIndex}
                            href={subItem.href}
                            className="flex items-center px-4 py-2 text-sm text-gray-100 hover:bg-blue-700 hover:text-white"
                          >
                            {subItem.label}
                            {subItem.icon}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Mega Menu */}
                  {item.hasSubmenu && item.megaMenu && (
                    <div className="absolute left-0 mt-1 w-screen max-w-4xl origin-top-left rounded-md bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform scale-95 group-hover:scale-100 z-50">
                      <div className="p-5 grid grid-cols-3 gap-6">
                        {item.columns.map((column, colIndex) => (
                          <div key={colIndex}>
                            <h3 className="text-sm font-semibold text-blue-300 uppercase tracking-wider mb-3 border-b border-gray-700 pb-1">
                              {column.title}
                            </h3>
                            <ul className="space-y-2">
                              {column.items.map((subItem, subIndex) => (
                                <li key={subIndex}>
                                  <a
                                    href={subItem.href}
                                    className="flex items-center text-sm text-gray-100 hover:text-blue-300 transition-colors"
                                  >
                                    {subItem.icon && (
                                      <span className="mr-2">
                                        {subItem.icon}
                                      </span>
                                    )}
                                    {subItem.label}
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gray-900 p-4 rounded-b-md">
                        <a
                          href="/services"
                          className="text-sm text-blue-300 hover:text-blue-400 font-medium"
                        >
                          View All Services →
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-3">
              {/* Search Button */}
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white"
                aria-label="Search"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* User Account */}
              {/* <a
                href="/account"
                className="p-2 rounded-full hover:bg-white/10 transition-colors text-white hidden sm:flex"
                aria-label="Account"
              >
                <User className="w-5 h-5" />
              </a> */}

              {/* CTA Button */}
              <a
                href="/contact"
                className="hidden md:block px-4 py-2 rounded-md bg-blue-600 text-white font-medium text-sm hover:bg-blue-700 transition-colors duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                Get Started
              </a>

              {/* Hamburger Menu for Mobile & Small Tablets Only */}
              <button
                className="lg:hidden p-2 rounded-md hover:bg-white/10 transition-colors text-white"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
                aria-expanded={menuOpen}
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Search Overlay */}
        <div
          className={`absolute inset-x-0 top-full bg-gray-900/95 backdrop-blur-md shadow-lg transition-all duration-300 overflow-hidden ${
            searchOpen ? "max-h-24 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
          }`}
        >
          <div className="container mx-auto px-4 md:px-8 lg:px-12">
            <form className="flex items-center">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search for services, resources, and more..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                type="button"
                className="ml-2 p-2 text-gray-400 hover:text-white"
                onClick={() => setSearchOpen(false)}
              >
                <X className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-gray-900 text-white transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } z-50 transition-transform duration-300 ease-in-out overflow-y-auto lg:hidden shadow-2xl`}
        role="dialog"
        aria-modal="true"
        aria-label="Main menu"
      >
        {/* Mobile Menu Header */}
        <div className="bg-gradient-to-r from-gray-200 via-gray-400 to-gray-900 px-4 py-3 flex items-center justify-between border-b border-gray-700">
          <div className="">
            <img src="/new_logo2.png" alt="Logo" className="h-6" />
          </div>
          <button
            className="text-white p-2 rounded-md hover:bg-white/10 transition-colors"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <div className="py-4">
          {mobileMenuItems.map((item, index) =>
            item.isSection ? (
              <div
                key={index}
                className="px-6 py-2 mt-4 mb-1 text-xs font-semibold text-gray-400 uppercase tracking-wider"
              >
                {item.label}
              </div>
            ) : (
              <a
                key={index}
                href={item.href}
                onClick={closeMenu}
                className={`flex items-center justify-between px-6 py-3 hover:bg-blue-800/50 transition-colors ${
                  activeItem === item.href
                    ? "bg-blue-900/40 border-l-4 border-blue-400"
                    : ""
                }`}
              >
                <span className="font-medium">{item.label}</span>
                {item.icon}
              </a>
            )
          )}

          {/* Mobile CTA */}
          <div className="px-6 py-4 mt-4">
            <a
              href="/contact"
              onClick={closeMenu}
              className="block w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white text-center rounded-md font-medium transition-colors shadow-md"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Login/Register */}
          {/* <div className="px-6 py-4 flex space-x-2">
            <a
              href="/login"
              onClick={closeMenu}
              className="block w-1/2 py-2 px-4 border border-gray-700 text-white text-center rounded-md font-medium transition-colors hover:bg-gray-800"
            >
              Login
            </a>
            <a
              href="/register"
              onClick={closeMenu}
              className="block w-1/2 py-2 px-4 bg-gray-800 text-white text-center rounded-md font-medium transition-colors hover:bg-gray-700"
            >
              Register
            </a>
          </div> */}
        </div>

        {/* Mobile Footer */}
        <div className="absolute top-auto left-0 right-0  p-6 border-t border-gray-700 bg-gray-900/90 backdrop-blur-sm">
          <div className="flex items-center justify-center space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default DoubleNavbar;
