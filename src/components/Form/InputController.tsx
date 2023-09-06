import * as React from 'react';
import { TextField, TextFieldProps } from '@mui/material';
import { FieldErrors, useController } from 'react-hook-form';

type InputControllerProps = {
  component?: (props: TextFieldProps) => JSX.Element;
  control: any;
  errors?: FieldErrors;
  name: string;
  min?: string;
  max?: string;
  step?: string;
};

export default function InputController({
  component = undefined,
  control,
  errors,
  name,
  min,
  max,
  step,
  defaultValue = '',
  size = 'small',
  fullWidth = true,
  margin = 'normal',
  ...props
}: InputControllerProps & TextFieldProps) {
  const {
    field: { ref, value, ...inputProps },
  } = useController({
    name,
    control,
    defaultValue,
  });

  const As = component ?? TextField;

  return (
    <As
      {...props}
      inputProps={{
        ...inputProps,
        value: value ?? '',
        min,
        max,
        step,
        autoComplete: 'off',
      }}
      size={size}
      margin={margin}
      fullWidth={fullWidth}
      sx={{ mt: 0.5 }}
    />
  );
}
