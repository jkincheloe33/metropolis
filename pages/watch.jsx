import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Watch = () => {
  const { push } = useRouter()

  useEffect(() => {
    push('/?watch=true')
  }, [])

  return null
}

export default Watch
