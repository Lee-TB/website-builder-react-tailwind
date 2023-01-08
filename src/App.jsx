import logo from '~/assets/images/logo.svg';
import avatar from '~/assets/images/avatar.svg';
import {
  BsFillPlusSquareFill,
  BsFillImageFill,
  BsFileEarmarkTextFill,
  BsLaptopFill,
  BsFillTabletFill,
  BsFillPhoneFill
} from 'react-icons/bs';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { IoIosColorPalette, IoMdSettings, IoIosAlert } from 'react-icons/io';
import { GoChevronLeft } from 'react-icons/go';
import { BiChevronDown } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai';
import { SiWebpack } from 'react-icons/si';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <aside className="flex h-screen w-18 flex-col items-center border-r border-gray-200 bg-white">
        <div className="flex h-18 w-full items-center justify-center border-b border-gray-200">
          <a href="#" className="inline w-2/5">
            <img src={logo} alt="Logo" className="block" />
          </a>
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-600">
            <BsFillPlusSquareFill className="h-6 w-6" />
            <Tooltip>
              Add elements
              <span className="text-gray-400"> (A)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-600">
            <RiLayoutMasonryFill className="h-6 w-6" />
            <Tooltip>
              Layout
              <span className="text-gray-400"> (Y)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-600">
            <IoIosColorPalette className="h-6 w-6" />
            <Tooltip>
              Theme
              <span className="text-gray-400"> (T)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-600">
            <BsFileEarmarkTextFill className="h-6 w-6" />
            <Tooltip>
              Assets
              <span className="text-gray-400"> (S)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-600">
            <BsFillImageFill className="h-6 w-6" />
            <Tooltip>
              Images
              <span className="text-gray-400"> (I)</span>
            </Tooltip>
          </a>
        </nav>

        <div className="flex flex-col items-center gap-y-4 py-10">
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-600">
            <IoIosAlert className="h-6 w-6" />
            <Tooltip>Alert</Tooltip>
          </a>
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-600">
            <IoMdSettings className="h-6 w-6" />
            <Tooltip>Settings</Tooltip>
          </a>
          <button className="overflow-hidden rounded-full pt-2">
            <img className="h-10 w-10" src={avatar} alt="" />
          </button>
        </div>
      </aside>
      <div className="flex h-screen flex-1 flex-col">
        <header className="flex h-18 items-center justify-center gap-x-4 border-b border-gray-200 bg-white px-6">
          <button className="group flex items-center justify-center rounded-xl bg-gray-100 p-3 focus:ring focus:ring-gray-200">
            <GoChevronLeft className="h-6 w-6 text-gray-400 group-hover:text-blue-600" />
          </button>
          <button className="flex flex-col justify-center rounded-xl bg-gray-100 px-3 py-2 focus:ring focus:ring-gray-200">
            <div className="flex items-baseline">
              <span className="text-sm font-semibold text-gray-900">Page: Homepage - Dipa</span>
              <BiChevronDown className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-xs text-gray-400">https://www.dipainhouse.com/</div>
          </button>
          <button className="group flex items-center justify-center gap-1 rounded-xl bg-gray-100 p-3 focus:ring focus:ring-gray-200">
            <AiFillEye className="h-6 w-6 text-gray-400 group-hover:text-blue-600" />
            <span className="font-semibold text-gray-900 group-hover:text-blue-600">Preview</span>
          </button>

          <div className="h-full w-px bg-gray-200" />

          <div className="flex items-center gap-x-2">
            <button className="group flex items-center justify-center rounded-xl p-3 hover:bg-gray-100 focus:ring focus:ring-gray-200">
              <BsLaptopFill className="h-6 w-6 text-gray-400 group-hover:text-blue-600" />
            </button>
            <button className="group flex items-center justify-center rounded-xl p-3 hover:bg-gray-100 focus:ring focus:ring-gray-200">
              <BsFillTabletFill className="h-6 w-6 text-gray-400 group-hover:text-blue-600" />
            </button>
            <button className="group flex items-center justify-center rounded-xl p-3 hover:bg-gray-100 focus:ring focus:ring-gray-200">
              <BsFillPhoneFill className="h-6 w-6 text-gray-400 group-hover:text-blue-600" />
            </button>
            <button className="group flex items-center justify-center rounded-xl p-3 hover:bg-gray-100 focus:ring focus:ring-gray-200">
              <BsFillPhoneFill className="h-6 w-6 rotate-90 text-gray-400 group-hover:text-blue-600" />
            </button>
          </div>

          <div className="h-full w-px bg-gray-200" />

          <button className="flex flex-col justify-center rounded-xl bg-gray-100 p-3 focus:ring focus:ring-gray-200">
            <div className="flex items-baseline">
              <span className="text-sm font-bold text-gray-900">960 PX/100%</span>
              <BiChevronDown className="h-4 w-4 text-gray-400" />
            </div>
          </button>
          <button className="group flex items-center justify-center rounded-xl bg-gray-100 p-3 focus:ring focus:ring-gray-200">
            <SiWebpack className="h-6 w-6 text-gray-400 group-hover:text-blue-600" />
          </button>
        </header>
      </div>
      <aside className="h-screen w-[300px]"></aside>
    </div>
  );
}

export default App;
