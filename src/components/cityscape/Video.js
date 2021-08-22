import { useEffect, useState } from 'react'

const Video = ({ ...props }) => {
  const [video] = useState(() => {
    const vid = document.createElement('video')
    vid.src = './video/liar.mp4'
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
      <boxGeometry args={[7500, 4350, 1500]} />
      <meshBasicMaterial>
        <videoTexture attach='map' args={[video]} />
      </meshBasicMaterial>
    </mesh>
  )
}

export default Video
