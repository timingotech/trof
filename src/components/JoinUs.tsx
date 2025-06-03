import { Mail, Heart, Users } from 'lucide-react';

const JoinUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="pt-32 pb-20 px-4 md:px-36">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Join Our Mission
            </h1>
            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Why Join Us Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-8">
              Why Join TROF Foundation?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                <Heart className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">Make Impact</h3>
                <p className="text-gray-600">Be part of meaningful change that transforms lives and communities.</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">Join Community</h3>
                <p className="text-gray-600">Connect with passionate individuals dedicated to making a difference.</p>
              </div>
              
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/20">
                <Mail className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-800 mb-2">Grow Together</h3>
                <p className="text-gray-600">Develop your skills while contributing to causes that matter.</p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="bg-white/80 backdrop-blur-lg rounded-3xl p-8 md:p-12 shadow-xl border border-white/20">
            <h3 className="text-2xl md:text-3xl font-medium text-gray-800 mb-4">
              Ready to Make a Difference?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Whether you're interested in volunteering, partnerships, or bringing your unique skills to our team, we'd love to hear from you.
            </p>
            
            <div className="space-y-4">
              <p className="text-gray-700 font-medium">Reach out to us at:</p>
              <a 
                href="mailto:trof_foundation@yahoo.com"
                className="inline-flex items-center gap-3 bg-red-600 text-white px-8 py-4 rounded-full font-medium hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Mail className="w-5 h-5" />
                trof_foundation@yahoo.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;