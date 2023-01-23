import { ICommonItem } from "@/interfaces/common.interface";
import classNames from "classnames";
import Link from "next/link";
import { FC, memo, useCallback, useState, DetailedHTMLProps, HTMLAttributes } from "react";
import classes from './Dropdown.module.scss';

interface DropdownProps extends 
  DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    items: ICommonItem[];
    label: string | React.ReactNode;
    closeOnClick?: boolean;
    onClickItem?: (value: any) => void;
  }

const Dropdown: FC<DropdownProps> = (props) => {
  const {
    items,
    onClickItem,
    label,
    closeOnClick = true,
    ...restProps
  } = props;
  const [open, setOpen] = useState(false);

  const handleItemClick = useCallback((value: any) => {
    onClickItem!(value);
    if (closeOnClick) {
      setOpen(false);
    }
  }, [closeOnClick]);
  
  const dropdownItemEls = items.map(item => {
    let content: string | React.ReactNode = item.label;
    if (item.url && !onClickItem) {
      content = (
        <Link href={item.url} title={item.label}>
          {content};
        </Link>
      );
    }
    return (
      <div
        tabIndex={0}
        aria-label={item.label}
        key={item.value}
        onClick={
          typeof onClickItem === 'function'
            ? () => handleItemClick(item.value) 
            : undefined
        }
        className={classes.item}
      >
        {content}
      </div>
    ); 
  });

  return (
    <div 
      {...restProps}
      tabIndex={0}
      className={classNames(
        classes.dropdown, 
        restProps.className,
        { [classes.active]: open }
      )}
    >
      <div className="btn btn--primary" onClick={() => setOpen(p => !p)}>
        {label}
      </div>
      <div className={classes.list}>
        {dropdownItemEls}
      </div>
    </div>
  );
};

export default memo(Dropdown);