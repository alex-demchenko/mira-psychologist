import { cn } from "@/utils/cn";
import HeaderItems from "./HeaderItems";

interface Props {
  className?: string;
}

export default function HeaderDesktop(props: Props) {
  return (
    <div
      className={cn("flex justify-between items-center gap-4", props.className)}
    >
      <div className="text-2xl">@mira_koda</div>
      <HeaderItems />
    </div>
  );
}
