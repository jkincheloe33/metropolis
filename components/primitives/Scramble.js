import { useEffect, useRef } from 'react'
import styled from 'styled-components'

import { colors } from '@global'

const Paragraph = styled.a`
  color: ${colors.white};
  font-size: 22px;
  pointer-events: ${p => (p.clickable ? 'auto' : 'none')};
  text-decoration: none;
  transition: color 250ms ease;

  .symbol {
    color: ${colors.yellow};
  }

  &:hover {
    color: ${colors.yellow};
  }
`

const Scramble = ({ link, open, text }) => {
  const ref = useRef(null)
  const { current: chars } = useRef('!<>-_\\/[]{}—=+*^?#________')

  // contains start/end text for each character + timing
  const queue = []
  let frame
  let frameRequest

  const handleText = newText => {
    const oldText = ref?.current.innerText
    // length for whichever word is longer
    const length = Math.max(oldText.length, newText.length)

    // track text and set random start/end times to be used in ${handleUpdate}
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 40)
      const end = start + Math.floor(Math.random() * 40)

      queue.push({ from, to, start, end })
    }

    // cancel previous RAF and recent frames if this function runs again
    cancelAnimationFrame(frameRequest)
    frame = 0
    handleUpdate()
  }

  // loops through ${queue} and dynamically set innerHTML for each character using the ${randomChar} function
  const handleUpdate = () => {
    let complete = 0
    let output = ''

    for (let i = 0; i < queue.length; i++) {
      let { from, to, start, end, char } = queue[i]

      // if ${frame} is >= to ${end}, this character is done animating and should render its ${to} text
      if (frame >= end) {
        complete++
        output += to
      } else if (frame >= start) {
        // assign and output random character
        if (!char || Math.random() < 0.28) {
          char = randomChar()
          queue[i].char = char
        }

        output += `<span class="symbol">${char}</span>`
      } else {
        output += from
      }
    }

    // render output text
    if (ref?.current) ref.current.innerHTML = output

    // if complete, finish animation. otherwise increase frame and run again
    if (complete === queue.length) return
    else {
      frameRequest = requestAnimationFrame(handleUpdate)
      frame++
    }
  }

  const randomChar = () => {
    return chars[Math.floor(Math.random() * chars.length)]
  }

  useEffect(() => {
    if (open && ref?.current) setTimeout(() => handleText(text), 1000)
  }, [open])

  return <Paragraph clickable={!!link} href={link} ref={ref} target='_blank' />
}

export default Scramble
