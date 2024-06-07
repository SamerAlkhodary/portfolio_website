import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, SwipeableDrawer } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import React, { useCallback, useEffect, useState } from 'react';
import useStyles from './style';
import Menu from '../menu/menu';
import { useMediaQuery } from 'react-responsive';
import Logo from '../../res/vertical_logo.svg';

// eslint-disable-next-line react/prop-types
function CustomAppBar({refs,heroRef}) {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});

	const [isDrawerOpen, setDrawerOpen] = useState(false);

	const menuItems = ['About', 'Services', 'Contact'];

	const classes = useStyles();
	const itemPressed =(ref)=>{
		console.log(ref);
		ref.current.scrollIntoView();
    
	};
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.scrollY;
		console.log(window.scrollY);
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
					<IconButton onClick={()=>{itemPressed(heroRef);}} style={{paddingLeft:0}}>
						<img style={{ height: 50, width: 250 }} src={Logo}alt={'logo'}/>	
					</IconButton>
         
					<IconButton
						onClick={() => {
							setDrawerOpen(true);
						}}
						size="large"
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon fontSize='10' style={{color:'#EEC283'}} />
					</IconButton>
				</div>
			);
		}
	},[isDesktopOrLaptop,scrollPosition]);

	return (
		<>
			<Slide apear={'false'} direction="down" in={scrollPosition >= 0 }>
				<AppBar position="fixed" className={classes.appBarHero} elevation={0}>
					<Toolbar style={{padding:0}}>
						{appBarItems()}
					</Toolbar>
				</AppBar>
			</Slide>

			<SwipeableDrawer
				onOpen={()=>{}}
				swipeAreaWidth={0}
				elevation={20}
				anchor="right"
				open={isDrawerOpen}
				onClose={() => {
					setDrawerOpen(false);
				}}
			>
				<Menu customRefs={refs} itemPressed={itemPressed} onClose={()=>{setDrawerOpen(false);}}/>
			</SwipeableDrawer>
		</>
	);
}
export default CustomAppBar;
