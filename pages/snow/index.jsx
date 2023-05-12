import React, { useEffect, useState } from "react";

function Blocks() {
  const [generatedBlocks, setGeneratedBlocks] = useState([]);

  useEffect(() => {
    const newBlocks = [];
    for (let i = 0; i < 50; i++) {
      const xPos = Math.floor(Math.random() * window.innerWidth);
      const size = Math.floor(Math.random() * 10 + 5);
      const opacity = size <= 7 ? 0.5 : 1;
      const style = {
        left: `${xPos}px`,
        width: `${size}px`,
        height: `${size}px`,
        opacity: opacity,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${Math.random() * 5 + 5}s`
      };
      newBlocks.push(<div key={i} className="block absolute w-4 h-4 bg-blue-400 rounded-[3px]" style={style}></div>);
    }
    setGeneratedBlocks(newBlocks);
  }, [])

  return (
    <div className="snow">
      {generatedBlocks}
    </div>
  );
}

export default Blocks;