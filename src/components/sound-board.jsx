var React = require('react');
var YouSmart = require('./you-smart.jsx');
var YouLoyal = require('./you-loyal.jsx');
var YouGrateful = require('./you-grateful.jsx');
var Appreciate = require('./appreciate.jsx');
var Congradulations = require('./congradulation.jsx');
var AnotherOne1 = require('./another-one1.jsx');
var AnotherOne2 = require('./another-one2.jsx');
var AnotherOne3 = require('./another-one3.jsx');
var DontEverPlayYourself1 = require('./dont-ever-play-yourself1.jsx');
var DontEverPlayYourself2 = require('./dont-ever-play-yourself2.jsx');
var Lion = require('./lion.jsx');

module.exports = React.createClass({
  getInitialState: function(){
    return {
    }
  },
  render: function(){
    return <div className="all-sounds">
      <YouSmart />
      <YouLoyal />
      <YouGrateful />
      <Appreciate />
      <Congradulations />
      <AnotherOne1 />
      <AnotherOne2 />
      <AnotherOne3 />
      <DontEverPlayYourself1 />
      <DontEverPlayYourself2 />
      <Lion />
    </div>
  }
})
