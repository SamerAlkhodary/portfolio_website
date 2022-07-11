import { TextField,  } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  background: transparent;
  & label.Mui-focused {
    color: grey;
  }
  & .MuiInput-underline:after {
    border-bottom-color: red;
  }
  & .MuiOutlinedInput-root {
    & fieldset {
      border-color: grey;
    }
    &:hover fieldset {
      border-color: black;
    }
    &.Mui-focused fieldset {
      border-color: #E4BFB7;
    }
  }
`;
export default StyledTextField;