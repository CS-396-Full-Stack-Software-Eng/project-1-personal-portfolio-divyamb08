import Experience from '../sections/Experience';
import { Layout } from "../components/Layout";
import InfoData from "../../info.json";

const ExperiencePage: React.FC = () => {
    return (
        <Layout>
          <Experience
            experienceArray={InfoData.experienceSection.experiences}
            resumeLink={InfoData.experienceSection.resumeLink}
          />
        </Layout>
      );
};

export default ExperiencePage;