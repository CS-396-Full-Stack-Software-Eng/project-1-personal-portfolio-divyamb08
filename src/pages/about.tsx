import About from '../sections/About';
import { Layout } from "../components/Layout";
import InfoData from "../../info.json";

const AboutPage: React.FC = () => {
    return (
        <Layout>
          <About about={InfoData.aboutSection.html} />
        </Layout>
      );
};

export default AboutPage;
