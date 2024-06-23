import React from 'react'
import './Contact.css'
import '../Icons/font/bootstrap-icons.css'
const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "030eab8c-bec4-4b8c-b990-98521962354c");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message);
        }
      };
  return (
    <div id="contact" className='contact'>
        <div className="con-tit">Get in touch</div>
        <div className='contact-sec'>
        <div className='con-left'>
        <h2>Let's talk</h2>
                <p>I am a recent graduate seeking opportunities to begin my career as a developer. Please contact me regarding any available positions.</p>
         {/* <div className="con-talk"> */}
            <div className="con-info">
                <h1 className='bi-envelope-fill'></h1>
                <p>ragavii0228@gmail.com</p>
            </div>
            <div className="con-info"> 
                <h1 className='bi-telephone-fill'></h1>
                <p>8870892053</p>
            </div>
            <div className="con-info">
                <h1 className='bi-geo-alt-fill'></h1>
                <p>Coimbatore,Tamilnadu.</p>
            </div>
            {/* </div> */}
        </div>
        <form  onSubmit={onSubmit}className='con-right'>
            <p>Your name</p>
            <input type="text"placeholder='Enter your name'name='name' />
            <p>Email Id</p>
            <input type="text" placeholder='Enter your email'name='mail'/>
            <p>Write your message here</p>
            <textarea name="message" rows={'7'} placeholder='Enter your message'></textarea>
            <button className='con-submit'>Submit</button>
        </form>
       </div>
      
    </div>
  )
}

export default Contact

