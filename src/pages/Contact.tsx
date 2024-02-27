import { ContactForm, ContactInfo, FeaturedRecipes } from "../components";

const Contact = () => {
  return (
    <main className="page contact-page">
      <section className="contact-container">
        <ContactInfo />
        <ContactForm />
      </section>
      <section className="featured-recipes">
        <FeaturedRecipes />
      </section>
    </main>
  );
};

export default Contact;
