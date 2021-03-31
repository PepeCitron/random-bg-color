import { useEffect, useState } from 'react'
import { randomNumber } from './utils'

function useRandomColor() {
  const [color, setColor] = useState('rgb(255,255,255)')

  const randomizeColor = () => setColor(`rgb(${randomNumber(255)},${randomNumber(255)},${randomNumber(255)})`)

  useEffect(() => {
    randomizeColor()
  }, [])

  return [color, randomizeColor]
}

export default useRandomColor
