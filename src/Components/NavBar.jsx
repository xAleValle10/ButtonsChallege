import React from 'react'

export const NavBar = () => {
  return (
    
    <nav className='layout'>
        <h1 className='devChallengeStyle'>
                    <span className='devColor'>Dev</span><span className='challengeColor'>challenges.io</span>    
        </h1>
            <ul className='NavInputsStyles'>
                
                <li>
                    <span> Colors </span>
                </li>
                <li >
                    <span> Topography </span>
                </li>
                <li >
                    <span> Spaces </span>
                </li>
                <li >
                    <span> Buttons </span>
                </li>
                <li className='inputBold'>
                    <span>  inputs </span>
                </li>
                <li >
                    <span> Grid </span>
                </li>
            </ul>
                
        </nav>
  )
}
