import React from 'react';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, InputAdornment, InputLabel, styled, TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import { FormFieldProps } from 'components/ui/FormField/FormField.interface';

import styles from 'components/ui/FormField/FormField.module.scss';

const CssTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    '&.Mui-focused fieldset': {
      borderColor: '#F0F1F7',
      borderWidth: 1,
    },
    '&.Mui-error fieldset': {
      borderColor: 'red',
    },
  },
});

const FormField: React.FC<FormFieldProps> = ({ name, label }) => {
  const { register, formState } = useFormContext();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <InputLabel className={styles.label}>{label}</InputLabel>
      <CssTextField
        {...register(name)}
        fullWidth
        required
        className={styles.textField}
        error={!!formState.errors[name]?.message}
        helperText={formState.errors[name]?.message?.toString()}
        id="outlined-required"
        placeholder={label}
        name={name}
        size="small"
        focused
        type={name === 'password' && !showPassword ? 'password' : 'text'}
        InputProps={{
          endAdornment:
            name === 'password' ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : null,
        }}
      />
    </>
  );
};

export default FormField;
