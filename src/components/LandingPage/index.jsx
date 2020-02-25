import React from 'react';
import './index.scss';
import { Link } from 'react-router-dom';
import {
  faPen, faFillDrip, faEraser, faThumbtack, faFill,
} from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function LandingPage(props) {
  const { toggleLandingPage } = props;
  return (
    <div className="landing-page">
      <div className="screenshot-container">
        <div className="information-container">
          <h2>Piskel is a free online editor for animated sprites & pixel art</h2>
          <p>
            Create animations in your browser.
            Try an example, use Google sign in to access your gallery or simply create a new sprite.
          </p>
          <div className="information-button-container">
            <Link to="/create-sprite">
              <button
                className="information-container-button"
                onClick={toggleLandingPage}
                type="button"
              >
                Create sprite
              </button>
            </Link>
          </div>
        </div>
        <div className="main-screen-shoot">
          <div className="main-gif" />
        </div>
      </div>

      <div className="tools-explanation-container">
        <div className="tool-explonation">
          <FontAwesomeIcon icon={faPen} />
          <span>Regular pen</span>
        </div>

        <div className="tool-explonation">
          <FontAwesomeIcon icon={faEraser} />
          <span>Eraser</span>
        </div>

        <div className="tool-explonation">
          <FontAwesomeIcon icon={faFillDrip} />
          <span>Paint bucket</span>
        </div>

        <div className="tool-explonation">
          <FontAwesomeIcon icon={faThumbtack} />
          <span>Stroke line</span>
        </div>

        <div className="tool-explonation">
          <FontAwesomeIcon icon={faFill} />
          <span>Paint all pixels</span>
        </div>
      </div>

      <div className="author-information">
        <span>Created by </span>
        <a href="https://github.com/AgentRa" className="author-link">
          Alexander Razhachkin
          {' '}
          <FontAwesomeIcon icon={faGithubSquare} />
        </a>
      </div>

    </div>
  );
}
