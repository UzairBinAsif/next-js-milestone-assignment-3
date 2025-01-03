import Image from "next/image"
import ring from "@/../public/logoMainBall.png"
import { FaFacebook } from "react-icons/fa"
import { AiFillInstagram } from "react-icons/ai"
import { FaXTwitter } from "react-icons/fa6"
import { IoLogoWhatsapp } from "react-icons/io"

const Footer = () => {
  return (
    <div className="flex w-screen items-center justify-center text-[#111111]">
    <div className="flex flex-col-reverse sm:flex-row w-[90vw] justify-around text-[13px]">
        <div className="justify-items-center text-center sm:text-left sm:justify-items-start sm:w-[60%]">
          <div className="flex items-center my-3">
            <Image src={ring} alt="image" className="w-8 sm:w-10"/>
            <div className="pl-2 font-semibold text-[15px]">Infini Blogz</div>
          </div>
          <div className="text-slate-800 w-[95%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt nobis consectetur quasi et perferendis eveniet suscipit commodi facilis molestias quo non, dolorum.</div>
          <div className="flex w-[140px] my-3 justify-between h-[20px]">
          <FaFacebook className="h-[20px] w-[20px]"/>
          <AiFillInstagram className="h-[20px] w-[20px]"/>
          <FaXTwitter className="h-[20px] w-[20px]"/>
          <IoLogoWhatsapp className="h-[20px] w-[20px]"/>
          </div>
          <div className="text-slate-800 justify-items-center">&copy; 2024 Infini Blogz | All Rights Reserved.</div>
        </div>
        <div className=" sm:w-[40%] font-normal text-[10px] text-slate-800 grid grid-cols-2 md:grid-cols-3 px-[10%] sm:px-0 py-[5vh]">
          <div className="flex flex-col gap-[1vh] pb-2 md:pb-0">
            <div className="text-[#090909] font-medium text-[12px] hover:underline cursor-pointer">Links</div>
            <div className="hover:underline cursor-pointer">Homepage</div>
            <div className="hover:underline cursor-pointer">Blog</div>
            <div className="hover:underline cursor-pointer">About</div>
            <div className="hover:underline cursor-pointer">Contact</div>
          </div>
          <div className="flex flex-col gap-[1vh] pb-2 md:pb-0">
            <div className="text-[#090909] font-medium text-[12px] hover:underline cursor-pointer">Tags</div>
            <div className="hover:underline cursor-pointer">culture</div>
            <div className="hover:underline cursor-pointer">style</div>
            <div className="hover:underline cursor-pointer">fashion</div>
            <div className="hover:underline cursor-pointer">entertainment</div>
          </div>
          <div className="flex flex-col gap-[1vh]">
            <div className="text-[#090909] font-medium text-[12px] hover:underline cursor-pointer">Social</div>
            <div className="hover:underline cursor-pointer">Facebook</div>
            <div className="hover:underline cursor-pointer">Instagram</div>
            <div className="hover:underline cursor-pointer">Twitter</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
