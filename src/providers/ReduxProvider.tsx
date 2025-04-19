import { PropsWithChildren } from 'react';
import { Provider } from 'react-redux';
import createStore from '../redux/store';

const { store } = createStore();

export default (props: PropsWithChildren) => {
  return <Provider store={store}>{props.children}</Provider>;
};
