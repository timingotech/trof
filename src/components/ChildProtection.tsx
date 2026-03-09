import ChildCampaignVideo from '../assets/ChildCamapaign1.mp4';

const ChildProtectionPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 via-white to-red-50 mt-12">
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Child Protection & Safe Education
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            Every child deserves to be safe, protected, and in school. This page highlights our campaigns,
            community work, and advocacy to keep children safe from abuse and ensure they have access
            to quality education.
          </p>
        </header>

        {/* Video Section */}
        <section className="mb-12">
          <div className="rounded-3xl overflow-hidden shadow-2xl bg-black max-w-4xl mx-auto">
            <video
              src={ChildCampaignVideo}
              controls
              className="w-full h-full"
            />
          </div>
          <p className="mt-4 text-center text-gray-600 text-sm md:text-base">
            TROF Child Protection Campaign – raising awareness on keeping children safe and in school.
          </p>
        </section>

        {/* Content Sections */}
        <section className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-md p-6 border border-red-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Protecting Children from Harm</h2>
            <p className="text-gray-700 leading-relaxed">
              We work with families, schools, faith communities, and local leaders to prevent all forms of
              violence, abuse, and exploitation against children. Through awareness campaigns, community
              dialogues, and reporting pathways, we help children feel seen, heard, and protected.
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-md p-6 border border-red-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">Keeping Children in School</h2>
            <p className="text-gray-700 leading-relaxed">
              No child should be denied education because of poverty, neglect, or harmful practices.
              Our programs support school retention, re-enrolment of out-of-school children, and
              community support systems that make classrooms safer and more inclusive.
            </p>
          </div>
        </section>

        <section className="bg-red-600 text-white rounded-3xl p-8 md:p-10 shadow-xl text-center md:text-left">
          <h2 className="text-3xl font-bold mb-3">Join Us in Protecting Every Child</h2>
          <p className="text-red-50 mb-6 max-w-3xl">
            You can help ensure that children are safe at home, in school, and in the community.
            Partner with us, volunteer, or support our campaigns so that no child is left behind.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a
              href="/contact"
              className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-50 transition-all duration-300"
            >
              Talk to Our Team
            </a>
            <a
              href="/donate"
              className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
            >
              Support a Child Today
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ChildProtectionPage;
