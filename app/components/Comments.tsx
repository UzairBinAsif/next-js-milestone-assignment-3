import Link from "next/link";
import dpImg1 from "@/../public/girl.jpg";
import dpImg2 from "@/../public/boy2.jpg";
import dpImg3 from "@/../public/boy3.jpg";
import Image from "next/image";

const Comments = () => {
  const status = "Authenticated";
  return (
    <div>
      <h1 className="font-bold text-xl md:text-2xl">Comments</h1>
      {status === "Authenticated" ? (
        <div className="flex justify-between items-center
        ">
          <textarea placeholder="write a comment..." className="w-full p-2 rounded bg-[#e3e3e1] placeholder:text-gray-800" />
          <button className="px-3 bg-emerald-400 hover:bg-emerald-500 transition ease-in-out active:bg-emerald-600 py-2 mx-4 rounded text-[#ffffff]">write</button>
        </div>
      ) : (
        <div className=" flex">
        <Link href={"/login"} className="w-full text-sm mt-2 cursor-pointer underline active:text-white hover:text-black text-[#2e2e2e] transition ease-in-out underline-offset-2">Login to write a comment</Link>
        </div>
      )}
      <div>
        <div>
          <div className="mb-3">
          <div className="flex my-3">
            <div className="w-[30px] h-[30px] mr-3 mt-2">
              <Image
                src={dpImg3}
                alt="image"
                className="rounded-full object-cover w-full h-full"
              />
            </div>
            <div className="flex flex-col justify-center">
              <div className="font-semibold text-xs">Michael Tate</div>
              <div className="text-[10px] text-gray-800">17.09.2022</div>
            </div>
          </div>
            <p className="text-[11px] text-gray-800">Nobis ullam, vitae sequi neque fuga facere nesciunt, iste eaque enim perspiciatis blanditiis.</p>
          </div>
        </div>
        <div className="mb-3">
        <div className="flex my-3">
          <div className="w-[30px] h-[30px] mr-3 mt-2">
            <Image
              src={dpImg1}
              alt="image"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-xs">Emily Myers</div>
            <div className="text-[10px] text-gray-800">27.02.2020</div>
          </div>
        </div>
          <p className="text-[11px] text-gray-800">Apsum dolor sit amet, consectetur adipisicing elit. Eos incidunt, voluptates consequuntur quidem nesciunt possimus ut repellat obcaecati saepe, magnam eius harum nostrum hic tempore dolor ullam explicabo modi veritatis?</p>
        </div>
      </div>
      <div>
        <div className="mb-3">
        <div className="flex my-3">
          <div className="w-[30px] h-[30px] mr-3 mt-2">
            <Image
              src={dpImg2}
              alt="image"
              className="rounded-full object-cover w-full h-full"
            />
          </div>
          <div className="flex flex-col justify-center">
            <div className="font-semibold text-xs">John Carter</div>
            <div className="text-[10px] text-gray-800">22.04.2019</div>
          </div>
        </div>
          <p className="text-[11px] text-gray-800">Simus ut repellat obcaecati saepe, magnam eius harum nostrum hic tempore dolor ullam explicabo modi Lorem ipsum dolor sit amet, consectetur adipisicing elit. In iure porro eius.</p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
