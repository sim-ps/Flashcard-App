import clsx from "clsx";
import logoSmallIcon from "../assets/images/logo-small.svg";
import logoBig from "../assets/images/logo-large.svg";
import { Link, NavLink } from "react-router";
import { motion } from "motion/react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <img className="lg:hidden" src={logoSmallIcon} alt="logo" />{" "}
      <img className="hidden lg:block" src={logoBig} alt="logo" />
      <div className="tab">
        <div className="relative">
          <NavLink className="relative z-10 tab-button" to="/" end>
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-full bg-yellow-500 border-2 -z-10"
                    transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
                  ></motion.div>
                )}
                Study Mode
              </>
            )}
          </NavLink>
        </div>
        <div className="relative">
          <NavLink className="relative z-10 tab-button" to="/all-cards">
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 rounded-full bg-yellow-500 border-2 -z-10"
                    transition={{ type: "spring", bounce: 0.4, duration: 0.5 }}
                  ></motion.div>
                )}
                All Cards
              </>
            )}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
