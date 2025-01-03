import Image from "next/image";
import I from "@/../public/logoMain.png";
import Link from "next/link";
// import ToggleBtn from "../ToggleBtn/ToggleBtn";

const Navbar = () => {
  return (
    <div className="w-screen shadow-md mb-[4vh]">
    <div className="flex justify-between h-[8vh] mx-5 sm:mx-10 md:mx-20">
      <div className="min-w-fit p-1 sm:w-3/12 justify-items-start">
        <Image src={I} alt="Infini logo" className="w-fit h-full" />
      </div>
      <div className="min-[450px]:flex justify-items-end min-[450px]:justify-between sm:w-7/12 md:w-6/12 lg:w-5/12 w-8/12">

      <div className="hidden w-[62%] min-[450px]:flex justify-between font-medium items-center text-[13px] sm:text-[15px]">
        {/* <ToggleBtn /> */}
        <Link href={"/"}>Home</Link>
        <Link href={"/contact"}>Contact</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/about"}>Login</Link>
      </div>
      </div>
    </div>
    </div>
  );
};

export default Navbar;
