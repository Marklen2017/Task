import { combineReducers } from "redux";
import { reducer as categoryReducer } from "./category";
import { reducer as imagesReducer } from "./images";


const rootReducer = combineReducers({
  category: categoryReducer,
  images: imagesReducer,
});

export default rootReducer;
