export enum DialogDataKey {
  _FIRST = 'first',
  _SECOND = 'second',
  _THIRD = 'third',
}
export interface ContentDialogData {
  title?: string;
  content?: string | React.ReactElement;
  okText?: string;
  cancelText?: string;
  onOk?: (..._arg: any[]) => void;
  onCancel?: (..._arg: any[]) => void;
  size?: 'sm' | 'lg' | 'xl';
  hideTitle?: boolean;
  fullscreen?: string | true;
  hideCloseButton?: boolean;
  showDivider?: boolean;
  okVariant?: string;
  cancelVariant?: string;
  okIcon?: React.ReactNode;
  cancelIcon?: React.ReactNode;
  onClickExport?: (..._arg: any[]) => void;
  reconfirm?: {
    ok?: {
      show?: boolean;
      title?: string;
      content?: string;
      okBtn?: string;
      cancelBtn?: string;
    };
    cancel?: {
      show?: boolean;
      title?: string;
      content?: string;
      okBtn?: string;
      cancelBtn?: string;
    };
  };
}
export interface ConfirmDialogData {
  title?: string;
  content?: string | React.ReactElement;
  okText?: string;
  cancelText?: string;
  onOk?: (..._arg: any[]) => void;
  onCancel?: (..._arg: any[]) => void;
  okVariant?: string;
  cancelVariant?: string;
  okIcon?: React.ReactNode;
  cancelIcon?: React.ReactNode;
  hideCloseButton?: boolean;
  showDivider?: boolean;
  size?: 'sm' | 'lg' | 'xl';
  onClickExport?: (..._arg: any[]) => void;
  customStyle?: any;
  maxwidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export enum DIALOG_TYPES {
  _CONTENT_DIALOG = 'CONTENT_DIALOG',
  _YESNO_DIALOG = 'YESNO_DIALOG',
  _OK_DIALOG = 'OK_DIALOG',
  _CONFIRM_CANCEL_DIALOG = 'CONFIRM_CANCEL_DIALOG',
}

export type DialogData = ContentDialogData & ConfirmDialogData;
