import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuDivider } from '@blueprintjs/core';
import { shortAddress } from '../../../utils/numbers';

const NavWalletDropdown = (props) => {
  const renderMenu = () => props.wallets.map(({ address }) => {
    const text = `${shortAddress(address)}`;
    if (address === props.selectedWallet) {
      return (
        <Link
          key={address}
          onClick={() => props.selectWallet(address)}
          to={`/wallet/${address}`}
          className="pt-menu-item pt-disabled">
          {text}
        </Link>
      );
    }

    return (
      <Link
        key={address}
        onClick={() => props.selectWallet(address)}
        to={`/wallet/${address}`}
        className="pt-menu-item">
        {text}
      </Link>
    );
  });

  return (
    <Menu className="pt-popover-dismiss">
      {renderMenu()}
      <MenuDivider />
      <Link to="/wallets" className="pt-menu-item">Wallets...</Link>
    </Menu>
  );
};

export default NavWalletDropdown;
