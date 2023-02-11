import classNames from "classnames";
import {
  DetailedHTMLProps,
  Dispatch,
  FC,
  InputHTMLAttributes,
  SelectHTMLAttributes,
  SetStateAction,
  TextareaHTMLAttributes,
  useMemo,
  useRef
} from "react";
import CustomIcon from "./CustomIcon";
import countryPhoneCodes from '@assets/data/country-phone-codes.json';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>, 
  HTMLInputElement
>

type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>, 
  HTMLSelectElement
>

type TextFieldProps = DetailedHTMLProps<
  TextareaHTMLAttributes<HTMLTextAreaElement>,
  HTMLTextAreaElement
>

interface PhoneInputProps extends GeneralInputProps, InputProps {
  phoneProps: {
    phoneCode: string;
    setPhoneCode: Dispatch<SetStateAction<string>>;
    hideValue?: boolean;
  };
}

interface CustomSelectProps extends SelectProps {
  options: {
    label: string;
    value: string;
  }[];
}

interface GeneralInputProps {
  adjacentEl?: React.ReactNode;
  label?: string;
  labelSize?: string;
  wrapperClass?: string;
}

interface InputSkeletopProps extends GeneralInputProps {
  children: React.ReactNode;
}

const InputSkeleton: FC<InputSkeletopProps> = (props) => {
  const {
    children,
    label,
    labelSize,
    adjacentEl,
    wrapperClass,
  } = props;

  return (
    <div className="input-group">
      {label && (
        <label className={classNames(
          "input-group__label", 
          labelSize && `input-group__label--${labelSize}`,
        )}>
          {label}
        </label>
      )}
      <div className={classNames(
        adjacentEl && "input-group__input-wrapper--withAdjacentEl",
        "input-group__input-wrapper",
        wrapperClass
      )}>
        {adjacentEl}
        {children}
      </div>
    </div>
  );
};

export const PhoneInput: FC<PhoneInputProps> = (props) => {
  const {
    phoneProps,
    adjacentEl,
    label,
    labelSize,
    ...restProps
  } = props;

  return (
    <InputSkeleton
      adjacentEl={
        <CountrySelector 
          value={phoneProps.phoneCode} 
          onChange={(e) => phoneProps.setPhoneCode(e.target.value)}
        />
      }
      label={label}
      labelSize={labelSize}
      wrapperClass="input-group__input-wrapper--phone"
    >
      <input
        {...restProps}
        readOnly={props.readOnly || (!props.onChange && Boolean(props.value))}
        type="tel"
        className="input-group__input"
      />
    </InputSkeleton>
  );
};

export const CountrySelector: FC<SelectProps> = (props) => {
  const selectRef = useRef<HTMLSelectElement>(null);
  const countryEls = countryPhoneCodes.map((code, index) => {
    return (
      <option key={index} value={code.dial_code}>
        {code.dial_code} {code.name}
      </option>
    );
  });

  const selectedCountryCode = useMemo(() => {
    return countryPhoneCodes.find(code => (
      code.dial_code === props.value?.toString()
    ))?.code.toLocaleLowerCase();
  }, [props.value]);

  return (
    <div 
      className={classNames(
        "input-group__select-wrapper",
        "input-group__select-wrapper--country"
      )}
    >
      <figure>
        <img 
          src={`/flags/${selectedCountryCode || 'uz'}.png`}
          alt="Country Flag"
          width="100%"
          height="100%"
        />
      </figure>
      <select 
        value={countryPhoneCodes[0].dial_code} 
        {...props} 
        ref={selectRef}
      >
        {countryEls}
      </select>
      <span className="text--sub">{props.value}</span>
      <CustomIcon name="arrow-down" />
    </div>
  );
};

export const TextField: FC<
  TextFieldProps & GeneralInputProps
> = (props) => {
  const {
    label,
    labelSize,
    wrapperClass,
    value,
    adjacentEl,
    ...restProps
  } = props;

  return (
    <InputSkeleton
      label={label}
      labelSize={labelSize}
      wrapperClass={wrapperClass}
      adjacentEl={adjacentEl}
    >
      <textarea 
        {...restProps}
        readOnly={props.readOnly || (!props.onChange && Boolean(props.value))}
        className="input-group__text"
        value={value}
      />
    </InputSkeleton>
  );
};

const Input: FC<InputProps & GeneralInputProps> = (props) => {
  const {
    onChange,
    value,
    label,
    labelSize,
    adjacentEl,
    ...restProps
  } = props;

  return (
    <InputSkeleton 
      label={label}
      labelSize={labelSize}
      adjacentEl={adjacentEl}
    >
      <input
        {...restProps}
        onChange={typeof onChange === 'function' ? onChange : undefined}
        readOnly={props.readOnly || (!props.onChange && Boolean(props.value))}
        className="input-group__input"
      />
    </InputSkeleton>
  );
};

export const FileInput: FC<
  InputProps & GeneralInputProps & { fileName: string; }
> = (props) => {
  const {
    label,
    labelSize,
    adjacentEl,
    wrapperClass,
    fileName,
    ...restProps
  } = props;
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <InputSkeleton
      label={label}
      labelSize={labelSize}
      adjacentEl={<CustomIcon name="paperclip" />}
      wrapperClass={wrapperClass}
    >
      <div 
        onClick={() => inputRef.current?.click()}
        tabIndex={0}
        className={classNames(
          "input-group__input", 
          { 'text--sub': !fileName }
        )}
      >
        {fileName || restProps.placeholder}
        <CustomIcon name="add" />
      </div>
      <input 
        {...restProps} 
        ref={inputRef} 
        hidden 
        type="file"
        readOnly={props.readOnly || (!props.onChange && Boolean(props.value))}
      />
    </InputSkeleton>
  );
};

export const CustomSelect: FC<
  CustomSelectProps & GeneralInputProps
> = (props) => {
  const {
    label,
    adjacentEl,
    labelSize,
    options,
    ...restProps
  } = props;

  const optionEls = options.map((option, index) => {
    return (
      <option 
        key={option + index.toString()}
        value={option.value}
      >
        {option.label}
      </option>
    );
  });
  
  return (
    <InputSkeleton
      adjacentEl={adjacentEl}
      label={label}
      labelSize={labelSize}
    >
      <div className="input-group__select-wrapper">
        <select 
          value={options[0]?.value} 
          {...restProps} 
          className="input-group__select"
        >
          {optionEls}
        </select>
        <CustomIcon name="arrow-down" />
      </div>
    </InputSkeleton>
  );
};

export default Input;