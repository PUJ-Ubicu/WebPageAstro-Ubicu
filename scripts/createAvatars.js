import { createAvatar } from "@dicebear/core"
import { shapes, identicon, initials } from "@dicebear/collection"
import { writeFile } from "fs"
import { resolve } from "path"

const shapeAvatar = (seed) =>
  createAvatar(shapes, {
    seed,
    // ... other options
  })

const identiconAvatar = (seed) =>
  createAvatar(identicon, {
    seed,
    // ... other options
  })

const initialsAvatar = (seed) =>
  createAvatar(initials, {
    seed,
    backgroundColor: ["dddddd"],
    textColor: ["222222"],
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

const equipo = {
  baseFolder: "./public/Equipo/",
  avatarGenerator: initialsAvatar,
  images: [
    "Esther Wilches",
    "Helberg Asencio",
    "Leonardo Arzayus",
    "Sebastian Garcia",
  ],
}

const createAvatarSvgFiles = (configuration) => {
  configuration.images.forEach((fileName) => {
    const avatar = configuration.avatarGenerator(fileName)
    const filePath = resolve(
      configuration.baseFolder,
      fileName.replace(" ", "-")
    )
    saveAvatarSVg(avatar, filePath)
  })
}

createAvatarSvgFiles(escalamiento_blog)

createAvatarSvgFiles(proc_diseno)

createAvatarSvgFiles(equipo)
