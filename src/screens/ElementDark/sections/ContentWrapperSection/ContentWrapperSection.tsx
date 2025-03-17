import { Card, CardContent } from "../../../../components/ui/card";
import { motion } from "framer-motion";

export const ContentWrapperSection = (): JSX.Element => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-full py-12"
    >
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container mx-auto px-4 max-w-[1392px]"
      >
        <Card className="mx-auto max-w-[1392px] rounded-3xl overflow-hidden bg-[url(public/wfzf3uasuba4dhrjjwvobezc8-png.png)] bg-cover bg-center border border-solid border-[#ffffff1a]">
          <CardContent className="p-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col items-center justify-center py-40 px-6 text-center"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="font-next-ai-3-framer-website-semantic-heading-1 font-[number:var(--next-ai-3-framer-website-semantic-heading-1-font-weight)] text-white text-[length:var(--next-ai-3-framer-website-semantic-heading-1-font-size)] tracking-[var(--next-ai-3-framer-website-semantic-heading-1-letter-spacing)] leading-[var(--next-ai-3-framer-website-semantic-heading-1-line-height)] [font-style:var(--next-ai-3-framer-website-semantic-heading-1-font-style)]"
              >
                Your business - anytime,
                <br />
                anywhere!
              </motion.h1>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 space-y-2"
              >
                <p className="font-['Inter',Helvetica] font-normal text-next-ai-3framerwebsitewhite-80 text-xl tracking-[0] leading-8">
                  Take charge of your B2B business journey with the PaySync
                  mobile app –
                </p>
                <p className="font-['Inter',Helvetica] font-normal text-next-ai-3framerwebsitewhite-80 text-xl tracking-[0] leading-8">
                  your comprehensive solution for on-the-go expense financial
                  control.
                </p>
              </motion.div>

              <motion.button 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-10 h-14 px-8 bg-white text-next-ai-3framerwebsiteblack-pearl rounded-md font-['Inter',Helvetica] font-bold text-base tracking-[-0.05px] leading-5 hover:bg-white/90"
              >
                Start free trial
              </motion.button>
            </motion.div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
};
