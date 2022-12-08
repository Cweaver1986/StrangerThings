const baseURL = `https://strangers-things.herokuapp.com/api/`;
const cohort = `2211-FTB-ET-WEB-FT`;

export const getPosts = async () => {
  try {
    const response = await fetch(`${baseURL}${cohort}/posts`);
    const data = await response.json();
    return data.data.posts;
  } catch (error) {
    console.error(error);
  }
};

export const registerUser = async (username, password) => {
  try {
    const response = await fetch(`${baseURL}${cohort}/users/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const {
      data: { token },
    } = await response.json();
    return token;
  } catch (error) {
    console.error(error);
  }
};

export const fetchMe = async (token) => {
  try {
    const response = await fetch(`${baseURL}${cohort}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    const { data } = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const login = async (username, password) => {
  try {
    const verify = await fetch(`${baseURL}${cohort}/users/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username,
          password,
        },
      }),
    });
    const data = await verify.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const newPost = async (
  token,
  title,
  description,
  price,
  willDeliver,
  location
) => {
  try {
    const post = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/posts`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          post: {
            title,
            description,
            price,
            willDeliver,
            location,
          },
        }),
      }
    );
    const data = await post.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const Logout = () => {
  localStorage.clear();
  setToken();
};
