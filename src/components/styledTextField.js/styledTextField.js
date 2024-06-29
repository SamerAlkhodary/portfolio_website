import { TextField,  } from '@mui/material';
import styled from 'styled-components';

const StyledTextField = styled(TextField)`
  & .MuiInput-root:after {
    border-bottom-color: #EEC283;
		border-width:3px
  }
	& .MuiInput-root:hover:not(.Mui-focused):before {
    border-bottom-color: white;
  }
	& .MuiInput-root:before {
    border-bottom-color: white;
  }
 
    &.Mui-focused fieldset {
      border-color: #EEC283;
    }
  }
`;
export default StyledTextField;