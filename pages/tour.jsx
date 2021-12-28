import { useEffect } from 'react'
import { useRouter } from 'next/router'

const Tour = () => {
  const { push } = useRouter()

  useEffect(() => {
    push('/?tour=true')
  }, [])

  return null
}

export default Tour
