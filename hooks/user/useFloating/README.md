# useFloating

A lightweight hook built on **@floating-ui** for positioning floating elements like tooltips, dropdowns, or popovers.

---

## ✅ Features

- Auto-positioning
- Collision detection
- Flexible placements

---

## 📦 Usage

```
import { useFloating } from './useFloating'

const { refs, floatingStyles } = useFloating({ placement: 'bottom' })

return (
  <>
    <button ref={refs.setReference}>Open</button>
    <div ref={refs.setFloating} style={floatingStyles}>
      I'm floating!
    </div>
  </>
)
```
