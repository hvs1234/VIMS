import { createSlice } from "@reduxjs/toolkit";
import NavLink from "../APIs/NavAPI";
import { SwiperData } from "../APIs/SwiperAPI";
import { HomeChooseData } from "../APIs/HomeChooseAPI";
import {
  FooterHelpfulLinks,
  FooterLatestProgramLinks,
  FooterLegalLinks,
  FooterProductLinks,
  FooterSupportLinks,
} from "../APIs/FooterAPI";
import { AcademicsDetailData } from "../APIs/AcademicsDetailAPI";

const initialState = {
  path: "/",
  navlinkdata: NavLink,
  swiperdata: SwiperData,
  homechoosedata: HomeChooseData,
  footerhelpfullinks: FooterHelpfulLinks,
  footerlatestprogramlinks: FooterLatestProgramLinks,
  footerproductlinks: FooterProductLinks,
  footersupportlinks: FooterSupportLinks,
  footerlegallinks: FooterLegalLinks,
  academicsdetaildata: AcademicsDetailData,
  isActive: false,
};

const Slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPath(state, action) {
      state.path = action.payload;
    },
    setAPIData(state, action) {
      state.navlinkdata = action.payload;
      state.swiperdata = action.payload;
      state.homechoosedata = action.payload;
      state.footerhelpfullinks = action.payload;
      state.footerlatestprogramlinks = action.payload;
      state.footerproductlinks = action.payload;
      state.footersupportlinks = action.payload;
      state.footerlegallinks = action.payload;
      state.academicsdetaildata = action.payload;
    },
    setIsActive(state) {
      state.isActive = !state.isActive;
    },
  },
});

export const { setPath, setAPIData, setIsActive } = Slice.actions;
export default Slice.reducer;
