import { useDispatch, useSelector } from "react-redux";
import { setIsActive, setPath } from "./Slice";
import { useCallback } from "react";

const Handlers = () => {
  const dispatch = useDispatch();
  const navlinkdata = useSelector((state) => state.app.navlinkdata);
  const swiperdata = useSelector((state) => state.app.swiperdata);
  const homechoosedata = useSelector((state) => state.app.homechoosedata);
  const footerhelpfullinks = useSelector(
    (state) => state.app.footerhelpfullinks
  );
  const footerlatestprogramlinks = useSelector(
    (state) => state.app.footerlatestprogramlinks
  );
  const footerproductlinks = useSelector(
    (state) => state.app.footerproductlinks
  );
  const footersupportlinks = useSelector(
    (state) => state.app.footersupportlinks
  );
  const footerlegallinks = useSelector((state) => state.app.footerlegallinks);
  const academicsdetaildata = useSelector(
    (state) => state.app.academicsdetaildata
  );
  const isActive = useSelector((state) => state.app.isActive);

  const handleOnClick = useCallback(
    (path) => (e) => {
      e.preventDefault();
      dispatch(setPath(path));
      window.location.pathname = path;
    },
    [dispatch]
  );

  const toggleNavbar = useCallback(() => {
    dispatch(setIsActive());
  }, [dispatch]);

  return {
    handleOnClick,
    navlinkdata,
    swiperdata,
    homechoosedata,
    footerhelpfullinks,
    footerlatestprogramlinks,
    footerproductlinks,
    footersupportlinks,
    footerlegallinks,
    academicsdetaildata,
    isActive,
    toggleNavbar,
  };
};

export default Handlers;
