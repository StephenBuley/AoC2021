import { getInputFromFile } from '../utils/getInputFromFile'

export function countDepthIncreases() {
  try {
    const lines = getInputFromFile('./inputfiles/day1Input.txt')

    if (lines instanceof Error) {
      throw new Error('something bad happened')
    } else {
      let numOfIncreases = 0
      let prev: number | undefined = undefined
      lines.forEach((line) => {
        if (!prev) {
          prev = parseInt(line)
        } else {
          const curr = parseInt(line)
          if (curr > prev) {
            numOfIncreases++
          }
          prev = curr
        }
      })
      return numOfIncreases
    }
  } catch (error) {
    console.error(error)
  }
}

export function countDepthIncreasesBy3s() {
  try {
    const lines = getInputFromFile('./inputfiles/day1Input.txt')

    if (lines instanceof Error) {
      throw new Error('something bad happened')
    } else {
      let numOfIncreases = 0
      let prev: number | undefined = undefined
      for (let i = 0; i < lines.length - 2; i++) {
        const curr = parseInt(lines[i])
        const curr1 = parseInt(lines[i + 1])
        const curr2 = parseInt(lines[i + 2])
        const currTotal = curr + curr1 + curr2
        if (prev) {
          if (currTotal > prev) {
            numOfIncreases++
          }
        }
        prev = currTotal
      }

      return numOfIncreases
    }
  } catch (error) {
    console.error(error)
  }
}
