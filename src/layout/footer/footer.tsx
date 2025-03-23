import { Link } from "react-router-dom";

function FooterComponent() {

    return (
        <footer
            style={{
                backgroundColor: '#ffffff',         // White background
                padding: '1rem',
                textAlign: 'center',
                fontSize: '14px',
                marginTop: 'auto',
                borderTop: '1px solid #ddd'
            }}
        >
            <Link
                to="/terms"
                className="lnkfooter"
                style={{ margin: '0 8px', color: '#333', textDecoration: 'none' }}
                target="_blank"
                rel="noopener noreferrer"
            >
                Terms and Conditions
            </Link>

            <Link
                to="/privacy"
                className="lnkfooter"
                   target="_blank"
                style={{ margin: '0 8px', color: '#333', textDecoration: 'none' }}
            >
                Privacy Policy
            </Link>
        </footer>
    )
}
export default FooterComponent;