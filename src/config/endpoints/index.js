const BASE_URL = import.meta.env.VITE_API_URL //http:localhost/8008



export const USER = {
SIGN_UP:`${BASE_URL}/api/user/sign-up`,
LOGIN:`${BASE_URL}/api/user/login`,
EDIT_DETAILS:`${BASE_URL}/api/user/edit_detail`,
VERIFY_EMAIL:`${BASE_URL}/api/user/verify`,
FARMS_LIST:`${BASE_URL}/api/userfarm/userfarms`,
USER_FRAM_LIST:`${BASE_URL}/api/userfarm/userfarmlist`,
FIELD_LIST:`${BASE_URL}/api/field/userfield`,
USER_FIELD_LIST:`${BASE_URL}/api/field/userfieldlist`,
CREATE_CROP:`${BASE_URL}/api/crop/usercrop`,
CREATE_ACTIVITY:`${BASE_URL}/api/activity/createactivity`,
DROPDOWN_FARM_LIST:`${BASE_URL}/api/field/farmlist`,
DROPDOWN_FIELD_LIST:`${BASE_URL}/api/crop/fieldsname`,
USER_CROP_LIST:`${BASE_URL}/api/crop/usercroplist`,
USER_DETAILS:`${BASE_URL}/api/user/userdetail`,

ALL_USER_LIST:`${BASE_URL}/api/admin/all-user`
}


