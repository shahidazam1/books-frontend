"use client";
import { getBooks } from "@/api/services/books";
import Loader from "@/components/Loader";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useQuery } from "react-query";

interface BookTypes {
  title: string;
  description: string;
  discountRate: string;
  price: number;
  coverImageUrl: string;
}

export default function Home() {
  const [limit, setLimit] = useState<number>(20);
  const [offset, setOffset] = useState<number>(0);

  const { data, isLoading } = useQuery(
    [
      "books",
      {
        limit: limit,
        offset: limit * offset,
      },
    ],
    getBooks
  );

  const loadMoreTrigger = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (
      loadMoreTrigger.current &&
      window.innerHeight + window.scrollY >=
        loadMoreTrigger.current.offsetTop * 0.8
    ) {
      setLimit(20);
      setOffset(offset + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  if (isLoading) return <Loader />;

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h4">Books</Typography>
      </Box>
      <Grid container spacing={2}>
        {data?.data?.books?.map((book: BookTypes, index: number) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3}>
            <img
              src={book?.coverImageUrl}
              alt={book?.title}
              width="100%"
              height="300px"
              style={{ objectFit: "cover" }}
            />
            <Box p={2}>
              <Typography variant="h6">{book?.title}</Typography>
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography variant="body1" sx={{ color: "red" }}>
                  {book?.discountRate}%
                </Typography>
                <Typography variant="body1">
                  {book?.price?.toLocaleString()} INR
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
