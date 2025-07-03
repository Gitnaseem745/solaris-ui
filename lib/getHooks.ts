import fs from 'fs'
import path from 'path'

const hooksDir = path.join(process.cwd(), 'hooks', 'user')
const hookDirs = fs.readdirSync(hooksDir).filter((file) =>
    fs.lstatSync(path.join(hooksDir, file)).isDirectory()
)

export const allHooks = hookDirs.map((dir) => ({ id: dir, name: dir, href: `/hooks/${dir}` }))
