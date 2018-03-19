import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';

import { fetchUser } from '../../../redux/modules/app/user';
import { closeRegisterTokenPopup } from '../../../redux/modules/settings/registerCustomToken';

import Nav from '../Nav';
import Wallets from '../../../components/wallets/Wallets';
import Wallet from '../../wallet/Wallet';
import Settings from '../../../components/settings/Settings';
import Help from '../../../components/help/Help';

import RegisterCustomTokenPopup from '../../settings/RegisterCustomTokenPopup';

import namedRoutes from '../../../routes';
import s from './styles.css';

class AppWrapper extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const {
      registerCustomToken,
      closeRegisterTokenPopup
    } = this.props;

    return (
      <div className={s.wrapper}>
        <div className={s.nav}>
          <Nav/>
        </div>
        <Switch>
          <Route exact path={namedRoutes.wallets} component={Wallets}/>
          <Route path={`${namedRoutes.wallet}/:walletId`} component={Wallet}/>
          <Route path={namedRoutes.settings} component={Settings}/>
          <Route path={namedRoutes.help} component={Help}/>
          <Redirect from={namedRoutes.app} to={namedRoutes.wallets}/>
        </Switch>

        <RegisterCustomTokenPopup
          isOpen={registerCustomToken.popupIsOpen}
          onClose={() => closeRegisterTokenPopup()}/>
      </div>
    );
  }
}

const ConnectedComponent = connect(
  (state) => ({
    registerCustomToken: state.settings.registerCustomToken
  }),
  {
    fetchUser,
    closeRegisterTokenPopup
  }
)(AppWrapper);
const ComponentWithRouter = withRouter(ConnectedComponent);
export default ComponentWithRouter;