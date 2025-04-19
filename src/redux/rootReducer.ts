import { combineReducers } from 'redux';
import dialogReducer, { dialogState, IDialogState } from './dialog/dialogSlice';

export interface IRootState {
  // router: RouterState;
  dialog: IDialogState;
}

export const rootState: IRootState = {
  // router: undefined,
  dialog: dialogState,
};

/* ------------- Assemble The Reducers ------------- */
const createRootReducer = () =>
  combineReducers<IRootState>({
    // router: connectRouter(history),

    dialog: dialogReducer,
  });

export default createRootReducer;
