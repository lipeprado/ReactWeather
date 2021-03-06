var React = require('react');

var ErrorModal = React.createClass({
    componentDidMount: function(){
        var modal = new Foundation.Reveal($('#error-modal'));
        modal.open();    
    },
    render: function(){
        return (
            <div className="reveal tiny text-center" id="error-modal" data-reveal>
                <h4>Some Title</h4>
                <p>Our Error Message!</p>
                <p>
                    <button className="button hollow warning" data-close>Okay</button>
                </p>

            </div>
        );
    }
});

module.exports = ErrorModal;
