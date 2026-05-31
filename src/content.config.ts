// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"
import { glob } from "astro/loaders"

// The Content Layer glob loader slugifies (lowercases) ids by default, which
// would change existing URLs (e.g. /escalamiento/TRL1 -> /escalamiento/trl1).
// Replicate the legacy collections behavior: id = file path minus extension,
// preserving original case, so public URLs stay identical.
const keepCaseId = ({ entry }: { entry: string }) =>
  entry.replace(/\.[^/.]+$/, "")

// 2. Define your collection(s)

const escalamientoCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/escalamiento",
    generateId: keepCaseId,
  }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
      author: z.string().default("Ubicu"),
      category: z.string(),
      tags: z.array(z.string()),
    }),
})

const produccionCientificaCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/produccion_cientifica",
    generateId: keepCaseId,
  }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
      author: z.string().default("Ubicu"),
      category: z.string(),
      tags: z.array(z.string()),
      link: z.string(),
    }),
})

const procesoDesignProductoCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/proceso_design",
    generateId: keepCaseId,
  }),
  schema: ({ image }) =>
    z.object({
      draft: z.boolean(),
      title: z.string(),
      snippet: z.string(),
      image: z.object({
        src: image(),
        alt: z.string(),
      }),
      publishDate: z.string().transform((str) => new Date(str)),
      author: z.string().default("Ubicu"),
      category: z.string(),
      tags: z.array(z.string()),
    }),
})

const teamCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/team",
    generateId: keepCaseId,
  }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
})

const partnersCollection = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/partners",
    generateId: keepCaseId,
  }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform((str) => new Date(str)),
  }),
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  escalamiento: escalamientoCollection,
  proceso_design: procesoDesignProductoCollection,
  produccion_cientifica: produccionCientificaCollection,
  team: teamCollection,
  partners: partnersCollection,
}
