import { ReactNode } from 'react';
import { Arrow } from 'icons';
import cx from 'classnames';

type TypographyProps = {
  children: ReactNode;
  className?: string;
};

export const H2 = ({ children, className }: TypographyProps) => (
  <h4
    className={cx(
      'text-3xl font-medium tracking-wide leading-normal text-gray-800',
      className
    )}
  >
    {children}
  </h4>
);

export const H4 = ({ children, className }: TypographyProps) => (
  <h4
    className={cx(
      'uppercase font-medium text-sm tracking-wide text-purple-600 leading-loose',
      className
    )}
  >
    {children}
  </h4>
);

export const P = ({ children, className }: TypographyProps) => (
  <p className={cx('mb-4 text-gray-700', className)}>{children}</p>
);

export const Li = ({ children, className }: TypographyProps) => (
  <li className={cx('mb-2 text-gray-700 flex', className)}>
    <span className="inline-block flex-none w-5 h-5 mt-0.5 mr-2 text-purple-600">
      <Arrow />
    </span>
    <span className="block">{children}</span>
  </li>
);

export const Aside = ({ children, className }: TypographyProps) => (
  <aside
    className={cx(
      'my-4 p-3',
      'bg-purple-50 text-sm rounded-md text-purple-800',
      className
    )}
  >
    {children}
  </aside>
);
