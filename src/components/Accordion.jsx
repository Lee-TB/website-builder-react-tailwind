import { useRef } from 'react';

export default function Accordion({ title, children }) {
  const chevron = useRef(null);

  return (
    <details
      onToggle={(e) => {
        if (e.target.open) {
          chevron.current.classList.add('rotate-180');
        } else {
          chevron.current.classList.remove('rotate-180');
        }
      }}>
      <summary className="list-none">
        <div className="flex cursor-pointer justify-between gap-y-4 border-b border-gray-200 p-4">
          <span className="text-sm font-bold">{title}</span>
          <span>
            <svg
              ref={chevron}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="3"
              stroke="currentColor"
              className="text-x h-4 w-4 text-gray-400 transition-all">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </div>
      </summary>
      <div>{children}</div>
    </details>
  );
}
