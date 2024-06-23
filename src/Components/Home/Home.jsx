// import React from 'react'
// import './Home.css'
// import p1 from '../../assets/prof.jpg'


// const Home = () => {
//   return (
//     <div className='home'>
//       <img src={p1} alt="" />
//       <h1>MERN STACK DEVELOPER</h1>
//       <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptatibus numquam delectus culpa, laboriosam illo eaque quasi maxime alias soluta in ea reiciendis, velit fuga facilis eligendi saepe ducimus asperiores.</P>
//       <div className="buttons">
//         <button className='home-connect'>connect with me</button>
//         <button className='resume'>Resume</button>
//       </div>
//     </div>
//   )
// }

// export default Home

// --------------------------------------------
import React from 'react'
import './Home.css'
import profile from '../../assets/mini.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Home = () => {
  return (
    <div id="home" className='home'>
        <img src={profile} alt="" />
      <h1>MERN STACK DEVELOPER</h1>
      <p>An ambitious MCA graduate with expertise in full-stack web development, particularly the
          MERN stack. Equipped with a solid academic foundation and hands-on experience in building
          and deploying web applications.
      </p>
      <div className="buttons">
         <button className='home-connect'><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me  </AnchorLink></button>
         <button className='resume'><a href='https://ragavideveloper.tiiny.site' target='_blank' rel='noopener noreferrer'> My Resume</a></button>
      </div>
    </div>
  )
}

export default Home
