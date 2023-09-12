import workshop from './images/workshop.jpg';
import gondol from './images/gondol.jpg';
import skies from './images/skies.jpg';
import rock from './images/rock.jpg';

function Posts() {
  return (
    <div className="w3-card w3-margin">
      <div className="w3-container w3-padding">
        <h4>Popular Posts</h4>
      </div>
      <ul className="w3-ul w3-hoverable w3-white">
        <li className="w3-padding-16">
          <img src={workshop} alt="" className="w3-left w3-margin-right" />
          <span className="w3-large">Lorem</span>
          <br />
          <span>Sed mattis nunc</span>
        </li>
        <li className="w3-padding-16">
          <img src={gondol} alt="" className="w3-left w3-margin-right" />
          <span className="w3-large">Ipsum</span>
          <br />
          <span>Praes tinci sed</span>
        </li>
        <li className="w3-padding-16">
          <img src={skies} alt="" className="w3-left w3-margin-right" />
          <span className="w3-large">Dorum</span>
          <br />
          <span>Ultricies congue</span>
        </li>
        <li className="w3-padding-16 w3-hide-medium w3-hide-small">
          <img src={rock} alt="" className="w3-left w3-margin-right" />
          <span className="w3-large">Mingsum</span>
          <br />
          <span>Lorem ipsum dipsum</span>
        </li>
      </ul>
    </div>
  );
}

export default Posts;
