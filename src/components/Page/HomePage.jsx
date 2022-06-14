import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const HomePage = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["And now, you'll never forget your contacts, because I am... "], // Strings to display
      startDelay: 1200,
      typeSpeed: 60,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <p className="home-text" ref={el}></p>
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.9, delay: 6.5 }}
        className="home-page__title"
      >
        <h1>Phonebook</h1>
      </motion.div>
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, delay: 7.2 }}
      >
        <Button
          as={Link}
          to="/register"
          className="home-page__button"
          variant="secondary"
        >
          Sign Up
        </Button>
        <Button as={Link} to="/login" variant="secondary">
          Sign In
        </Button>
      </motion.div>
    </>
  );
};

export default HomePage;
