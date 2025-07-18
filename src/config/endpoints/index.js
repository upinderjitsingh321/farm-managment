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
SHORT_FIELD_LIST:`${BASE_URL}/api/field/fieldlist`,
CREATE_CROP:`${BASE_URL}/api/crop/usercrop`,
CREATE_ACTIVITY:`${BASE_URL}/api/activity/createactivity`,
CREATE_HARVEST_ACTIVITY:`${BASE_URL}/api/activity/createharvestactivity`,
DROPDOWN_FARM_LIST:`${BASE_URL}/api/field/farmlist`,
DROPDOWN_FIELD_LIST:`${BASE_URL}/api/crop/fieldsname`,
USER_CROP_LIST:`${BASE_URL}/api/crop/usercroplist`,
CROP_LIST:`${BASE_URL}/api/crop/croplist`,
USER_DETAILS:`${BASE_URL}/api/user/userdetail`,
USER_ACTIVITY_LIST:`${BASE_URL}/api/activity/useractivitylist`,
CREATE_INPUT:`${BASE_URL}/api/input/createinput`,
USER_INPUT_LIST:`${BASE_URL}/api/input/userinputlist`,
CREATE_SOIL:`${BASE_URL}/api/soil/createsoil`,
CREATE_NUTRIENT:`${BASE_URL}/api/soil/createnutrient`,
USER_SOIL_LIST:`${BASE_URL}/api/soil/soillist`,
SHORT_SOIL_LIST:`${BASE_URL}/api/soil/shortsoillist`,
USER_NUTRIENT:`${BASE_URL}/api/soil/nutrientlist`,
USER_CROP_HISTORY:`${BASE_URL}/api/crop_history/crophistory`,
USER_TOTAL_CROP_AREA:`${BASE_URL}/api/crop_history/croparea`,
EXPENSE_LIST:`${BASE_URL}/api/expense/expenselist`,
ALL_DATA_LIST:`${BASE_URL}/api/homedata/customdata`,
USER_COUNT:`${BASE_URL}/api/admin/alluser-count`,
ACTIVE_COUNT:`${BASE_URL}/api/admin/allactive-count`,
LASTMONTH_COUNT:`${BASE_URL}/api/admin/lastmonth-count`,
ORGANIC_COUNT:`${BASE_URL}/api/admin/organic-count`,
PH_COUNT:`${BASE_URL}/api/admin/ph-count`,
AVG_CROPDATA:`${BASE_URL}/api/crop/avgcropdata`,
AVG_FARMCOSTDATA:`${BASE_URL}/api/expense/avgfarmcost`,
CHEMICALS_LIST:`${BASE_URL}/api/admin/chemicalsdata`,
PERSONAL_DATA:`${BASE_URL}/api/admin/farmerdata`,
DELETE_CHEMICAL:`${BASE_URL}/api/input/chemical`,
FORGOTPASSWORD:`${BASE_URL}/api/password/forgotpassword`,
RESETPASSWORD:`${BASE_URL}/api/password/reset-password`,

// ALL_USER_LIST:`${BASE_URL}/api/admin/all-user`
}


