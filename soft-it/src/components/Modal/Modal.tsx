import useHideScrollbar from "@/hooks/useHideScrollbar";
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

  useHideScrollbar(open);

  if (!open) {
    return null;
  }

  return (
    <div role="dialog" className={classNames(classes.modal)}>
      <div className={classes.backdrop} onClick={onClose} />
      <div className={classes.contentWrapper}>
        <div className={classes.content}>
          <button
            type="button"
            title="Close"
            onClick={onClose}
            className={classes.close}
          >
            <CustomIcon name="close" />
          </button>
          <div className={classes.body}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);