import classNames from "classnames";
import { FC, FormEvent, memo, useCallback, useState } from "react";
import CustomIcon from "../Common/CustomIcon";
import Input, { CustomSelect, PhoneInput, TextField } from "../Common/Input";
import classes from './SingleService.module.scss';

const projectOptions = [
  {
    value: 'website',
    label: 'Website',
  }
];

const SingleService: FC = () => {
  const [phoneCode, setPhoneCode] = useState('+998');

  const onSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();

    }, []
  );

  return (
    <section className={classNames('page-section', classes.service)}>
      <div className="container">
        <div className={classes.content}>
          <p className="text text--sub">
            Do you have a project?
          </p>
          <h1 className={classNames(classes.heading, "heading heading--3")}>
            We have a solution for you.
          </h1>
          <div className={classes.formWrapper}>
            <p className={classNames(classes.textContainer, "text text--sub")}>
              After you fill in this basic information, our responsible staff will contact you.
            </p>
            <form onSubmit={onSubmitForm} className={classes.form}>
              <div className={classes.formContent}>
                <Input
                  label="Enter Company Name"
                  placeholder="Your Company"
                  required
                />
                <Input
                  label="Enter Your Name"
                  placeholder="Your Name"
                  required
                />
                <PhoneInput 
                  phoneProps={{
                    phoneCode,
                    setPhoneCode,
                  }}
                  label="Your Phone number"
                  required
                />
                <CustomSelect
                  options={projectOptions}
                  label="Type of project"
                  required
                />
                <TextField 
                  required
                  placeholder="Write brief description of the project"
                />
              </div>
              <div className={classes.formFooter}>
                <button className="btn btn--colored btn--rocket btn--outline" type="submit">
                  Submit
                  <CustomIcon name="rocket" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(SingleService);