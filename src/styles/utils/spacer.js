import * as variables from '../variables';

// spacer
export const offsetTop = {
    marginTop: variables.spacerVertical,
};

export const offsetTopLg = {
    marginTop: variables.spacerVertical * 2,
};

export const offsetBottom = {
    marginBottom: variables.spacerVertical,
};

export const offsetBottomLg = {
    marginBottom: variables.spacerVertical * 2,
};

export const offsetLeft = {
    marginLeft: variables.spacerHorizontal,
};

export const offsetLeftLg = {
    marginLeft: variables.spacerHorizontal * 2,
};

export const offsetRight = {
    marginRight: variables.spacerHorizontal,
};

export const offsetRightLg = {
    marginRight: variables.spacerHorizontal * 2,
};

export const offsetVertical = {
    ...offsetTop,
    ...offsetBottom,
};

export const offsetVerticalLg = {
    ...offsetTopLg,
    ...offsetBottomLg,
};

export const offsetHorizontal = {
    ...offsetLeft,
    ...offsetRight,
};

export const offsetHorizontalLg = {
    ...offsetLeftLg,
    ...offsetRightLg,
};

export const noOffset = {
    margin: 0,
    marginTop: 0,
    marginBottom: 0,
    marginLeft: 0,
    marginRight: 0,
    marginVertical: 0,
    marginHorizontal: 0,
};

// padding
export const paddingTop = {
    paddingTop: variables.spacerVertical,
};

export const paddingTopLg = {
    paddingTop: variables.spacerVertical * 2,
};

export const paddingBottom = {
    paddingBottom: variables.spacerVertical,
};

export const paddingBottomLg = {
    paddingBottom: variables.spacerVertical * 2,
};

export const paddingLeft = {
    paddingLeft: variables.spacerHorizontal,
};

export const paddingLeftLg = {
    paddingLeft: variables.spacerHorizontal * 2,
};

export const paddingRight = {
    paddingRight: variables.spacerHorizontal,
};

export const paddingRightLg = {
    paddingRight: variables.spacerHorizontal * 2,
};

export const paddingVertical = {
    ...paddingTop,
    ...paddingBottom,
};

export const paddingVerticalLg = {
    ...paddingTopLg,
    ...paddingBottomLg,
};

export const paddingHorizontal = {
    ...paddingLeft,
    ...paddingRight,
};

export const paddingHorizontalLg = {
    ...paddingLeftLg,
    ...paddingRightLg,
};

export const noPadding = {
    padding: 0,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
};

export const noPaddingVertical = {
    paddingTop: 0,
    paddingBottom: 0,
    paddingVertical: 0,
};

export const noPaddingHorizontal = {
    paddingLeft: 0,
    paddingRight: 0,
    paddingHorizontal: 0,
};

export const noPaddingTop = {
    paddingTop: 0,
};

export const noPaddingBottom = {
    paddingBottom: 0,
};

export const noPaddingLeft = {
    paddingLeft: 0,
};

export const noPaddingRight = {
    paddingRight: 0,
};
