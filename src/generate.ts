// dfs
export function generate(rows: number, cols: number) {
  const grids: {
    visited: boolean,
    top?: boolean,
    left?: boolean,
    right?: boolean;
    bottom?: boolean
  }[] = new Array(rows * cols).fill(0).map(() => ({ visited: false }))

  const pathStack = [0]
  grids[0].visited = true

  const makePath = (fromIndex: number, toIndex: number) => {
    grids[toIndex].visited = true
    pathStack.push(toIndex)
    if (toIndex - fromIndex === 1) {
      grids[fromIndex].right = true
      grids[toIndex].left = true
    } else if (fromIndex - toIndex === 1) {
      grids[fromIndex].left = true
      grids[toIndex].right = true
    } else if (toIndex > fromIndex) {
      grids[fromIndex].bottom = true
      grids[toIndex].top = true
    } else {
      grids[fromIndex].top = true
      grids[toIndex].bottom = true
    }
  }

  do {
    const index = pathStack[pathStack.length - 1]
    const nextGridIndexes = [
      index + rows,
      index - rows,
      ...(() => (index + 1) % cols !== 0 ? [index + 1] : [])(),
      ...(() => index % cols !== 0 ? [index - 1] : [])()
    ]
      .filter(i => grids[i] && grids[i].visited === false)
    if (nextGridIndexes.length) {
      let r = Math.floor(Math.random() * nextGridIndexes.length)
      r = r !== nextGridIndexes.length ? r : r - 1
      makePath(index, nextGridIndexes[r])
    } else {
      pathStack.pop()
    }
  } while (pathStack.length)

  return {
    rows,
    cols,
    grids: grids.map(grid => {
      return {
        top: grid.top,
        left: grid.left,
        right: grid.right,
        bottom: grid.bottom
      }
    })
  }
}
