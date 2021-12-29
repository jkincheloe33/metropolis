import { colors } from '@global'

export const InstagramIcon = ({ className, color, ...props }) => (
  <svg {...props} className={className} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'>
    <path
      d='M20.7 56h22.7c7 0 12.7-5.8 12.7-12.9V20.9C56 13.8 50.3 8 43.3 8H20.7C13.7 8 8 13.8 8 20.9v22.2C8 50.2 13.7 56 20.7 56zM46 16c1.6 0 2.9 1.3 2.9 3s-1.3 3-2.9 3-2.9-1.3-2.9-3 1.3-3 2.9-3zm-14 4c6.5 0 11.7 5.4 11.7 12S38.5 44 32 44s-11.7-5.4-11.7-12S25.5 20 32 20z'
      fill={color || colors.yellow}
    />
  </svg>
)

export default InstagramIcon
