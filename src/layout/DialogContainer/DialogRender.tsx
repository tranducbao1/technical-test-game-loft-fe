import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import CustomDialog from 'src/modules/components/CustomDialog';
import { hideAllDialog, hideDialog, showDialog } from 'src/redux/dialog/dialogSlice';
import { DIALOG_TYPES, DialogData } from 'src/redux/dialog/types';
import { Callback } from 'src/services';

const DialogRenderer: React.FC<Props> = ({
  data = {},
  dialogType = '',
  onShowDialog,
  onHideDialog,
  onHideAllDialog,
  open = false,
}) => {
  const {
    cancelText = '',
    content,
    fullscreen,
    hideTitle = false,
    size = 'sm',
    maxwidth = 'sm',
    okText = '',
    onCancel,
    onOk,
    reconfirm,
    title = '',
    okVariant = '',
    cancelVariant = '',
    hideCloseButton = false,
    okIcon = '',
    cancelIcon = '',
    // showDivider = false,
    // customStyle = {},
  } = data;

  const defaultTitleByType = () => {
    switch (dialogType) {
      case DIALOG_TYPES._CONFIRM_CANCEL_DIALOG:
        return title || 'Cancel Editing';
      default:
        return title;
    }
  };

  const defaultContentByType = () => {
    switch (dialogType) {
      case DIALOG_TYPES._CONFIRM_CANCEL_DIALOG:
        return (
          content || 'Are you sure you want to cancel? The changes you made will not be saved.'
        );
      default:
        return content;
    }
  };

  const onNoClick = () => {
    const cancelCallback = () => {
      if (onCancel) {
        onCancel();
      } else {
        onHideDialog();
      }
    };

    switch (dialogType) {
      case DIALOG_TYPES._YESNO_DIALOG:
        if (data.reconfirm?.cancel?.show) {
          showReconfirmDialog('cancel');
        } else {
          cancelCallback();
        }
        return;
      default: {
        cancelCallback();
      }
    }
  };

  const onYesClick = () => {
    switch (dialogType) {
      case DIALOG_TYPES._YESNO_DIALOG:
        if (data.reconfirm?.cancel?.show) {
          showReconfirmDialog('ok');
        } else {
          onOk();
        }
        return;
      case DIALOG_TYPES._CONFIRM_CANCEL_DIALOG:
        if (data?.onOk) {
          data.onOk();
        } else {
          onHideAllDialog();
        }
        return;
      default:
        onOk();
    }
  };

  const showReconfirmDialog = (type: 'ok' | 'cancel') => {
    switch (type) {
      case 'ok':
        const dataOk = data.reconfirm?.ok;
        onShowDialog({
          type: DIALOG_TYPES._YESNO_DIALOG,
          data: {
            title: dataOk?.title || 'Confirmation',
            content: dataOk?.content || 'Are you sure you want to apply this change?',
            cancelText: dataOk?.cancelBtn || 'Cancel',
            okText: dataOk?.okBtn || 'Confirm',
            onOk,
            onCancel: () => {
              onHideDialog();
            },
          },
        });
        return;
      case 'cancel':
        const dataCancel = reconfirm?.cancel;
        onShowDialog({
          type: DIALOG_TYPES._YESNO_DIALOG,
          data: {
            title: dataCancel?.title || 'Confirmation',
            content: dataCancel?.content || 'Are you sure you want to apply this change?',
            cancelText: dataCancel?.cancelBtn || 'Cancel',
            okText: dataCancel?.okBtn || 'Confirm',
            onOk: () => {
              onCancel();
            },
            onCancel: () => {
              onHideDialog();
            },
          },
        });
        return;
      default:
        onHideDialog();
    }
  };

  return (
    <CustomDialog
      hideTitle={hideTitle}
      size={size}
      maxwidth={maxwidth}
      title={defaultTitleByType()}
      hideCloseButton={hideCloseButton}
      fullscreen={fullscreen}
      show={open}
      onHide={() => onNoClick()}
      dialogActions={DiaLogAction({
        dialogType,
        cancelText,
        okText,
        onNoClick,
        onYesClick,
        okVariant,
        cancelVariant,
        cancelIcon,
        okIcon,
      })}
    >
      {defaultContentByType()}
    </CustomDialog>
  );
};
type DialogActionType = {
  dialogType: string;
  cancelText: string;
  onNoClick: Callback;
  onYesClick: Callback;
  okText: string;
  okVariant?: string;
  cancelVariant?: string;
  okIcon?: React.ReactNode;
  cancelIcon?: React.ReactNode;
};

const DiaLogAction: React.FC<DialogActionType> = ({
  dialogType,
  cancelText,
  onNoClick,
  onYesClick,
  okText,
  okVariant,
  cancelVariant,
  okIcon,
  cancelIcon,
}) => {
  switch (dialogType) {
    case DIALOG_TYPES._YESNO_DIALOG:
      return (
        <>
          <Button
            size="sm"
            variant={cancelVariant ? cancelVariant : 'outline-secondary'}
            onClick={() => onNoClick()}
          >
            {cancelIcon && cancelIcon}
            {cancelText || 'Cancel'}
          </Button>
          <Button
            size="sm"
            variant={okVariant ? okVariant : 'primary'}
            onClick={() => onYesClick()}
            className={okVariant === 'common' ? 'common-purple-button' : ''}
          >
            {okIcon && okIcon}
            {okText || 'Confirm'}
          </Button>
        </>
      );
    case DIALOG_TYPES._CONFIRM_CANCEL_DIALOG:
      return (
        <>
          <Button
            size="sm"
            variant={cancelVariant ? cancelVariant : 'outline-secondary'}
            onClick={() => onNoClick()}
          >
            {cancelIcon && cancelIcon}
            {cancelText || 'Cancel'}
          </Button>
          <Button size="sm" onClick={() => onYesClick()} variant={okVariant}>
            {okIcon && okIcon}
            {okText || 'OK'}
          </Button>
        </>
      );
    case DIALOG_TYPES._OK_DIALOG:
      return (
        <>
          <Button
            size="sm"
            className={okVariant === 'common' ? 'common-purple-button' : ''}
            variant={okVariant}
            onClick={() => onYesClick()}
          >
            {okText || 'Confirm'}
          </Button>
        </>
      );
    default:
      return null;
  }
};
type Props = ReturnType<typeof mapStateToProps> &
  typeof mapDispatchToProps & {
    data: DialogData;
    dialogType: string;
    open: boolean;
  };

const mapStateToProps = () => ({});

const mapDispatchToProps = {
  onShowDialog: showDialog,
  onHideDialog: hideDialog,
  onHideAllDialog: hideAllDialog,
};

export default connect(mapStateToProps, mapDispatchToProps)(DialogRenderer);
