import React, { useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import useStyles from './style';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';
import { animated } from 'react-spring';
import { useAtom } from 'jotai';
import {  useSpring } from '@react-spring/web';
import { languageAtom, showMenuAtom } from '../../atoms';
import { Typography } from '@material-ui/core';
import translate from '../../res/strings/strings';
// eslint-disable-next-line react/prop-types
function Menu({ customRefs}) {
	const [language,setLanguage] = useAtom(languageAtom);

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
		gap:'2em',
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

	const renderItem=(text,Icon,onClick)=>{
		return (
			<li onClick={onClick} className={classes.menuItem} key={text}>
				<Typography className={classes.txt} variant='h6' fontFamily={'Merriweather'} fontWeight='bold'>
					{text}
				</Typography>
			</li>
		);
	};
	const menuItems = [
		{
			title:translate('about'),icon:AccountCircleIcon,onClick:()=>{itemPressed(customRefs[0]);setShow(false);}
		},
		{
			title:translate('services'),icon:CodeIcon,onClick:()=>{itemPressed(customRefs[1]);setShow(false);}
		},
		{
			title: translate('projects'),icon:EmailIcon,onClick:()=>{itemPressed(customRefs[2]);setShow(false);}
		},
		{
			title: translate('contact'),icon:EmailIcon,onClick:()=>{itemPressed(customRefs[3]);setShow(false);}
		},
		
		{
			title:translate('locale'),icon:EmailIcon,onClick:()=>{
				if(language ==='en-US')
					setLanguage('hu-HU');
				else
					setLanguage('en-US');
			}
		}];
	return (
		<animated.div style={fadeInProps}>
			{menuItems.map((item)=> renderItem(item.title,item.icon,item.onClick))}
		</animated.div>
	);
}
export default Menu;
