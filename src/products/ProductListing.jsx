import React, { useContext, useEffect, useState } from "react";
import CategoryLayout from "../components/CategoryLayout";
import { useProducts } from "../App";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AddToCart,
  AddToWishlist,
  setClickedProduct,
  setProductCategory,
} from "../store/productSlice";
import { Like, Unlike } from "../components/navbar/Icons";
import eye from "../assets/Fill Eye.png";
import vector2 from "../assets/Vector2.png";
import { EyeIcon } from "../pages/home/Section2";
import { Context } from "../context/Context";

const ProductListing = () => {
  const Products = useProducts();
  const { display, setDisplay } = useContext(Context);
  const [priceFilter, setPriceFilter] = useState(0);
  // wishlist
  const wishlist = useSelector((state) => state.productsAuth.wishlist);
  const productCategory = useSelector(
    (state) => state.productsAuth.productCategory
  );

  const dispatch = useDispatch();

  const handleAddToWishlist = (id) => {
    dispatch(AddToWishlist(id));
  };

  useEffect(() => {
    let filtered = [];

    if (
      !productCategory ||
      productCategory === "all" ||
      productCategory === "All Categories"
    ) {
      filtered = Products;
    } else if (productCategory === "FlashSales") {
      filtered = Products.filter((product) => product.flash);
    } else if (productCategory === "Bestselling") {
      filtered = Products.filter((product) => product.bestselling);
    } else if (productCategory === "newArrival") {
      filtered = Products.filter((product) => product.newArrival);
    } else {
      filtered = Products.filter((product) =>
        product.subcategory.includes(productCategory)
      );
    }

    setDisplay(filtered);
  }, [productCategory, Products]);

  const handleInput = (e) => {
    const value = Number(e.target.value);
    setPriceFilter(value);
    const filteredByPrice = Products.filter((item) => item.price <= value);
    setDisplay(value === 0 ? Products : filteredByPrice);
  };
  const handleSelectChange = (e) => {
    const value = e.target.value;
    if (value) {
      dispatch(setProductCategory(value));
    }
  };

  return (
    <div className="container flex flex-col lg:flex-row mb-10">
      <CategoryLayout />

      {/* Mobile filter dropdown */}
      <div className="lg:hidden px-4 my-4">
        <details className="w-full border border-gray-300 rounded p-3">
          <summary className="font-medium cursor-pointer">
            Filter Options
          </summary>
          <div className="mt-4 space-y-4">
            {/* Category Filter */}
            <div>
              <label className="text-sm font-medium block mb-2">
                Filter by Category:
              </label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "All Categories",
                  "Woman’s Fashion",
                  "Men's Fashion",
                  "Electronics",
                  "Home & Lifestyle",
                  "Medicine",
                  "Sports & Outdoor",
                  "Baby’s & Toys",
                  "Groceries",
                  "Health & Beauty",
                ].map((category, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      dispatch(setProductCategory(category));
                    }}
                    className={`text-sm text-left p-2 rounded border border-neutral-300 ${
                      productCategory === category ? "bg-black text-white" : ""
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Filter */}
            <div className="flex flex-col gap-1">
              <label htmlFor="price" className="text-sm font-medium">
                Sort by Price:
              </label>
              <input
                type="number"
                name="price"
                value={priceFilter}
                onChange={handleInput}
                placeholder="$120.00"
                className="w-full h-10 border border-neutral-900/50 rounded-sm px-3 focus:outline-none"
              />
            </div>
          </div>
        </details>
      </div>

      {/* Product list and price filter */}
      <div className="w-full lg:w-[950px] h-auto lg:ml-auto px-4 lg:px-10 mt-4">
        <div className="flex flex-col gap-10">
          {/* Desktop price filter */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex items-center gap-3">
              <p className="mediump">Sort by price:</p>
              <input
                type="number"
                name="price"
                value={priceFilter}
                onChange={handleInput}
                placeholder="$120.00"
                className="w-32 h-10 border border-neutral-900/50 rounded-sm px-3 focus:outline-none"
              />
            </div>
            <div className="hidden lg:flex items-center gap-3">
              <p className="mediump">Filter by:</p>
              <select
                onChange={handleSelectChange}
                className="w-max h-10 border border-neutral-900/50 rounded-sm px-3 focus:outline-none"
              >
                <option value="all">All Products</option>
                <option value="newArrival">New Arrival</option>
                <option value="FlashSales">Flash Sales</option>
                <option value="Bestselling">Best Selling</option>
              </select>
            </div>
          </div>

          {display && (
            <div
              style={{ scrollbarWidth: "none" }}
              className="max-h-screen overflow-auto"
            >
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {display.map((item, idx) => (
                  <div key={idx} className="w-full flex flex-col group">
                    <div className="w-full h-[180px] lg:h-[250px] bg-[#F5F5F5] rounded-sm flex justify-center items-center relative">
                      <Link to={`/product/${item.id}`}>
                        <img
                          src={item.img}
                          className="w-[140px] lg:w-[190px] h-[130px] lg:h-[180px] object-contain"
                          alt={item.name}
                        />
                        <EyeIcon
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            dispatch(setClickedProduct(item.id));
                          }}
                          className="absolute top-10 lg:top-12 right-2 cursor-pointer "
                        />
                      </Link>

                      <span
                        onClick={() => dispatch(AddToCart(item.id))}
                        className="bg-black h-[37px] text-xs lg:text-[16px] lg:h-[41px] w-full absolute cursor-pointer bottom-0 left-0 text-white flex items-center justify-center lg:opacity-0 opacity-100 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Add To Cart
                      </span>

                      <span
                        onClick={() => handleAddToWishlist(item.id)}
                        className="absolute top-1 right-2 cursor-pointer"
                      >
                        {wishlist.some(
                          (wishItem) => wishItem.id === item.id
                        ) ? (
                          <Unlike className="text-[var(--red)] bg-white size-7 lg:size-8 p-1 rounded-full" />
                        ) : (
                          <Like className="bg-white size-7 lg:size-8 p-1 rounded-full stroke-1" />
                        )}
                      </span>

                      {item.discount && (
                        <span className="absolute top-2 left-2 bg-[var(--red)] w-[55px] h-[26px] rounded-sm text-white text-center text-xs leading-[18px] font-normal flex justify-center items-center">
                          -{item.discount}%
                        </span>
                      )}
                    </div>

                    <div>
                      <p className="lg:boldp truncate w-[180px]">
                        {item.name.length > 25
                          ? item.name.slice(0, 25) + "..."
                          : item.name}
                      </p>
                      <span className="flex items-center gap-3">
                        <p className="mediump text-[#DB4444]">${item.price}</p>
                        <p className="mediump line-through text-neutral-600/50">
                          {item.discount
                            ? `$${(
                                item.price /
                                (1 - item.discount / 100)
                              ).toFixed(2)}`
                            : null}
                        </p>
                      </span>
                      <span className="flex items-center gap">
                        {[...Array(5)].map((_, idx) => (
                          <img src={vector2} key={idx} alt="rating star" />
                        ))}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
