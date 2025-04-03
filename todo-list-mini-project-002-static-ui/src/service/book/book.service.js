export const getCategoryServices= async () => {
    // since headerToken is an async function that why we need to use await
    const header = await headerToken();
    const res = await fetch(`${baseUrl}/category/get-all-categories`, { headers: header,});
    const data = await res.json();
    return data;
  };
  