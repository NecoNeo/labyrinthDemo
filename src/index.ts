import { draw } from "./draw"

const canvas = document.getElementById('canvas') as HTMLCanvasElement

const mock = {
  rows: 2,
  cols: 2,
  grids: [
    { right: true },
    { left: true, bottom: true },
    { right: true },
    { top: true, left: true }
  ]
}
draw(mock, canvas)
