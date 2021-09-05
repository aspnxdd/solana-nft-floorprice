import { IoIosArrowBack } from "react-icons/io";
import Link from "next/link";
import { useTheme } from 'next-themes'


export default function LinkHome() {
  const { theme, setTheme } = useTheme()
  return (
    <>
     {/* <div>
      The current theme is: {theme}
      <button onClick={() => setTheme('light')}>Light Mode</button>
      <button onClick={() => setTheme('dark')}>Dark Mode</button>
    </div> */}
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
