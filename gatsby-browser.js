require(`katex/dist/katex.min.css`)
require("prismjs/themes/prism-tomorrow.css")
import "@fontsource/montserrat";

import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
export const wrapRootElement = ({ element }) => {
    return (
        <GoogleReCaptchaProvider reCaptchaKey={process.env.SITE_RECAPTCHA_KEY}>
            {element}
        </GoogleReCaptchaProvider>
    )
}