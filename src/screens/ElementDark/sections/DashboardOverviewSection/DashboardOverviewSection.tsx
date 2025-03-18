import CountUp from "../../../../components/ui/count-up";
import { motion } from "framer-motion";

export const DashboardOverviewSection = (): JSX.Element => {
  // Data for statistics to enable mapping
  const statisticsData = [
    { value: 85000, prefix: "+", description: "teams trust Paysync" },
    { value: 98, suffix: "%", description: "customer satisfaction rate" },
    { value: 530000, prefix: "+", description: "people uses Paysync" },
    { value: 150, prefix: "+", description: "countries around the world" },
  ];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      id="empower"
      className="w-full py-12 md:py-24 bg-black"
    >
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-4 max-w-[1224px]"
      >
        {/* Heading and Subheading */}
        <div className="flex flex-col items-center justify-center mb-10 md:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-next-ai-3-framer-website-semantic-heading-2 text-white text-[32px] md:text-[48px] text-center tracking-[-1px] md:tracking-[-1.92px] leading-[1.2] md:leading-[57.6px] font-medium mb-3 md:mb-5"
          >
            Empower your B2B business
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="font-['Inter',Helvetica] font-normal text-next-ai-3framerwebsitewhite-70 text-base md:text-xl text-center leading-[1.6] md:leading-8 px-4 md:px-0"
          >
            Join thousands who have embraced financial empowerment.
          </motion.p>
        </div>

        {/* Statistics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-8">
          {statisticsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
              className="flex flex-col items-center"
            >
              <div className="font-['DM_Sans',Helvetica] font-medium text-white text-[32px] md:text-[43px] text-center tracking-[-1px] md:tracking-[-1.72px] leading-[1.2] md:leading-[51.6px]">
                {stat.prefix && <span>{stat.prefix}</span>}
                <CountUp
                  from={0}
                  to={stat.value}
                  separator=","
                  duration={2}
                />
                {stat.suffix && <span>{stat.suffix}</span>}
              </div>
              <span className="font-next-ai-3-framer-website-inter-light text-next-ai-3framerwebsitewhite-70 text-[14px] md:text-[16px] text-center leading-[1.5] md:leading-[25.6px] font-light mt-2">
                {stat.description}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};
