'use client'

import Cookies from "js-cookie";
import Link from "next/link";

const Form = () => {
    const formData = Cookies.get('formData');

    return (
        <div>
            <h1>Cookie data :{formData}</h1> <br />
            <Link href="/">go to home page</Link>
        </div>
    );
}

export default Form;