"use client";

import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

const ReactQueryProvider = ({ children }: { children: React.ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient({
    defaultOptions:{
        queries:{
          retry:1,
          staleTime:1000 * 60 * 5,
          cacheTime:1000 * 60 * 5, 
          refetchOnWindowFocus:false
        }
      }
  })
 );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ReactQueryProvider;