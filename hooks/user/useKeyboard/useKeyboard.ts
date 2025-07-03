import { useEffect } from "react";

type KeyCombo = string | string[];

interface UseKeyboardOptions {
  /**
   * The key or key combo(s) to listen for.
   * Example: 'Escape' or ['Control', 'k']
   */
  keys: KeyCombo;

  /**
   * The callback function to run when the key(s) are pressed.
   */
  callback: (event: KeyboardEvent) => void;

  /**
   * Listen on 'keydown' or 'keyup'. Defaults to 'keydown'.
   */
  eventType?: "keydown" | "keyup";

  /**
   * Whether the listener should be global (on window) or scoped to an element.
   */
  target?: HTMLElement | Window | null;

  /**
   * Set to true if you want the event to trigger only once until released.
   */
  once?: boolean;

  /**
   * Optional: Whether to prevent the default action on key press.
   */
  preventDefault?: boolean;
}

export function useKeyboard({
  keys,
  callback,
  eventType = "keydown",
  target = typeof window !== "undefined" ? window : null,
  once = false,
  preventDefault = false,
}: UseKeyboardOptions) {
  useEffect(() => {
    if (!target) return;

    const combo = Array.isArray(keys) ? keys.map(k => k.toLowerCase()) : [keys.toLowerCase()];

    const handler = (event: Event) => {
      const keyEvent = event as KeyboardEvent;
      const pressedKey = keyEvent.key.toLowerCase();

      // If it's a multi-key combo, check all keys are pressed
      const comboMatch = combo.every(key => {
        switch (key) {
          case "ctrl":
          case "control":
            return keyEvent.ctrlKey;
          case "shift":
            return keyEvent.shiftKey;
          case "alt":
            return keyEvent.altKey;
          case "meta":
          case "cmd":
          case "command":
            return keyEvent.metaKey;
          default:
            return key === pressedKey;
        }
      });

      if (comboMatch) {
        if (preventDefault) keyEvent.preventDefault();
        callback(keyEvent);
        if (once) target.removeEventListener(eventType, handler);
      }
    };

    target.addEventListener(eventType, handler);
    return () => {
      target.removeEventListener(eventType, handler);
    };
  }, [keys, callback, eventType, target, once, preventDefault]);
}
