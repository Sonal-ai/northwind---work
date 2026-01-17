import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Card } from "../components/ui/card";
import { Linkedin, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Leading North Wind Estates with 20+ years of real estate expertise and visionary leadership.",
    linkedin: "#",
    email: "sarah@northwindestates.com"
  },
  {
    name: "Michael Chen",
    role: "Chief Operating Officer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "Driving operational excellence and ensuring seamless project execution across all developments.",
    linkedin: "#",
    email: "michael@northwindestates.com"
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Design",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Crafting beautiful, functional spaces that blend luxury with sustainable design principles.",
    linkedin: "#",
    email: "emily@northwindestates.com"
  },
  {
    name: "David Thompson",
    role: "Director of Sales",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop",
    bio: "Connecting clients with their dream properties through personalized service and market expertise.",
    linkedin: "#",
    email: "david@northwindestates.com"
  },
  {
    name: "Lisa Wang",
    role: "Head of Sustainability",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=400&fit=crop",
    bio: "Pioneering eco-friendly construction practices and green building certifications.",
    linkedin: "#",
    email: "lisa@northwindestates.com"
  },
  {
    name: "James Anderson",
    role: "Chief Financial Officer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Managing financial strategy and ensuring sustainable growth for all stakeholders.",
    linkedin: "#",
    email: "james@northwindestates.com"
  }
];

const Teams = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-sky-light to-background">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-foreground mb-6">
              Meet Our Team
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground">
              A dedicated group of professionals committed to creating exceptional living spaces and delivering outstanding service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Grid */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-2xl transition-all duration-300">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="relative aspect-square overflow-hidden"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </motion.div>

                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-muted-foreground mb-4">
                      {member.bio}
                    </p>

                    <div className="flex gap-3">
                      <a
                        href={member.linkedin}
                        className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`${member.name}'s LinkedIn`}
                      >
                        <Linkedin size={18} />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="p-2 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={18} />
                      </a>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join Our Team CTA */}
      <section className="py-16 sm:py-20 bg-primary/5">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We&apos;re always looking for talented individuals who share our passion for excellence and innovation.
            </p>
            <a
              href="mailto:careers@northwindestates.com"
              className="inline-block bg-teal-darker text-white hover:bg-teal-dark px-8 py-3 rounded-full font-medium transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Teams;
