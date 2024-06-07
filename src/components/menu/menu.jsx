import { IconButton, List, ListItem, ListItemText } from '@mui/material';
import React from 'react';
import { Close} from '@mui/icons-material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from './style';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
// eslint-disable-next-line react/prop-types
function Menu({onClose, itemPressed, customRefs}) {

	const renderItem=(text,Icon,ref)=>{
		return (
			<List style={{paddingTop:30}}>
				<ListItem key='text' onClick={()=>{itemPressed(ref);onClose();}}>
					<div className={classes.iconTextRow}>
						<Icon className={classes.icon}/>
			
						<ListItemText primary={text} style={{color:'#EEC283'}} />
					</div>
				</ListItem>
			</List>
      

		);
	};
	const classes = useStyles();
	const menuItems = [
		{
			title:'About',icon:AccountCircleIcon,desitnation:customRefs[0]
		},
		{
			title:'Services',icon:CodeIcon,desitnation:customRefs[1]
		},
		{
			title:'Contact',icon:EmailIcon,desitnation:customRefs[2]
		}];
	return (
		<div className={classes.menu}>
			<IconButton onClick={onClose} className={classes.close} >
				<Close className={classes.icon}/>
			</IconButton>
			
			{menuItems.map((item)=> renderItem(item.title,item.icon,item.desitnation))}
		</div>
	);
}
export default Menu;
