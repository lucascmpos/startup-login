import { Play } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="flex flex-col items-center rounded-t-3xl bg-[#1C202C] p-4  px-28 py-6 text-white">
      <div className="flex w-full flex-row  justify-around">
        <div className="flex flex-row items-start">
          <div className="flex items-center gap-2">
            <Play size={16} className="fill-[#DDE1ED] text-[#DDE1ED]" />
            <h1 className="text-2xl font-bold">MercadoStartup</h1>
          </div>
        </div>
        <ul className="space-y-6 text-base font-normal">
          <li className="cursor-pointer">Company</li>
          <li>About</li>
          <li>Features</li>
          <li>Works</li>
          <li>Career</li>
        </ul>

        <ul className="space-y-6 text-base font-normal">
          <li className="cursor-pointer">Help</li>
          <li className="cursor-pointer">Customer Support</li>
          <li className="cursor-pointer">Delivery Details</li>
          <li className="cursor-pointer">Terms & Conditions</li>
          <li className="cursor-pointer">Privacy Policy</li>
        </ul>
      </div>

      <div className="my-16 h-px w-full bg-[#5F6475]" />

      <span>© Copyright 2024, All Rights Reserved</span>
    </footer>
  )
}

export default Footer
