import Page from 'components/page';

type ErrorProps = {
  status: number;
};

const Error = ({ status }: ErrorProps) => {
  const renderMessage = (status: number) => {
    if (status === 404) {
      return <h1>This page cannot be found.</h1>;
    }

    return <h1>An error occured</h1>;
  };

  return (
    <Page>
      <section>{renderMessage(status)}</section>
    </Page>
  );
};

export default Error;
