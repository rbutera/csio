import React from 'react';
import logo from '../../public/static/csio_logo.png';

const IndexPage = () => (
  <div className="content">
    <img className="csio-logo" src={logo} alt="International Offensive" />
    <h1>
      <i className="fas fa-info-circle" /> About
    </h1>
    <p>
      <strong>International Offensive</strong> (<em>CSIO</em>) is a{' '}
      <strong>free</strong>, <strong>open-source</strong> tweak for
      <em> Counter-Strike: Global Offensive</em> that{' '}
      <strong>prevents toxicity</strong> and{' '}
      <strong>encourages teamplay</strong> by{' '}
      <strong>providing translations for some common phrases</strong> using the
      in-game <strong>radio system.</strong>
    </p>
    <h2>
      <i className="fas fa-cloud-download-alt" /> Download
    </h2>
    <p>
      You can download the latest release of CSIO{' '}
      <a href="https://github.com/raigasm/csio/releases">here</a>
    </p>
    <h2>
      <i className="fas fa-wrench" /> Install
    </h2>
    <p>
      <ol>
        <li>
          Download the latest release of CSIO from the releases page (see link
          above)
        </li>
        <li>
          Extract the contents of the <code>zip</code> file. You should now see
          a <code>cfg</code> and <code>resource</code> folders
        </li>
        <li>
          Copy both the <code>cfg</code> and <code>resource</code> folders file
          to your <code>csgo</code> directory,{' '}
          <strong>merging with your existing folders</strong>:
          <ul>
            <li>
              on Windows, this is:{' '}
              <pre>
                C:\Program Files (x86)\Steam\steamapps\common\Counter-Strike:
                Global Offensive\csgo
              </pre>
            </li>
            <li>
              on Mac, this is:{' '}
              <pre>
                /User/Library/Application\
                Support/steam/steamapps/common/Counter-Strike: Global
                Offensive/csgo
              </pre>
            </li>
            <li>
              on Linux, this is:{' '}
              <pre>
                ~/.local/share/steamapps\common\Counter-Strike: Global
                Offensive\csgo
              </pre>
            </li>
          </ul>
        </li>
        <li>
          In Steam, right click CSGO and select <strong>Properties</strong> and
          then click the button labelled <em>SET LAUNCH OPTIONS.</em> Add{' '}
          <code>+exec csio/init.cfg</code> to the end of your launch options.
        </li>
        <li>Enjoy!</li>
      </ol>
    </p>

    <h2>
      <i className="fas fa-comments" /> Usage
    </h2>
    <p>
      CSIO modifies the default radio menus.
      <ul>
        <li>
          When you open the <strong>first radio menu</strong> (by default{' '}
          <code>z</code>) you have a full set of{' '}
          <strong>necessary CSGO radio commands</strong>
        </li>
        <li>
          When you open the <strong>second radio menu</strong> (by default{' '}
          <code>x</code>) you can select{' '}
          <strong>your desired language for translation</strong>
        </li>
        <li>
          When you open the <strong>third radio menu</strong> (by default{' '}
          <code>c</code>) you can select{' '}
          <strong>a phrase to say to your team.</strong> It will be translated
          into your chosen language (see above).
        </li>
      </ul>
    </p>
    <h2>
      <i className="fas fa-heart" /> Credits
    </h2>
    <p>
      International Offensive was created with love by{' '}
      <a href="https://twitch.tv/RAIGASM">RAIGASM</a>. Please follow/subscribe
      on Twitch.tv if you appreciate this project!
    </p>
    <p>
      Right now the translations are limited to only a small selection of
      languages, and we used Google Translate to provide the translations. Can
      you help fix these translations? Please contact{' '}
      <a href="https://steamcommunity.com/id/one-point-six">RAIGASM</a> on Steam
      if you would like to help out, or, if you know how,{' '}
      <a href="https://github.com/Raigasm/csio">
        submit a pull request on Github.
      </a>
    </p>
  </div>
);

export default IndexPage;
