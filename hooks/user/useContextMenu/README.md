# useContextMenu

A hook that helps you build custom right-click context menus with mouse positioning.

---

## ✅ Features

- Tracks mouse position
- Easy integration
- Fully typed

---

## 📦 Usage

```
const { position, visible, handleContextMenu } = useContextMenu()

return (
  <div onContextMenu={handleContextMenu}>
    Right-click me
    {visible && (
      <CustomMenu x={position.x} y={position.y} />
    )}
  </div>
)
```
