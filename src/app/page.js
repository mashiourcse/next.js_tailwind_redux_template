"use client";

import {
  useGetTestProxyQuery,
} from "@/redux/Feature/User/user";
import { Layout, Card, Row, Col, Button } from "antd";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


const { Header, Content } = Layout;

export default function Home() {
  const router = useRouter();
  //const { data } = useGetDiscYearCountQuery(undefined);
  const {data} = useGetTestProxyQuery(undefined);
if(data)
  console.log(data)
else
  console.log("waiting.....")  
return (
    <Layout className="w-full">
      
      <Header className="bg-white p-0">
        {/* <h1 className="text-center">Planet Discovery Dashboard</h1> */}
      </Header>
      <Content className="p-5">
       Hello World
      </Content>
    </Layout>
  );
}
