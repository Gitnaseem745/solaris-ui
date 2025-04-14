# useVirtualList

Efficiently renders only the visible items in a long list using scroll position and item height.

## ✅ Features

- Super fast performance for large lists
- Avoids rendering off-screen elements
- Smooth scrolling and customizable overscan buffer

## 📦 Usage

```
const containerRef = useRef(null)

const { list: visibleItems, totalHeight, scrollOffset } = useVirtualList(
  items,
  containerRef,
  { itemHeight: 48 }
)

return (
  <div ref={containerRef} className="h-[300px] overflow-auto relative">
    <div style={{ height: totalHeight, position: 'relative' }}>
      <div style={{ transform: `translateY(${scrollOffset}px)` }}>
        {visibleItems.map((item, i) => (
          <div key={i} className="h-[48px]">{item}</div>
        ))}
      </div>
    </div>
  </div>
)
```
