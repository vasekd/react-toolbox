/* global React */

import { addons } from 'react/addons';
import style from './style';
import FontIcon from '../font_icon';

export default React.createClass({
  mixins: [addons.PureRenderMixin],

  displayName: 'Link',

  propTypes: {
    label: React.PropTypes.string,
    className: React.PropTypes.string,
    count: React.PropTypes.number,
    icon: React.PropTypes.string,
    onClick: React.PropTypes.func,
    route: React.PropTypes.string
  },

  getDefaultProps () {
    return {
      attributes: '',
      className: ''
    };
  },

  onClick (event) {
    if (this.props.onClick) {
      this.props.onClick(event, this);
    }
  },

  render () {
    return (
      <a
        data-react-toolbox='link'
        data-flex='horizontal center'
        href={`${this.props.route}`}
        className={`${style.root} ${this.props.className}`}
        onClick={this.onClick}
      >
        { this.props.icon ? <FontIcon className={style.icon} value={this.props.icon} /> : null }
        { this.props.label ? <abbr>{this.props.label}</abbr> : null }
        { this.props.count && parseInt(this.props.count) !== 0 ? <small>{this.props.count}</small> : null}
      </a>
    );
  }
});