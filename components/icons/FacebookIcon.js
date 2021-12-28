import { colors } from '@global'

export const FacebookIcon = ({ className, color, ...props }) => (
  <svg {...props} className={className} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'>
    <path
      d='M53.68 38.26v15.1H37.11V72h16.57v42h19.61V72H90l2-18.63H73.29V38.26c0-2.67 2.11-4 3-4.82 1.57-1.34 9.15-1.55 9.15-1.55h7.43V15a93.26 93.26 0 0 0-11.68-1c-28.08 0-27.51 24.26-27.51 24.26Z'
      fill='none'
      stroke={color || colors.yellow}
      strokeMiterlimit='10'
      strokeWidth='6.5'
    />
  </svg>
)

export default FacebookIcon
