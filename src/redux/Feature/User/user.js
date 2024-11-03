
import baseApi from "@/redux/Api/baseApi";

const getUsersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({

    getTestProxy: builder.query({
      query: () => ({
        url: "",
       // url: "",
      }),
     // providesTags: getTagsByModuleName('user')
    }),
   
   
  }),

  
});

export const { 
    
    useGetTestProxyQuery,

} = getUsersApi;
