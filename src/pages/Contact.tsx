import { ContactForm, ContactInfo, FeaturedRecipes } from "../components";

const Contact: React.FC = () => {
  return (
    <main className="page contact-page">
      <section className="contact-container">
        <ContactInfo />
        <ContactForm />
      </section>
      <section className="featured-recipes">
        <FeaturedRecipes allRecipes={false} />
      </section>
    </main>
  );
};

export default Contact;
