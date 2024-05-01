import { createAvatar } from "@dicebear/core"
import { shapes, identicon } from "@dicebear/collection"
import { writeFile } from "fs"
import { resolve } from "path"

const shapeAvatar = (seed) =>
  createAvatar(shapes, {
    seed,
    // ... other options
  })

const identiconAvatar = (seed) =>
  createAvatar(shapes, {
    seed,
    // ... other options
  })

const saveAvatarSVg = (avatar, filePath) => {
  const svg = avatar.toString()
  writeFile(filePath + ".svg", svg, () => {})
}

const escalamiento_blog = {
  baseFolder: "./src/assets/images/escalamiento",
  avatarGenerator: identiconAvatar,
  images: [...Array(10).keys()].slice(1).map((v) => "TRL" + v),
}

const proc_diseno = {
  baseFolder: "./src/assets/images/proc_diseno",
  avatarGenerator: shapeAvatar,
  images: [
    "electronico",
    "fisioterapia",
    "industrial",
    "instrumentacion",
    "interdisciplinar",
    "software",
    "videojuego",
    "visual",
  ],
}

const createAvatarSvgFiles = (configuration) => {
  configuration.images.forEach((fileName) => {
    const avatar = configuration.avatarGenerator(fileName)
    const filePath = resolve(configuration.baseFolder, fileName)
    saveAvatarSVg(avatar, filePath)
  })
}

createAvatarSvgFiles(escalamiento_blog)

createAvatarSvgFiles(proc_diseno)
