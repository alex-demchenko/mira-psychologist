import { cn } from "@/utils/cn";
import HeaderItems from "./HeaderItems";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface Props {
  className?: string;
}

export default function HeaderMobile(props: Props) {
  const [open, setOpen] = useState(false);

  return (
    <div className={props.className}>
      <div className="flex justify-between items-center gap-4">
        <div className="text-2xl">@mira_koda</div>

        <div
          className="cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <X /> : <Menu />}
        </div>
      </div>

      {open && (
        <div className="relative">
          <div
            className="px-4 py-4 absolute -left-4 -right-4 bg-orange-500 shadow-lg"
            onClick={() => setOpen(false)}
          >
            <HeaderItems />
          </div>
        </div>
      )}
    </div>
  );
}
