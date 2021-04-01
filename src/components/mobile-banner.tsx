const MobileBanner = () => {
  return (
    <section className="py-4 px-8 bg-gray-100 border-b border-t md:hidden">
      <h3 className="uppercase text-gray-800 font-bold text-sm mb-1">
        Limited mobile experience
      </h3>
      <p className="text-gray-800 text-sm leading-tight">
        I highly recommend trying this page on a desktop computer, if possible.
        Larger screens provide access to more features, for a greatly enhanced
        experience.
      </p>
    </section>
  );
};

export default MobileBanner;
