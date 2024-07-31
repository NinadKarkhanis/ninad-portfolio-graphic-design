import { CONTACT } from "../constants"
const Contact = () => {
  return <div className='border-b border-neutral-900 pb-4'>
    <h2 className="my-20 text-center text-4xl">Get In Touch</h2>
    <div className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="mailto:ninadkarkhanis2003@gmail.com" className="border-b text-cyan-600">{CONTACT.email}</a>
    </div>
    </div>
}

export default Contact;
