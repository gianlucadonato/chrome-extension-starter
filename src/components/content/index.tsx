import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Content() {
  const dispatch = useDispatch();
  const clickCounter = useSelector((state) => state.count);

  useEffect(() => {
    document.addEventListener("click", () => {
      dispatch({ type: "ADD_COUNT" });
    });
  }, []);

  return <div>Count: {clickCounter}</div>;
}
