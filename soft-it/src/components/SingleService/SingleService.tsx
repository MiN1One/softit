import classNames from "classnames";
import { FC, FormEvent, memo, useCallback, useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import CustomIcon from "../Common/CustomIcon";
import Input, { CustomSelect, PhoneInput, TextField } from "../Common/Input";
import classes from './SingleService.module.scss';
import { IProjectType } from "@/interfaces/project.interface";
import { fetchData } from '@/utils/fetch.utils';
import { useGlobalContext } from "@/contexts/GlobalContext";

interface SingleServiceProps {
  serviceId: string;
}

const defaultForm = {
  phone_number: '',
  full_name: '',
  company_name: '',
  project_category_id: '',
  phone_code: '+998',
  description: ''
};

type IForm = typeof defaultForm;

const SingleService: FC<SingleServiceProps> = () => {
  const [form, setForm] = useState<IForm>(defaultForm);
  const { t } = useTranslation();
  const { activeLang } = useGlobalContext();
  const [success, setSuccess] = useState(false);
  const [projectTypes, setProjectTypes] = useState<IProjectType[]>([]);

  const onFormChange = useCallback((key: keyof IForm, val: any) => {
    setForm(prev => ({
      ...prev,
      [key]: val
    }));
  }, []);

  useEffect(() => {
    fetchData<IProjectType[]>('/project-categories', activeLang)
      .then(r => {
        setProjectTypes(r);
        onFormChange('project_category_id', r[0].id);
      });
  }, [activeLang]);

  const projectOptions = projectTypes.map(type => ({
    value: type.id.toString(),
    label: type.title,
  }));

  const onSubmitForm = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const result = await fetchData('/project-applications/', activeLang, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          ...form,
          project_category_id: +form.project_category_id,
          phone_number: form.phone_code + form.phone_number
        })
      });
      if (result) {
        setSuccess(true);
        setForm(defaultForm);
      }
    }, [form]
  );

  return (
    <section className={classes.service}>
      <div className="container">
        <div>
          <div className={classes.head}>
            <p className="text text--sub">
              {t('contactTitle')}
            </p>
            <h1 className={classNames(classes.heading, "heading heading--3")}>
              {t('contactSubtitle')}
            </h1>
          </div>
          <div className={classes.formWrapper}>
            <p className={classNames(classes.textContainer, "text text--sub")}>
              {t('contactWarning')}
            </p>
            <form onSubmit={onSubmitForm} className={classes.form}>
              <div className={classes.formContent}>
                <Input
                  label="Enter Company Name"
                  placeholder="Your Company"
                  value={form.company_name}
                  onChange={(e) => onFormChange('company_name', e.target.value)}
                  required
                />
                <Input
                  label={t('input.enter.name')!}
                  placeholder={t('input.name')!}
                  value={form.full_name}
                  onChange={(e) => onFormChange('full_name', e.target.value)}
                  required
                />
                <PhoneInput 
                  phoneProps={{
                    phoneCode: form.phone_code,
                    setPhoneCode: (val) => onFormChange('phone_code', val),
                  }}
                  value={form.phone_number}
                  onChange={(e) => onFormChange('phone_number', e.target.value)}
                  label={t('input.enter.phone')!}
                  required
                />
                <CustomSelect
                  options={projectOptions}
                  label={t('projectType')!}
                  required
                  value={form.project_category_id}
                  onChange={(e) => onFormChange('project_category_id', e.target.value)}
                />
                <TextField 
                  onChange={(e) => onFormChange('description', e.target.value)}
                  value={form.description}
                  required
                  placeholder={t('input.projectDescription')!}
                />
              </div>
              {success && (
                <p className="text text--success">
                  {t('success')}
                </p>
              )}
              <div className={classes.formFooter}>
                <button className="btn btn--colored btn--rocket btn--outline" type="submit">
                  {t('submit')}
                  <span>
                    <CustomIcon name="rocket" />
                    <CustomIcon name="rocket" />
                  </span>
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