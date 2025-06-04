import { useState, useEffect } from 'react';
import {Heart, Users, BookOpen, Brain, Target, Lightbulb, TrendingUp, ArrowRight, Quote, Award } from 'lucide-react';
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

  // Core values data
  const coreValues = [
    { icon: <Heart className="w-6 h-6" />, title: "Empathy", description: "Understanding and compassion in all we do" },
    { icon: <Award className="w-6 h-6" />, title: "Accountability", description: "Transparent and responsible stewardship" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Innovation", description: "Creative solutions for complex challenges" },
    { icon: <TrendingUp className="w-6 h-6" />, title: "Impact", description: "Measurable change that transforms lives" }
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

  {/* Hero Content - Add your content here */}
  <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
    {/* Your hero content goes here */}
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
            <div className="bg-white rounded-lg p-8 shadow-lg inline-block">
              <div className="text-4xl font-bold text-red-600 mb-2">1,000+</div>
              <div className="text-gray-600">Lives positively impacted in 3 years</div>
            </div>
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div className="bg-sky-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-sky-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
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

          <div className="flex flex-wrap justify-center items-center gap-8  ">
            {/* Placeholder partner logos */}
            <div className=" h-16 w-32 rounded-lg flex items-center justify-center   ">
              <img src={Image6} alt="Partner 1" className="w-32 h-16 object-contain" />
            </div>
            <div className=" h-16 w-32 rounded-lg flex items-center justify-center">
              <img src={Image7} alt="Partner 2" className="w-32 h-16 object-contain" />
            </div>
            <div className=" h-16 w-32 rounded-lg flex items-center justify-center">
              <img src={Image8} alt="Partner 3" className="w-32 h-16 object-contain" />
            </div>
            <div className=" h-16 w-32 rounded-lg flex items-center justify-center">
              <img src={Image9} alt="Partner 4" className="w-32 h-16 object-contain" />
            </div>
            <div className=" h-16 w-32 rounded-lg flex items-center justify-center">
              <img src={Image10} alt="Partner 4" className="w-32 h-16 object-contain" />
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