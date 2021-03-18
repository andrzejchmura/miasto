import { memo } from 'react';

type ToasterProps = {
  toast: boolean;
};

const Toaster = ({ toast }: ToasterProps) => {
  if (!toast) {
    return null;
  }

  return (
    <div className="absolute bottom-0 w-full flex justify-center pointer-events-none z-50">
      <div className="mb-12 px-6 py-3 bg-gray-700 text-gray-50 font-semibold rounded-full shadow">
        Zoom in to see more details
      </div>
    </div>
  );
};

export default memo(Toaster);
