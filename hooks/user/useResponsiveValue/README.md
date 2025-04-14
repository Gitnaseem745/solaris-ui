# useResponsiveValue

A responsive value hook based on the screen size, similar to CSS media queries.

---

## ✅ Features

- Tailwind-style breakpoints
- Dynamic values
- Lightweight

---

## 📦 Usage

```
const layout = useResponsiveValue({
  base: 'column',
  md: 'row',
  lg: 'grid',
})

return <div className={`flex flex-${layout}`}></div>
```
