import Logo from './logo'

export default function Footer() {
  return (
    <footer>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Top area: Blocks */}
        <div className="grid sm:grid-cols-10 gap-8 py-8 md:py-12 border-t border-gray-200">

          {/* 1st block */}
          <div className="sm:col-span-12 lg:col-span-3">
            <div className="mb-2">
              <Logo />
            </div>
          </div>

          {/* 2nd block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Produk kami</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pengurusan Khairat</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pengurusan Tabung</a>
              </li>
              <li className="mb-2">
                <a href="#0" className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Pengurusan Peti Aduan</a>
              </li>
            </ul>
          </div>

          {/* 3rd block - removed Bahan Rujukan section */}

          {/* 4th block */}
          <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
            <h6 className="text-gray-800 font-medium mb-2">Siapa Kami?</h6>
            <ul className="text-sm">
              <li className="mb-2">
                <a href="https://github.com/Dev4w4n/e-masjid.my/graphs/contributors" target='_blank' className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Di belakang tabir</a>
              </li>
              <li className="mb-2">
                <a href="https://discord.gg/k2zGpWTDpe" target='_blank' className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Chat dengan kami</a>
              </li>
              <li className="mb-2">
                <a href="https://github.com/sponsors/Dev4w4n" target='_blank' className="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">Jadi penaja</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom area */}
        <div className="md:flex md:items-center md:justify-between py-4 md:py-8 border-t border-gray-200">

          {/* Social as */}
          <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
            <li className="ml-4">
              <a href="https://github.com/Dev4w4n/e-masjid" target='_blank' className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github" >
                <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Copyrights note */}
          <div className="text-sm text-gray-600 mr-4">E-Masjid.My &copy; 2024 <a className="text-blue-600 hover:underline" href="https://4w4n.com" target="_blank" rel="noreferrer">Open Cloud Services (SA0604301-H)</a>  Powered by: <a className="text-blue-600 hover:underline" href="https://cruip.com" target="_blank" rel="noreferrer">Cruip.com</a></div>

        </div>

      </div>
    </footer>
  )
}
