import { colors } from '@global'

export const TwitterIcon = ({ className, color, ...props }) => (
  <svg {...props} className={className} fill='none' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
    <path
      d='M23.4 5c-.1-.2-.4-.2-.6-.1-.2.1-.5.2-.7.3.3-.4.6-.9.8-1.5.1-.2 0-.4-.2-.5s-.4-.1-.5 0c-.8.5-1.6.8-2.5 1-.9-.9-2.2-1.4-3.5-1.4-2.8 0-5 2.2-5 4.9v.5C8 7.8 5 6.2 2.9 3.7c-.1-.1-.3-.2-.4-.2-.2 0-.3.1-.4.2-.4.8-.7 1.7-.7 2.5 0 1 .3 2 .9 2.9 0 0-.1-.1-.2-.1-.1-.1-.3 0-.5 0-.1.1-.2.3-.2.4 0 1.6.8 3.1 2 4-.1 0-.2.1-.3.2-.1.1-.2.3-.1.4.5 1.6 1.8 2.8 3.4 3.2-1.6.9-3.5 1.3-5.4 1.1-.2 0-.4.1-.5.3-.1.2 0 .4.2.6 2.2 1.4 4.6 2.1 7.2 2.1 8.4 0 13.3-6.7 13.3-13.1v-.3c.8-.6 1.6-1.4 2.2-2.3.1-.2.1-.5 0-.6z'
      fill={color || colors.yellow}
    />
  </svg>
)

export default TwitterIcon
