import { useState, type ChangeEvent, type FormEvent} from "react";
import { useInView } from "react-intersection-observer";

const API_URL = import.meta.env.VITE_CONTACT_API as string;

type ContactFormData = {
    name: string;
    surname: string;
    email: string;
    message: string;
    phone?: string;//optional
}

type ApiResponse =
    | { success: true; message: string }
    | { success: false; error: string };

export default function ContactForm() {
    //For calculating the time it takes for the form to be submitted
    const [formLoadedAt] = useState(Date.now());
    
    const [form, setForm] = useState<ContactFormData>({
        name: "",
        surname: "",
        email: "",
        message: "",
        phone: ""
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<string | null>(null);
    const [statusColor, setStatusColor] = useState<boolean>(false);

    
    const statusTimer = () => {
        setTimeout(() => {
            setStatus("");
        }, 3000);
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        let data: ApiResponse | null; 
        let text: string;

        try {
                const res = await fetch(API_URL, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        ...form,
                        submittedAt: Date.now() - formLoadedAt
                    })         
                });
                text = await res.text();       
                console.log(text);

                data = text.length > 0 ? JSON.parse(text) : null;
                if (!data) {
                    setStatus("No response from server.")
                    return;
                }
                else if(data.success) {
                    setStatus(data.message);
                    setStatusColor(true);
                }
                else {
                    setStatus(data.error);
                    setStatusColor(false);
                }
                
                setForm({ name: "", surname: "",email: "",  message: "" });
                statusTimer();

            } catch (err) {
                console.error(err);
                setStatus("No response from server.")
            } finally {
                setLoading(false);
            }
    };
    
    //For transitioning the form when it's in viewport.
    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce: true,
    });

    return(
        <div ref={ref} className={`flex flex-col space-y-10 p-5 lg:p-10 mx-10 lg:mx-0 border rounded-2 
        border-gray-200 ${inView ? 'transition duration-2000 ease-in-out opacity-100 translate-y-0'
        :'transition duration-1000 ease-in-out opacity-0 translate-y-10'}`}>
            <h2>Send us a message and we will get back to you shortly.</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-10 w-full [&>div]:flex [&>div]:flex-col 
            [&>div]:space-y-2 [&>div>input]:border [&>div>input]:rounded-2 [&>div>input]:border-gray-200 
                [&>div>input]:text-[#2E2E2E] [&>div>input]:p-2 [&>div>input]:hover:border-[#216F66]
                [&>div>input]:focus:outline-1 [&>div>input]:focus:outline-[#309e91]">
                <div>
                    <label htmlFor="fname">First name</label>
                    <input 
                        type="text" id="fname" name="name" value={form.name} onChange={handleChange} 
                        placeholder="Enter your first name" required
                    />
                </div>
                <div>
                    <label htmlFor="lname">Last name</label>
                    <input 
                        type="text" id="lname" name="surname" value={form.surname} onChange={handleChange} 
                        placeholder="Enter your last name" required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" id="email" name="email" value={form.email} onChange={handleChange} 
                        placeholder="Enter your email address" required
                    />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea 
                        id="message" name="message" rows={5} cols={30} value={form.message} onChange={handleChange} 
                        required placeholder="Type your message here..." 
                        className="border border-gray-200 text-[#2E2E2E] hover:border-[#216F66]
                        focus:outline-1 focus:outline-[#309e91]"
                    />
                </div>
                <input
                    type="text"
                    name="phone"
                    role="input"
                    value={(form as any).phone || ""}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    placeholder="Enter your phone number"
                    className="absolute left-[-9999px]"
                />
                <button type="submit" disabled={loading} name="submit" role="button" className="bg-[#083833CC] text-white py-2 transition 
                duration-200 ease-in-out hover:bg-[#0e564ecc] hover:scale-105">{loading ? "Sending..." : "Submit"}</button>
                {status && <p className={`${statusColor ? 'text-green-400' :'text-red-400'}`}>{status}</p>}
            </form>
        </div>
    )
}