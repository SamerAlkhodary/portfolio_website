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
import Logo from '../../res/logo.svg';

// eslint-disable-next-line react/prop-types
function CustomAppBar({refs,heroRef}) {
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});

	const [isDrawerOpen, setDrawerOpen] = useState(false);
	const menuItems = ['About', 'Projects', 'contact'];

	const classes = useStyles();
	const itemPressed =(ref)=>{
		console.log(ref);
		ref.current.scrollIntoView();
    
	};
	const [scrollPosition, setScrollPosition] = useState(0);
	const handleScroll = () => {
		const position = window.pageYOffset;
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
						<IconButton onClick={()=>{itemPressed(heroRef);}}>
							<img style={{ height: 50, width: 50 }} src={Logo}alt={'logo'}/>
						</IconButton>
					</div>
					<div className={classes.pagesRow}>
						<IconButton  onClick={()=>{itemPressed(refs[0]);}}>
							<Typography fontWeight={'bold'} className={classes.menuButton}>
								{menuItems[0]}
							</Typography>
						</IconButton>
						<IconButton  onClick={()=>{itemPressed(refs[1]);}}>
							<Typography fontWeight={'bold'} className={classes.menuButton}>
								{menuItems[1]}
							</Typography>
						</IconButton>
						<IconButton onClick={()=>{itemPressed(refs[1]);}}>
							<Typography fontWeight={'bold'} className={classes.menuButton}>
								{menuItems[2]}
							</Typography>
						</IconButton>
					</div>
				</div>
			);
		}else{
			return(
				<div className={classes.row}>
					<IconButton onClick={()=>{itemPressed(heroRef);}}>
						<img style={{ height: 35, width: 35 }} src={Logo}alt={'logo'}/>
					</IconButton>
         
					<IconButton
						className={classes.menuButton}
						onClick={() => {
							setDrawerOpen(true);
						}}
						size="large"
						color="inherit"
						aria-label="menu"
					>
						<MenuIcon fontSize='10' className={classes.menuIcon} />
					</IconButton>
				</div>
			);
		}
	},[isDesktopOrLaptop]);

	return (
		<>
			<Slide apear={false} direction="down" in={scrollPosition >= window.innerHeight}>
				<AppBar position="fixed" className={classes.appBar}>
					<Toolbar>
            
						{appBarItems()}
					</Toolbar>
				</AppBar>
			</Slide>

			<SwipeableDrawer
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
