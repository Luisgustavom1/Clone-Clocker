import React from 'react';
import { InputDivStyle } from './styles';

interface InputDivProps {
  type?: string
  label?: string
  placeholder?: string
  identify: string
  width?: string
}

const InputDiv: React.FC<InputDivProps> = (props) => {
  return(
      <InputDivStyle width={props.width ? props.width : '150px'}>
        {props.label && 
          <label 
            htmlFor={props.identify}
          >
            {props.label}
          </label>
        }
        <input
          id={props.identify} 
          name={props.identify}
          placeholder={props.placeholder}
          type={props.type ? props.type : 'text'}
        />
      </InputDivStyle>
  );
}

export default InputDiv;