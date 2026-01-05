import WorksView from "../../components/views/WorksView";
import { getPublishedWorks } from "../../models/works";

const WorksIndex = () => {
  const works = getPublishedWorks();

  return <WorksView works={works} />;
};

export default WorksIndex;
