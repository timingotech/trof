import { useState, useEffect } from 'react';
import { Heart, Shield, BookOpen, Users, Mail, ArrowRight, Star, Globe, HandHeart } from 'lucide-react';
import {Link} from 'react-router-dom';
const About = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [counters, setCounters] = useState({
    children: 0,
    communities: 0,
    testimonials: 0
  });

  const testimonials = [
    {
      text: "TROF gave my daughter hope when we had none. The scholarship program changed our family's future forever.",
      author: "Sarah M., Parent"
    },
    {
      text: "Through TROF's safe space program, I learned I had rights and found my voice to speak against injustice.",
      author: "Grace O., Beneficiary"
    },
    {
      text: "The feeding program at our school means children can focus on learning instead of hunger.",
      author: "Teacher Emmanuel"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
      
      {/* Hero Banner */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-r from-red-600 to-red-800">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="transform transition-all duration-1000 translate-y-0 opacity-100">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Child Protection & Development for a Better Nation
            </h1>
            <p className="text-lg md:text-xl mb-8 leading-relaxed opacity-90">
              The Raymond Ofodu Foundation (TROF) is committed to ensuring every child's right to safety, education, and opportunity.
            </p>
            <div className="flex items-center justify-center space-x-2 text-lg">
              <Heart className="w-6 h-6 text-red-300" />
              <span>Building hope, one child at a time</span>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Who We Are</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                The Raymond Ofodu Foundation (TROF) is a nonprofit organization dedicated to protecting children and promoting their development. We believe that a nation's strength lies in the well-being of its children, and we work tirelessly to build a better, safer world for them.
              </p>
              <div className="flex items-center space-x-3 text-red-600">
                <Mail className="w-5 h-5" />
                <a href="mailto:trof_foundation@yahoo.com" className="hover:text-red-700 transition-colors">
                  trof_foundation@yahoo.com
                </a>
              </div>
            </div>
            
            <div className="transform transition-all duration-300 hover:scale-105">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-red-200 to-red-300 rounded-3xl transform rotate-3"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl">
                  <div className="aspect-square bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center">
                    <div className="text-center">
                      <Users className="w-16 h-16 text-red-600 mx-auto mb-4" />
                      <p className="text-gray-700 font-medium">Empowering Children</p>
                      <p className="text-sm text-gray-500">Through Love & Care</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="flex justify-center py-8">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-0.5 bg-red-300"></div>
          <Heart className="w-8 h-8 text-red-500" />
          <div className="w-12 h-0.5 bg-red-300"></div>
        </div>
      </div>

      {/* Mission & Vision */}
      <section className="py-20 px-4 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To create a safe, nurturing environment for children where they can grow, learn, and develop their full potential.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  A future where every child has the opportunity to thrive in a world free from harm and full of possibilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Focus Areas */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Core Focus Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full transform group-hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Child Protection Initiatives</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Advocacy against child abuse</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Safe spaces for vulnerable children</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Partnership on child safety policies</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Campaigns against child marriage & FGM</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full transform group-hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <BookOpen className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Educational & Developmental Programs</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>School feeding programs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Scholarships for children</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Youth skill empowerment & training</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Safe schools initiatives</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg h-full transform group-hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-200 transition-colors">
                  <Globe className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Community Engagement & Advocacy</h3>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Partnerships with NGOs</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Child rights awareness campaigns</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Grassroots participation</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <ArrowRight className="w-4 h-4 text-red-500 mt-1 flex-shrink-0" />
                    <span>Community mobilization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

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

          {/* Testimonial Slider */}
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-3xl mx-auto">
            <div className="transition-all duration-500 ease-in-out">
              <p className="text-lg text-gray-700 italic mb-4">
                "{testimonials[currentTestimonial].text}"
              </p>
              <p className="text-red-600 font-semibold">
                - {testimonials[currentTestimonial].author}
              </p>
            </div>
            
            <div className="flex justify-center space-x-2 mt-6">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? 'bg-red-500' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-600 to-red-700">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Together, We Can Build a Safer Future for Every Child</h2>
          <p className="text-xl mb-12 opacity-90">Join us in our mission to protect and empower the next generation.</p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Heart className="w-12 h-12 mx-auto mb-4 text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Donate</h3>
              <p className="text-sm opacity-90">Support child-focused initiatives</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <HandHeart className="w-12 h-12 mx-auto mb-4 text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Volunteer</h3>
              <p className="text-sm opacity-90">Share your time and expertise</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <Users className="w-12 h-12 mx-auto mb-4 text-red-200" />
              <h3 className="text-lg font-semibold mb-2">Spread Awareness</h3>
              <p className="text-sm opacity-90">Share our mission on social media</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/donate" >
            <button className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors transform hover:scale-105 duration-200">
              Donate Now
            </button>
            </Link>
             
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;