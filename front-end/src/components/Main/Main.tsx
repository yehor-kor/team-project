import './Main.scss';
import { Slider } from '../Slider';
import logoHeart from '../../img/logo-heart.svg';
import logoBag from '../../img/logo-bag.svg';
import logoPartner1 from '../../img/logo-partners-dg.svg';
import logoPartner2 from '../../img/logo-partners-ga.svg';
import logoPartner3 from '../../img/logo-partners-givenchy.svg';
import logoPartner4 from '../../img/logo-partners-pcd.svg';
import logoPartner5 from '../../img/logo-partners-sl.svg';
import logoPartner6 from '../../img/logo-partners-chanel.svg';

export const Main: React.FC = () => (
  <main className="Main">
    <section className="Main__catalog">
      <div className="Main__panel">
        <a href="/" className="Main__logo">PerfuMe</a>

        <div className="input--search">
          <input
            className='input'
            type="text"
            placeholder='Hey, what are you looking for?'
          />
        </div>

        <a href="/" className='Main__language-select'>
          Eng
        </a>

        <a href="/">
          <img
            className='Main__icon'
            src={logoHeart}
            alt="Heart"
          />
        </a>

        <a href="/">
          <img
            className='Main__icon Main__icon--w-34'
            src={logoBag}
            alt="Bag"
          />
        </a>
      </div>

      <nav className="Main__categories">
        <a href="/" className="Main__link">Women's perfumery</a>
        <a href="/" className="Main__link">Men's perfumery</a>
        <a href="/" className="Main__link">Children's perfumery</a>
        <a href="/" className="Main__link">New</a>
        <a href="/" className="Main__link">Actions</a>
        <a href="/" className="Main__link">Gift ideas</a>
      </nav>
    </section>

    <Slider
      images={[
        {
          path: '../../img/image-parfume.png',
          id: 1,
        },
        {
          path: '../../img/image-parfume.png',
          id: 2,
        },
        {
          path: '../../img/image-parfume.png',
          id: 3,
        },
        {
          path: '../../img/image-parfume.png',
          id: 4,
        },
        {
          path: '../../img/image-parfume.png',
          id: 5,
        },
      ]}
    />

    <section className="Main__partners">
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={logoPartner1} alt="1" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={logoPartner2} alt="2" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={logoPartner3} alt="3" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={logoPartner4} alt="4" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={logoPartner5} alt="5" />
      </a>
      <a href="/" target="_blank" rel="noopener noreferrer">
        <img src={logoPartner6} alt="6" />
      </a>
    </section>

    <div className="Main__line">
      <hr />
    </div>
  </main>
);
