const ContactForm: React.FC = () => {
  return (
    <article>
      <form className="form contact-form">
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            your name
          </label>
          <input type="text" name="name" id="name" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            your email
          </label>
          <input type="email" name="email" id="email" className="form-input" />
        </div>
        <div className="form-row">
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            className="form-textarea"
          ></textarea>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </article>
  );
};

export default ContactForm;
