# useCarousel

A custom hook to handle carousel/slider logic with autoplay, loop, and manual navigation.

---

## ✅ Features

- Seamless next/previous navigation
- Looping support
- Auto-play with customizable interval
- Manual navigation with **goTo(index)**

---

## 📦 Usage

```
import { useCarousel } from './useCarousel';

const { current, next, prev, goTo } = useCarousel({
  total: 5,
  loop: true,
  autoPlay: true,
  interval: 3000,
});

return (
  <div>
    <button onClick={prev}>Previous</button>
    <div>Current Slide: {current}</div>
    <button onClick={next}>Next</button>
  </div>
);
```
