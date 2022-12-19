import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Search(props) {
  const PAGE_SIZE = 2;
  const router = useRouter();

  useEffect(() => {
    const pageSize = query.pageSize || PAGE_SIZE;
    const page = query.page || 1;
    const category = query.category || "";
    const brand = query.brand || "";
    const searchQuery = query.query || "";

    const queryFilter =
      searchQuery && searchQuery !== "all"
        ? {
            name: {
              $regex: searchQuery,
              $options: "i",
            },
          }
        : {};
    const categoryFilter = category && category !== "all" ? { category } : {};
    const brandFilter = brand && brand !== "all" ? { brand } : {};

    return () => {};
  }, []);

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
        brand !== "all" ? (
          <button onClick={() => router.push("/search")}>test</button>
        ) : null}
      </div>
      <div>
        {products.map((product) => (
          <div key={product.name} product={product}>
            <h1>{product.name}</h1>
          </div>
        ))}
      </div>
      <ul>
        {products.length > 0 &&
          [...Array(pages).keys()].map((pageNumber) => (
            <li key={pageNumber}>
              <button
                className={`default-button m-2 ${
                  page == pageNumber + 1 ? "font-bold" : ""
                } `}
                onClick={() => pageHandler(pageNumber + 1)}
              >
                {pageNumber + 1}
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
