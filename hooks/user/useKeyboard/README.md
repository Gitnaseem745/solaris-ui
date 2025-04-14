# useKeyboard

A React hook to handle keyboard shortcuts and keypress events in a declarative way.

---

## ✅ Features

- Easily bind keyboard events globally or to a specific element
- Supports multiple keys and key combinations (e.g., **ctrl+s**)
- Works in client-side only environments
- Fully typed with TypeScript

---

## 📦 Usage

```
import { useKeyboard } from './useKeyboard'

useKeyboard('ctrl+s', (e) => {
  e.preventDefault()
  console.log('Save triggered!')
})

useKeyboard(['ArrowUp', 'ArrowDown'], (e) => {
  console.log('Arrow key pressed:', e.key)
})
```
