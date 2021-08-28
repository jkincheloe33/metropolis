import { useEffect, useState } from 'react'

const Video = ({ size, src, ...props }) => {
  const [video] = useState(() => {
    const vid = document.createElement('video')
    vid.src = src
    vid.crossOrigin = 'Anonymous'
    vid.loop = true
    vid.autoplay = true
    vid.muted = true
    return vid
  })

  // Keep in mind videos can only play once the user has interacted with the site ...
  useEffect(() => void video.play(), [video])

  return (
    <mesh {...props}>
      <boxGeometry args={size} />
      <meshBasicMaterial>
        <videoTexture attach='map' args={[video]} />
      </meshBasicMaterial>
    </mesh>
  )
}

export default Video
