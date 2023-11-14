import { useTypewriter, Cursor } from "react-simple-typewriter";

const Typewriter = ({ word, loop }) => {
  const [Heading] = useTypewriter({
    words: [word],
    loop: loop,
    cursorStyle:"<<",
    typeSpeed: 200,
    deleteSpeed: 100,
    delaySpeed: 50,
  });
  return (
    <h2>
        {Heading} <Cursor cursorStyle="<<"/>
    </h2>
  );
};

export default Typewriter;
