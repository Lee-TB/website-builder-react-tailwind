import logo from '~/assets/images/logo.svg';
import avatar from '~/assets/images/avatar.svg';
import webLogo from '~/assets/images/logo.png';
import billy from '~/assets/images/billy.png';
import alphaPay from '~/assets/images/alpha-pay.png';
import {
  BsFillPlusSquareFill,
  BsFillImageFill,
  BsFileEarmarkTextFill,
  BsLaptopFill,
  BsFillTabletFill,
  BsFillPhoneFill
} from 'react-icons/bs';
import {
  MdAlignHorizontalLeft,
  MdAlignHorizontalCenter,
  MdAlignHorizontalRight,
  MdAlignVerticalTop,
  MdAlignVerticalCenter,
  MdAlignVerticalBottom
} from 'react-icons/md';
import { RiLayoutMasonryFill } from 'react-icons/ri';
import { IoIosColorPalette, IoMdSettings, IoIosAlert } from 'react-icons/io';
import { GoChevronLeft } from 'react-icons/go';
import { BiChevronDown } from 'react-icons/bi';
import { AiFillEye } from 'react-icons/ai';
import { SiWebpack } from 'react-icons/si';
import { HiUserGroup } from 'react-icons/hi';
import Tooltip from './components/Tooltip';
import Accordion from './components/Accordion';
import EditArea from './components/EditArea';

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
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-500">
            <BsFillPlusSquareFill className="h-6 w-6" />
            <Tooltip>
              Add elements
              <span className="text-gray-400"> (A)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-500">
            <RiLayoutMasonryFill className="h-6 w-6" />
            <Tooltip>
              Layout
              <span className="text-gray-400"> (Y)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-500">
            <IoIosColorPalette className="h-6 w-6" />
            <Tooltip>
              Theme
              <span className="text-gray-400"> (T)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-500">
            <BsFileEarmarkTextFill className="h-6 w-6" />
            <Tooltip>
              Assets
              <span className="text-gray-400"> (S)</span>
            </Tooltip>
          </a>
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-500">
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
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-500">
            <IoIosAlert className="h-6 w-6" />
            <Tooltip>Alert</Tooltip>
          </a>
          <a
            href="#"
            className="group relative mx-auto rounded-xl p-3 text-gray-400 hover:bg-gray-100 hover:text-blue-500">
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
            <GoChevronLeft className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          </button>
          <button className="flex flex-col justify-center rounded-xl bg-gray-100 px-3 py-2 focus:ring focus:ring-gray-200">
            <div className="flex items-baseline">
              <span className="text-sm font-bold text-gray-900">Page: Homepage - Dipa</span>
              <BiChevronDown className="h-4 w-4 text-gray-400" />
            </div>
            <div className="text-xs text-gray-400">https://www.dipainhouse.com/</div>
          </button>
          <button className="group flex items-center justify-center gap-1 rounded-xl bg-gray-100 p-3 focus:ring focus:ring-gray-200">
            <AiFillEye className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
            <span className="text-sm font-bold text-gray-900 group-hover:text-blue-500">Preview</span>
          </button>

          <div className="h-full w-px bg-gray-200" />

          <div className="flex items-center gap-x-2">
            <button className="group flex items-center justify-center rounded-xl p-3 hover:bg-gray-100 focus:ring focus:ring-gray-200">
              <BsLaptopFill className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
            </button>
            <button className="group flex items-center justify-center rounded-xl p-3 hover:bg-gray-100 focus:ring focus:ring-gray-200">
              <BsFillTabletFill className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
            </button>
            <button className="group flex items-center justify-center rounded-xl p-3 hover:bg-gray-100 focus:ring focus:ring-gray-200">
              <BsFillPhoneFill className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
            </button>
            <button className="group flex items-center justify-center rounded-xl p-3 hover:bg-gray-100 focus:ring focus:ring-gray-200">
              <BsFillPhoneFill className="h-6 w-6 -rotate-90 text-gray-400 group-hover:text-blue-500" />
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
            <SiWebpack className="h-6 w-6 text-gray-400 group-hover:text-blue-500" />
          </button>
        </header>
        <main className="flex-1 overflow-y-scroll">
          <div className="m-12 bg-white">
            <nav className="flex border-b py-4 px-8">
              <img src={webLogo} alt="" className="h-11 w-11" />
              <div className="ml-auto flex items-center gap-x-4">
                <ul className="flex items-center gap-x-4">
                  <li>
                    <a href="#" className="font-bold capitalize text-gray-900">
                      <EditArea>projects</EditArea>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-bold capitalize text-gray-900">
                      <EditArea>services</EditArea>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-bold capitalize text-gray-900">
                      <EditArea>the team</EditArea>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="font-bold capitalize text-gray-900">
                      <EditArea>insight</EditArea>
                    </a>
                  </li>
                </ul>
                <button className="rounded-full bg-blue-600 px-8 py-3 font-medium text-white">
                  <EditArea>Hire us</EditArea>
                </button>
              </div>
            </nav>
            <section className="bg-white py-16 px-12">
              <div className="flex flex-col gap-y-8">
                <EditArea title="H1 - hero_title">
                  <h2 className="text-6xl font-bold">We craft digital products for bussiness and user goals.</h2>
                </EditArea>
                <EditArea title="Paragraph">
                  <p className="w-5/6 text-xl text-gray-400">
                    Help find solutions with UI/UX designs that are intuitive and in accordance with client bussiness
                    goals. We provide a high-quality service in UI/UX Design & Development.
                  </p>
                </EditArea>
                <div className="flex gap-x-4">
                  <div className="rounded-full bg-blue-600 py-4 px-8 text-sm font-medium text-white">
                    <EditArea title={'btn-text1'}>Let's work together</EditArea>
                  </div>
                  <div className="rounded-full border py-4 px-8 text-sm font-medium text-blue-600">
                    <EditArea title={'btn-text2'}>Check our work</EditArea>
                  </div>
                </div>
              </div>
            </section>
            <section className="bg-white py-16 px-12">
              <div>
                <h2 className="mb-4 text-3xl font-bold">
                  <EditArea title={'heading1'}>Our Projects</EditArea>
                </h2>
                <div className="flex gap-x-12">
                  <figure>
                    <img
                      src={billy}
                      alt="billy project"
                      className="aspect-square rounded-xl rounded-xl object-cover shadow-md"
                    />
                    <figcaption className="mt-2 font-medium">
                      <EditArea>Billy</EditArea>
                    </figcaption>
                  </figure>
                  <figure>
                    <img
                      src={alphaPay}
                      alt="alpha-pay project"
                      className="aspect-square rounded-xl rounded-xl object-cover shadow-md"
                    />
                    <figcaption className="mt-2 font-medium">
                      <EditArea>AlphaPay</EditArea>
                    </figcaption>
                  </figure>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
      <aside className="flex min-h-screen w-[300px] flex-col border-l border-gray-200 bg-white">
        <div className="flex h-18 items-center justify-between gap-x-4 border-b border-gray-200 px-4 font-semibold">
          <button className="group flex flex-1 items-center gap-x-2 rounded-xl bg-gray-100 p-3 focus:ring focus:ring-gray-200">
            <HiUserGroup className="text-gray-400 group-hover:text-blue-500" />
            <span className="text-sm font-bold group-hover:text-blue-500">Invite</span>
          </button>
          <button className="flex flex-1 items-center justify-center rounded-xl bg-blue-500 px-8 py-3 text-sm font-bold text-white focus:ring focus:ring-blue-200">
            Publish
          </button>
        </div>
        <div>
          <div className="flex items-center justify-between gap-x-4 border-b border-gray-200 p-4">
            <span className="text-sm font-bold">Selector</span>
            <span>
              <span className="text-gray-400">Inheriting</span>
              <span className="text-sm font-bold"> 2 Selectors</span>
            </span>
          </div>
          <div className="flex flex-col justify-center gap-y-4 border-b border-gray-200 p-4">
            <button className="flex w-full items-center justify-between rounded-xl border bg-gray-100 px-3 py-1">
              <div className="flex items-center gap-x-2 text-sm font-semibold text-blue-500">
                <span className="rounded-lg bg-white p-2 shadow">
                  <BsLaptopFill />
                </span>
                <span className="rounded-lg bg-blue-100 p-2">H1 - hero_title</span>
              </div>
              <div>
                <BiChevronDown className="text-2xl text-gray-400" />
              </div>
            </button>
            <span className="text-sm font-semibold text-gray-400">1 on this page, 7 on other pages.</span>
          </div>
          <Accordion title="Layout">
            <div className="flex justify-between border-gray-200">
              <button className="rounded-lg border-2 bg-white p-1">
                <MdAlignHorizontalLeft className="text-2xl text-gray-400" />
              </button>
              <button className="rounded-lg border-2 bg-white p-1">
                <MdAlignHorizontalCenter className="text-2xl text-gray-400" />
              </button>
              <button className="rounded-lg border-2 bg-white p-1">
                <MdAlignHorizontalRight className="text-2xl text-gray-400" />
              </button>
              <button className="rounded-lg border-2 bg-white p-1">
                <MdAlignVerticalTop className="text-2xl text-gray-400" />
              </button>
              <button className="rounded-lg border-2 bg-white p-1">
                <MdAlignVerticalCenter className="text-2xl text-gray-400" />
              </button>
              <button className="rounded-lg border-2 bg-white p-1">
                <MdAlignVerticalBottom className="text-2xl text-gray-400" />
              </button>
            </div>
          </Accordion>
          <Accordion title="Spacing">
            <div className="relative flex items-center justify-center rounded-xl border-2 border-dashed border-gray-200 px-12 py-10">
              <span className="absolute top-2 left-2 text-sm font-medium uppercase text-gray-400">margin</span>
              <div className="relative w-full">
                <span className="absolute bottom-2 right-2 text-sm font-medium uppercase text-gray-400">padding</span>
                <div className="absolute inset-x-0 top-0 flex -translate-y-1/2 flex-col items-center justify-center gap-1 text-sm font-medium">
                  <input type="text" defaultValue={20} className="h-4 w-5 text-center outline-none " />
                  <div className="h-2 w-2 border-2 border-blue-500 bg-white"></div>
                  <input type="text" defaultValue={0} className="h-4 w-5 text-center outline-none " />
                </div>
                <div className="absolute inset-x-0 bottom-0 flex translate-y-1/2 flex-col items-center justify-center gap-1 text-sm font-medium">
                  <input type="text" defaultValue={0} className="h-4 w-5 text-center outline-none " />
                  <div className="h-2 w-2 border-2 border-blue-500 bg-white"></div>
                  <input type="text" defaultValue={20} className="h-4 w-5 text-center outline-none " />
                </div>
                <div className="absolute inset-y-0 left-0 flex -translate-x-1/2 items-center gap-1 text-sm font-medium">
                  <input type="text" defaultValue={0} className="h-4 w-5 text-center outline-none " />
                  <div className="h-2 w-2 border-2 border-blue-500 bg-white"></div>
                  <input type="text" defaultValue={0} className="h-4 w-5 text-center outline-none " />
                </div>
                <div className="absolute inset-y-0 right-0 flex translate-x-1/2 items-center gap-1 text-sm font-medium">
                  <input type="text" defaultValue={0} className="h-4 w-5 text-center outline-none " />
                  <div className="h-2 w-2 border-2 border-blue-500 bg-white"></div>
                  <input type="text" defaultValue={0} className="h-4 w-5 text-center outline-none " />
                </div>

                <div className="h-24 w-full rounded-xl border-2 border-blue-500 px-10 py-8">
                  <div className="h-full w-full rounded bg-gray-200"></div>
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="Size">
            <div className="grid grid-cols-2 gap-4">
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <span className="pointer-events-none select-none text-sm font-medium text-gray-400">W</span>
                </div>
                <input
                  type="text"
                  defaultValue="Auto"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold outline-none"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <span className="pointer-events-none select-none text-sm font-medium text-gray-400">H</span>
                </div>
                <input
                  type="text"
                  defaultValue="Auto"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold outline-none"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <span className="pointer-events-none select-none text-sm font-medium text-gray-400">Max-W</span>
                </div>
                <input
                  type="text"
                  defaultValue="Auto"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold outline-none"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <span className="pointer-events-none select-none text-sm font-medium text-gray-400">Max-H</span>
                </div>
                <input
                  type="text"
                  defaultValue="Auto"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold outline-none"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <span className="pointer-events-none select-none text-sm font-medium text-gray-400">Min-W</span>
                </div>
                <input
                  type="text"
                  defaultValue="Auto"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold outline-none"
                />
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 flex items-center pl-2">
                  <span className="pointer-events-none select-none text-sm font-medium text-gray-400">Min-H</span>
                </div>
                <input
                  type="text"
                  defaultValue="Auto"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2 text-right text-sm font-semibold outline-none"
                />
              </div>

              <div className="col-span-2">
                <div className="relative flex gap-x-5 rounded-xl border bg-gray-50 p-2 text-sm font-medium">
                  <span className="select-none text-gray-400">Overflow</span>
                  <div className="flex items-center gap-x-1">
                    <AiFillEye className="text-lg text-gray-400 " />
                    <span>Invisible</span>
                  </div>
                  <BiChevronDown className="absolute right-1 text-xl text-gray-400" />
                </div>
              </div>
            </div>
          </Accordion>
          <Accordion title="Typography"></Accordion>
          <Accordion title="Position"></Accordion>
          <Accordion title="Border"></Accordion>
          <Accordion title="Background"></Accordion>
        </div>
      </aside>
    </div>
  );
}

export default App;
