import { useRef, useState } from 'react'

export interface DraggableItem<T = Record<string, unknown>> {
  id: string
  data: T
}

export interface UseDragAndDropProps<T = Record<string, unknown>> {
  items: DraggableItem<T>[]
  onDrop: (items: DraggableItem<T>[]) => void
}

export function useDragAndDrop<T>({ items, onDrop }: UseDragAndDropProps<T>) {
  const [draggedItem, setDraggedItem] = useState<DraggableItem<T> | null>(null)
  const dragOverItem = useRef<DraggableItem<T> | null>(null)

  const handleDragStart = (item: DraggableItem<T>) => () => {
    setDraggedItem(item)
  }

  const handleDragOver = (item: DraggableItem<T>) => (e: React.DragEvent) => {
    e.preventDefault()
    dragOverItem.current = item
  }

  const handleDrop = () => {
    if (!draggedItem || !dragOverItem.current || draggedItem.id === dragOverItem.current.id) return

    const draggedIndex = items.findIndex(i => i.id === draggedItem.id)
    const dropIndex = items.findIndex(i => i.id === dragOverItem.current!.id)

    const updatedItems = [...items]
    const [removed] = updatedItems.splice(draggedIndex, 1)
    updatedItems.splice(dropIndex, 0, removed)

    onDrop(updatedItems)

    setDraggedItem(null)
    dragOverItem.current = null
  }

  return {
    listeners: (item: DraggableItem<T>) => ({
      draggable: true,
      onDragStart: handleDragStart(item),
      onDragOver: handleDragOver(item),
      onDrop: handleDrop,
    }),
  }
}
