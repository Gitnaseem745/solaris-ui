# useDragAndDrop

A production-grade React hook to implement drag-and-drop sorting in lists, cards, and grids.

---

## ✅ Features

- Simple API for managing drag and drop behavior
- Fully typed with TypeScript
- Supports any item type via generics
- Easily integrates with any UI list or card system

---

## 📦 Usage
```
import { useDragAndDrop } from './useDragAndDrop'

const [items, setItems] = useState([
  { id: '1', data: 'Item 1' },
  { id: '2', data: 'Item 2' },
  { id: '3', data: 'Item 3' }
])

const { listeners } = useDragAndDrop({
  items,
  onDrop: setItems
})

return (
  <div>
    {items.map(item => (
      <div
        key={item.id}
        {...listeners(item)}
        className="p-4 border rounded shadow my-2 bg-white"
      >
        {item.data}
      </div>
    ))}
  </div>
)
```
