# useTableOfContents

The **useTableOfContents** hook allows you to extract headings from MDX or HTML content and track the currently visible section. Ideal for generating floating sidebar navigation in documentation or blog posts.

## ✅ Features

- Extracts all **h2** and **h3** headings with their text and **id**
- Observes scroll position to highlight the current section
- Works with markdown/MDX content rendered via **rehype-slug**

---

## 📦 Usage

```
import { useTableOfContents } from '@/hooks/useTableOfContents'

const { toc, activeId } = useTableOfContents()

return (
    <ul>
        {toc.map((item) => (
          <li key={item.id} className={item.id === activeId ? 'font-bold' : ''}>
            <a href={`#${item.id}`} className="text-sm ml-2 block">
                {item.title}
            </a>
          </li>
        ))}
    </ul>
)
```
