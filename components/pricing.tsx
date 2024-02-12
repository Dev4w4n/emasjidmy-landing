export default function Pricing() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Pakej kami</h2>
            <p className="text-xl text-gray-600">Pakej mampu milik untuk memenuhi keperluan yang berbeza.</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-4 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2 item-center" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Percuma</h4>
              <p className="text-xs gray-600 mt-3 text-left">Tiada login ❌</p>
              <p className="text-xs gray-600 mt-3 text-left">Hos persendirian ❌</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://github.com/Dev4w4n/e-masjid">Download</a>
            </div>

            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2 item-center" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Asas</h4>
              <p className="text-xs gray-600 mt-3 text-left">Akses ke Dashboard E-Masjid ✅ </p>
              <p className="text-xs gray-600 mt-3 text-left">Akses ke Portal kariah ❌</p>
              <p className="text-xs gray-600 mt-3 text-left">https://shared.e-masjid.my</p>
              <p className="text-xs gray-600 mt-3 text-left">Bantuan teknikal online</p>
              <p className="text-xs gray-600 mt-3 text-left">5 GB</p>
              <p className="text-xs gray-600 mt-3 text-left">1 user</p>
              <p className="text-xs gray-600 mt-3 text-left">1 user</p>
              <p className="text-xs gray-600 mt-3 text-left">RM33 / bulan</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://github.com/Dev4w4n/e-masjid">Langgan sekarang</a>
            </div>

            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2 item-center" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">Pro 👍🏻 </h4>
              <p className="text-xs gray-600 mt-3 text-left">Akses ke Dashboard E-Masjid ✅ </p>
              <p className="text-xs gray-600 mt-3 text-left">Akses ke Portal kariah ✅ </p>
              <p className="text-xs gray-600 mt-3 text-left">https://namamasjid.e-masjid.my</p>
              <p className="text-xs gray-600 mt-3 text-left">Bantuan teknikal online</p>
              <p className="text-xs gray-600 mt-3 text-left">20 GB</p>
              <p className="text-xs gray-600 mt-3 text-left">5 user</p>
              <p className="text-xs gray-600 mt-3 text-left">5 email@e-masjid.my</p>
              <p className="text-xs gray-600 mt-3 text-left">RM99 / bulan</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://github.com/Dev4w4n/e-masjid">Langgan sekarang</a>
            </div>

            <div className="relative flex flex-col p-6 bg-white rounded shadow-xl">
              <svg className="w-16 h-16 p-1 -mt-1 mb-2 item-center" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                  <rect className="fill-current text-blue-600" width="64" height="64" rx="32" />
                  <g strokeWidth="2">
                    <path className="stroke-current text-blue-300" d="M34.514 35.429l2.057 2.285h8M20.571 26.286h5.715l2.057 2.285" />
                    <path className="stroke-current text-white" d="M20.571 37.714h5.715L36.57 26.286h8" />
                    <path className="stroke-current text-blue-300" strokeLinecap="square" d="M41.143 34.286l3.428 3.428-3.428 3.429" />
                    <path className="stroke-current text-white" strokeLinecap="square" d="M41.143 29.714l3.428-3.428-3.428-3.429" />  
                  </g>
                </g>
              </svg>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1 text-center">⭐️ Premium ⭐️</h4>
              <p className="text-xs gray-600 mt-3 text-left">Akses ke Dashboard E-Masjid ✅ </p>
              <p className="text-xs gray-600 mt-3 text-left">Akses ke Portal kariah ✅ </p>
              <p className="text-xs gray-600 mt-3 text-left">Percuma .com</p>
              <p className="text-xs gray-600 mt-3 text-left">Bantuan teknikal online</p>
              <p className="text-xs gray-600 mt-3 text-left">100 GB</p>
              <p className="text-xs gray-600 mt-3 text-left">15 user</p>
              <p className="text-xs gray-600 mt-3 text-left">15 email@e-masjid.my</p>
              <p className="text-xs gray-600 mt-3 text-left">RM??? / bulan</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <p className="text-xs gray-600 mt-3 text-left">&nbsp;</p>
              <a className="btn text-white bg-gray-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://github.com/Dev4w4n/e-masjid">Belum di buka</a>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}