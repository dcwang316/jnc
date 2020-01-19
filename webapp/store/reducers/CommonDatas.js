import { SET_PRODUCT_ID } from 'actions/CommonActions';
import { getToken } from 'util/tool';

const tokenDataTemplate = {
    product_id: getToken('product'),
};

export function tokenData(tokenData = tokenDataTemplate, action) {
    switch (action.type) {
        case SET_PRODUCT_ID:
            return Object.assign({}, tokenData, action.data);
            break;
        default:
            return tokenData;
    }
}