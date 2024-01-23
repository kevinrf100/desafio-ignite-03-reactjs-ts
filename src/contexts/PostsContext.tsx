import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

interface Post {
  title: string;
  description: string;
  createdAt: string;
  id: string;
}

interface PostsContextType {
  posts: Post[];
}

interface PostProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContextType);

export function PostsProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<Post[]>([]);

  const fetchPosts = useCallback(async (query: string = "") => {
    const response = await api.get(
      `/search/issues?q=${query}%20repo:kevinrf100/desafio-ignite-03-reactjs-ts`,
    );

    setPosts(response.data.items);
  }, []);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <PostsContext.Provider value={{ posts }}>{children}</PostsContext.Provider>
  );
}
