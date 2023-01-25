import { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";

interface InputProps extends DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>, 
  HTMLInputElement
> {
  icon?: React.ReactNode;
  label?: string;
  onChange: (val: any) => void;
  value: string;
}

const Input: FC<InputProps> = (props) => {
  const {
    icon = null,
    label,
    onChange,
    value,
    ...restProps
  } = props;

  return (
    <div className="input-group">
      {label && (
        <label className="input-group__label">
          {label}
        </label>
      )}
      <div className="input-group__input-wrapper">
        {icon}
        <input
          {...restProps}
          className="input-group__input"
          onChange={(e) => onChange(e.target.value)}
          value={value}
        />
      </div>
    </div>
  );
};

export default Input;