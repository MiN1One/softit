import Layout from "@/components/Common/Layout";
import SingleVacancy from "@/components/SingleVacancy/SingleVacancy";
import { NextPage } from "next";

const SingleVacancyPage: NextPage = () => {
  return (
    <Layout>
      <main>
        <SingleVacancy />
      </main>
    </Layout>
  );
};

export default SingleVacancyPage;