import React, { Component } from 'react';
import BodySection from './BodySection';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  bodySectionWithMargin: {
    marginBottom: '40px'
  }
})

export default class BodySectionWithMarginBottom extends Component {
  render() {
    const { children } = this.props
    return (
      <div className={css(styles.bodySectionWithMargin)}>
        <BodySection />
        {children}
      </div>
    );
  }
}