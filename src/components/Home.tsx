import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {Users, BookOpen, Brain, Target, ArrowRight, Quote, Calendar, Clock } from 'lucide-react';
import { getRecentBlogs } from './BlogData'; // Import the function to get recent blogs
import Image2 from '../assets/Image1.jpg'
import Image1 from '../assets/Image2.jpg'
import Image3 from '../assets/Image3.jpg'
import Image4 from '../assets/Image4.jpg'
import Image5 from '../assets/Image5.jpg'
import Image6 from '../assets/Fgn.png'
import Image7 from '../assets/Fhfa-removebg-preview.png'
import Image8 from '../assets/Vtgc.jpg'
import Image9 from '../assets/Ycc.jpg'
import Image10 from '../assets/SereniMind.jpg'
import Image11 from '../assets/Image11.jpg'
import Image12 from '../assets/Image12.jpg'
import Image13 from '../assets/Image13.jpg'

const TROFHomepage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [counters, setCounters] = useState({
    children: 0,
    communities: 0,
    testimonials: 0
  });

  // Get recent blogs
  const recentBlogs = getRecentBlogs(3); // Get 3 most recent blogs

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const targets = { children: 1000, communities: 25, testimonials: 500 };
      
      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        
        setCounters({
          children: Math.floor(targets.children * progress),
          communities: Math.floor(targets.communities * progress),
          testimonials: Math.floor(targets.testimonials * progress)
        });

        if (step >= steps) clearInterval(timer);
      }, duration / steps);
    };

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        animateCounters();
        observer.disconnect();
      }
    });

    const element = document.getElementById('impact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Hero carousel data
  const heroSlides = [
    {
      image: Image1,
      alt: "Mental health support for youth"
    },
    {
      image: Image2,
      alt: "Students in underserved communities"
    },
    {
      image: Image3,
      alt: "TROF team outreach"
    },
    {
      image: Image4,
      alt: "Students in underserved communities"
    },
    {
      image: Image5,
      alt: "Students in underserved communities"
    },
    {
      image: Image11,
      alt: "TROF team outreach"
    },
    {
      image: Image12,
      alt: "Students in underserved communities"
    },
    {
      image: Image13,
      alt: "Students in underserved communities"
    }
  ];

  // Programs data
  const programs = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Child Protection Initiatives",
      description: "Providing safe spaces for vulnerable children"
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Educational & Developmental Programs",
      description: "Empowering bright minds with educational opportunities and scholarships to break the cycle of poverty."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Engagement & Advocacy",
      description: "Building sustainable infrastructure and programs that create lasting positive change in local communities."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Youth Empowerment",
      description: "Developing leadership skills and providing opportunities for young people to become agents of change."
    }
  ];
 

  // How it works steps
  const steps = [
    {
      title: "Identify the Need",
      description: "We conduct thorough community assessments to understand specific challenges and opportunities."
    },
    {
      title: "Engage Community & Stakeholders",
      description: "Building partnerships with local leaders, organizations, and community members for sustainable solutions."
    },
    {
      title: "Deliver Impact-Driven Solutions",
      description: "Implementing evidence-based programs tailored to each community's unique needs."
    },
    {
      title: "Track Progress & Share Stories",
      description: "Measuring outcomes and sharing success stories to inspire continued support and growth."
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      quote: "TROF Foundation changed my life. Their mental health program helped me overcome depression and find purpose again.",
      name: "Amina Johnson",
      location: "Lagos, Nigeria",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "Thanks to the scholarship program, I'm now studying medicine and plan to serve my community as a doctor.",
      name: "David Okafor",
      location: "Abuja, Nigeria",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80"
    },
    {
      quote: "The youth empowerment workshops gave me the confidence to start my own social enterprise.",
      name: "Grace Mutua",
      location: "Lagos, Nigeria",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.3&auto=format&fit=crop&w=150&q=80"
    }
  ];

  // Auto-advance hero carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  // Auto-advance steps
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-white mt-7">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-[-50px] md:mt-0">
        {/* Background Carousel */}
        <div className="absolute inset-0 w-full h-full">
          <div className="relative w-full h-full">
            {heroSlides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  className="w-full h-full object-contain md:object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Content - Positioned at bottom */}
        <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-10">
          <Link to="/donate">
            <button className="bg-red-500 cursor-pointer hover:bg-red-600 text-white font-bold py-3 px-8 sm:py-4 sm:px-10 rounded-full transition-all duration-300 hover:scale-105 shadow-lg">
              Donate Now
            </button>
          </Link>
        </div>

        {/* Carousel Navigation Dots */}
        <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white scale-110' : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-green-50 mt-[-50px] md:mt-0">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              About TROF Foundation
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Born from a vision to transform lives across Africa, The Raymond Ofodu Foundation stands as a beacon of hope, 
              dedicated to breaking barriers and building bridges to a better future through compassionate action and sustainable change.
            </p>
            {/* Our Impact */}
            <section id="impact-section" className="py-20 px-4 bg-gradient-to-b from-red-50 to-white">
              <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Changing Lives, One Child at a Time</h2>
                <p className="text-xl text-gray-600 mb-16">Our impact speaks through the lives we've touched and the communities we've transformed.</p>
                
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold text-red-600 mb-2">{counters.children.toLocaleString()}+</div>
                    <div className="text-gray-800 font-semibold mb-2">Children Supported</div>
                    <div className="text-gray-600">With education and protection services</div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold text-red-600 mb-2">{counters.communities}+</div>
                    <div className="text-gray-800 font-semibold mb-2">Communities Reached</div>
                    <div className="text-gray-600">Lower child abuse rates achieved</div>
                  </div>
                  
                  <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <div className="text-4xl font-bold text-red-600 mb-2">{counters.testimonials}+</div>
                    <div className="text-gray-800 font-semibold mb-2">Testimonials</div>
                    <div className="text-gray-600">From grateful families</div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Our Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive initiatives designed to address the most pressing challenges facing communities across Africa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {programs.map((program, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-sky-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
              >
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">{program.title}</h3>
                <p className="text-gray-600 leading-relaxed">{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Blog Posts Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Latest Stories & Updates
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed about our latest impact stories, program updates, and community transformations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
            {recentBlogs.map((blog) => (
              <div
                key={blog.id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {blog.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center text-gray-500 text-sm mb-3">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="mr-4">{new Date(blog.date).toLocaleDateString()}</span>
                    <Clock className="w-4 h-4 mr-1" />
                    <span>{blog.readTime}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                    {blog.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">By {blog.author}</span>
                    <Link
                      to={`/blog/${blog.id}`}
                      className="inline-flex items-center text-red-600 hover:text-red-700 font-medium transition-colors duration-300"
                    >
                      Read More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Blogs Button */}
          <div className="text-center">
            <Link
              to="/blogs"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center"
            >
              View All Stories
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-sky-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Our systematic approach to creating lasting change
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Step Navigation */}
            <div className="flex justify-center mb-12">
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                      index === currentStep ? 'bg-red-600' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Step Content */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-red-600 text-2xl font-bold">
                  {currentStep + 1}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  {steps[currentStep].title}
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {steps[currentStep].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Recognized & Supported By
            </h2>
            <p className="text-gray-600">Trusted partnerships that amplify our impact</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="h-16 w-32 rounded-lg flex items-center justify-center">
              <img src={Image6} alt="Partner 1" className="w-32 h-16 object-contain" />
            </div>
            <div className="h-16 w-32 rounded-lg flex items-center justify-center">
              <img src={Image7} alt="Partner 2" className="w-32 h-16 object-contain" />
            </div>
            <div className="h-16 w-32 rounded-lg flex items-center justify-center">
              <img src={Image8} alt="Partner 3" className="w-32 h-16 object-contain" />
            </div>
            <div className="h-16 w-32 rounded-lg flex items-center justify-center">
              <img src={Image9} alt="Partner 4" className="w-32 h-16 object-contain" />
            </div>
            <div className="h-16 w-32 rounded-lg flex items-center justify-center">
              <img src={Image10} alt="Partner 5" className="w-32 h-16 object-contain" />
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stories / Testimonials */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Impact Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real stories from the lives we've touched
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg relative">
              <Quote className="w-12 h-12 text-red-600 opacity-20 absolute top-4 left-4" />
              
              <div className="text-center">
                <p className="text-xl md:text-2xl text-gray-700 mb-8 italic leading-relaxed">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentTestimonial].avatar}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <div className="font-semibold text-gray-800 text-lg">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-gray-600">
                      {testimonials[currentTestimonial].location}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-red-600' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Join us in building a world where every life matters.
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
            Together, we can create lasting change and transform communities across Africa. 
            Your support makes the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-red-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center">
              Get Involved
              <ArrowRight className="ml-2 w-5 h-5" />
            </button>
            <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-red-600 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105">
              Become a Partner
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TROFHomepage;