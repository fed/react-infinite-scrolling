import React from 'react';
import PropTypes from 'prop-types';

export default class InfiniteScroll extends React.Component {
  constructor() {
    super();

    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const body = document.body;
    const html = document.documentElement;
    const documentHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowHeight = 'innerHeight' in window ? window.innerHeight : document.documentElement.offsetHeight;
    const windowBottom = windowHeight + window.pageYOffset;
    const bottomReached = windowBottom >= documentHeight;

    if (bottomReached) {
      this.props.handleBottomReach();
    }
  }

  render() {
    return this.props.children;
  }
}

InfiniteScroll.propTypes = {
  children: PropTypes.node.isRequired,
  handleBottomReach: PropTypes.func.isRequired
};
