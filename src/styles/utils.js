import * as variables from './variables';
import * as flex from './utils/flex';
import * as spacer from './utils/spacer';
import * as text from './utils/text';

// == border
export const bordered = {
    borderWidth: variables.borderWidth,
    borderColor: variables.borderColor,
};

export const borderVerticaled = {
    borderTopWidth: variables.borderWidth,
    borderBottomWidth: variables.borderWidth,
    borderColor: variables.borderColor,
};

export default {
    ...flex,
    ...spacer,
    ...text,
};
