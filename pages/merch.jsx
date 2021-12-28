import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Merch = () => {
  const { push } = useRouter()

  useEffect(() => {
    push('/?merch=true')
  }, [])

  return null
}

export default Merch
