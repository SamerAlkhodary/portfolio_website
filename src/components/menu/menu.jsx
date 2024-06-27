import {   ListItem, ListItemText } from '@mui/material';
import React, { useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from './style';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import { animated } from 'react-spring';
import { useAtom } from 'jotai';
import {  useSpring } from '@react-spring/web';
import { showMenuAtom } from '../../atoms';
// eslint-disable-next-line react/prop-types
function Menu({ customRefs}) {
	const itemPressed =(ref)=>{
		ref.current.scrollIntoView();
	};
	const classes = useStyles();
	const [showMenu,setShow] = useAtom(
		showMenuAtom,
	);
	useEffect(() => {
		if (showMenu) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
		// Cleanup on component unmount
		return () => {
			document.body.style.overflow = 'auto';

		};
	}, [showMenu]);

	const fadeInProps = useSpring({
		position: 'fixed',
		alignItems:'center',
		flexDirection: 'column',
		justifyContent:'center',
		pointerEvents:'auto',
		backgroundColor: '#242424',
		display: 'flex',
		zIndex:999,
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		opacity: showMenu ? 1 : 0,
		transform: showMenu ? 'translateY(0%)' : 'translateY(100%)',
		config: { tension: 280, friction: 60 },
	});

	const renderItem=(text,Icon,ref)=>{
		return (
			<ListItem key={text} onClick={()=>{itemPressed(ref);setShow(false);}}>
				<ListItemText primary={text} className={classes.menuItem} />
			</ListItem>      

		);
	};
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
		<animated.div style={fadeInProps}>
			{menuItems.map((item)=> renderItem(item.title,item.icon,item.desitnation))}
		</animated.div>
	);
}
export default Menu;
