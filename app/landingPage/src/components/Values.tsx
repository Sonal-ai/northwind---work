import { Maximize, Globe, Search, Lightbulb, Eye, Banknote } from "lucide-react";
import { Card, CardContent } from "@/app/landingPage/src/components/ui/card";
import { motion } from "framer-motion";

const values = [
  {
    icon: Maximize,
    title: "DYNAMISM",
    description: "Adapting to your needs with a constantly evolving approach.",
  },
  {
    icon: Globe,
    title: "SUSTAINABILITY",
    description: "We are building a greener future by providing sustainable solutions that is built to last.",
  },
  {
    icon: Search,
    title: "TRANSPARENCY",
    description: "Clear and honest communication throughout your real estate journey.",
  },
  {
    icon: Lightbulb,
    title: "INNOVATION",
    description: "We are pioneering new solutions and shaping the landscape of real estate.",
    
  },
  {
    icon: Eye,
    title: "CLIENT FOCUSED",
    description: "We prioritize your needs at every step, ensuring clear communication.",
  },
  {
    icon: Banknote,
    title: "ETHICAL",
    description: "Upholding the highest standards with integrity in every transaction.",
  },
];

const Values = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 sm:mb-16 text-foreground"
        >
          Our Values
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3 }
                }}
              >
                <Card
                  className={`border-none shadow-md transition-all duration-300 hover:shadow-2xl h-full group ${
                    value.highlight ? "bg-mint-light" : "bg-card"
                  }`}
                >
                  <CardContent className="p-6 sm:p-8">
                    <motion.div
                      className={`mb-4 sm:mb-6 ${value.highlight ? "text-mint" : "text-primary"}`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <Icon size={40} strokeWidth={1.5} className="sm:w-12 sm:h-12" />
                    </motion.div>
                    <h3 className={`text-lg sm:text-xl font-bold mb-3 sm:mb-4 transition-colors duration-300 ${value.highlight ? "text-mint group-hover:text-mint/80" : "text-foreground group-hover:text-primary"}`}>
                      {value.title}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed transition-colors duration-300 group-hover:text-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Values;
