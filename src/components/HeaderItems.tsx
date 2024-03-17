import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function HeaderItems() {
  return (
    <>
      <div className="mb-4 md:mb-0 flex flex-col md:flex-row gap-5">
        <Link href="#about" className="text-xl md:text-base hover:underline">
          Про мене
        </Link>
        <Link href="#problems" className="text-xl md:text-base hover:underline">
          З чим працюю
        </Link>
        <Link href="#reviews" className="text-xl md:text-base hover:underline">
          Відгуки
        </Link>
        <Link href="#price" className="text-xl md:text-base hover:underline">
          Вартість
        </Link>
      </div>

      <div className="flex gap-4">
        <SocialIcon
          style={{ width: "2rem", height: "2rem" }}
          url="https://t.me/mira_koda"
          target="_blank"
          rel="nofollow"
        />
        <SocialIcon
          style={{ width: "2rem", height: "2rem" }}
          url="https://www.instagram.com/mirakoda_psiholog?igsh=YmVzaTVrbGNhaG4w"
          target="_blank"
          rel="nofollow"
        />
      </div>
    </>
  );
}
