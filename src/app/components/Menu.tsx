import React from "react";

const Menu = () => {
  return (
    <div className="hidden sm:block sm:w-[30%] pl-4">
      <h1 className="font-bold text-xl md:text-2xl">Most Popular</h1>
      <div className="flex flex-col text-[10px] my-2 gap-1">
        <button className="cursor-default my-2 bg-emerald-400 text-[#ffffff] px-1.5 py-0.5 w-fit rounded-full">culture</button>
        <h4 className="font-medium cursor-pointer">Dolor Lorem ipsum dolor sit amet. </h4>
        <div>
          <div className="font-semibold">Sarah Doe</div>
          <div>05.03.2021</div>
        </div>
      </div>
      <div className="flex flex-col text-[10px] my-2 gap-1">
        <button className="cursor-default my-2 bg-red-400 text-[#ffffff] px-1.5 py-0.5 w-fit rounded-full">travel</button>
        <h4 className="font-medium cursor-pointer">Lorem, ipsum dolor sit amet consectetur adipisicing.iquid itaq</h4>
        <div>
         <div className="font-semibold">Paul Carter</div>
          <div>16.04.2019</div>
        </div>
      </div>
      <div className="flex flex-col text-[10px] my-2 gap-1">
        <button className="cursor-default my-2 bg-orange-400 text-[#ffffff] px-1.5 py-0.5 w-fit rounded-full">gaming</button>
        <h4 className="font-medium cursor-pointer">Amet consectetur adipisicing elit. Iure culpa quod eum quae aliquid repellenq</h4>
        <div>
          <div className="font-semibold">Justin Ben</div>
          <div>05.07.2024</div>
        </div>
      </div>
      <div className="flex flex-col text-[10px] my-2 gap-1">
        <button className="cursor-default my-2 bg-blue-400 text-[#ffffff] px-1.5 py-0.5 w-fit rounded-full">entertainment</button>
        <h4 className="font-medium cursor-pointer">Modi! Lorem ipsum dolor sit amet consectetur Laborum totam qu</h4>
        <div>
          <div className="font-semibold">Emily Rose</div>
          <div>23.02.2021</div>
        </div>
      </div>
      <div className="flex flex-col text-[10px] my-2 gap-1">
        <button className="cursor-default my-2 bg-purple-400 text-[#ffffff] px-1.5 py-0.5 w-fit rounded-full">fasion</button>
        <h4 className="font-medium cursor-pointer">Molestias, modi! Laborum totam quae delectus aliquid itaq</h4>
        <div>
          <div className="font-semibold">John Miller</div>
          <div>01.03.2023</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
