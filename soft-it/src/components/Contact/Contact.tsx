import classNames from "classnames";
import { FC, FormEvent, memo, useCallback, useState } from "react";
import { useTranslation } from "next-i18next";
import CustomIcon from "../Common/CustomIcon";
import Input from "../Common/Input";
import Moon from "../Common/Moon";
import classes from './Contact.module.scss';
import { useGlobalContext } from "@/contexts/GlobalContext";
import { fetchData } from '@/utils/fetch.utils';

const Contact: FC = () => {
  const [phone, setPhone] = useState('');
  const { activeLang } = useGlobalContext();
  const [name, setName] = useState('');
  const { t } = useTranslation();

  const onSubmitRequest = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      try {
        e.preventDefault();
        await fetchData('/applications', activeLang, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            full_name: name,
            phone_number: phone
          })
        });
        setPhone('');
        setName('');
      } catch (er) {
        console.log('Submit error', er);
      }
    }, [phone, name, activeLang]
  );

  return (
    <section className={classes.contact}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.moonWrapper}>
            <Moon className={classes.moonImage} />
          </div>
          <h3 className="heading heading--3">
            {t('contactTitle')}
          </h3>
          <p className="text text--sub">
            {t('contactSubtitle')}
          </p>
          <form className={classes.form} onSubmit={onSubmitRequest}>
            <div className={classes.formContent}>
              <Input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder={t('input.name')!}
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
              title={t('submitTheForm')!}
              type="submit"
              className={classNames(classes.btn, "btn btn--colored")}
            >
              {t('submit')}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);