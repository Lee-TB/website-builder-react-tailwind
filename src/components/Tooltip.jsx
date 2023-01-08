function Tooltip({ children }) {
  return (
    <div className="absolute inset-y-0 left-full items-center hidden group-hover:flex">
      <div className="whitespace-nowrap px-4 py-2 bg-white rounded-md font-semibold drop-shadow-lg text-sm text-gray-900">
        <div className="absolute -left-1 inset-y-0 flex items-center">
          <div className="h-4 w-4 rotate-45 bg-white"></div>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Tooltip;
