import './hero.scss';

export default function Hero() {
  return (
    <div className="hero">
      <span>Hello! I am</span>
      <h1>Shaheer <br /> Chaudry</h1>
      <div className="hero__content">
        <p>
          I am a software developer! I can help you  <br />build a product,
          feature or website. Take a look at my work.<br /> If you like what you see
          and have a project you need coded, <br /> don’t hesitate and contact me.
        </p>

        <div className="hero__buttons">
          <button className="hero__button">Start Collaboration</button>
      </div>
    </div>
    </div>
  );
}
