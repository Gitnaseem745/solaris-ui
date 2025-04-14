import fs from 'fs'
import path from 'path'

/**
 * Fetches metadata for all hooks in the hooks directory.
 * Each hook must have a README.md file to be included in the metadata.
 * @returns An array of objects containing the hook name and path to its README.md file.
 * @example
 * getHooksMeta() // [{ name: "useExample", readmePath: "/hooks/useExample/README.md" }, ...]
 */
export const getHooksMeta = () => {
    const hooksDir = path.join(process.cwd(), 'hooks', 'user')
    const hooks = fs.readdirSync(hooksDir)
  
    return hooks
      .filter((hookName) => {
        const readmePath = path.join(hooksDir, hookName, 'README.md')
        return fs.existsSync(readmePath)
      })
      .map((hookName) => ({
        name: hookName,
        readmePath: path.join(hooksDir, hookName, 'README.md')
      }))
  }
  