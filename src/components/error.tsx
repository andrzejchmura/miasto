import Link from 'next/link';
import cx from 'classnames';

const Error = () => {
  return (
    <main className="container mx-auto text-center py-4 px-4 mt-16">
      <h3 className="uppercase text-gray-300 font-bold text-sm">
        404: Whooops
      </h3>
      <h1 className="font-semibold text-3xl leading-tight mb-2 text-gray-900">
        The page you're looking for is beyond our reach.
      </h1>
      <div className="max-w-6xl mx-auto flex justify-center items-center mt-16">
        <Link
          href="/gdynia"
          className={cx(
            'bg-gray-900 rounded-full outline-none',
            'px-6 py-3 lg:px-8 lg:py-4',
            'transition-shadow shadow-lg hover:shadow-xl',
            'text-gray-50 text-xl font-semibold lg:text-2xl',
            'focus:ring-4 ring-purple-400'
          )}
        >
          Back to explorer
        </Link>
      </div>
    </main>
  );
};

export default Error;
