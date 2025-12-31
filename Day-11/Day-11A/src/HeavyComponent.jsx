import React from "react";

function HeavyComponent() {
  console.log("🔥 HeavyComponent rendered");

  // Simulate heavy work
  let total = 0;
  for (let i = 0; i < 1e7; i++) {
    total += i;
  }

  return (
    <div style={{ padding: "20px", background: "#eee", marginTop: "20px" }}>
      <h2>Heavy Component</h2>
      <p>This component is expensive to render.</p>
    </div>
  );
}

// React.memo prevents re-render if props do NOT change
export default React.memo(HeavyComponent);
