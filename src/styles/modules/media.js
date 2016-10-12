import { media as style } from '../variables';

export const media = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: style.backgroundColor,
    backgroundColorActive: style.backgroundColorActive,
    paddingVertical: style.paddingVertical,
    paddingHorizontal: style.paddingHorizontal,
};


export const mediaObject = {
    paddingRight: style.paddingHorizontal,
};

export const mediaBody = {
    flex: 1,
};

export const mediaHeader = {
    color: style.color,
    fontSize: style.headerFontSize,
    fontWeight: style.headerFontWeight,
    marginBottom: style.paddingVertical,
};
