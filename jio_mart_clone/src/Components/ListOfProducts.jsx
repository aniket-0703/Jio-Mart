import {
  Box,
  Button,
  Center,
  Container,
  SimpleGrid,
  Spinner,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import useAPICall from "../CustomHooks/useAPICall";
import { getProducts, getInfiniteProducts } from "../Redux/Products/action";
import InfiniteScroll from "react-infinite-scroll-component";
import ProductItem from "./ProductItem";

export default function ListOfProducts({
  windowWidth,
  product_category,
  urlFilter,
}) {
  const dispatch = useDispatch();
  const { total, loading, error, products } = useSelector(
    (state) => state.products
  );
  const { baseUrl } = useAPICall();
  const [page, setPage] = useState(1);

  const getFirstProducts = () => {
    const url = createUrl(0);
    dispatch(getProducts(url));
  };

  const createUrl = (val) => {
    let url = `${baseUrl}/products?_limit=8&_page=${
      page + val
    }&item_category=${product_category}`;

    const { Availability, Categories, Price, DiscountRange, Discount, sort } =
      urlFilter;

    // console.log(Availability,Categories,Price,Discount,DiscountRange,sort)
    if (Availability) {
      url += `&item_stock=${Availability}`;
    }

    if (sort) {
      url += `&_sort=item_final_price&_order=${sort}`;
    }

    if (Discount) {
      url += `&item_discount=${Discount}`;
    }

    if (Categories.length !== 0) {
      const cat = Categories.map((ele) => `&item_tag_name=${ele}`);
      url += cat.join("");
    }

    if (Price) {
      url += `&item_final_price_gte=${Price.min}&item_final_price_lte=${Price.max}`;
    }

    // console.log(url)
    return url;
  };

  const getScrollProducts = () => {
    const url = createUrl(1);
    // console.log(url);
    dispatch(getInfiniteProducts(url));
  };

  const getMoreProducts = () => {
    setTimeout(() => {
      setPage(page + 1);
      getScrollProducts();
    }, 500);
  };

  useEffect(() => {
    setPage(1);
    getFirstProducts();
  }, [product_category, urlFilter]);

  // console.log(total!==products.length)

  return (
    <Box bg="white" p={5}>
      <h4 style={{ margin: "10px 10px" }}>ALL PRODUCTS</h4>
      {loading ? (
        <Center m={5}>
        <Spinner />
      </Center>
      ) : error ? (
        <Center>
        Something Went wrong....... <br /> Please Refresh
      </Center>
      ) : (
        <Box>
          <InfiniteScroll
            style={{ overflowY: "hidden" }}
            dataLength={products.length}
            next={getMoreProducts}
            hasMore={total !== products.length}
            loader={
              <Center>
                <Spinner />
              </Center>
            }
            scrollThreshold="80%"
          >
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} width="100%">
              {products.map((product) => (
                <ProductItem
                  key={product.id}
                  {...product}
                  product={product}
                  windowWidth={windowWidth}
                  product_category={product_category}
                />
              ))}
            </SimpleGrid>
          </InfiniteScroll>
          {total !== products.length ? (
            <Center>
              <Button bg="#42A8D6" colorScheme="white" mt={5}>
                Show More Results
              </Button>
            </Center>
          ) : null}
        </Box>
      )}
    </Box>
  );
}
