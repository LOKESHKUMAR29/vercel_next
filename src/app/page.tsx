import Image from 'next/image'
import im from '../app/ima.jpg'

export default function Home() {
  return (
    <main >
    <Image 
      src={im}
      alt="image"
    />

      Main page
    </main>
  )
}
