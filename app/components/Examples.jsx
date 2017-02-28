var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Feel examples to try out</p>
      <ol>
          <li>
              <Link to="/?location=Belo Horizonte" >Belo Horizonte, Brazil</Link>
          </li>
          <li>
              <Link to="/?location=veneza" >Veneza, Italia</Link>
          </li>
      </ol>
    </div>
  )
};

module.exports = Examples;
