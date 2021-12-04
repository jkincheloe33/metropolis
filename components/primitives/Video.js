import { useEffect, useState } from 'react'

const Video = ({ size, src, ...props }) => {
  const [video] = useState(() => {
    const vid = document.createElement('video')
    vid.autoplay = true
    vid.crossOrigin = 'Anonymous'
    vid.loop = true
    vid.muted = true
    vid.playsInline = true
    vid.src = src
    return vid
  })

  // we can play video on mount since they are muted
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
