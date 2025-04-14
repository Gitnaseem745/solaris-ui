# useScrollProgress

Track how far a user has scrolled down the page, returning a value from `0` to `100`.

---

## ✅ Features

- Scroll position in percentage
- Great for scroll indicators and progress bars
- Auto-updates on scroll

---

## 📦 Usage

```
import { useScrollProgress } from './useScrollProgress';

const progress = useScrollProgress();

return <div style={{ width: `${progress}%` }} className="h-1 bg-blue-500" />;
```
