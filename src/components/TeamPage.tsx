import { Mail, Linkedin, Globe, Award, Users, Heart } from 'lucide-react';
import Obi from '../assets/Obi.jpg';
import Ifeanyi from '../assets/Ifeanyi.jpg';
const TeamsPage = () => {
  const teamMembers = [
    {
      name: "Ifeanyi Ofodu Raymond",
      title: "Executive Director & Founder",
      subtitle: "Diplomat/Historian & Development Consultant",
      image: Ifeanyi, // Placeholder for Ifeayi.png
      fullBio: "Ifeanyi Ofodu Raymond is a distinguished Diplomat and Historian who has dedicated his career to social justice, youth advocacy, and international development. As a seasoned Development Consultant and the visionary Executive Director of TROF (The Raymond Ofodu Foundation), Ifeanyi has become a recognized leader in child protection and women empowerment across Africa. From 2023-2024, he was appointed as technical aid to the Honorable Minister of Women Affairs at the Federal Ministry of Women Affairs, where he served as a strategic advisor, facilitator, and focal person on critical matters concerning child protection, international relations, and women empowerment initiatives. His exemplary work in this role demonstrated his deep understanding of policy development and his commitment to creating systemic change. Throughout his illustrious career, Ifeanyi has received numerous achievement certificates from prestigious international organizations including UNHCR, UNICEF, and the African Union. These certifications serve as the foundation that guides his impactful work as a social justice advocate and youth champion, with his efforts being formally recognized by both UNICEF and the African Union for his tireless work in ending child marriage and other harmful traditional practices. At the beginning of his humanitarian journey, Ifeanyi served as the Chairperson of WateteziAfrica, an influential African Advocacy organization that received support and recommendation from UNICEF and the African Union. In this leadership role, he spearheaded numerous initiatives across the continent, mobilizing communities and stakeholders to address critical social issues. He also served as the Youth Advocate and representative for UNICEF Nigeria's groundbreaking project called 'Movement For Good to end FGM' (Female Genital Mutilation), where he played a pivotal role in raising awareness and driving policy changes to protect young girls from this harmful practice. Through these diverse and impactful roles, Ifeanyi has acquired exceptional skills in youth mobilization, strategic thinking, and community engagement, with notable interventions that have reached communities across Africa. His work has touched countless lives and has contributed to meaningful policy changes at both national and international levels. Ifeanyi's international recognition extends to his membership in the United Nations Education Cannot Wait Youth and Student Constituency, where he had the honor of representing the youth of Nigeria in Geneva, Switzerland. This role allowed him to advocate for educational access and emergency education funding for children and youth affected by crises and conflicts. He is also a respected and certified KOICA (Korea International Cooperation Agency) Fellow specializing in Gender Studies, a prestigious fellowship that has enhanced his expertise in gender equality and women's rights advocacy. His academic and professional development includes collaboration with Culture4grow Training Institute in Poland, where he has trained students and professionals on various development topics. Additionally, he has worked closely with Nigeria's National Population Commission and Energy Commission to advocate for climate change awareness and promote renewable energy access for all Nigerians, demonstrating his commitment to environmental sustainability and social equity.",
      specializations: [
        "Child Protection & Advocacy",
        "International Relations & Diplomacy", 
        "Women Empowerment & Gender Studies",
        "Youth Mobilization & Strategic Planning",
        "Policy Development & Implementation",
        "Community Engagement & Social Justice",
        "Climate Change & Renewable Energy Advocacy"
      ],
      achievements: [
        "Technical Aid to Honorable Minister of Women Affairs (2023-2024)",
        "Multiple certifications from UNHCR, UNICEF, and African Union",
        "Former Chairperson of WateteziAfrica",
        "UNICEF Youth Advocate for 'Movement For Good to end FGM'",
        "UN Education Cannot Wait Youth Representative in Geneva",
        "Certified KOICA Fellow on Gender Studies",
        "Trainer at Culture4grow Training Institute, Poland",
        "Advisor to National Population Commission & Energy Commission Nigeria"
      ]
    },
    {
      name: "Obi Chizoba Jennifer",
      title: "Program Coordinator & Education Specialist",
      subtitle: "Political Science Educator & Civic Professional",
      image: Obi, // Placeholder for Obi.png
      fullBio: "Obi Chizoba Jennifer is a dedicated and accomplished educator and civic professional who brings a wealth of knowledge and passion to her role at TROF Foundation. With a strong academic background in Political Science Education, Jennifer graduated with Second Class Upper Division honors from the prestigious Godfrey Okoye University in Enugu, where she distinguished herself as a committed student leader and academic achiever. Her educational journey laid the foundation for her deep understanding of civic responsibility, political processes, and the critical role education plays in community development and social transformation. During her mandatory National Youth Service Corps (NYSC) program, Jennifer was deployed to Community Secondary School Umuoba-Anam in Anambra State, where she served with distinction as a Civic Education teacher. In this role, she demonstrated exceptional classroom management skills and was instrumental in maintaining discipline while creating an engaging and innovative learning environment for her students. Her teaching methodology focused on making civic education relevant and accessible to young minds, helping students understand their rights, responsibilities, and role in nation-building. Jennifer's approach to education goes beyond traditional teaching methods; she believes in fostering critical thinking, encouraging student participation, and creating learning experiences that resonate with students long after they leave the classroom. Her ability to connect with students and make complex civic concepts understandable has made her a respected educator among colleagues and beloved teacher among students. She further refined her instructional and interpersonal skills during her teaching practice at Godfrey Okoye University Secondary School, where she gained additional experience in curriculum development, student assessment, and educational program implementation. This experience broadened her understanding of educational systems and reinforced her commitment to quality education for all children. Jennifer is widely recognized for her excellent communication skills, which have made her an effective bridge between different stakeholders in educational and community development projects. Her strong leadership abilities have been evident throughout her academic and professional journey, as she consistently takes initiative and inspires others to work towards common goals. She possesses the rare ability to work independently under pressure while maintaining high standards of performance, a quality that has made her invaluable in various challenging situations. As a team-oriented individual, Jennifer brings collaborative spirit and diplomatic skills to every project she undertakes. Her adaptability and exceptional organizational skills make her particularly effective in educational and administrative roles, where attention to detail and systematic approach are crucial for success. She is highly computer literate and stays current with educational technology trends, always seeking ways to integrate digital tools into learning and administrative processes. Jennifer's commitment to personal and professional development is evident in her continuous pursuit of knowledge and skills enhancement. She actively seeks opportunities to attend workshops, seminars, and training programs that will enhance her ability to serve her community better. Her passion for education extends beyond the classroom, as she believes that quality education is the foundation for community development and social progress. Beyond her professional accomplishments, Jennifer is passionate about youth empowerment and works tirelessly to create opportunities for young people to develop their potential and contribute meaningfully to society. She enjoys reading extensively, which keeps her informed about global trends in education and development. Her love for singing brings joy to her personal life and often serves as a stress-relief mechanism that helps her maintain work-life balance. Jennifer's passion for traveling has exposed her to different cultures and educational systems, broadening her perspective and enriching her approach to education and community development. She values building meaningful relationships and believes that strong interpersonal connections are essential for effective teamwork and community impact.",
      specializations: [
        "Civic Education & Political Science",
        "Youth Development & Empowerment",
        "Curriculum Development & Implementation",
        "Educational Program Management",
        "Community Engagement & Outreach",
        "Administrative Coordination & Organization",
        "Educational Technology Integration"
      ],
      achievements: [
        "Second Class Upper Division graduate from Godfrey Okoye University",
        "Distinguished NYSC service at Community Secondary School Umuoba-Anam",
        "Expert in classroom management and innovative teaching methods",
        "Proven track record in student engagement and motivation",
        "Strong leadership in educational and administrative roles",
        "Computer literacy and educational technology proficiency",
        "Continuous professional development advocate",
        "Community development and youth empowerment champion"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50 mt-9">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 py-16">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-600 to-red-700 rounded-full mb-6 shadow-lg">
            <Users className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Meet Our <span className="text-red-600">Leadership Team</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our dedicated team of professionals brings together years of experience in diplomacy, 
            education, and community development to drive meaningful change across Africa and beyond.
          </p>
        </div>

        {/* Team Members */}
        <div className="space-y-20">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 lg:gap-16 items-center`}
            >
              {/* Profile Image */}
              <div className="lg:w-1/3 flex-shrink-0">
                <div className="relative">
                  <div className="w-80 h-96 mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-red-100 to-red-50 border-8 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Member Details */}
              <div className="lg:w-2/3 space-y-8">
                {/* Header Info */}
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl font-bold text-gray-900 mb-3">{member.name}</h2>
                  <p className="text-2xl text-red-600 font-semibold mb-2">{member.title}</p>
                  <p className="text-xl text-gray-600 italic">{member.subtitle}</p>
                </div>

                {/* Full Biography */}
                <div className="prose prose-lg max-w-none">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4 flex items-center">
                    <Heart className="w-6 h-6 text-red-600 mr-2" />
                    Biography
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-justify">
                    {member.fullBio}
                  </p>
                </div>

                {/* Specializations */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Areas of Expertise</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {member.specializations.map((spec, i) => (
                      <div key={i} className="flex items-center p-3 bg-white/80 backdrop-blur-sm rounded-xl shadow-sm border border-red-100">
                        <div className="w-3 h-3 bg-red-600 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700 font-medium">{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Achievements */}
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Key Achievements</h3>
                  <div className="space-y-3">
                    {member.achievements.map((achievement, i) => (
                      <div key={i} className="flex items-start p-4 bg-gradient-to-r from-red-50 to-white rounded-xl shadow-sm border-l-4 border-red-600">
                        <Award className="w-5 h-5 text-red-600 mt-0.5 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact Section */}
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-red-100">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mb-4 sm:mb-0">
                      <h4 className="font-semibold text-gray-900 mb-1">Connect with {member.name.split(' ')[0]}</h4>
                      <p className="text-gray-600 text-sm">Ready to collaborate on meaningful projects</p>
                    </div>
                    <div className="flex space-x-3">
                      <button className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        <Mail size={20} />
                      </button>
                      <button className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        <Linkedin size={20} />
                      </button>
                      <button className="p-3 bg-gray-600 text-white rounded-full hover:bg-gray-700 transition-colors duration-300 shadow-lg hover:shadow-xl">
                        <Globe size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* About TROF Section */}
        <div className="mt-24">
          <div className="bg-gradient-to-r from-red-600 via-red-700 to-red-800 rounded-3xl p-12 lg:p-16 text-white shadow-2xl">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-4xl font-bold mb-6">About TROF Foundation</h2>
              <p className="text-xl text-red-100 leading-relaxed mb-8">
                The Raymond Ofodu Foundation (TROF) is a leading civil society organization 
                implementing the Core Commitment for Children (CCC). We are dedicated to 
                child protection, youth empowerment, women's rights, and sustainable community 
                development across Africa and beyond. Our work spans international relations, 
                education, and advocacy for the most vulnerable populations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/join-us"
                  className="bg-white text-red-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Join Our Mission
                </a>
                <a
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-red-600 transition-all duration-300"
                >
                  Get In Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamsPage;