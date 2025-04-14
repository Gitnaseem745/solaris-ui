# useDebouncedValue

Debounce a changing value to prevent unnecessary updates.

---

## ✅ Features

- Ideal for search inputs and filters
- Delays updates by your defined time
- Reacts to value changes only after delay

---

## 📦 Usage

```
import { useDebouncedValue } from './useDebouncedValue';

const [input, setInput] = useState('');
const debouncedInput = useDebouncedValue(input, 500);

useEffect(() => {
  if (debouncedInput) {
    fetchSearchResults(debouncedInput);
  }
}, [debouncedInput]);
```
