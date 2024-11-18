import FormRow from "./FormRow";

const ContactForm = () => {
  return (
    <article>
      <form className="form contact-form">
        <FormRow type="text" name="name" labelText="your name" />
        <FormRow type="email" name="email" labelText="your email" />
        <FormRow type="text-area" name="message" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </article>
  );
};

export default ContactForm;
