const React = require('react');

exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <noscript key="noscript">
      Désolé, ce site a besoin de Javascript pour fonctionner!
    </noscript>,
  ]);
};
