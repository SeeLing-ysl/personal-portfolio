import { useTypewriter, Cursor } from "react-simple-typewriter";

export const Typewriter = ({ word, loop }) => {
  const [Heading] = useTypewriter({
    words: [word],
    loop: loop,
    typeSpeed: 200,
    deleteSpeed: 100,
    delaySpeed: 50,
  });
  return (
    <h2>
      {Heading} <Cursor cursorStyle="<" cursorColor="#8c52ff" />
      <Cursor cursorStyle="<" cursorColor="#5ce1e6" />
    </h2>
  );
};

export const Typewriter1 = ({ word, loop, typeSpeed }) => {
  const [Heading] = useTypewriter({
    words: [word],
    loop: loop,
    typeSpeed: typeSpeed,
    deleteSpeed: 100,
  });
  return (
    <>
      {Heading}
      <Cursor cursorStyle="<" cursorColor="#8c52ff" />
      <Cursor cursorStyle="<" cursorColor="#5ce1e6" />
    </>
  );
};




