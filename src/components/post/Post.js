import React, { useEffect } from "react";
import {
  usePostDispatchContext,
  usePostStateContext,
} from "../../contexts/PostsContext";
import { getPost } from "../../apis/postApi";
const Post = ({ id }) => {
  const state = usePostStateContext();
  const dispatch = usePostDispatchContext();
  const { data: post, loading, error } = state.post;

  useEffect(() => {
    getPost(id, dispatch);
  }, [id]);
  if (loading) return <div>loading...</div>;
  if (error) return <div>error...</div>;
  if (post)
    return (
      <div>
        <h3>{post.body}</h3>
      </div>
    );
};

export { Post };
