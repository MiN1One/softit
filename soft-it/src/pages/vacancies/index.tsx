import Layout from "@/components/Common/Layout";
import VacanciesContainer from "@/components/VacanciesContainer/VacanciesContainer";
import { NextPage } from "next";

const VacanciesPage: NextPage = () => {
  return (
    <Layout>
      <main>
        <VacanciesContainer />
      </main>
    </Layout>
  );
};

export default VacanciesPage;