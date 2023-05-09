import React from "react";
import debounce from "lodash.debounce";
import BigClose from "../ui/svg/BigClose";
import { Search } from "../ui/svg";
import { setValue } from "../../redux/slices/searchNumberSlice";
import { useAppDispatch } from "../../redux/hooks";
import { clearValue } from "../../redux/slices/searchNumberSlice";

interface SearchBarProps {}

const SearchBar: React.FC<SearchBarProps> = ({}) => {
  const [focused, setFocused] = React.useState(false);
  const [searchInputValue, setSearchInputValue] = React.useState<string>("");
  const dispatch = useAppDispatch();

  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);

  const setSearchValue = debounce((value) => {
    dispatch(setValue(value));
  }, 500);

  return (
    <div className="flex relative group">
      <Search
        className={`absolute top-1/2  -translate-y-1/2 transition-all duration-200 ease-out ${
          focused ? "left-[18px]" : "left-0"
        }`}
      />
      <input
        className="placeholder:text-[#5E7793] w-[482px] bg-inherit pl-[28px] border-none focus:pl-[48px] group py-2.5 transition-all duration-200 ease-out outline-[0.5px] outline-[#002CFB] rounded-[48px]"
        placeholder="Поиск по звонкам"
        value={searchInputValue}
        type="number"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setSearchInputValue(e.target.value);
          setSearchValue(e.target.value);
        }}
      />
      {searchInputValue && (
        <div
          onClick={() => {
            dispatch(clearValue());
            setSearchInputValue("");
          }}
        >
          <BigClose className="absolute right-[8px] top-[8px]" />
        </div>
      )}
    </div>
  );
};

export default SearchBar;
