# useClipboard

Copy text to clipboard and manage copy state.

---

## ✅ Features

- Copy any string to clipboard
- Built-in state to track **copied** status
- Auto-reset after delay (default 1.5s)

---

## 📦 Usage

```
import { useClipboard } from './useClipboard';

const { copy, copied } = useClipboard();

return (
  <button onClick={() => copy("Copied Text!")}>
    {copied ? "Copied!" : "Copy"}
  </button>
);
```
