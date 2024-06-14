import { motion } from "framer-motion";

import { CertificatesSection } from "./components";

export const CertificatesTab = () => {
  return (
    <motion.div
      key="panel-certificates"
      transition={{ duration: 0.15 }}
      initial={{ opacity: 0, translateX: 30 }}
      animate={{ opacity: 1, translateX: 0 }}
      exit={{ opacity: 0, translateX: 30 }}
    >
      <CertificatesSection />
    </motion.div>
  );
};
