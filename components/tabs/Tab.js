import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { FontIcon } from '../font_icon';
import { themr } from 'react-css-themr';
import { TABS } from '../identifiers.js';

class Tab extends Component {
  static propTypes = {
    active: PropTypes.bool,
    activeClassName: PropTypes.string,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    hidden: PropTypes.bool,
    icon: PropTypes.node,
    closeIcon: PropTypes.node,
    label: PropTypes.node,
    onActive: PropTypes.func,
    onClick: PropTypes.func,
    onCloseClick: PropTypes.func,
    theme: PropTypes.shape({
      active: PropTypes.string,
      disabled: PropTypes.string,
      hidden: PropTypes.string,
      label: PropTypes.string,
      withIcon: PropTypes.string,
      withText: PropTypes.string
    })
  };

  static defaultProps = {
    active: false,
    className: '',
    disabled: false,
    hidden: false
  };

  componentDidUpdate (prevProps) {
    if (!prevProps.active && this.props.active && this.props.onActive) {
      this.props.onActive();
    }
  }

  handleClick = (event) => {
    if (!this.props.disabled && this.props.onClick) {
      this.props.onClick(event);
    }
  };
  handleCloseClick = (event) => {
    if (!this.props.disabled && this.props.onCloseClick) {
      this.props.onCloseClick(event);
    }
  };
  render () {
    const {
      onActive, // eslint-disable-line
      active, activeClassName, className, disabled, hidden, label, icon, closeIcon, theme, ...other
    } = this.props;
    const _classNameCont = classnames(theme.tabContainer, {
      [theme.active]: active,
      [theme.hidden]: hidden,
      [theme.withText]: label,
      [theme.withIcon]: icon,
      [theme.disabled]: disabled,
      [activeClassName]: active
    }, className);

    const _className = classnames(theme.label, {
      [theme.active]: active,
      [theme.hidden]: hidden,
      [theme.withText]: label,
      [theme.withIcon]: icon,
      [theme.withCloseIcon]: closeIcon,
      [theme.disabled]: disabled,
      [activeClassName]: active
    }, className);

    return (
    <div data-react-toolbox='tab' className={_classNameCont}>
      <label {...other} className={_className} onClick={this.handleClick}>
        {icon && <FontIcon className={theme.icon} value={icon}/>}
        {label}
      </label>
      {closeIcon && 
        <div className={theme.closeIcon} onClick={this.handleCloseClick}>
          <FontIcon value={closeIcon}/>
      </div>
      }
    </div>
    );
  }
}

export default themr(TABS)(Tab);
export { Tab };
