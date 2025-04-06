import { useState, useEffect } from "react";

const FollowMouse = () => {
  const [enable, setEnable] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    console.log("useEffect" + enable);

    const handleMove = (e) => {
      const { clientX, clientY } = e;
      setPosition({ x: clientX, y: clientY });
    };
    if (enable) {
      window.addEventListener("mousemove", handleMove);
    }

    return () => {
      console.log("removeEventListener" + enable);
      window.removeEventListener("mousemove", handleMove);
    };
  }, [enable]);

  useEffect(() => {
    document.body.classList.toggle("no-pointer", enable);
    return () => {
      document.body.classList.remove("no-pointer");
    };
  }, [enable]);
  return (
    <>
      <div
        style={{
          position: "absolute",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid #fff",
          borderRadius: "50%",
          opacity: 0.8,
          pointerEvents: "none",
          left: -25,
          top: -25,
          width: 50,
          height: 50,
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      ></div>
      <button onClick={() => setEnable(!enable)}>
        {enable ? "Ativar" : "Desactivar"} Seguir puntero
      </button>
    </>
  );
};

function App() {
  return (
    <main>
      <FollowMouse />
    </main>
  );
}

export default App;
