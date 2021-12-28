import { colors } from '@global'

export const InstagramIcon = ({ className, color, ...props }) => (
  <svg {...props} className={className} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'>
    <path
      d='M83 23a22 22 0 0 1 22 22v38a22 22 0 0 1-22 22H45a22 22 0 0 1-22-22V45a22 22 0 0 1 22-22h38m0-8H45a30.09 30.09 0 0 0-30 30v38a30.09 30.09 0 0 0 30 30h38a30.09 30.09 0 0 0 30-30V45a30.09 30.09 0 0 0-30-30Z'
      fill={color || colors.yellow}
    />
    <path
      d='M90.14 32a5.73 5.73 0 1 0 5.73 5.73A5.73 5.73 0 0 0 90.14 32ZM64.27 46.47A17.68 17.68 0 1 1 46.6 64.14a17.7 17.7 0 0 1 17.67-17.67m0-8A25.68 25.68 0 1 0 90 64.14a25.68 25.68 0 0 0-25.73-25.67Z'
      fill={color || colors.yellow}
    />
  </svg>
)

export default InstagramIcon
