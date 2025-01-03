import Image from "next/image";
import I1 from "@/../public/scenery-1.jpg";
import Link from "next/link";

const RecentPosts = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-[2vh] max-h-fit lg:my-[4vw]">
      <Link href={'/lorem'}></Link>
      <div className="md:max-w-[45%] cursor-pointer flex justify-center items-center lg:max-w-[400px] mr-[2vw]">
        <Image
          src={I1}
          alt={"image"}
          className="rounded-sm shadow-sm w-[90%]"
        />
      </div>
      <div className="flex flex-col h-fit items-center md:items-start justify-around md:justify-between">
        <div className="flex text-sm pt-3">
            <h3 >11.11.2024  &nbsp;- &nbsp;</h3>
            <h3 className="font-medium text-red-500">FASHION</h3>
        </div>
        <h1 className="font-semibold cursor-pointer text-center my-2 md:my-0 md:text-left text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-center my-2 md:my-0 md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque
          quod voluptate amet...
        </p>
        <Link href={'/lorem'} className="pb-2 underline underline-offset-4 font-medium max-w-fit my-1 text-sm text-[#111111] active:text-[#a7a7a7]">
          Read More
        </Link>
      </div>
    </div>
  )
}

export default RecentPosts
