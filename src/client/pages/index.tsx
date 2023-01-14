import { GetStaticProps, NextPage } from 'next';

interface HomePageProps {
  data: string;
}

const IndexPage: NextPage = ({ data }: HomePageProps) => {
  return (
    <main>
      <h1>{data}</h1>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  const response = await fetch(process.env.SERVER_HOST + '/test');
  const data = await response.text();

  return {
    props: {
      data,
    },
    revalidate: 100,
  };
};

export default IndexPage;