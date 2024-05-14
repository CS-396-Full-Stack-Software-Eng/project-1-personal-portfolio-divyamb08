import Projects from '../sections/Projects';
import { Layout } from "../components/Layout";
import InfoData from "../../info.json";

const ProjectsPage: React.FC = () => {
    return (
        <Layout>
          <Projects
            projectsArray={InfoData.projectSection.projects}
            githubLink={InfoData.projectSection.githubLink}
          />
        </Layout>
      );
};

export default ProjectsPage;