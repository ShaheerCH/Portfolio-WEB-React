import './about.scss';

export default function About() {
  return (
    <div className="about" id='ABOUT'>
      <div className="about__content">
        <h1>About Me</h1>
        <p>
          I am a front-end developer with experience in React.js, HTML, CSS, and
          Node.js. I have a passion for creating visually appealing and
          user-friendly websites and applications, and I am always looking for
          ways to improve my skills and stay up-to-date on the latest
          technologies. In my current role, I have had the opportunity to work
          on a variety of projects, ranging from small websites to large web
          applications. I am a team player and enjoy collaborating with others
          to bring ideas to life. I am excited to continue growing my career as
          a front-end developer and make a positive impact in the industry.
        </p>
      </div>
      <ul class="about__skillsList">
        <li class="about__skillsItems">Javascript(ES6+)</li>
        <li class="about__skillsItems">Reactjs</li>
        <li class="about__skillsItems">React Redux</li>
        <li class="about__skillsItems">HTML/CSS</li>
        <li class="about__skillsItems">Nodejs</li>
        <li class="about__skillsItems">Ruby On Rails</li>
        <li class="about__skillsItems">SQL</li>
        <li class="about__skillsItems">Data Structures</li>
        <li class="about__skillsItems">Algorithms</li>
      </ul>
    </div>
  );
}
