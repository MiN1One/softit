import Layout from "@/components/Common/Layout";
import PortfolioContainer from "@/components/PortfolioContainer/PortfolioContainer";
import { NextPage } from "next";

const PortfolioPage: NextPage = () => {
  return (
    <Layout>
      <main>
        <PortfolioContainer />
      </main>
    </Layout>
  );
};

export default PortfolioPage;