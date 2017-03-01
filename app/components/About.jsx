var React = require('react');




var About = (props) => {
  return (
    <div>
      <h1 className="text-center">About</h1>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <p>Some Tools i like to use:</p>

      <ul>
          <li>
              <a href="https://facebook.github.io/react" target="_blank" > React</a> | FrameWork Javascript.
          </li>
          <li>
              <a href="http://foundation.zurb.com" target="_blank" > Foundation</a> | FrameWork Css.
          </li>
          <li>
              <a href="https://openweathermap.org" target="_blank" > Open Weather</a> | Weather API.
          </li>
      </ul>
</div>
  )
};

module.exports = About;
