define(["react", "react-dom/client", "./App", "./index.css"], function (_react, _client, _App, _index) {
  "use strict";

  _react = _interopRequireDefault(_react);
  _client = _interopRequireDefault(_client);
  _App = _interopRequireDefault(_App);
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  _client["default"].createRoot(document.getElementById('root')).render( /*#__PURE__*/_react["default"].createElement(_react["default"].StrictMode, null, /*#__PURE__*/_react["default"].createElement(_App["default"], null)));
});
