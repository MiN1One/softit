import classNames from "classnames";
import { FC, memo } from "react";
import classes from './Tags.module.scss';

interface TagsProps {
  items: string[];
  onClickTag: (tag: string) => void;
  activeTag?: string;
}

const Tags: FC<TagsProps> = (props) => {
  const { items, onClickTag, activeTag } = props;
  const tagEls = items.map((item, index) => {
    return (
      <li 
        aria-label={item} 
        role="button" 
        onClick={() => onClickTag(item)}
        className={classNames(
          'btn btn--outline', 
          classes.tag,
          { 'btn--colored': activeTag === item }
        )}
        key={index}
      >
        {item}
      </li>
    );
  });
  return (
    <ul className={classes.list}>
      {tagEls}
    </ul>
  ); 
};

export default memo(Tags);