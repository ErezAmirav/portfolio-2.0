import { motion } from "framer-motion";
import NavLink from "./NavLink";

const MenuOverlay = ({ links }) => {
  const menuVariants = {
    initial: {
      opacity: 0,
      y: -20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.2,
      },
    },
  };

  const itemVariants = {
    initial: {
      opacity: 0,
      x: -20,
    },
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: {
      opacity: 0,
      x: -20,
    },
  };

  return (
    <motion.div
      className="md:hidden"
      variants={menuVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ul className="flex flex-col items-center py-4">
        {links.map((link, index) => (
          <motion.li key={index} variants={itemVariants} className="my-2">
            <NavLink href={link.path} title={link.title} />
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
};

export default MenuOverlay;
