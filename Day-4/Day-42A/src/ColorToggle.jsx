import { useState } from "react";

function ColorToggle() {
  const [isRed, setIsRed] = useState(true);

  return (
    <div>
      <div
        style={{
          color: isRed ? "red" : "blue",
          fontSize: "20px",
          marginBottom: "10px"
        }}
      >
        This text changes color
      </div>

      <button onClick={() => setIsRed(!isRed)}>
        Toggle Color
      </button>
    </div>
  );
}

export default ColorToggle;
