import { http } from "../http";

const getBooks = ({ queryKey }: any) => {
  return http.get(`/books`, {
    params: { ...queryKey[1] },
  });
};

export { getBooks };
