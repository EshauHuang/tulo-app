const BASE_URL = "http://localhost:3333";
const PICTURES_PATH = "/img";

export const newWork = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/works`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getWorkDirectory = async (workId, type) => {
  if (!workId || !type) return [];
  try {
    const response = await fetch(`${BASE_URL}/${type}s/${workId}`, {
      method: "GET",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getFilesName = async (directory) => {
  if (!directory) return;
  try {
    const response = await fetch(`${BASE_URL}${PICTURES_PATH}${directory}`, {
      method: "GET",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const signIn = async ({ username, password }) => {
  try {
    const response = await fetch(`${BASE_URL}/signin`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const signUp = async ({ username, password, nickname }) => {
  try {
    const response = await fetch(`${BASE_URL}/signup`, {
      method: "POST",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
        nickname,
      }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getUser = async (UserId) => {
  try {
    const response = await fetch(`${BASE_URL}/users/${UserId}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getMe = async () => {
  try {
    const response = await fetch(`${BASE_URL}/me`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const signOut = async () => {
  try {
    const response = await fetch(`${BASE_URL}/signout`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      credentials: "include",
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getUserWorks = async (UserId, type = "all", page = 1) => {
  try {
    const response = await fetch(
      `${BASE_URL}/users/${UserId}/works?type=${type}&limit=10&page=${page}`
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getWorkDetail = async (workId) => {
  try {
    const response = await fetch(`${BASE_URL}/works/${workId}`);
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getWorks = async (type) => {
  try {
    const response = await fetch(
      `${BASE_URL}/works?type=${type}&limit=10&page=1`
    );
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const postUserPhoto = async (formData) => {
  try {
    const response = await fetch(`${BASE_URL}/photo`, {
      method: "POST",
      credentials: "include",
      body: formData,
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};

export const getPictureURL = (directory, index = 0) => {
  if (!directory) return;
  return `${BASE_URL}${PICTURES_PATH}${directory}/${index}.jpg`;
};

export const editUserDetail = async ({ nickname, intro }) => {
  try {
    const response = await fetch(`${BASE_URL}/users`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        nickname,
        intro,
      }),
    });
    return response.json();
  } catch (err) {
    console.log(err);
  }
};
