import './footer.scss';
import rimacWhiteLogo from '../../themes/img/rimac-white-logo.svg';

function Footer() {
  return (
    <div className="footer">
        <img src={rimacWhiteLogo} alt="Logo" />
        <hr className="footer__hr" />
        <div className="footer__title">
          © 2023 RIMAC Seguros y Reaseguros.
        </div>
    </div>
  );
}

export default Footer;