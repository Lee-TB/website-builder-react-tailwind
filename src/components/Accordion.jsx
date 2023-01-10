export default function Accordion({ title, children }) {
  return (
    <details className="group">
      <summary className="list-none">
        <div className="flex cursor-pointer justify-between gap-y-4 border-b border-gray-200 p-4">
          <span className="text-sm font-bold">{title}</span>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="text-x h-4 w-4 text-gray-400 transition-all duration-300 group-open:rotate-180">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
      </summary>
      <div className="max-h-0 overflow-hidden border-b p-4 transition-all duration-500 group-open:max-h-full">
        {children}
      </div>
    </details>
  );
}
