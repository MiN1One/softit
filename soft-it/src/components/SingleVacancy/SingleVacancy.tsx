import { IVacancy } from "@/interfaces/vacancies.interface";
import classNames from "classnames";
import { ChangeEvent, FC, FormEvent, memo, useCallback, useState } from "react";
import CustomIcon from "../Common/CustomIcon";
import Input, { CustomSelect, FileInput, PhoneInput } from "../Common/Input";
import Modal from "../Modal/Modal";
import classes from './SingleVacancy.module.scss';

const vacancy: IVacancy = {
  title: 'Frontend Developer',
  time: {
    from: '9',
    to: '18'
  },
  salaryRange: {
    from: 8_000_000,
    to: 12_000_000
  },
  id: '1',
  tasks: [
    "Support for improved projects and introduce new functionality to them",
    "Working with team",
    "Active participation in programming",
    "Interact with QA testers, Bendend programmers and Designers"
  ],
  requirements: [
    "Understand the principles of SOLID, KISS, DRY",
    "Work experience 1+ years",
    "Knowledge of JavaScript and its basic concept of work (prototypal inheritance, event loop, closures, this keyword, ...)",
    "At Java Scrpt it is possible to write modern code, knowing all the new tips",
    "VueJs + Vuex + Vue Router",
    "To work with Axios, API",
    "Learning new changes",
    "HTML / CSS",
    "SASS / LESS",
    "Knowledge of NPM / Yarn package maneuvers",
    "For Vue CLI / web package / Rollup project meeting",
    "Git, Git Flow",
    "Knowledge of NuxtJs"
  ],
  days: 'Monday - Saturday',
  conditions: [
    "- Sustainable development",
    "- Professional and team with their own values",
    "- Support in personal development",
    "- Good monthly salary",
    "- Office from the center"
  ],
};

const SingleVacancy: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [phoneCode, setPhoneCode] = useState('+998');
  const [file, setFile] = useState<File | null>(null);

  const getListItems = useCallback((list: string[]) => {
    return (
      <ul className={classes.list}>
        {list.map((item, index) => {
          return (
            <li className="text" aria-label={`requirement ${item}`} key={index}>
              {item}
            </li>
          );
        })}
      </ul>
    );
  }, []);

  const requirementEls = getListItems(vacancy.requirements);
  const conditionEls = getListItems(vacancy.conditions);
  const taskEls = getListItems(vacancy.tasks);

  const onSelectFile = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.target.files?.length) {
        return;
      }
      const [file] = Array.from(e.target.files);
      setFile(file);
    }, []
  );

  const onSubmitForm = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
    }, []
  );

  return (
    <section className={classNames('page-section', classes.vacancy)}>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <form className={classes.form} onSubmit={onSubmitForm}>
          <Input
            label="Full Name"
            placeholder="Enter you full name"
            required
          />
          <PhoneInput
            label="Your Phone Number"
            phoneProps={{
              phoneCode,
              setPhoneCode
            }}
            required
          />
          <CustomSelect
            label="Vacancy"
            options={[{
              label: vacancy.title,
              value: vacancy.id
            }]}
            required
          />
          <FileInput
            required
            onChange={onSelectFile}
            fileName={file?.name || ''}
            label="Your CV"
            placeholder="Upload your CV"
          />
          <button 
            title="Submit your resume" 
            type="submit"
            className="btn btn--colored"
          >
            Submit
            <CustomIcon name="rocket" />
          </button>
        </form>
      </Modal>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.head}>
            <h1 className="heading heading--2">
              {vacancy.title}
            </h1>
            <div className={classes.infoGroup}>
              <div className={classes.group}>
                <CustomIcon name="calendar" />
                {vacancy.days}
              </div>
              <div className={classes.group}>
                <CustomIcon name="clock" />
                {parseInt(vacancy.time.from).toFixed(2)} -&nbsp;
                {parseInt(vacancy.time.to).toFixed(2)}
              </div>
              <div className={classes.group}>
                <CustomIcon name="coin" />
                {vacancy.salaryRange.from} - {vacancy.salaryRange.to}
              </div>
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.textContainer}>
              <span className="text text--lg text--light">
                Requirements
              </span>
              {requirementEls}
            </div>
            <div className={classes.textContainer}>
              <span className="text text--lg text--light">
                Tasks
              </span>
              {taskEls}
            </div>
            <div className={classes.textContainer}>
              <span className="text text--lg text--light">
                Conditions
              </span>
              {conditionEls}
            </div>
          </div>
          <button 
            onClick={() => setShowModal(true)} 
            className="btn btn--colored btn--outline"
          >
            <CustomIcon name="arrow" />
            Send resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(SingleVacancy);