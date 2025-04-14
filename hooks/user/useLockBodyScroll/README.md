# useLockBodyScroll

Locks or unlocks the body scroll — ideal for modals, sidebars, or full-screen overlays.

---

## ✅ Features

- One-liner scroll locking
- Automatically cleans up on unmount
- Zero-config

---

## 📦 Usage

```
import { useLockBodyScroll } from './useLockBodyScroll';

const Modal = () => {
  useLockBodyScroll(true);

  return <div className="modal">Modal Content</div>;
};
```
