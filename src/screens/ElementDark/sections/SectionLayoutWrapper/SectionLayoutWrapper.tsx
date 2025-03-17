import { motion } from "framer-motion";

interface SectionLayoutWrapperProps {
  children: React.ReactNode;
  className?: string;
  withContainer?: boolean;
}

export const SectionLayoutWrapper = ({
  children,
  className = "",
  withContainer = true,
}: SectionLayoutWrapperProps): JSX.Element => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`w-full ${className}`}
    >
      {withContainer ? (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="container mx-auto px-4 max-w-[1224px]"
        >
          {children}
        </motion.div>
      ) : (
        children
      )}
    </motion.section>
  );
};
