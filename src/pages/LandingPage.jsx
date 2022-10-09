import { Center, Container, Text, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "../components/ListItem";
import { getList, reset } from "../features/list/listSlice";
import Paginate from "../components/Pagination";

function LandingPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const { coins, success, error, loading } = useSelector((state) => state.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      console.log(error);
    }

    dispatch(getList());
  }, [dispatch, error]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coins.slice(firstPostIndex, lastPostIndex);
  return (
    <>
      <Container style={{ height: "100vh" }}>
        <ListItem item={currentPosts} />
        <Paginate
          totalPosts={coins.length}
          postsPerPage={postsPerPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
    </>
  );
}

export default LandingPage;
