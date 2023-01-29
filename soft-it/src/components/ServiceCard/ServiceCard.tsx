import classNames from "classnames";
import Link from "next/link";
import { FC, memo } from "react";
import CustomIcon from "../Common/CustomIcon";
import classes from './ServiceCard.module.scss';

interface ServiceCardProps {
  title: string;
  description: string;
  url?: string;
}

const ServiceCard: FC<ServiceCardProps> = (props) => {
  const { description, title, url } = props;
  
  let content = (
    <div className={classes.service}>
      <div className={classes.icon}>
        <CustomIcon name="arrow" />
      </div>
      <span className={classNames(
        classes.cardTitle, 
        "text text--lg text--light"
      )}>
        {title}
      </span>
      <p className="text">
        {description}
      </p>
    </div>
  );

  if (url) {
    content = (
      <Link href={url} title={title}>
        {content}
      </Link>
    );
  }

  return content;
};  

export default memo(ServiceCard);