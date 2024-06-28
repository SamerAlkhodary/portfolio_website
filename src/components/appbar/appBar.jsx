import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import React, { useCallback, useEffect, useState } from 'react';
import useStyles from './style';
import { useMediaQuery } from 'react-responsive';
import Logo from '../../res/vertical_logo.svg';
import {useAtom} from 'jotai';
import { showMenuAtom } from '../../atoms';
import Hamburger from 'hamburger-react';

// eslint-disable-next-line react/prop-types
function CustomAppBar({refs,heroRef}) {
	const [shouldShowMenu, setShowMenu] = useAtom(showMenuAtom);
	const  toggleMenu= useCallback(() => {
		setShowMenu(!shouldShowMenu);
	},[shouldShowMenu,setShowMenu]);
	
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});


	const menuItems = ['About', 'Services', 'Contact'];

	const classes = useStyles();
	const itemPressed =(ref)=>{
		ref.current.scrollIntoView();
    
	};
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		setScrollPosition(position);
	};
	useEffect(() => {
		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, [window]);

	const appBarItems= useCallback(()=>{
		if(isDesktopOrLaptop){
			return(
				<div className={classes.itemRow}>
					<div  className={classes.logoItem}>
						<IconButton onClick={()=>{itemPressed(heroRef);}} style={{paddingLeft:0}}>
							<img style={{ height: 50, width: 300 }} src={Logo}alt={'logo'}/>	
						</IconButton>
					</div>
					<div className={classes.pagesRow}>
						<IconButton  onClick={()=>{itemPressed(refs[0]);}}>
							<Typography fontFamily={'Merriweather'} fontWeight={'bold'} className={ classes.menuButton} fontSize={'1.1em'}>
								{menuItems[0]}
							</Typography>
						</IconButton>
						<IconButton  onClick={()=>{itemPressed(refs[1]);}}>
							<Typography fontFamily={'Merriweather'} fontWeight={'bold'} className={classes.menuButton}fontSize={'1.1em'}>
								{menuItems[1]}
							</Typography>
						</IconButton>
						<IconButton onClick={()=>{itemPressed(refs[2]);}}>
							<Typography fontFamily={'Merriweather'} fontWeight={'bold'} className={classes.menuButton}fontSize={'1.1em'}>
								{menuItems[2]}
							</Typography>
						</IconButton>
					</div>
				</div>
			);
		}else{
			return(
				<div className={classes.row}>
					<IconButton onClick={()=>{itemPressed(heroRef);setShowMenu(false);}} style={{paddingLeft:0}}>
						<img style={{ width:'9em',height:'2em' }} src={Logo}alt={'logo'}/>	
					</IconButton>
					<div style={{padding:'0.5em'}}>
						<Hamburger toggled={shouldShowMenu} toggle={toggleMenu} color={'#EEC283'} size={28} />
					</div>
					
				</div>
			);
		}
	},[isDesktopOrLaptop,scrollPosition,shouldShowMenu]);

	return (
		<>
			<Slide apear={'false'} direction="down" in={scrollPosition >= 0 }>
				<AppBar position="fixed" className={classes.appBarHero} elevation={0}>
					<Toolbar style={{padding:0}}>
						{appBarItems()}
					</Toolbar>
				</AppBar>
			</Slide>

		</>
	);
}
export default CustomAppBar;
