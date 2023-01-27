import classNames from "classnames";
import { FC, memo } from "react";
import CustomIcon from "../Common/CustomIcon";
import classes from './ServiceItem.module.scss';

interface ServiceItemProps {
  title: string;
  description: string;
  value: string;
  onClick?: (value: string) => void;
}

const ServiceItem: FC<ServiceItemProps> = (props) => {
  const { description, title, onClick, value } = props;
  return (
    <div 
      className={classes.service} 
      onClick={
        typeof onClick === 'function' 
          ? () => onClick(value) 
          : undefined
      }
    >
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
};  

export default memo(ServiceItem);