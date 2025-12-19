import { useEffect, useRef } from "react";

function useOutsideClick(handler, listeCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          console.log("Clicked outside");
          handler();
        }
      }

      document.addEventListener("click", handleClick, listeCapturing);

      return () =>
        document.removeEventListener("click", handleClick, listeCapturing);
    },
    [handler, listeCapturing]
  );

  return ref;
}

export default useOutsideClick;
