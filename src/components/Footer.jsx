import React from "react";

function Footer() {
    const year = new Date().getFullYear();

    return <footer>
        <div>
        <a className="footer-link" href="https://github.com/vermont-paguiligan"><i class="fab fa-github"></i>Github</a>
        <a className="footer-link" href="https://www.facebook.com/vermontphil.paguiligan"><i class="fab fa-facebook-square"></i>Facebook</a>
        <a className="footer-link" href="https://www.linkedin.com/in/vermont-phil-1726731a5/">Linked<i class="fab fa-linkedin"></i></a>
        </div>
        <p className="footer">Copyright © {year} Vermont Phil Paguiligan</p>
    </footer>
}

export default Footer;