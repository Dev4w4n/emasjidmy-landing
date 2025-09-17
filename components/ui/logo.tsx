import Link from 'next/link'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
      <img className="md:max-w-none mx-auto rounded" src="/images/logo.png" width={48} height={48} alt='logo'/>
    </Link>
  )
}
