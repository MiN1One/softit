import AboutContainer from "@/components/AboutContainer/AboutContainer";
import Layout from "@/components/Common/Layout";
import { NextPage } from "next";

const About: NextPage = () => {
  
  return (
    <Layout>
      <main>
        <AboutContainer />
      </main>
    </Layout>
  );
};

export default About;