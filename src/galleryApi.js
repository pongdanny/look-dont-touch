const galleryApi = async () => {
  try {
    let res = await fetch("https://data.nhm.ac.uk/api/3/action/package_list");
    // console.log(res);
    if (!res.ok) {
      console.log(res);
    }
    const resJson = await res.json();
    console.log(resJson);
    return resJson.result;
  } catch (e) {
    console.error(e);
  }
};

export default galleryApi;
