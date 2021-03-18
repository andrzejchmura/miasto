import { ReactNode } from 'react';
import { getValueAsString } from 'lib/helpers';

type DataPointProps = {
  label: string;
  value?: number;
  unit?: string;
};
type DataGroupProps = {
  children: ReactNode;
};

export const DataPoint = ({ label, value, unit }: DataPointProps) => {
  const text = getValueAsString(value) + (unit ? ' ' + unit : '');

  return (
    <div className="flex-1">
      <p className="text-sm tracking-wide text-gray-600 font-semibold">
        {label}
      </p>
      <p className="text-xl">{text}</p>
    </div>
  );
};

export const DataGroup = ({ children }: DataGroupProps) => {
  return <div className="flex mb-4">{children}</div>;
};
