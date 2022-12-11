const baseURL = `https://strangers-things.herokuapp.com/api/`;
const cohort = `2211-FTB-ET-WEB-FT`;
const token = localStorage.token;

export const getPosts = async () => {
  try {
    const response = await fetch(`${baseURL}${cohort}/posts`);
    const data = await response.json();
    console.log(data);
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
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const newPost = async (
  title,
  description,
  price,
  willDeliver,
  location
) => {
  try {
    const token = localStorage.getItem("token");
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
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const Logout = () => {
  localStorage.clear();
};

export const newMessage = async (content, token, postId) => {
  try {
    const message = await fetch(
      `${baseURL}${cohort}/posts/${postId}/messages`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          message: {
            content,
          },
        }),
      }
    );
    const data = await message.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const editPost = async (
  postId,
  title,
  description,
  price,
  willDeliver,
  location
) => {
  try {
    const token = localStorage.getItem("token");
    const post = await fetch(
      `https://strangers-things.herokuapp.com/api/${cohort}/posts/${postId}`,
      {
        method: "PATCH",
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
    return data;
  } catch (error) {
    console.error(error);
  }
};

export async function deletePostById(id) {
  const token = localStorage.token;
  try {
    const response = await fetch(`${baseURL}${cohort}/posts/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await response.json();
    if (data.error) throw data.error;
    return data;
  } catch (error) {
    console.error(
      "Sorry we are having issues deleting post from the API.",
      error
    );
  }
}
