import React, {useState}from 'react'
import './Navbar.css'
import '../Icons/font/bootstrap-icons.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Navbar = () => {
  const[menu,setMenu]= useState("home");
  return (
    <div className='navbar'>
      <div className="menu">
        <h3>RAGAVI R</h3> 
        {/* <h3 className='bi-list'></h3>
        <h4 className='bi-x'></h4> */}
        </div>
        <ul className='nav-menu'>
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=== 'home'?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu=== 'about'?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#education'><p onClick={()=>setMenu("education")}>Education</p></AnchorLink>{menu=== 'education'?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#project'><p onClick={()=>setMenu("project")}>Project</p></AnchorLink>{menu=== 'project'?<hr/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=== 'contact'?<hr/>:<></>}</li>
        </ul>
        {/* <button className='connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>connect with me</AnchorLink></button> */}
    </div>
  )
}

export default Navbar
