const Footer: React.FC = () => {
  return (
    <footer className="main-footer">
      <p>
        &copy; {new Date().getFullYear()}{" "}
        <span className="footer-logo">NutriDelights</span>
      </p>
    </footer>
  );
};

export default Footer;
