import React from 'react';

export default function Hamburger({ isOpen ,color,onclick}){
	return(
		<>
			<div className="hamburger" onClick={onclick}>
				<div className="burger burger1" />
				<div className="burger burger2" />
				<div className="burger burger3" />
			</div>

			<style  jsx="true">{`
								.hamburger{
										width: 2rem;
										height: 2rem;
										display: flex;
										justify-content: space-around;
										flex-flow: column nowrap;
										z-index: 10;
								}
								.burger{
										width: 2rem;
										height: 0.20rem;
										border-radius: 10px;
										background-color: ${color};
										transform-origin: 1px;
										transition: all 0.3s linear;
										transform-origin:2rem
								}
								.burger1{
										transform: ${ isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
								}
								.burger2{
										opacity: ${ isOpen ? 0 : 1};
								}
								.burger3{
										transform: ${ isOpen ? 'rotate(45deg)' : 'rotate(0)'};
								}
		`}</style>
		</>
	);
}