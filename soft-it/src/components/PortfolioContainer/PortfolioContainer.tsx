import { IProject, IProjectType } from "@/interfaces/project.interface";
import classNames from "classnames";
import { FC, memo, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import Portfolio from "../Portfolio/Portfolio";
import Tags from "../Tags/Tags";
import classes from './PortfolioContainer.module.scss';

interface PortfolioContainerProps {
  projects: IProject[];
  projectCategories: IProjectType[];
}

const PortfolioContainer: FC<PortfolioContainerProps> = (props) => {
  const { projects, projectCategories } = props;
  const { t } = useTranslation();
  
  const allProjectsTag = t('top7');
  const [activeTag, setActiveTag] = useState<string>(allProjectsTag);

  const tagItems = [allProjectsTag, ...projectCategories.map(({ title }) => title)];

  const [filteredProjects, setFilteredProjects] = useState<IProject[]>([]);

  useEffect(() => {
    if (activeTag === allProjectsTag) {
      setFilteredProjects(projects);
    } else {
      const filteredProjects = projects.filter(project => (
        project.category_name === activeTag
      ));
      setFilteredProjects(filteredProjects);
    }
  }, [activeTag, allProjectsTag]);

  return (
    <section className={classNames("page-section", classes.portfolio)}>
      <div className="page-section__head">
        <h1 className="heading heading--xlg">
          {t('portfolio')}
        </h1>
      </div>
      <div className="page-section__body">
        <div className="container">
          <Tags
            items={tagItems}
            onClickTag={setActiveTag}
            activeTag={activeTag}
          />
        </div>
        <Portfolio 
          plainLayout={activeTag !== allProjectsTag}
          projects={filteredProjects}
        />
      </div>
    </section>
  );
};

export default memo(PortfolioContainer);