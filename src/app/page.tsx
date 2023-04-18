import Image from 'next/image'
import { Inter } from 'next/font/google'
import RainbowExp from './components/RainbowExp';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-[#030413] opacity-90">
      <div className="bg bg-no-repeat bg-cover bg-center">
        <div className="px-4 lg:px-0 mx-auto max-w-[1080px] flex justify-center flex-col min-h-[100vh]">
          <div className="flex justify-center flex-row">
            <div className="flex flex-col justify-between text-center h-[100vh] py-10 md:py-32"><h1 className="text-4xl sm:text-5xl mt-[-3rem] font-extrabold text-[#E4E4ED] animate__animated animate__zoomIn">Wallet with Social</h1>
              <div className="text-4xl tracking-tight font-extrabold text-[#E4E4ED] sm:text-5xl md:text-7xl lg:px-32 space-y-5"><h2 className="animate__animated animate__slideInRight">Create AA wallets</h2><h2 className="animate__animated animate__slideInLeft">of Web3 with Smart Account</h2><h3 className="block text-[#AEACC9] font-medium text-2xl lg:px-32 animate__animated animate__slideInRight">Users don't need to download wallets or back up seed phrases.
You app can offer a Web2-level UX through AA features like gas-less transactions, transaction bundling, etc.
Saim Irshad PIAIC202042</h3>
              </div>
              <div className="animate__animated animate__pulse">
              <div className='items-center flex justify-center flex-col'><RainbowExp/></div>
              
              </div>
              
            </div>
          </div>
        </div>
      </div>
      </main>
  )
}
