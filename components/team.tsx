import Image from 'next/image'
import TestimonialImage from '@/public/images/testimonial.png'
import AnasImage from '@/public/images/anas.png'
import ErosImage from '@/public/images/eros.png'
import IzanImage from '@/public/images/izan.png'
import KimImage from '@/public/images/kim.png'
import PojiImage from '@/public/images/poji.png'
import ZulImage from '@/public/images/zul.png'
import FabImage from '@/public/images/fazreil.png'
import ArafatImage from '@/public/images/arafat.png'
import FairulImage from '@/public/images/fairul.jpeg'
import AimanImage from '@/public/images/aiman.png'

export default function Team() {
  return (
    <section className="relative">

      {/* Illustration behind content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -mb-32" aria-hidden="true">
        <svg width="1760" height="518" viewBox="0 0 1760 518" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-02">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>TeamImage
          </defs>
          <g transform="translate(0 -3)" fill="url(#illustration-02)" fillRule="evenodd">
            <circle cx="1630" cy="128" r="128" />
            <circle cx="178" cy="481" r="40" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h2 className="h2 mb-4">Siapa kami ?</h2>
            <p className="text-xl text-gray-600">Sekumpulan pakar IT yang ingin membuat amal jariah dengan menggunakan ilmu pengetahuan kami.</p>
          </div>

          <div className="flex flex-wrap justify-center">
            <div className="box-container mx-auto mt-20" data-aos="zoom-y-out">
                <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                  <div className="text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                    <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                      <Image className="relative rounded-full" src={IzanImage} width={96} height={96} alt="Izan" />
                    </div>
                    <blockquote className="text-xl font-medium mb-4">
                      Rohaizan bin Roosley
                    </blockquote>
                    <cite className="block font-bold text-lg not-italic mb-1">Pengasas Sistem E-Masjid.My</cite>
                    <div className="text-gray-600">
                      <span>Intel Corporation </span> 
                    </div>
                    <div>
                      <a className="text-blue-600 hover:underline" target='_blank' href="https://www.linkedin.com/in/rohaizanroosley/">Profil LinkedIn</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
            
          <div className="flex flex-wrap justify-center">
            <div className="box-container mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                <div className="text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <Image className="relative rounded-full" src={AnasImage} width={96} height={96} alt="Izan" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    Nik Mohamad Anas
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Senior Software Engineer</cite>
                  <div className="text-gray-600">
                    <span>SEEK </span> 
                  </div>
                  <div>
                  <a className="text-blue-600 hover:underline" target='_blank' href="https://www.linkedin.com/in/nik-mohamad-anas-kamarudin-99614235/">Profil LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-container mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                <div className="text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <Image className="relative rounded-full" src={FabImage} width={96} height={96} alt="Mr Fab" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    Fazreil Amreen Bin Abdul Jalil
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">DevOps</cite>
                  <div className="text-gray-600">
                    <span>MIDF</span> 
                  </div>
                  <div>
                    <a className="text-blue-600 hover:underline" target='_blank' href="https://my.linkedin.com/in/ts-fazreil-amreen-abdul-jalil-a0259321">Profil LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-container mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                <div className="text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <Image className="relative rounded-full" src={ErosImage} width={96} height={96} alt="Izan" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    Muhammad Fairuz Anwar
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Senior Software Engineer</cite>
                  <div className="text-gray-600">
                    <span>Motorola Solutions </span> 
                  </div>
                  <div>
                  <a className="text-blue-600 hover:underline" target='_blank' href="https://www.linkedin.com/in/muhammadfairuz-anwar/">Profil LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            
            <div className="box-container mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                <div className="text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <Image className="relative rounded-full" src={ZulImage} width={96} height={96} alt="Izan" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    Zulkarnain Jahidi
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Senior Executive</cite>
                  <div className="text-gray-600">
                    <span>Universiti Teknologi Petronas </span> 
                  </div>
                  <div>
                  <a className="text-blue-600 hover:underline" target='_blank' href="https://www.linkedin.com/in/zulkarnain-jahidi-nordin-a93288245">Profil LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-container mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                <div className="text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <Image className="relative rounded-full" src={KimImage} width={96} height={96} alt="Izan" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    Syahrul Hakimah Ong
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Senior Software Engineer</cite>
                  <div className="text-gray-600">
                    <span>Freelancer </span> 
                  </div>
                  <div>
                  <a className="text-blue-600 hover:underline" target='_blank' href="https://www.linkedin.com/in/syahrul-hakimah-ong/">Profil LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-container mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                <div className="text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <Image className="relative rounded-full" src={PojiImage} width={96} height={96} alt="Izan" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    Fauzi Ibrahim
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Senior Software Developer</cite>
                  <div className="text-gray-600">
                    <span>AMD </span> 
                  </div>
                  <div>
                  <a className="text-blue-600 hover:underline" target='_blank' href="https://www.linkedin.com/in/fauzi-ibrahim-81092a237">Profil LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center">
            
            <div className="box-container mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                <div className="text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <Image className="relative rounded-full" src={ArafatImage} width={96} height={96} alt="Izan" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    Mohamad Arafat 
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Senior System Engineer </cite>
                  <div className="text-gray-600">
                    <span>AMD </span> 
                  </div>
                  <div>
                  <a className="text-blue-600 hover:underline" target='_blank' href="https://www.linkedin.com/in/mohamad-arafat-5b445691/">Profil LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-container mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                <div className="text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <Image className="relative rounded-full" src={FairulImage} width={96} height={96} alt="Mr Fab" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    Fairul Rizal Bin Fahrurazi
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Software Development Manager</cite>
                  <div className="text-gray-600">
                    <span>MIMOS Berhad</span> 
                  </div>
                  <div>
                    <a className="text-blue-600 hover:underline" target='_blank' href="https://my.linkedin.com/in/fairulr">Profil LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="box-container mx-auto mt-20" data-aos="zoom-y-out">
              <div className="relative flex items-start border-2 border-gray-200 rounded bg-white">
                <div className="text-center px-3 py-8 pt-20 mx-4 md:mx-0">
                  <div className="absolute top-0 -mt-8 left-1/2 transform -translate-x-1/2">
                    <Image className="relative rounded-full" src={AimanImage} width={96} height={96} alt="Mr Fab" />
                  </div>
                  <blockquote className="text-xl font-medium mb-4">
                    Aiman Fariz Zaqwan
                  </blockquote>
                  <cite className="block font-bold text-lg not-italic mb-1">Student</cite>
                  <div className="text-gray-600">
                    <span>University of Tulsa</span> 
                  </div>
                  <div>
                    <a className="text-blue-600 hover:underline" target='_blank' href="https://www.linkedin.com/in/aiman-fariz-zaqwan-akmal-hizam-78a492277">Profil LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
