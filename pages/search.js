import { useRouter } from "next/router";
const PAGE_SIZE = 2;

const prices = [
  { name: "Test", value: "100" },
  { name: "Test 2", value: "200" },
  { name: "Test 3", value: "300" },
];

const ratings = [1, 2, 3, 4, 5];

export default function Search(props) {
  const router = useRouter();

  const {
    query = "all",
    category = "all",
    brand = "all",
    page = 1,
  } = router.query;
  const { products, categories, brands, pages } = props;

  const filterSearch = (products, categories, brands, pages, searchQuery) => {
    const { query } = router;
  };
}
