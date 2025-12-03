import { motion } from "framer-motion";

const BrandStory = () => {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-muted/50 to-background relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 35px,
            rgba(185, 180, 160, 0.3) 35px,
            rgba(185, 180, 160, 0.3) 38px
          ),
          repeating-linear-gradient(
            90deg,
            transparent,
            transparent 70px,
            rgba(185, 180, 160, 0.3) 70px,
            rgba(185, 180, 160, 0.3) 73px
          )`,
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-12 sm:mb-16"
          >
            READ OUR
            <br />
            BRAND STORY
          </motion.h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-2xl">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="bg-gradient-to-br from-teal-dark to-teal-darker rounded-lg shadow-elevated hover:shadow-2xl transition-shadow duration-300 p-12 sm:p-16 md:p-24 relative"
            >
              <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-white origin-top-left transform -skew-y-3"></div>
              <div className="absolute bottom-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-mint flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <div className="text-white text-[0.6rem] sm:text-xs font-bold tracking-wider">NORTH</div>
                  <div className="text-white text-[0.6rem] sm:text-xs font-bold tracking-wider">WIND</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandStory;
