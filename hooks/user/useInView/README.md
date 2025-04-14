# useInView

Detect if an element is currently visible in the viewport.

---

## ✅ Features

- Based on IntersectionObserver API
- Lazy-load content, trigger animations, etc.
- Optional **rootMargin** and **threshold**

---

## 📦 Usage

```
import { useInView } from './useInView';

const ref = useRef(null);
const isVisible = useInView(ref, { threshold: 0.5 });

return (
  <div ref={ref}>
    {isVisible ? "I'm in view!" : "Scroll down to see me."}
  </div>
);
```
