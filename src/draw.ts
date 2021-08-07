const GRID_WIDTH = 35
const CANVAS_PADDING = 50

export function draw(data: {
  rows: number,
  cols: number,
  grids: { top?: boolean, left?: boolean, right?: boolean; bottom?: boolean }[]
}, canvas: HTMLCanvasElement) {
  const context = canvas.getContext('2d')

  // 默认入口出口
  const grids = data.grids.map(grid => Object.assign({}, grid))
  grids[0].top = true
  grids[grids.length - 1].bottom = true

  for (let row = 0; row < data.rows; row++) {
    for (let col = 0; col < data.cols; col++) {
      const index = data.cols * row + col
      const grid = grids[index]
      console.log(grid)
      context.lineWidth = 2

      if (!grid.top) {
        context.moveTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH)
        context.lineTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH)
        context.stroke()
      }
      if (!grid.right) {
        context.moveTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH)
        context.lineTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH)
        context.stroke()
      }
      if (!grid.bottom) {
        context.moveTo(CANVAS_PADDING + (col + 1) * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH)
        context.lineTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH)
        context.stroke()
      }
      if (!grid.left) {
        context.moveTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + (row + 1) * GRID_WIDTH)
        context.lineTo(CANVAS_PADDING + col * GRID_WIDTH, CANVAS_PADDING + row * GRID_WIDTH)
        context.stroke()
      }
    }
  }
}
