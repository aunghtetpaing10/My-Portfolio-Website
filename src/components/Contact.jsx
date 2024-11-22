import { CONTACT } from "../constants"

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
        <h2 className="text-4xl my-10 text-center">Get in Touch</h2>
        <div className="text-center tracking-tighter text-neutral-400">
            <p className="mb-2">{CONTACT.address}</p>
            <p className="mb-2">{CONTACT.phoneNo}</p>
            <p className="mb-5">{CONTACT.email}</p>
        </div>
    </div>
  )
}

export default Contact