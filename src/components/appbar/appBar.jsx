import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import { AppBar } from '@mui/material';
import Slide from '@mui/material/Slide';
import React, { useCallback, useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import Logo from '../../res/images/vertical_logo.svg';
import classes from './style';
import {useAtom} from 'jotai';
import { languageAtom, showMenuAtom } from '../../atoms';
import Consts from '../../consts';
import Hamburger from '../humburger/humburger';
import translate from '../../res/strings/strings';

// eslint-disable-next-line react/prop-types
function CustomAppBar({refs,heroRef}) {
	const [shouldShowMenu, setShowMenu] = useAtom(showMenuAtom);
	const [language,setLanguage] = useAtom(languageAtom);

	const  toggleMenu= useCallback(() => {
		setShowMenu(!shouldShowMenu);
	},[shouldShowMenu,setShowMenu]);
	
	const isDesktopOrLaptop = useMediaQuery({
		query: '(min-width: 900px)'});


	const menuItems = [
		{
			title:translate('about'), 
			onClick:()=>{
				itemPressed(refs[0]);
			}
		},
		{
			title:translate('services'),
			onClick:()=>{
				itemPressed(refs[1]);
			}
		},
		{
			title:translate('projects'),
			onClick:()=>{
				itemPressed(refs[2]);
			}
		},
		{
			title:translate('contact'),
			onClick:()=>{
				itemPressed(refs[3]);
			}
		},
		{
			title:translate('locale'),
			onClick:()=>{
				if(language ==='en-US'){
					setLanguage('hu-HU');
				}
				else{
					setLanguage('en-US');
				}

			}
		}
	];

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
				<div style={classes.itemRow}>
					<div  style={classes.logoItem}>
						<IconButton onClick={()=>{itemPressed(heroRef);}} style={{paddingLeft:0}}>
							<img style={{ height: 50, width: 300 }} src={Logo}alt={'logo'}/>	
						</IconButton>
					</div>
					<div style={classes.pagesRow}>
						{
							menuItems.map(item =>(
								<IconButton  key={item.title} onClick={item.onClick}>
									<Typography fontFamily={'Merriweather'} fontWeight={'bold'} style={ classes.menuButton} fontSize={'1rem'}>
										{item.title}
									</Typography>
								</IconButton>
							))
						}
						
					</div>
				</div>
			);
		}else{
			return(
				<div style={classes.row}>
					<IconButton onClick={()=>{itemPressed(heroRef);setShowMenu(false);}} style={{paddingLeft:0}}>
						<img style={{ width:'9em',height:'2em' }} src={Logo}alt={'logo'}/>	
					</IconButton>
					<div style={{padding:'1em',backgroundColor:Consts.theme.secondary}}>
						<Hamburger isOpen={shouldShowMenu} onclick={toggleMenu} color={'#EEC283'} size={28}/>
					</div>
					
				</div>
			);
		}
	},[isDesktopOrLaptop,scrollPosition,shouldShowMenu,language,setLanguage]);

	return (
		<>
			<Slide apear={'false'} direction="down" in={scrollPosition >= 0 }>
				<AppBar position="fixed" style={classes.appBarHero} elevation={0}>
					<Toolbar style={{padding:0}}>
						{appBarItems()}
					</Toolbar>
				</AppBar>
			</Slide>

		</>
	);
}
export default CustomAppBar;
