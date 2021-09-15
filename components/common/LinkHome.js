import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useTheme } from 'next-themes'


export default function LinkHome() {
  const { theme, setTheme } = useTheme()
  return (
    <>
    
      <Link href="/">
        <div className="home-link">
          <a className="a-link">
            <IoIosArrowBack></IoIosArrowBack>Home
          </a>
        </div>
      </Link>
    </>
  );
}
