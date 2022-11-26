import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import { BiLibrary } from "react-icons/bi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { RiAddBoxLine, RiHeartFill, RiCloseLine } from "react-icons/ri";

const Sidebar = (props) => {
  const { showSidebar, setShowSidebar } = props;

  return (
    <div
      className={`bg-black fixed top-0 w-64 h-full p-6 flex flex-col justify-between ${
        showSidebar ? "left-0" : "-left-full"
      } md:left-0 transition-all duration-300 z-50`}
    >
      <div className="md:hidden absolute right-4 top-4 ">
        <button
          className="text-2xl p-2 box-content"
          onClick={() => setShowSidebar(false)}
        >
          <RiCloseLine />
        </button>
      </div>
      <div>
        <div className="mb-8">
          <Image
            src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_White.png"
            width={130}
            height={130}
            alt="Spotify"
          />
        </div>
        <nav>
          <ul className="flex flex-col gap-y-4">
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <AiFillHome className="text-2xl" /> Ana sayfa
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <HiMagnifyingGlass className="text-2xl" /> Ara
              </Link>
            </li>
            <li className="mb-8">
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <BiLibrary className="text-2xl" /> Kitaplığın
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <RiAddBoxLine className="text-2xl" /> Çalma Listesi Oluştur
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center gap-4 hover:text-gray-100 transition-colors"
              >
                <RiHeartFill className="text-2xl" /> Beğenilen Şarkılar
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div>
        <nav>
          <ul className="flex flex-col gap-y-2">
            <li>
              <Link href="#" className="text-xs hover:underline">
                Çerezler
              </Link>
            </li>
            <li>
              <Link href="#" className="text-xs hover:underline">
                Gizlilik
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
