import Post from "./Post"

export default function Hero() {
  return (
    <div>
    <div className="flex items-center justify-around text-2xl sm:text-3xl text-[#111111] h-fit">
      <span className="font-bold">WRITE</span>
      <span className="align-middle">|</span>
      <span className="font-bold">SHARE</span>
      <span className="align-middle">|</span>
      <span className="font-bold">INSPIRE</span>
    </div>
    <Post />
    </div>
  );
}
