import React from 'react';
import '../assets/App.css';

function Footer() {
    return (
    <footer >
        <div class="footer-container">
            <div class="footer-nav">
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="/AboutUsPage">About Us</a></li>
                    <li><a href="/services">Services</a></li>
                    <li><a href="/SupportPage">Support</a></li>
                </ul>
            </div>
            <div class="footer-social">
                <h3>Follow Us</h3>
                <a href="https://facebook.com">Facebook</a>
                <a href="https://twitter.com">Twitter</a>
                <a href="https://instagram.com">Instagram</a>
            </div>
            <div class="footer-contact">
                <h3>Contact Us</h3>
                <p>Email: contact@example.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Copyright &copy; 2024 PawSomeCare. All Rights Reserved.</p>
        </div>
    </footer>

    );
}

export default Footer;