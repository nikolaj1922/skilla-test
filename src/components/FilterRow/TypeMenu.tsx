import React from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import { useAppDispatch } from "../../redux/hooks";
import { setInOut, resetInOut } from "../../redux/slices/inOutSlice";

interface TypeMenuProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const TypeMenu: React.FC<TypeMenuProps> = ({ setOpen }) => {
  const menuRef = React.useRef<HTMLDivElement | null>(null);
  const dispatch = useAppDispatch();

  useOnClickOutside(menuRef, () => setOpen(false));

  return (
    <div
      ref={menuRef}
      className="w-[115px] bg-[#fff] z-10 absolute top-7 right-0 rounded-[4px] border-[1px] border-[#EAF0FA] shadow-[0px_0px_26px_rgba(233,237,243,0.8)] flex flex-col"
    >
      <div
        className={`date-menu--item`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          setOpen(false);
          dispatch(resetInOut());
        }}
      >
        Все типы
      </div>
      <div
        className={`date-menu--item`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          setOpen(false);
          dispatch(setInOut("1"));
        }}
      >
        Входящие
      </div>
      <div
        className={`date-menu--item`}
        onClick={(e: React.MouseEvent<HTMLDivElement>) => {
          e.stopPropagation();
          setOpen(false);
          dispatch(setInOut("0"));
        }}
      >
        Исходящие
      </div>
    </div>
  );
};

export default TypeMenu;
