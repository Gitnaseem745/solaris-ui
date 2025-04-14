# useMediaQuery

Reactively respond to media queries in your app.

---

## ✅ Features

- Real-time screen size detection
- Use CSS-like query strings
- Super useful for responsive UIs

---

## 📦 Usage

```
import { useMediaQuery } from './useMediaQuery';

const isMobile = useMediaQuery('(max-width: 768px)');

return <p>{isMobile ? "Mobile view" : "Desktop view"}</p>;
```
