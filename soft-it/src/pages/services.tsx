import Layout from "@/components/Common/Layout";
import ServicesContainer from "@/components/ServicesContainer/ServicesContainer";
import { NextPage } from "next";

const Services: NextPage = () => {
  return (
    <Layout>
      <main>
        <ServicesContainer />
      </main>
    </Layout>
  );
};

export default Services;