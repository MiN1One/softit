import { IVacancy, IVacancyInfoItem } from "@/interfaces/vacancies.interface";
import classNames from "classnames";
import { ChangeEvent, FC, FormEvent, memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import CustomIcon from "../Common/CustomIcon";
import Input, { CustomSelect, FileInput, PhoneInput } from "../Common/Input";
import Modal from "../Modal/Modal";
import classes from './SingleVacancy.module.scss';
import { fetchData } from "@/utils/fetch.utils";
import { useGlobalContext } from "@/contexts/GlobalContext";

interface SingleVacancyProps {
  vacancy: IVacancy;
}

const defaultForm = {
  file: null,
  full_name: '',
  phone_number: '',
  vacancy_id: '',
};

type FormType = typeof defaultForm & { file: null | File };

const SingleVacancy: FC<SingleVacancyProps> = (props) => {
  const { vacancy } = props;
  const [showModal, setShowModal] = useState(false);
  const [phoneCode, setPhoneCode] = useState('+998');
  const { activeLang } = useGlobalContext();
  const [file, setFile] = useState<File | null>(null);
  const { t } = useTranslation();
  const [form, setForm] = useState<FormType>(defaultForm);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (!showModal) {
      setSuccess(false);
    }
  }, [showModal]);

  const getListItems = useCallback((list: IVacancyInfoItem[]) => {
    return (
      <ul className={classes.list}>
        {list.map((item, index) => {
          return (
            <li className="text" aria-label="Requirement Item" key={index}>
              {item.content}
            </li>
          );
        })}
      </ul>
    );
  }, []);

  const onChangeForm = useCallback((key: keyof FormType, val: any) => {
    setForm(prev => ({
      ...prev,
      [key]: val
    }))
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
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        const formData = new FormData();
        formData.append('full_name', form.full_name);
        formData.append('vacancy_id', vacancy.id.toString());
        formData.append('phone_number', phoneCode + form.phone_number);
        formData.append('cv_file', file as any);

        const result = await fetchData('/resumes/', activeLang, {
          method: 'POST',
          body: formData,
        });

        if (result) {
          setSuccess(true);
          setForm(defaultForm);
          setFile(null);
        }
      } catch (er) {
        console.log('Error submiting form', er);
      }
    }, [activeLang, form, phoneCode]
  );

  return (
    <section className={classNames('page-section', classes.vacancy)}>
      <Modal open={showModal} onClose={() => setShowModal(false)}>
        <form className={classes.form} onSubmit={onSubmitForm}>
          <Input
            label={t('input.name')!}
            placeholder={t('input.enter.name')!}
            required
            value={form.full_name}
            onChange={(e) => onChangeForm('full_name', e.target.value)}
          />
          <PhoneInput
            label={t('input.phone')!}
            phoneProps={{
              phoneCode,
              setPhoneCode
            }}
            required
            value={form.phone_number}
            onChange={(e) => onChangeForm('phone_number', e.target.value)}
          />
          <CustomSelect
            label={t('vacancy')!}
            options={[{
              label: vacancy.title,
              value: vacancy.id.toString()
            }]}
            value={form.vacancy_id}
            onChange={(e) => onChangeForm('vacancy_id', e.target.value)}
            required
          />
          <FileInput
            required
            onChange={onSelectFile}
            fileName={file?.name || ''}
            label={t('input.cv')!}
            placeholder={t('input.enter.cv')!}
          />
          {success && (
            <p className="text text--success">
              {t('success')}
            </p>
          )}
          <button 
            title={t('input.enter.cv')!} 
            type="submit"
            className="btn btn--colored"
          >
            {t('submit')}
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
                {vacancy.working_days}
              </div>
              <div className={classes.group}>
                <CustomIcon name="clock" />
                {vacancy.working_hours}
              </div>
              <div className={classes.group}>
                <CustomIcon name="coin" />
                {vacancy.salary}
              </div>
            </div>
          </div>
          <div className={classes.body}>
            <div className={classes.textContainer}>
              <span className="text text--lg text--light">
                {t('requirements')}
              </span>
              {requirementEls}
            </div>
            <div className={classes.textContainer}>
              <span className="text text--lg text--light">
                {t('tasks')}
              </span>
              {taskEls}
            </div>
            <div className={classes.textContainer}>
              <span className="text text--lg text--light">
                {t('conditions')}
              </span>
              {conditionEls}
            </div>
          </div>
          <button 
            onClick={() => setShowModal(true)} 
            className="btn btn--colored btn--outline"
          >
            <CustomIcon name="arrow" />
            {t('sendResume')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default memo(SingleVacancy);