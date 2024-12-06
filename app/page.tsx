"use client"
import App from "@/components/App";
import { Context } from "@/context/Context";
import Categories from "@/service/Categories";
import Products from "@/service/Products";
import { useContext, useState } from "react";

interface TagTypes {
  tagName: string;
  path: null | string;
}

export default function Home() {
  const { setTags } = useContext(Context);
  const [activeTag, setActiveTag] = useState<string | null>(null); 

  const tags: TagTypes[] = [
    {
      tagName: "All Plants",
      path: null,
    },
    {
      tagName: "New arrivals",
      path: "new-arrivals",
    },
    {
      tagName: "Sale",
      path: "sale",
    },
  ];

  function handleTagClick(tag: TagTypes) {
    setTags(tag.path); 
    setActiveTag(tag.tagName); 
  }

  return (
    <div>
      <App />
      <div className="flex justify-between w-[1200px] mx-auto">
        <div className="w-[36%]">
          <Categories />
        </div>
        <div className="w-[65%]">
          <div className="flex items-center justify-between">
            <ul className="flex items-center space-x-10">
              {tags.map((item: TagTypes, index: number) => (
                <li
                  key={index}
                  onClick={() => handleTagClick(item)}
                  className={`cursor-pointer text-[22px] ${
                    activeTag === item.tagName
                      ? "text-[#46A358] border-b-4 border-[#46A358]"
                      : "text-gray-600"
                  }`}
                >
                  {item.tagName}
                </li>
              ))}
            </ul>
            <p>Short by: Default sorting</p>
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
}
