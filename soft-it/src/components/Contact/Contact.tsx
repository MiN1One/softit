import classNames from "classnames";
import { FC, FormEvent, memo, useCallback, useState } from "react";
import CustomIcon from "../Common/CustomIcon";
import Input from "../Common/Input";
import Moon from "../Common/Moon";
import classes from './Contact.module.scss';

const Contact: FC = () => {
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');

  const onSubmitRequest = useCallback(
    (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();

    }, []
  );

  return (
    <section className={classes.contact}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.moonWrapper}>
            <Moon className={classes.moonImage} />
          </div>
          <h3 className="heading heading--3">
            Do you have a project?
          </h3>
          <p className="text text--sub">
            We have a solution
          </p>
          <form className={classes.form}>
            <div className={classes.formContent}>
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Your name"
                adjacentEl={<CustomIcon name="user" />}
                required
              />
              <Input
                required
                onChange={(e) => setPhone(e.target.value)}
                adjacentEl={<CustomIcon name="phone" />}
                value={phone}
                type="tel"
                placeholder="+998"
              />
            </div>
            <button
              title="Submit the form"
              type="submit"
              onSubmit={onSubmitRequest}
              className={classNames(classes.btn, "btn btn--colored")}
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);