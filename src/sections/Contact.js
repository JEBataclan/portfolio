import "./Contact.css";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
    const [state, handleSubmit] = useForm("mayvejjl");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    
    return (
        <div className="contact-container">
            <div className="container">
                <p className="header-title">Contact Me</p>
                <div className="contact-contents">
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name" className="label">Name</label>
                        <input
                            id="name"
                            name="name"
                            className="input"
                        />
                        <label htmlFor="email" className="label">
                            Email Address
                        </label>
                        <input
                            id="email"
                            type="email" 
                            name="email"
                            className="input"
                        />
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                        <label htmlFor="message" className="label">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            className="input"
                        />
                        <ValidationError 
                            prefix="Message" 
                            field="message"
                            errors={state.errors}
                        />
                        {!state.succeeded ? (
                            <button type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        ) : (
                            <p className="appreciation">I'll get back to you immediately! And oh, remember the room in the header? This will be a big help in building my dream setup. Thank you! ٩(◕‿◕｡)۶</p>
                        )}
                        </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;