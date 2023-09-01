import {URL} from "../../config.json";

export async function requestClear() {
  try {
    const res = await fetch(URL + '/clear', {
      method: 'DELETE',
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
  } catch (err) {
    console.error('ERROR: ', err);
  }
}

export async function requestPostCreate(sender: string, title: string, content: string) {
  try {
    const res = await fetch(URL + '/post/create', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: sender,
        title: title,
        content: content,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
  } catch (err) {
    console.error('ERROR: ', err);
  }
}

export async function requestPostComment(postId: number, sender: string, comment: string) {
  try {
    const res = await fetch(URL + `/post/${postId}/comment`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        sender: sender,
        comment: comment,
      }),
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    }
  } catch (err) {
    console.error('ERROR: ', err);
  }
}

export async function requestPostDetails(postId: number) {
  try {
    const res = await fetch(URL + `/post/${postId}`, {
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    } else {
      return res.json();
    }
  } catch (err) {
    console.error('ERROR: ', err);
    return {};
  }
}

export async function requestPostList() {
  try {
    const res = await fetch(URL + `/posts/list`, {
      method: 'GET',
    });
    if (!res.ok) {
      throw new Error(res.statusText);
    } else {
      return res.json();
    }
  } catch (err) {
    console.error('ERROR: ', err);
  
    return {};
  }
}