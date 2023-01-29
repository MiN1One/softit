import Layout from "@/components/Common/Layout";
import SingleService from "@/components/SingleService/SingleService";
import { NextPage } from "next";

const Service: NextPage = () => {
  return (
    <Layout>
      <main>
        <SingleService />
      </main>
    </Layout>
  );
};

export default Service;