import './form.scss';
import { useForm, ValidationError } from '@formspree/react';

export default function ContactForm() {
  const [state, handleSubmit] = useForm('mqknglvd');
  if (state.succeeded) {
    return <p>I'll be getting back to you soon</p>;
  }
  return (
    <section className="Contact" id='CONT'>
      <h2>Get in touch</h2>
      <p>
        Fill out the form below and I'll get back to you as soon as possible.
      </p>
      <form onSubmit={handleSubmit}>
        <ul className="formlist">
          <li>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" name="name" />
            <ValidationError field="name" prefix="Name" errors={state.errors} />
          </li>
          <li>
            <label htmlFor="email">Email Address</label>
            <input id="email" type="email" name="email" />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </li>
        </ul>
        <div className="textarea">
          <label htmlFor="message">Enter Your Message</label>
          <textarea id="message" name="message" cols={60} rows={20} />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
    </section>
  );
}
