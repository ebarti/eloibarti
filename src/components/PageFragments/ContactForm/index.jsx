import { useForm, ValidationError } from '@formspree/react';
import  React  from 'react';

import {
    GoogleReCaptchaProvider,
    useGoogleReCaptcha,
} from 'react-google-recaptcha-v3';
import "./eloi.css"

const recaptchaConfig = {
    key: process.env.SITE_RECAPTCHA_KEY,
    secret: process.env.SITE_RECAPTCHA_SECRET,
}

function ContactForm() {
    const {executeRecaptcha} = useGoogleReCaptcha();
    const [failReCaptcha, setFailReCaptcha] = React.useState(false);
    const [state, handleSubmit] = useForm("mnqykkzp", {
        data: {
            "g-recaptcha-response": failReCaptcha ? () =>
                    new Promise  ((resolve) => resolve('Nonsense!'))
                : executeRecaptcha,
        },
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
                            <textarea
                                id="name"
                                name="name"
                                className="text-field contact-text-area"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
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
                    <div className="block">
                        <label className="forCheckbox" htmlFor="failRecaptcha">
                            Fail Recaptcha
                        </label>
                        <input
                            id="failReCaptcha"
                            type="checkbox"
                            onChange={(ev) => {
                                setFailReCaptcha(ev.target.checked);
                            }}
                        />
                    </div>
                    <div className="block">
                        <ValidationError className="error" errors={state.errors}/>
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
