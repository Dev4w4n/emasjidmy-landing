import teamsData from "@/data/teams.json";
import Image from "next/image";
import Link from "next/link";

export default function Teams() {
  return (
    <section className="relative">
      <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
        <h2 className="h2 mb-4">Siapa kami ?</h2>
        <p className="text-xl text-gray-600">
          Sekumpulan pakar IT yang ingin membuat amal jariah dengan menggunakan ilmu pengetahuan kami.
        </p>
      </div>
      <div className="flex justify-center items-center py-8">
        <a href="https://github.com/Dev4w4n/e-masjid.my/graphs/contributors" target="_blank" rel="noopener noreferrer">
          <img
            src="https://contrib.rocks/image?repo=Dev4w4n/e-masjid.my"
            alt="Contributors"
            className="rounded-lg shadow-lg border border-gray-200"
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </a>
      </div>
    </section>
  );
}
