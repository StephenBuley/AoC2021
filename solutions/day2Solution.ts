import { getInputFromFile } from '../utils/getInputFromFile'

export function determineDepthByDistance() {
  try {
    const lines = getInputFromFile('./inputfiles/day2Input.txt')

    if (lines instanceof Error) {
      throw new Error('something bad happened')
    } else {
      const instructions = lines.map((val) => val.split(' '))
      let distance = 0
      let depth = 0
      instructions.forEach((instruction) => {
        const direction = instruction[0]
        const amount = instruction[1]
        if (direction === 'forward') {
          distance += parseInt(amount)
        } else if (direction === 'down') {
          depth += parseInt(amount)
        } else if (direction === 'up') {
          depth -= parseInt(amount)
        }
      })
      return depth * distance
    }
  } catch (error) {
    console.error(error)
  }
}

export function determineDepthByDistanceWithAim() {
  try {
    const lines = getInputFromFile('./inputfiles/day2Input.txt')

    if (lines instanceof Error) {
      throw new Error('something bad happened')
    } else {
      const instructions = lines.map((val) => val.split(' '))
      let distance = 0
      let depth = 0
      let aim = 0
      instructions.forEach((instruction) => {
        const direction = instruction[0]
        const amount = parseInt(instruction[1])
        if (direction === 'forward') {
          distance += amount
          depth += amount * aim
        } else if (direction === 'down') {
          aim += amount
        } else if (direction === 'up') {
          aim -= amount
        }
      })
      return depth * distance
    }
  } catch (error) {
    console.error(error)
  }
}
