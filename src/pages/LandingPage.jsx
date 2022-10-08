import { Center, Container, Text, Button } from "@mantine/core";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getList, reset } from "../features/list/listSlice";

function LandingPage() {
  const { coins, success, error, loading } = useSelector(
    (state) => state.list
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (error) {
      console.log(error);
    }
    dispatch(getList());
  }, [dispatch, error]);

  return (
    <>
      <Text>Coins</Text>
    </>
  );
}

export default LandingPage;