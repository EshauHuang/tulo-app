import { useMemo } from "react";
import { useLocation } from "react-router-dom";

const useParams = () => {
  const { pathname, search } = useLocation();

  return {
    params: useMemo(() => {
      const [, ...args] = pathname.match(/\/(\w*)\/?(\d*)\/?(\w*)/);
      return args.filter((arg) => arg);
    }, [pathname]),
    search: useMemo(() => {
      const searchStr = search.match(/\?{1}(.*)/);
      return searchStr ? searchStr[1] : undefined;
    }, [search]),
  };
};

export default useParams;
