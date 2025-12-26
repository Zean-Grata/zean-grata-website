interface ContactFormProps {
    name: string;
    position: string;
    phone: string;
    email: string;
}


const ContactForm = () => {
    return(
        <div className='flex flex-col space-y-10'>
            <h2>Send us a message and we will get back to you swiftly</h2>
            <form className="flex flex-col space-y-10 w-full [&>div]:flex [&>div]:flex-col 
            [&>div]:space-y-2 [&>div>input]:border [&>div>input]:rounded-2 [&>div>input]:border-gray-200 
            [&>div>input]:text- [&>div>input]:text-[#2E2E2E] [&>div>input]:p-2">
                <div>
                    <label htmlFor="fname">First name</label>
                    <input type="text" id="fname" name="fname"/>
                </div>
                <div>
                    <label htmlFor="lname">Last name</label>
                    <input type="text" id="lname" name="lname"/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} cols={30} placeholder="Type your message here..." className="border border-gray-200 text-[#2E2E2E]"/>
                </div>
                
                <input type="text" value="Submit" className="hidden"/>
                <button type="submit" className="bg-[#083833CC] text-white py-2">Submit</button>
            </form>
        </div>
    )
}

export default ContactForm