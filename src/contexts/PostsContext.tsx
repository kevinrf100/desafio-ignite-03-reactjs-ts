import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";

export interface PostData {
  title: string;
  body: string;
  created_at: string;
  id: string;
  number: number;
  html_url: string;
  comments: number;
  user: {
    login: string;
  };
}

interface PostsContextType {
  posts: PostData[];
  fetchPosts: (query?: string) => Promise<void>;
}

interface PostProviderProps {
  children: ReactNode;
}

export const PostsContext = createContext({} as PostsContextType);

export function PostsProvider({ children }: PostProviderProps) {
  const [posts, setPosts] = useState<PostData[]>([]);

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
    <PostsContext.Provider value={{ posts, fetchPosts }}>
      {children}
    </PostsContext.Provider>
  );
}
