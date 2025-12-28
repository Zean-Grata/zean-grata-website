import { useState, type ChangeEvent, type FormEvent, type JSX } from "react";


const API_URL = import.meta.env.VITE_CONTACT_API as string;

type ContactFormData = {
    name: string;
    surname: string;
    email: string;
    message: string;
    company?: string;
}

type ApiResponse =
    | { success: true; message: string }
    | { error: string };

export default function ContactForm(): JSX.Element {
    const [formLoadedAt] = useState(Date.now());
    const [form, setForm] = useState<ContactFormData>({
        name: "",
        surname: "",
        email: "",
        message: ""
    });

    const [loading, setLoading] = useState<boolean>(false);
    const [status, setStatus] = useState<string | null>(null);

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
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

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            ...form,
            submittedAt: Date.now() - formLoadedAt
        })
      });

      const text = await res.text();

      const data: ApiResponse | null =
        text.length > 0 ? JSON.parse(text) : null;

        if (!res.ok) {
          throw new Error(
            data && "error" in data ? data.error : "Request failed"
        );
    }
        setStatus("Message sent successfully");
      setForm({ name: "", surname: "",email: "",  message: "" });

    } catch (err) {
      console.error(err);
      setStatus("Failed to send message");
    } finally {
      setLoading(false);
    }
  };

    return(
        <div className='flex flex-col space-y-10 p-5 lg:p-10 mx-10 lg:mx-0 border rounded-2 border-gray-200'>
            <h2>Send us a message and we’ll get back to you shortly.</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-10 w-full [&>div]:flex [&>div]:flex-col 
            [&>div]:space-y-2 [&>div>input]:border [&>div>input]:rounded-2 [&>div>input]:border-gray-200 
                [&>div>input]:text-[#2E2E2E] [&>div>input]:p-2 [&>div>input]:hover:border-[#216F66]
                [&>div>input]:focus:outline-1 [&>div>input]:focus:outline-[#309e91] ">
                <div>
                    <label htmlFor="fname">First name</label>
                    <input type="text" id="fname" name="name" value={form.name} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="lname">Last name</label>
                    <input type="text" id="lname" name="surname" value={form.surname} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email" value={form.email} onChange={handleChange} required/>
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" rows={5} cols={30} value={form.message} onChange={handleChange} required placeholder="Type your message here..." 
                    className="border border-gray-200 text-[#2E2E2E] hover:border-[#216F66]
                    focus:outline-1 focus:outline-[#309e91]"/>
                </div>
                <input
                    type="text"
                    name="company"
                    value={(form as any).company || ""}
                    onChange={handleChange}
                    style={{ display: "none" }}
                    tabIndex={-1}
                    autoComplete="off"
                />
                <button type="submit" disabled={loading} className="bg-[#083833CC] text-white py-2">{loading ? "Sending..." : "Submit"}</button>
                {status && <p>{status}</p>}
            </form>
        </div>
    )
}