import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, SwipeableDrawer } from '@material-ui/core';
import Slide from '@material-ui/core/Slide';
import React, { useCallback, useEffect, useState } from 'react';
import useStyles from './style';
import Menu from '../menu/menu';
import { isMobile } from 'react-device-detect';
import Logo from '../../res/logo.svg';
// eslint-disable-next-line react/prop-types
function CustomAppBar({refs,heroRef}) {
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
		if(isMobile){
			return(
				<div className={classes.row}>
					<IconButton onClick={()=>{itemPressed(heroRef);}}>
						<IconButton onClick={()=>{itemPressed(heroRef);}}>
							<img style={{ height: 35, width: 35 }} src={Logo}alt={'logo'}/>
						</IconButton>
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

		}else{
      
			return(
				<div className={classes.itemRow}>
					<IconButton onClick={()=>{itemPressed(heroRef);}}>
						<img style={{ height: 50, width: 50 }} src={Logo}alt={'logo'}/>
					</IconButton>
					<IconButton  onClick={()=>{itemPressed(refs[0]);}}>
						<Typography fontWeight={'bold'} className={classes.menuButton}>
							{menuItems[0]}
						</Typography>
					</IconButton>
					<IconButton>
						<Typography fontWeight={'bold'} className={classes.menuButton}>
							{menuItems[1]}
						</Typography>
					</IconButton>
					<IconButton>
						<Typography fontWeight={'bold'} className={classes.menuButton}>
							{menuItems[2]}
						</Typography>
					</IconButton>
				</div>
			);
		}
	},[isMobile]);

	return (
		<>
			<Slide apear={false} direction="down" in={scrollPosition >= 900}>
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
