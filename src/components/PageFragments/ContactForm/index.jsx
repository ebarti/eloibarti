import { useForm, ValidationError } from '@formspree/react';
import * as  React  from 'react';

import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import "./eloi.css"


function ContactForm() {
    const {executeRecaptcha} = useGoogleReCaptcha();
    const [state, handleSubmit] = useForm("mnqykkzp", {
        data: { "g-recaptcha-response": executeRecaptcha }
    });

    return (
        <div>
            {state && state.succeeded ? (
                <h2>Your message has been sent successfully!</h2>
            ) : (
                <form onSubmit={handleSubmit}>
                    <div className=" contact-form-grid">
                        <div>
                            <label htmlFor="email">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                className="text-field"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                        </div>
                        <div>
                            <label htmlFor="name">
                                Your Name
                            </label>
                            <input
                                id="name"
                                name="name"
                                type="name"
                                className="text-field"
                            />
                            <ValidationError
                                prefix="Name"
                                field="name"
                                errors={state.errors}
                            />
                        </div>
                    </div>
                    <div>
                        <textarea
                            id="message"
                            name="message"
                            className="text-field contact-text-area"
                        />
                        <ValidationError
                            prefix="Message"
                            field="message"
                            errors={state.errors}
                        />
                    </div>
                    <button type="submit" disabled={state.submitting}>
                        {state.submitting ? 'Submitting...' : 'Submit'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm
