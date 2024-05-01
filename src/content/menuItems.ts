const menuitems = [
  {
    title: "Quienes somos",
    path: "/about",
  },
  {
    title: "Producto",
    path: "",
    children: [
      { title: "Escalamiento del producto", path: "/escalamiento" },
      { title: "Producción científica", path: "/produccion_cientifica" },
      { title: "Proceso de diseño", path: "/proceso_design" },
    ],
  },
  {
    title: "Contacto",
    path: "/contact",
  },
]

export { menuitems }
