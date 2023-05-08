import React from "react";

interface DateMenuProps {
  open: boolean;
  period: string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DateMenu: React.FC<DateMenuProps> = ({ open, period, setOpen }) => {
  return (
    <div className="w-[204px] h-[239px] bg-[#fff] z-10 absolute top-7 right-0 rounded-[4px] border-[1px] border-[#EAF0FA] shadow-[0px_0px_26px_rgba(233,237,243,0.8)]">
      <div
        className="date-menu--item text-[#002CFB]"
        onClick={() => setOpen(false)}
      >
        {period}
      </div>
      <div className="date-menu--item">Неделя</div>
      <div className="date-menu--item">Месяц</div>
      <div className="date-menu--item">Год</div>
    </div>
  );
};

export default DateMenu;
