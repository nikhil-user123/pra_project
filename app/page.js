'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

export default function Home() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    const { value } = e.target;
    setName(value);
  };

  console.log(name);
  const handleSubmit = () => {
    Cookies.set('formData', name);

    router.push("/data");
  };
  return (
    <main >
      <form>
        <div>
          <div></div>
          <label>Name:</label>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </div>
        <button type="button" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </main>
  )
}
