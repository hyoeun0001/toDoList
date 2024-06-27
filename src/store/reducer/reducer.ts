import { boardsReducer } from "../slices/boardsSlice";
import { loggerReducer } from "../slices/loggerSlice";
import { modalReducer } from "../slices/modalSlice";
import { userReduser } from "../slices/userSlice";


const reducer={
    logger : loggerReducer,
    boards : boardsReducer,
    modal : modalReducer,
    user: userReduser
}

export default reducer;