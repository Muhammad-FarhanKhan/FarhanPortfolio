import React, {useState, useEffect} from "react";

export default function Typewriter({text, speed=10}){
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() =>{
        let index = 0;
        const interval = setInterval(() => {
      setDisplayedText((prev) => prev + text.charAt(index));
      index++;
      if (index === text.length) clearInterval(interval);
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  return <p>{displayedText}</p>;

}