export const fetchData = async <T = any>(
  path: string, 
  lang: string = 'uz', 
  options?: RequestInit
) => {
  try {
    const response = await fetch(
      `${process.env.API_URL}${path}`, 
      {
        ...(options || {}),
        headers: {
          ...(options?.headers || {}),
          'Accept-Language': lang
        },
      }
    );
    return response.json() as T;
  } catch (er) {
    console.log(er);
    return null as T;
  }
};

export const fetchMainData = async (lang: string) => {
  const headerData = await fetchData('/header', lang);
  const footerData = await fetchData('/footer', lang);
  return {
    headerData,
    footerData
  };
};