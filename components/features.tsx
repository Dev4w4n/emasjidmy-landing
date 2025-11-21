export default function Features() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 bg-gray-100 pointer-events-none mb-16" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h2 mb-4">Teroka penyelesaian kami</h1>
            <p className="text-xl text-gray-600">Berasaskan perisian sumber terbuka <a className="text-blue-600 hover:underline" href="https://github.com/Dev4w4n/e-masjid" target='_blank'>(Open source) </a> khas untuk masjid/surau seluruh Malaysia secara <b>percuma</b>.</p>
          </div>

        </div>
      </div>
    </section>
  )
}