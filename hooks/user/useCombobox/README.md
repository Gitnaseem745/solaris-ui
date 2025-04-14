# useCombobox

Build a keyboard-navigable autocomplete or combobox easily.

## Features

- Fully controlled input
- Keyboard arrow navigation
- Highlighted index handling

## Usage

```
const {
  query, setQuery, filtered,
  highlightedIndex, handleKeyDown
} = useCombobox(countries, c => c.name)

<input
  value={query}
  onChange={e => setQuery(e.target.value)}
  onKeyDown={handleKeyDown}
/>

<ul>
  {filtered.map((c, i) => (
    <li key={c.code} className={i === highlightedIndex ? 'bg-gray-200' : ''}>
      {c.name}
    </li>
  ))}
</ul>
```
