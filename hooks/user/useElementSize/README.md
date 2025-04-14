# useElementSize

Hook to get the real-time width and height of any DOM element.

---

## ✅ Features

- Uses **ResizeObserver** internally
- Responds to dynamic content and layout changes
- Works with any valid DOM ref

---

## 📦 Usage

```
import { useElementSize } from './useElementSize';

const ref = useRef(null);
const { width, height } = useElementSize(ref);

return (
  <div ref={ref}>
    Width: {width}px, Height: {height}px
  </div>
);
```
