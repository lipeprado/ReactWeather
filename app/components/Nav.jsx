var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
    onSearch: function(e) {
        e.preventDefault();
        alert('ainda vou implementar...');
    },
    render: function() {
        return (
            <div className="top-bar ">
                <div className="row">
                    <div className="top-bar-left">
                        <ul className="menu">
                            <li className="menu-text">React Weather</li>
                            <li><IndexLink to="/" activeClassName="active" activeStyle={{ fontWeight: 'bold'}}>Get Weather</IndexLink></li>
                            <li><IndexLink to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</IndexLink></li>
                            <li><IndexLink to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</IndexLink></li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                        <form onSubmit={this.onSearch}>
                            <ul className="menu">
                                <li><input type="search" placeholder="Search Weather"/></li>
                                <li><input type="submit" className="button primary" value="Get Weather"/></li>
                            </ul>
                    </form>
                </div>
            </div>
        </div>
        ); } }); module.exports = Nav;

        var old = (
            <div>
                <IndexLink to="/" activeClassName="active" activeStyle={{
                    fontWeight: 'bold'
                }}>Get Weather</IndexLink>
                <IndexLink to="/about" activeClassName="active" activeStyle={{
                    fontWeight: 'bold'
                }}>About</IndexLink>
                <IndexLink to="/examples" activeClassName="active" activeStyle={{
                    fontWeight: 'bold'
                }}>Examples</IndexLink>
            </div>
        );
