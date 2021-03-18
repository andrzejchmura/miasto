import Page from 'components/page';
import Region from 'components/region';

const RegionPage = () => {
  return (
    <Page>
      <div className="md:hidden text-lg p-4 font-medium">
        Miasto is not yet optimized for mobile. Please use a desktop for now.
      </div>
      <div className="hidden md:block">
        <Region />
      </div>
    </Page>
  );
};

export default RegionPage;
