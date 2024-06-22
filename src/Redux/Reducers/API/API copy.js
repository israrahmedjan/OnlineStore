const BaseUrl = process.env.REACT_APP_BASE_URL;
console.log("Base Url", BaseUrl)
export async function FetchProductsAPI() {

  try {
    const response = await fetch(`${BaseUrl}/products?_start=0&_limit=15`);

    const data = await response.json();
    console.log("Our Data is that:", data)
    return data.products;
  } catch (error) {
    // console.log("eror:", error);
    throw error;
  }

}

export async function fetchProductsNewAPI(start = 0) {

  try {
    //const response = await fetch(`${BaseUrl}/products?_start=5&_limit=4');
    const response = await fetch(`${BaseUrl}/products?_start=${start}&_limit=4`);
    const data = await response.json();
    return data.products;
  } catch (error) {
    // console.log("eror:", error);
    throw error;
  }

}


export async function fetchProductsCatAPI(cat) {

  console.log("cat items : ", cat);
  try {
    const response = await fetch(`${BaseUrl}/products?category=${cat}`);
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log("eror:", error);
    throw error;
  }


}

export async function fetchProductDetailAPI(prodID) {

  // console.log("cat items : ", cat);
  try {
    const response = await fetch(`${BaseUrl}/products/${prodID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    // console.log("eror:", error);
    throw error;
  }


}



export async function FetchFiltperProductsAPI(queryString) {
  try {
    const response = await fetch(`${BaseUrl}/products?` + queryString);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }

}

export async function FetchPaginationProductsAPI(queryString) {
  try {
    const response = await fetch(`${BaseUrl}/products?` + queryString);
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }



}
export async function saveOrdersAPI(orderData) {
  try {
    console.log("Order daa in order Slice:", orderData);
    const response = await fetch('http://localhost:5000/user/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(orderData)
    });
  }
  catch (err) {
    console.log(err);
  }

}

export async function fetchUserAPI(userData) {
  try {
    // console.log("User API Slice:", userData);
    const response = await fetch('http://localhost:5000/user/userlogin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    return data;
  }
  catch (err) {
    console.log(err);
  }

}

export async function fetchOrdersAPI(userData) {
  try {
    // console.log("User API Slice:", userData);
    const response = await fetch('http://localhost:5000/user/myorders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    const data = await response.json();
    return data;
  }
  catch (err) {
    console.log(err);
  }

}





