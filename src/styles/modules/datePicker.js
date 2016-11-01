import { datePicker as style } from '../variables';


export const datePickerMask = {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
    backgroundColor: style.backgroundColorMask,
};

export const datePicker = {
    backgroundColor: style.backgroundColor,
};

export const datePickerHeader = {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    borderTopWidth: style.borderWidth,
    borderTopColor: style.borderTopColor,
    borderBottomWidth: style.borderWidth,
    borderBottomColor: style.borderColor,
    paddingHorizontal: style.paddingHorizontalHeader,
};

export const datePickerButton = {
    color: style.colorButton,
    fontSize: style.fontSizeButton,
    fontWeight: style.fontWeightButton,
    paddingVertical: style.paddingVerticalButton,
    paddingHorizontal: style.paddingHorizontalButton,
};
