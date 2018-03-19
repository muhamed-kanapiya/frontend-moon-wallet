import { from } from 'seamless-immutable';
import { createReducer, createAsyncAction } from '../../../utils/actions';

export const FETCH_BALANCES = 'wallet/balances/FETCH_BALANCES';

export const fetchBalances = createAsyncAction(FETCH_BALANCES);

const initialState = from({
  fetching: false,
  ethBalance: '0',
  erc20TokensBalance: []
});

export default createReducer({
  [fetchBalances.REQUEST]: (state) => (
    state.merge({
      fetching: true
    })
  ),

  [fetchBalances.SUCCESS]: (state, { payload }) => (
    state.merge({
      fetching: false,
      ...payload
    })
  ),

  [fetchBalances.FAILURE]: (state) => (
    state.merge({
      fetching: false
    })
  ),
}, initialState);