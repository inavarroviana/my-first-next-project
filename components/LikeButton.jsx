"use client";
import { useState } from "react";

function LikeButton() {
  const [liked, setliked] = useState(false);
  return (
    <button onClick={() => setliked(!liked)}>{liked ? "🧡" : "🖤"}</button>
  );
}

export default LikeButton;
