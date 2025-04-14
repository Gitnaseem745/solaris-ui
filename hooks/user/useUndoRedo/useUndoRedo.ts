import { useCallback, useState } from 'react'

export function useUndoRedo<T>(initialValue: T) {
  const [history, setHistory] = useState<T[]>([initialValue])
  const [index, setIndex] = useState(0)

  const value = history[index]

  const set = (val: T) => {
    const newHistory = history.slice(0, index + 1)
    setHistory([...newHistory, val])
    setIndex(newHistory.length)
  }

  const undo = useCallback(() => {
    if (index > 0) setIndex(i => i - 1)
  }, [index])

  const redo = useCallback(() => {
    if (index < history.length - 1) setIndex(i => i + 1)
  }, [index, history])

  return { value, set, undo, redo, canUndo: index > 0, canRedo: index < history.length - 1 }
}
