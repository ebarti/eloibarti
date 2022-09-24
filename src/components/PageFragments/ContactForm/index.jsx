import {ErrorMessage, Field, Form, Formik} from "formik"
import Recaptcha from "react-recaptcha"

import React from 'react';
import "./eloi.css"


const encode = data => {
    return Object.keys(data)
        .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
        .join('&')
}

function ContactForm() {
    const [token, setToken] = React.useState(null)

    React.useEffect(() => {
        const script = document.createElement("script")
        script.src = "https://www.google.com/recaptcha/api.js"
        script.async = true
        script.defer = true
        document.body.appendChild(script)
    }, [])


    return (
        <Formik
            initialValues={{fullName: "", email: "", message: ""}}
            validate={values => {
                const errors = {}
                if (!values.fullName) {
                    errors.fullName = "Required"
                } else if (values.fullName.length <= 1) {
                    errors.fullName = "must be at least 2 characters"
                }
                if (!values.email) {
                    errors.email = "Required"
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
                ) {
                    errors.email = "Invalid email address"
                }
                if (!values.message) {
                    errors.message = "A message is required"
                } else if (values.message.length <= 20) {
                    errors.message = "I think you might be forgetting part of your message!"
                }
                return errors
            }}
            onSubmit={data => {
                console.log(data)
                if (token !== null) {
                    fetch("/", {
                        method: "POST",
                        headers: {"Content-Type": "application/x-www-form-urlencoded"},
                        body: encode({
                            "form-name": "contact-form",
                            ...data,
                            "g-recaptcha-response": token,
                        }),
                    })
                        .then(() => {
                            alert("send")
                        })
                        .catch(error => alert(error))
                }
            }}
        >
            <Form
                className="contact-form"
                name="contact-form"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                data-netlify-recaptcha="true"
            >
                <Field type="hidden" name="form-name"/>
                <Field type="hidden" name="bot-field"/>
                <div className=" contact-form-grid">
                    <div>
                        <Field name="fullName" type="text" className="text-field" placeholder="Enter your name"/>
                        <ErrorMessage name="fullName"/>
                    </div>
                    <div>
                        <Field name="email" type="text" className="text-field" placeholder="Enter your email"/>
                        <ErrorMessage name="email"/>
                    </div>
                </div>
                <div>
                    <Field as="textarea" name="message" type="text" className="text-field contact-text-area"
                           placeholder="Enter your message"/>
                    <ErrorMessage name="message"/>
                </div>
                <Recaptcha
                    className="w-form-formrecaptcha"
                    sitekey={process.env.SITE_RECAPTCHA_KEY}
                    render="explicit"
                    theme="dark"
                    size="normal"
                    verifyCallback={response => {
                        setToken(response)
                    }}
                    onloadCallback={() => {
                        console.log("done loading!")
                    }}
                />
                <button type="submit" className="captcha-button">Submit</button>
            </Form>
        </Formik>
    )
}

export default ContactForm
