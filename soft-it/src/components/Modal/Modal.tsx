import classNames from "classnames";
import { FC, memo, useEffect } from "react";
import CustomIcon from "../Common/CustomIcon";
import classes from './Modal.module.scss';

interface ModalProps {
  open: boolean;
  children: React.ReactNode;
  onClose: () => void;
}

const Modal: FC<ModalProps> = (props) => {
  const { onClose, open, children } = props;

  useEffect(() => {
    if (open) {
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.removeProperty('overflow');
    }
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div role="dialog" className={classNames(classes.modal)}>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.contentWrapper}>
        <button
          type="button"
          title="Close"
          onClick={onClose}
          className={classes.close}
        >
          <CustomIcon name="close" />
        </button>
        <div className={classes.content}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);