import Recaptcha from "react-recaptcha"
import { useForm, ValidationError } from "@formspree/react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import React from 'react';
import "./eloi.css"


const encode = data => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

function ContactForm() {
    const [token, setToken] = React.useState(null)
    const { executeRecaptcha } = useGoogleReCaptcha();

    const [state, handleSubmit] = useForm("mnqykkzp", {
        data: { "g-recaptcha-response": executeRecaptcha }
    });

    React.useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js"
        script.async = true
        script.defer = true
        document.body.appendChild(script)
        script.onload = function() {
            setScriptLoaded(true);
        };
    }, [])

    const recaptchaConfig = {
        key: process.env.SITE_RECAPTCHA_KEY,
        secret: process.env.SITE_RECAPTCHA_SECRET,
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className=" contact-form-grid">
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
                <textarea
                    id="message"
                    name="message"
                    className="text-field"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <button type="submit" disabled={state.submitting}>
                    Submit
                </button>
            </div>
        </form>


    )
}

export default ContactForm
