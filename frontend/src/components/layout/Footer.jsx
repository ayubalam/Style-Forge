function Footer() {
  return (
    <footer className="bg-black text-gray-300 py-6 mt-auto">
      <div className="max-w-7xl mx-auto text-center">
        <p>
          © {new Date().getFullYear()} STYLE-FORGE. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;