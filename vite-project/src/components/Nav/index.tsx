import logo from '../../assets/logo.jpg'
import { AiFillHome, AiFillGitlab, AiFillSignal } from "react-icons/Ai"
import { BiAnalyse, BiHelpCircle, BiMenu } from "react-icons/Bi"
import NavItem from './Navitem'
import { useState } from 'react'
const items = [
    {label: 'Home', icon: <AiFillHome/>, active: true},
    {label: 'Discovery', icon: <AiFillGitlab/>, active: false},
    {label: 'Analysis', icon: <BiAnalyse/>, active: false},
    {label: 'Trading Signal', icon: <AiFillSignal/>, active: false},
    {label: 'Help & Feedback', icon: <BiHelpCircle/>, active: false}
]

const NavItemsContainer = () => <>
    {items.map((item, index) => <NavItem item = {item} key={index}/>)}
</> 

const Index = () => {
    const [isNavMenuMobileOpen, setIsNavMenuMobileOpen] = useState(false)
    return (
        <nav className="col-span-1 bg-back-main">
            <div className="flex justify-between items-center md:w-44 md:block md:m-mr-auto">
                <img className='md:w-44 w-20 md:mt-6 mt-1 mb-1' src={logo} alt="Logo" />
                <BiMenu size={'2rem'} className='cursor-pointer mr-8 md:hidden' onClick={()=> setIsNavMenuMobileOpen(!isNavMenuMobileOpen)}/>
            </div>
            <h4 className='md:mx-4 md:text-center md:text-back-sub md:font-bold md:mb-1 md:border-b-2 md:border-b-cyan-800 hidden '>Eye Tracking.com</h4>
               
            <ul className={`md:mx-4 md:my-6${isNavMenuMobileOpen ? '' : ' hidden'} md:block`}>
                <NavItemsContainer/>
            </ul>
        </nav>
    )
}

export default Index