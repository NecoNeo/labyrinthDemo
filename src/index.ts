import { draw } from "./draw"
import { generate } from "./generate"

const canvas = document.getElementById('canvas') as HTMLCanvasElement

// const mock = {
//   rows: 2,
//   cols: 2,
//   grids: [
//     { right: true },
//     { left: true, bottom: true },
//     { right: true },
//     { top: true, left: true }
//   ]
// }

// draw(mock, canvas)


const data = generate(20, 20)
draw(data, canvas)
