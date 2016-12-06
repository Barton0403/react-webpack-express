import React, { Component } from 'react';
import '../../css/reset.css';
import '../../css/common.css';
import '../../css/login-register-page.css';

class LoginPage extends Component {

  render() {
    return (
      <section className="page-section login-register-page">
        <form className="login-register-form" action="/register" method="post">
          <div className="field-group">
            <div className="field field-text">
              <input type="text" placeholder="请输入帐号" />
            </div>
            <div className="field field-text">
              <input type="text" placeholder="请输入密码" />
            </div>
            <div className="field field-text">
              <input type="text" placeholder="请再次输入密码" />
            </div>
          </div>
          <div className="field-errors"></div>
          <button className="btn block">注 册</button>
        </form>
      </section>
    );
  }

}

module.exports = LoginPage;
