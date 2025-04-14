# useHoverIntent

Trigger hover logic only when the user intentionally hovers (after a delay).

---

## ✅ Features

- Delayed hover detection
- Smarter UX, avoids flickers
- Configurable timeout

---

## 📦 Usage

```
import { useHoverIntent } from './useHoverIntent';

const ref = useRef(null);
const isHovered = useHoverIntent({ ref, delay: 150 });

return <div ref={ref}>{isHovered ? "Hovered!" : "Hover me slowly"}</div>;
```
