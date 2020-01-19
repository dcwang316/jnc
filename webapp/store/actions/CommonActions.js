import { setToken, getToken, removeToken } from 'util/tool';
export const SET_PRODUCT_ID = 'SET_PRODUCT_ID';

export function set_product_id(id) {
    return (dispatch) => {
        setToken('product_id', id);
        dispatch({
            type: SET_PRODUCT_ID,
            data: {
                product_id: getToken()
            }
        });
    }
}

