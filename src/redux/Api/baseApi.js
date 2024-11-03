import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({

      baseUrl: 'https://randomuser.me/api/',
      //https://randomuser.me/api/
    prepareHeaders: (headers) => {
     //https://cors-anywhere.herokuapp.com/
   //  headers.set('Access-Control-Allow-Origin', '*'); 
      return headers;
    },
  }),

  endpoints: () => ({}),
});

export default baseApi;
