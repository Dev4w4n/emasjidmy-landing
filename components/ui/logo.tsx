import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.png'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <Image className="md:max-w-none mx-auto rounded" src={logo} width={48} height="48" alt='logo'/>
    </Link>
  )
}
