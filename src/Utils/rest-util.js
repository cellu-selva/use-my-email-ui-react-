import { urlProperties } from './constant';
const { API_ENDPOINT } = urlProperties;

function clean(obj) {
  for (var propName in obj) {
    const value = obj[propName];
    if (value === null || value === undefined || value === "") {
      delete obj[propName];
    }
  }
}

export const constructQueryParam = (url, params) => {
  if (params) {
    const keys = Object.keys(params);
    let query = keys.map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(params[k])).join("&");
    if (keys.length) {
      url = `${url}?${query}`;
    }
  }
  return url
}


export const post = async (api, data) => {
  try {
    const resp = await fetch(`${API_ENDPOINT}/${api}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const parsedResponse = await resp.json();
    return parsedResponse;
  } catch (error) {
    // handle basic error and toast it over here
    // else throw
    throw error;
  }
}

export const get = async (api, params) => {
  try {
    const url = constructQueryParam(api, params);
    const resp = await fetch(`${API_ENDPOINT}/${url}`, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const parsedResponse = await resp.json();
    return parsedResponse;
  } catch (error) {
    // handle basic error and toast it over here
    // else throw
    throw error;
  }
}

export const put = async (api, data) => {
  try {
    const resp = await fetch(`${API_ENDPOINT}/${api}`, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const parsedResponse = await resp.json();
    debugger
    return parsedResponse;
  } catch (error) {
    // handle basic error and toast it over here
    // else throw
    throw error;
  }
}

export const deleteItem = async (url) => {
  try {
    const resp = await fetch(`${API_ENDPOINT}/${url}`, {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const parsedResponse = await resp.json();
    return parsedResponse;
  } catch (error) {
    // handle basic error and toast it over here
    // else throw
    throw error;
  }
}
