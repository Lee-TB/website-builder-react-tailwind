import { BsFillPencilFill } from 'react-icons/bs';

export default function EditArea({ title, children }) {
  return (
    <div className="group/hero relative">
      <div className="border-blue-400 group-focus-within/hero:border-2">
        <div className="invisible group-focus-within/hero:visible">
          <div className="absolute bottom-full translate-x-2">
            <div className="flex w-fit items-center gap-x-2 rounded-t-xl bg-blue-500 p-2 py-1 text-sm font-medium text-white">
              <span>{title}</span>
              <span>
                <BsFillPencilFill className="text-xs" />
              </span>
            </div>
          </div>
          <div className="absolute inset-x-0 -top-1 flex justify-center">
            <div className="h-2 w-2 border-2 border-blue-400 bg-white"></div>
          </div>
          <div className="absolute inset-x-0 -bottom-1 flex justify-center">
            <div className="h-2 w-2 border-2 border-blue-400 bg-white"></div>
          </div>
          <div className="absolute -left-1 -top-1">
            <div className="h-2 w-2 border-2 border-blue-400 bg-white"></div>
          </div>
          <div className="absolute -right-1 -top-1">
            <div className="h-2 w-2 border-2 border-blue-400 bg-white"></div>
          </div>
          <div className="absolute -left-1 -bottom-1">
            <div className="h-2 w-2 border-2 border-blue-400 bg-white"></div>
          </div>
          <div className="absolute -right-1 -bottom-1">
            <div className="h-2 w-2 border-2 border-blue-400 bg-white"></div>
          </div>
        </div>
        <div contentEditable className="outline-none">
          {children}
        </div>
      </div>
    </div>
  );
}
