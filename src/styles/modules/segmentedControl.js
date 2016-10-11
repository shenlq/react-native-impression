import { segmentedControl as style } from '../variables';


export const segment = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: style.backgroundColor,
    borderWidth: style.borderWidth,
    borderColor: style.tintColor,
    borderRadius: style.borderRadius,
};

export const segmentItem = {
    paddingVertical: style.paddingVertical,
    paddingHorizontal: style.paddingHorizontal,
};

export const segmentItemActive = {
    backgroundColor: style.tintColor,
};

export const segmentItemFirst = {
    borderTopLeftRadius: style.borderRadius - 1,
    borderBottomLeftRadius: style.borderRadius - 1,
};

export const segmentItemLast = {
    borderTopRightRadius: style.borderRadius - 1,
    borderBottomRightRadius: style.borderRadius - 1,
};

export const segmentItemText = {
    color: style.tintColor,
    fontSize: style.fontSize,
};

export const segmentItemActiveText = {
    color: style.activeColor,
};
