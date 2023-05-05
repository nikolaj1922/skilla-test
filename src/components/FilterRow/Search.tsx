import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

interface SearchProps {}

const Search: React.FC<SearchProps> = ({}) => {
  const [focused, setFocused] = React.useState(false);

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  //Доделать крестик
  return (
    <div className="flex relative">
      <MagnifyingGlassIcon
        className={`icon h-5 w-5 group-focus:left-[18px] absolute top-1/2  -translate-y-1/2 transition-all duration-200 ease-out ${
          focused ? "left-[18px]" : "left-0"
        }`}
      />
      <input
        className="placeholder:text-[#5E7793] w-[482px] bg-inherit pl-[28px] focus:pl-[48px] group py-2.5 transition-all duration-200 ease-out outline-[0.5px] outline-[#002CFB] rounded-[48px]"
        placeholder="Поиск по звонкам"
        onFocus={onFocus}
        onBlur={onBlur}
      />
    </div>
  );
};

export default Search;
