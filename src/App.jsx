import logo from '~/assets/images/logo.svg';
import avatar from '~/assets/images/avatar.svg';
import { BsFillPlusSquareFill, BsFillImageFill, BsFileEarmarkTextFill } from 'react-icons/bs';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { IoIosColorPalette, IoMdSettings, IoIosAlert } from 'react-icons/io';
import Tooltip from './components/Tooltip';

function App() {
  return (
    <div className="flex bg-gray-100 font-sans text-gray-900">
      <aside className="w-18 h-screen border-r border-gray-200 bg-white flex flex-col items-center">
        <div className="h-18 w-full flex items-center justify-center border-b border-gray-200">
          <a href="#" className="inline w-2/5">
            <img src={logo} alt="Logo" className="block" />
          </a>
        </div>
        <nav className="flex flex-1 flex-col gap-y-4 pt-10">
          <a
            href="#"
            className="group relative rounded-xl p-3 text-gray-400 hover:text-blue-600 hover:bg-gray-100 mx-auto">
            <BsFillPlusSquareFill className="h-6 w-6" />
            <Tooltip>
              Add elements
              <span className="text-gray-400"> (A)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-3 text-gray-400 hover:text-blue-600 hover:bg-gray-100 mx-auto">
            <RiLayoutMasonryFill className="h-6 w-6" />
            <Tooltip>
              Layout
              <span className="text-gray-400"> (Y)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-3 text-gray-400 hover:text-blue-600 hover:bg-gray-100 mx-auto">
            <IoIosColorPalette className="h-6 w-6" />
            <Tooltip>
              Theme
              <span className="text-gray-400"> (T)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-3 text-gray-400 hover:text-blue-600 hover:bg-gray-100 mx-auto">
            <BsFileEarmarkTextFill className="h-6 w-6" />
            <Tooltip>
              Assets
              <span className="text-gray-400"> (S)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-3 text-gray-400 hover:text-blue-600 hover:bg-gray-100 mx-auto">
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
            className="group relative rounded-xl p-3 text-gray-400 hover:text-blue-600 hover:bg-gray-100 mx-auto">
            <IoIosAlert className="h-6 w-6" />
            <Tooltip>Alert</Tooltip>
          </a>
          <a
            href="#"
            className="group relative rounded-xl p-3 text-gray-400 hover:text-blue-600 hover:bg-gray-100 mx-auto">
            <IoMdSettings className="h-6 w-6" />
            <Tooltip>Settings</Tooltip>
          </a>
          <button className="pt-2 overflow-hidden rounded-full">
            <img className="h-10 w-10" src={avatar} alt="" />
          </button>
        </div>
      </aside>
    </div>
  );
}

export default App;
