export default function Footer() {
    return(
        <div className="p-2 pl-5 bg-[var(--nav)]">
            <table className="w-3/4">
                <tr className="text-left">
                    <td>Legal Policies</td>
                    <td>Our Company</td>
                    <td>Customer Support</td>
                    <td>Social Media</td>
                </tr>
                <tr id="footer-link" className="footer-link text-[var(--text-disabled)] text-sm text-left">
                    <td><a href="/privacy-policy">Privacy Policy</a></td>
                    <td><a href="/about">About Us</a></td>
                    <td><a href="/faq">FAQ</a></td>
                    <td><a href="">Instagram</a></td>
                </tr>
                <tr className="footer-link text-[var(--text-disabled)] text-sm text-left">
                    <td><a href="/tos">Terms of Service</a></td>
                    <td><a href="/careers">Careers</a></td>
                    <td><a href="/contact-us">Contact Us</a></td>
                    <td><a href="">Tiktok</a></td>
                </tr>
            </table>
        </div>
    );
};