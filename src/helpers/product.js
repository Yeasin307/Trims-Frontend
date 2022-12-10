// get products
export const getProducts = (products, category, type, limit) => {
  const finalProducts = category
    ? products.filter(
      product => product?.categoryName?.name === category
    )
    : products;

  if (type && type === "new") {
    const newProducts = finalProducts.filter(single => single.new);
    return newProducts.slice(0, limit ? limit : newProducts.length);
  }
  if (type && type === "bestSeller") {
    return finalProducts
      .sort((a, b) => {
        return b.saleCount - a.saleCount;
      })
      .slice(0, limit ? limit : finalProducts.length);
  }
  if (type && type === "saleItems") {
    const saleItems = finalProducts.filter(
      single => single.discount && single.discount > 0
    );
    return saleItems.slice(0, limit ? limit : saleItems.length);
  }
  return finalProducts.slice(0, limit ? limit : finalProducts.length);
};

// get product discount price
export const getDiscountPrice = (price, discount) => {
  return discount && discount > 0 ? price - price * (discount / 100) : null;
};

// get product cart quantity
export const getProductCartQuantity = (cartItems, product, color, size) => {
  let productInCart = cartItems.filter(
    single =>
      single.id === product.id &&
      (single.selectedProductColor
        ? single.selectedProductColor === color
        : true) &&
      (single.selectedProductSize ? single.selectedProductSize === size : true)
  )[0];
  if (cartItems.length >= 1 && productInCart) {
    if (product.variation) {
      return cartItems.filter(
        single =>
          single.id === product.id &&
          single.selectedProductColor === color &&
          single.selectedProductSize === size
      )[0].quantity;
    } else {
      return cartItems.filter(single => product.id === single.id)[0].quantity;
    }
  } else {
    return 0;
  }
};

//get products based on category
export const getSortedProducts = (products, sortType, categorySortValues, tagSortValues) => {
  if (products && sortType && categorySortValues && tagSortValues) {
    if (sortType === "category") {
      let sortedProducts = [];
      categorySortValues.forEach(categorySortValue => {
        const filteredProducts = products.filter(
          product => product?.categoryName?.name === categorySortValue
        );
        sortedProducts = [...sortedProducts, ...filteredProducts]
      })
      return sortedProducts;
      // return products.filter(
      // product => product?.categoryName?.name === sortValue
      // );
    }
    else if (sortType === "tag") {
      let sortedProducts = [];
      tagSortValues.forEach(tagSortValue => {
        const filteredProducts = products.filter(product => {
          const tagsArray = product?.tags !== "" ? product?.tags?.split(",") : [];
          return (tagsArray.filter(single => single === tagSortValue)[0]);
        });
        sortedProducts = [...sortedProducts, ...filteredProducts]
      })
      const individualProducts = getIndividualItemArray(sortedProducts);
      return individualProducts;
      // return products.filter(product => {
      //   const tagsArray = product?.tags !== "" ? product?.tags?.split(",") : [];
      //   return (tagsArray.filter(single => single === sortValue)[0]);
      // });
    }
  }
  return products;
};

// get individual element
const getIndividualItemArray = array => {
  let individualItemArray = array.filter(function (v, i, self) {
    return i === self.indexOf(v);
  });
  return individualItemArray;
};

// get individual categories
export const getIndividualCategories = products => {
  let productCategories = [];
  products &&
    products.map(product => {
      return (
        product?.categoryName && productCategories.push(product?.categoryName?.name)
      );
    });
  const individualProductCategories = getIndividualItemArray(productCategories);
  return individualProductCategories;
};

// get individual tags
export const getIndividualTags = products => {
  let productTags = [];
  products &&
    products.map(product => {
      const tagArray = product?.tags !== "" ? product?.tags?.split(",") : []
      return (
        productTags = [...productTags, ...tagArray]
      );
    });
  const individualProductTags = getIndividualItemArray(productTags);
  return individualProductTags;
};

// get individual colors
export const getIndividualColors = products => {
  let productColors = [];
  products &&
    products.map(product => {
      return (
        product.variation &&
        product.variation.map(single => {
          return productColors.push(single.color);
        })
      );
    });
  const individualProductColors = getIndividualItemArray(productColors);
  return individualProductColors;
};

// get individual sizes
export const getProductsIndividualSizes = products => {
  let productSizes = [];
  products &&
    products.map(product => {
      return (
        product.variation &&
        product.variation.map(single => {
          return single.size.map(single => {
            return productSizes.push(single.name);
          });
        })
      );
    });
  const individualProductSizes = getIndividualItemArray(productSizes);
  return individualProductSizes;
};

// get product individual sizes
export const getIndividualSizes = product => {
  let productSizes = [];
  product.variation &&
    product.variation.map(singleVariation => {
      return (
        singleVariation.size &&
        singleVariation.size.map(singleSize => {
          return productSizes.push(singleSize.name);
        })
      );
    });
  const individualSizes = getIndividualItemArray(productSizes);
  return individualSizes;
};

export const setActiveSort = (e, all) => {
  if (all === 'all') {
    const filterButtons = document.querySelectorAll(
      ".sidebar-widget-tag button, .product-filter button"
    );
    filterButtons.forEach(item => {
      item.classList.remove("active");
    });
    if (e.currentTarget.classList.contains('active')) {
      const filterButtons = document.querySelectorAll(
        ".sidebar-widget-list-left button"
      );
      filterButtons.forEach(item => {
        item.classList.remove("active");
      });
    }
    else {
      const filterButtons = document.querySelectorAll(
        ".sidebar-widget-list-left button"
      );
      filterButtons.forEach(item => {
        item.classList.add("active");
      });
    }
  }
  else {
    if (e.currentTarget.parentElement.classList.contains('sidebar-widget-list-left')) {
      const filterButtons = document.querySelectorAll(
        ".sidebar-widget-tag button, .product-filter button"
      );
      filterButtons.forEach(item => {
        item.classList.remove("active");
      });
    }
    else if (e.currentTarget.parentElement.parentElement.parentElement.classList.contains('sidebar-widget-tag')) {
      const filterButtons = document.querySelectorAll(
        ".sidebar-widget-list-left button, .product-filter button"
      );
      filterButtons.forEach(item => {
        item.classList.remove("active");
      });
    }
    e.currentTarget.classList.toggle("active");
  }

  const allActive = getAllActive();
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button"
  );
  if (allActive) {
    filterButtons[0].classList.add('active');
  }
  else {
    filterButtons[0].classList.remove('active');
  }
};

export const getAllActive = () => {
  const filterButtons = document.querySelectorAll(
    ".sidebar-widget-list-left button"
  );

  for (let item = 1; item < filterButtons.length; item++) {
    if (!filterButtons[item].classList.contains('active')) {
      return false;
    }
  }
  return true;
}

export const setActiveLayout = e => {
  const gridSwitchBtn = document.querySelectorAll(".shop-tab button");
  gridSwitchBtn.forEach(item => {
    item.classList.remove("active");
  });
  e.currentTarget.classList.add("active");
};

export const toggleShopTopFilter = e => {
  const shopTopFilterWrapper = document.querySelector(
    "#product-filter-wrapper"
  );
  shopTopFilterWrapper.classList.toggle("active");
  if (shopTopFilterWrapper.style.height) {
    shopTopFilterWrapper.style.height = null;
  } else {
    shopTopFilterWrapper.style.height =
      shopTopFilterWrapper.scrollHeight + "px";
  }
  e.currentTarget.classList.toggle("active");
};
