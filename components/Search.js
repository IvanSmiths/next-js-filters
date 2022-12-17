import { useRouter } from "next/router";
const PAGE_SIZE = 2;

const products = [
  {
    name: "test",
    nn: 2,
  },
  {
    name: "test",
    nn: 2,
  },
  {
    name: "test",
    nn: 2,
  },
];

export default function Search(props) {
  const router = useRouter();

  const {
    query = "all",
    category = "all",
    brand = "all",
    page = 1,
  } = router.query;
  const { products, categories, brands, pages } = props;

  const filterSearch = ({ page, category, brand, searchQuery }) => {
    const { query } = router;
    if (page) query.page = page;
    if (searchQuery) query.searchQuery = searchQuery;
    if (category) query.category = category;
    if (brand) query.brand = brand;

    router.push({
      pathname: router.pathname,
      query: query,
    });
  };

  const categoryHandler = (e) => {
    filterSearch({ category: e.target.value });
  };

  const pageHandler = (page) => {
    filterSearch({ page: page });
  };

  const brandHandler = (e) => {
    filterSearch({ brand: e.target.value });
  };
  return (
    <div>
      <h2>categories</h2>
      <select value={category} onChange={categoryHandler}>
        <option value="all">All</option>
        {categories &&
          categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
      </select>
      <h2>brands</h2>
      <select value={brand} onChange={brandHandler}>
        <option value="all">All</option>
        {brands &&
          brands.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
      </select>
      <div>
        {products.length === 0 ? "No" : "3"} Results
        {query !== "all" && query !== "" && " : " + query}
        {category !== "all" && " : " + category}
        {brand !== "all" && " : " + brand}
        &nbsp;
        {(query !== "all" && query !== "") ||
          category !== "all" ||
          brand !== "all"}
      </div>
    </div>
  );
}
