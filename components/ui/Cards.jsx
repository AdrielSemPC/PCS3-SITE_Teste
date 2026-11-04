
export function CardGolpe({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-100 p-6 rounded-xl">
      <div className="flex items-start gap-4">
        <div className="bg-gray-50 p-3 rounded-lg">
          {icon}
        </div>

        <div>
          <h3 className="font-bold text-[#1a2e35]">
            {title}
          </h3>

          <p className="text-sm text-gray-500 mt-1">
            {desc}
          </p>
        </div>
      </div>
    </div>
  );
}

export function Step({ number, title, desc }) {
  return (
    <div className="flex items-start gap-4">
      <div className="bg-yellow-100 text-yellow-600 font-bold w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
        {number}
      </div>

      <div>
        <h3 className="font-bold text-[#1a2e35] text-lg">
          {title}
        </h3>

        <p className="text-gray-500 text-sm">
          {desc}
        </p>
      </div>
    </div>
  );
}

export function CardAcao({ icon, title, desc }) {
  return (
    <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
      <div className="text-[#e05943] mb-4">
        {icon}
      </div>

      <h3 className="font-bold text-[#1a2e35] mb-2">
        {title}
      </h3>

      <p className="text-sm text-gray-500">
        {desc}
      </p>
    </div>
  );
}
