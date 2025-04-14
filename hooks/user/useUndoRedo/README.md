# useUndoRedo

Custom hook to add undo and redo capabilities to any stateful logic.

---

## ✅ Features

- Undo, redo, reset
- Full history tracking
- Easy integration

---

## 📦 Usage

```
const { state, set, undo, redo, canUndo, canRedo } = useUndoRedo(0)

set(5)
undo()
redo()
```
