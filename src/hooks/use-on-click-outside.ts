import { useEffect, useRef } from "react";

type Handler = () => void;

/**
 * Hook that handles clicks outside of a specified element
 * @param handler Callback function to be called when a click outside is detected
 * @returns React ref to be attached to the element you want to monitor
 */
export function useOnClickOutside<T extends HTMLElement>(handler: Handler) {
  // Create a ref that will be attached to the element we want to monitor
  const ref = useRef<T>(null);

  useEffect(() => {
    // Event listener callback that checks if the click was outside the element
    const listener = (event: MouseEvent | TouchEvent) => {
      // Skip if the ref isn't set or if the click was inside the element
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      // Call the handler only if the click was outside
      handler();
    };

    // Add event listeners for both mouse and touch events
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    // Cleanup function to remove event listeners when component unmounts
    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [handler]); // Re-run effect if handler changes

  return ref;
}
