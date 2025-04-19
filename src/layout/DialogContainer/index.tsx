import React, { Suspense } from 'react';
import { connect } from 'react-redux';
import { hideDialog } from 'src/redux/dialog/dialogSlice';
import { DialogDataKey } from 'src/redux/dialog/types';
import { IRootState } from 'src/redux/rootReducer';

const DialogRenderer = React.lazy(() => import('./DialogRender'));

const DialogContainer: React.FC<Props> = ({ data, isVisible, dialogType }) => (
  <Suspense fallback={null}>
    <DialogRenderer
      open={isVisible[DialogDataKey._FIRST]}
      data={data[DialogDataKey._FIRST]}
      dialogType={dialogType[DialogDataKey._FIRST]}
    />
    <DialogRenderer
      open={isVisible[DialogDataKey._SECOND]}
      data={data[DialogDataKey._SECOND]}
      dialogType={dialogType[DialogDataKey._SECOND]}
    />

    <DialogRenderer
      open={isVisible[DialogDataKey._THIRD]}
      data={data[DialogDataKey._THIRD]}
      dialogType={dialogType[DialogDataKey._THIRD]}
    />
  </Suspense>
);

type Props = ReturnType<typeof mapStateToProps> & typeof mapDispatchToProps;

const mapStateToProps = (state: IRootState) => {
  const { dialog } = state;
  return {
    isVisible: dialog.isVisible,
    dialogType: dialog.type,
    data: dialog.data,
    loading: dialog.loading,
  };
};

const mapDispatchToProps = {
  hideDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogContainer);
