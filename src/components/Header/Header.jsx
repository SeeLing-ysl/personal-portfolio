import React, { useState } from "react";
import css from "./Header.module.scss";
import { BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={headerVariants}
      viewport={{ once: false, amount: 0.25 }} 
      className={`paddingsNav ${css.wrapper}`}
      style={{boxShadow: headerShadow}}
    > 
      <div className={`flexCenter innerWidth ${css.container}`}>
        <div className={css.name}>Shireen Yap See Ling</div>

        <ul style={getMenuStyles(menuOpened)}
          className={`flexCenter ${css.menu}`}
        >
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Experiences</a>
          </li>
          <li>
            <a href="">Portfolio</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
{/* () => setMenuOpened((prev) => !prev) */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
        
      </div>
    </motion.div>
  );
};

export default Header;
