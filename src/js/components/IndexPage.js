import React, { Component } from 'react';
import '../../css/reset.css';
import '../../css/common.css';
import '../../css/index-page.css';

class IndexPage extends Component {

  render() {
    const { children } = this.props;

    return (
      <section className="page-section index-page">
        index
        {children}
      </section>
    );
  }

}

module.exports = IndexPage;
