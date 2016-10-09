import { list as style }  from '../variables';
import { darken } from '../utils/color';
import { getPixel } from '../utils/pixel';
import shadow from '../utils/shadow';

export const list = {
    borderTopWidth: style.borderWidth,
    borderColor: style.borderColor,
    marginBottom: style.marginBottom,
};


export const listItem = {
    borderBottomWidth: style.borderWidth,
    borderColor: style.borderColor,
    paddingVertical: style.paddingVertical,
    paddingHorizontal: style.paddingHorizontal,
    backgroundColor: style.backgroundColor,
    backgroundColorActive: style.backgroundColorActive,
};

export const listArrow = {
    size: 14,
    color: style.borderColor
}
