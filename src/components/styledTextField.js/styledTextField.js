import { TextField,  } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  & .MuiInput-root:after {
    border-bottom-color: #E4BFB7;
		border-width:3px
  }
	& .MuiInput-root:hover:not(.Mui-focused):before {
    border-bottom-color: white;
  }
	& .MuiInput-root:before {
    border-bottom-color: white;
  }
 
    &.Mui-focused fieldset {
      border-color: #E4BFB7;
    }
  }
`;
export default StyledTextField;