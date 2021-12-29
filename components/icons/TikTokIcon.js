import { colors } from '@global'

export const TikTokIcon = ({ className, color, ...props }) => (
  <svg {...props} className={className} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
    <path
      d='M415.27 214.69v-68.14c-89.08-3.75-91.89-84.69-92-92.3v-.57h-68.78v265.38a54.5 54.5 0 1 1-38.64-52.18v-70.29a123.49 123.49 0 1 0 107.58 122.47c0-1.73-.05-3.45-.12-5.16V183.22c31.69 29 91.96 31.47 91.96 31.47Z'
      fill={color || colors.yellow}
    />
  </svg>
)

export default TikTokIcon
