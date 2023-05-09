import React from "react";
import SearchBar from "./SearchBar";
import TypeMenu from "./TypeMenu";
import Close from "../ui/svg/Close";
import { filters } from "../../lib/filters";
import { ArrowDown } from "../ui/svg";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { resetInOut } from "../../redux/slices/inOutSlice";

interface FilterRowProps {}

const FilterRow: React.FC<FilterRowProps> = ({}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const { title, inOutState } = useAppSelector((state) => state.inOut);
  const dispatch = useAppDispatch();

  const clearFilters = () => dispatch(resetInOut());

  return (
    <div className="text-[#5E7793] text-sm flex items-center justify-between pt-[14px] pb-[11px] w-[1440px]">
      <SearchBar />
      <div className="flex items-center justify-center space-x-[35px]">
        {inOutState !== null && (
          <div
            className="flex items-center space-x-2 hover:text-[#002CFB] cursor-pointer transition duration-150 ease-out group"
            onClick={clearFilters}
          >
            <span>Сбросить фильтры</span>
            <Close />
          </div>
        )}
        <div
          className="group flex space-x-2 justify-center items-center cursor-pointer relative"
          onClick={() => setOpen(true)}
        >
          <span className="group-hover:text-[#002CFB] transition duration-150 ease-out">
            {title}
          </span>
          <ArrowDown />
          {open && <TypeMenu setOpen={setOpen} />}
        </div>
        {filters.map((item) => (
          <div
            key={item}
            className="group flex space-x-2 justify-center items-center cursor-pointer"
          >
            <span className="group-hover:text-[#002CFB] transition duration-150 ease-out">
              {item}
            </span>
            <div>
              <ArrowDown />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterRow;
