import './Main.scss';
import logo from '../../logo.svg';

export const Main: React.FC = () => (
  <main className="Main">
    <img src={logo} className="Main-logo" alt="Logo" />
  </main>
);
