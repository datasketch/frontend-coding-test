import Head from "next/head";
import Link from "next/link";
import { FaHome, FaArrowAltCircleLeft, FaQuestion } from "react-icons/fa";

function PageLayout({children , title}) {
  return (<>
      <Head>
        <title>{title}</title>

        {/* hope to have permision for using the favicon */}
        <link rel="shortcut icon" href="https://www.datasketch.co/favicon.ico" type="image/x-icon" />
      </Head>
      <header className="p-4 flex justify-between sticky top-0 bg-white">
        <h2 className="text-2xl">
          Tests <span className="font-extrabold text-red-violet">app</span>
        </h2>
      </header>
      <nav className="p-4 sticky top-2 flex justify-end">
        <ul className="flex w-[40vw] justify-evenly text-2xl text-robin-s-egg-blue-700">
          <li>
            <p onClick={()=>{history.back()}}>{<FaArrowAltCircleLeft className="cursor-pointer hover:text-robin-s-egg-blue-600 transition"/>}</p>
          </li>
          <li>
            <Link href="/">{<FaHome className="cursor-pointer hover:hover:text-robin-s-egg-blue-600 transition" />}</Link>
          </li>
          <li>
          <Link href="/about"><FaQuestion className="cursor-pointer hover:hover:text-robin-s-egg-blue-600 transition"/></Link>
          </li>
        </ul>
      </nav>
      <main>
      {children}
      </main>
      </>)
}

export default PageLayout