import Image from "next/image";
import I1 from "@/../public/scenery-1.jpg";
import Link from "next/link";

const Post = () => {
  return (
    <div className="flex flex-col md:flex-row items-center my-[6vh] max-h-fit md:my-[12vh]">
      <div className="md:max-w-[45%] cursor-pointer flex justify-center items-center lg:max-w-[400px] mr-[2vw]">
        <Image
          src={I1}
          alt={"image"}
          className="rounded-sm shadow-sm w-[90%]"
        />
      </div>
      <div className="flex flex-col h-fit items-center md:items-start justify-around md:justify-between">
        <h1 className="font-semibold cursor-pointer text-center my-2 md:my-0 md:text-left text-lg">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-center my-2 md:my-0 md:text-left">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eaque
          quod voluptate amet, quo assumenda molestias consequuntur odio ratione
          omnis nulla quisquam
        </p>
        <Link href={'/lorem'}><button className="px-8 py-3 font-medium max-w-fit my-2 rounded-md bg-[#d8d8d8] active:bg-[#a7a7a7]">
          Read More
        </button></Link>
      </div>
    </div>
  );
};

export default Post;
