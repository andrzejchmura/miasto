import { DataPoint, DataGroup } from 'components/statistic';
import { H2, P } from 'components/typography';
import { cityInfo as city } from 'lib/data';

const Overview = () => {
  return (
    <div className="">
      <H2>{city.name}</H2>
      <P>{city.description}</P>
      <DataGroup>
        <DataPoint label="Area" value={city.area} unit="km²" />
        <DataPoint label="Population" value={city.population} />
      </DataGroup>
      <DataGroup>
        <DataPoint label="Density" value={city.density} unit="/km²" />
        <DataPoint label="Buildings" value={city.buildings} />
      </DataGroup>
    </div>
  );
};

export default Overview;
