import Image from 'next/image';
import Link from 'next/link';
import Page from 'components/page';
import cx from 'classnames';

const HomePage = () => {
  return (
    <>
      <Page>
        <main className="container mx-auto text-center py-4 px-4 mt-16">
          <h3 className="uppercase text-gray-300 font-bold text-sm">
            Beta release
          </h3>
          <h1 className="font-semibold text-3xl leading-tight mb-2 text-gray-900">
            Miasto is an interactive city explorer
          </h1>
          <h2 className="text-lg mb-8 font-medium text-gray-500">
            View source for this project on{' '}
            <a
              href="https://github.com/andrzejchmura/miasto"
              className="text-purple-600 font-medium"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
          </h2>
          <div className="relative">
            <Image
              src="/hero.png"
              width={1380}
              height={884}
              className="opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t  from-white"></div>
            <div className="absolute inset-0 z-10 flex justify-center items-center">
              <Link href="/gdynia">
                <a
                  className={cx(
                    'bg-gray-900 px-6 py-3 rounded-full outline-none',
                    'md:mt-40 lg:mt-80 lg:px-8 lg:py-4',
                    'transition-shadow shadow-lg hover:shadow-xl',
                    'text-gray-50 text-xl font-semibold lg:text-2xl',
                    'focus:ring-4 ring-purple-400'
                  )}
                >
                  Explore
                </a>
              </Link>
            </div>
          </div>
        </main>
        <footer className="container mx-auto text-center my-8">
          <p className="text-gray-500">© 2021 Andrzej Chmura</p>
        </footer>
      </Page>
    </>
  );
};

export default HomePage;
