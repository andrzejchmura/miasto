import Head from 'components/head';
import cx from 'classnames';

type PageProps = {
  children: React.ReactNode;
};

const Page = ({ children }: PageProps) => {
  return (
    <div
      className={cx(
        'relative antialiased',
        'bg-white dark:bg-gray-900',
        'text-gray-700 dark:text-gray-50'
      )}
    >
      <Head />
      {children}
    </div>
  );
};

export default Page;
