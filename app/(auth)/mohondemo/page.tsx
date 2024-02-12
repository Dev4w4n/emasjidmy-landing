export const metadata = {
  title: 'E-Masjid.My - Mohon Demo',
  description: 'Page description',
}

export default function MohonDemo() {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Team kami akan menghubungi anda secepat mungkin.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="name">Nama <span className="text-red-600">*</span></label>
                  <input id="name" type="text" className="form-input w-full text-gray-800" placeholder="Masukkan nama anda" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="email">Email <span className="text-red-600">*</span></label>
                  <input id="email" type="email" className="form-input w-full text-gray-800" placeholder="Masukkan alamat email anda" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label className="block text-gray-800 text-sm font-medium mb-1" htmlFor="password">Telefon <span className="text-red-600">*</span></label>
                  <input id="phone" type="text" className="form-input w-full text-gray-800" placeholder="Masukkan no telefon anda" required />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button className="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Hantar</button>
                </div>
              </div>
              <div className="text-sm text-gray-500 text-center mt-3">
                Maklumat di atas akan digunakan untuk tujuan pendaftaran akaun server percuma.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
