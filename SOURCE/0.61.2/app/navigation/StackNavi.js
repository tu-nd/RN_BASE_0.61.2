import { SCREEN_ROUTER } from "@app/constants/Constant";
import { DetailNotiScreen } from "@app/screens/customer/notification/DetailNotiScreen";
import UserScreen from "@app/screens/customer/user/UserScreen";

export default {

    [SCREEN_ROUTER.USER]: UserScreen,
    [SCREEN_ROUTER.DETAIL_NOTI]: DetailNotiScreen

};