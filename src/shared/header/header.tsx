import './header.scss';
import rimacLogo from '../../themes/img/rimac-logo.svg';
import iconPhone from '../../themes/icons/phone.svg';

function Header() {
  return (
    <div className="header">
        <img src={rimacLogo} alt="Logo" />
        <div className="header__communicate">
          <div className="communicate__title">!Compra por este medio!</div>
          <div className="communicate__call">
            <img src={iconPhone} alt="phone" />
            <span className="communicate__number">(01) 411 6001</span>
          </div>
        </div>
    </div>
  );
}

export default Header;