import { useEffect, useState } from 'react'

export default function Preloader() {
  const [hidden, setHidden] = useState(false)

  useEffect(() => {
    const onLoad = () => setHidden(true)
    if (document.readyState === 'complete') {
      onLoad()
    } else {
      window.addEventListener('load', onLoad)
      return () => window.removeEventListener('load', onLoad)
    }
  }, [])

  if (hidden) return null

  return <div id="preloader"></div>
}
