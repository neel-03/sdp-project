"use client"
import React from "react";
import { useCallback, useEffect, useState } from "react";
import {
  Grid,
  GridItem,
  Text,
  Button,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Box,
} from "@chakra-ui/react";
import { toast ,Toaster } from "react-hot-toast";
import Link from "next/link";
import { DashboardLayout } from "../Layout";
import Loader from "@/app/components/Loader";
import { ClassNames } from "@emotion/react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";


function User() {

  const [usersData, setusersData] = useState([
    {
      name: "",
      isAdmin: false,
      email: "",
      _id: "",
    },
  ]);
  const router = useRouter();
  const { data } = useSession();
const [loading,setloading] = useState(true);
  const removeUser = async (_id: String) => {
    const res = await fetch(`/api/users/${_id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (res.status == 200) {
      displaySuccessToast("user is deleted");
    } else {
      displayErrorToast("user not deleted");
      
    }
  };

  const promoteToAdmin = async (userId: String) => {
    const res = await fetch(`/api/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ isAdmin: true }),
    });
  };

  const fetcher = async (url: String) => {};

  const fetchdata = useCallback(async () => {
    const res = await fetch("/api/users");
    const data = await res.json();
    setusersData(data.users);
    
  }, []);
  

  useEffect(() => {
    if(data?.user.isAdmin)
    {
      fetchdata().catch(console.error);
       setloading(false);
    }
    else
    {
      return router.push('/dashboard');
    }
    
  }, [fetchdata]);

  const displaySuccessToast = (str: string) => {
    toast.success(str, {
        style: {
            border: '2px solid #111827',
            padding: '16px',
            color: '#fff',
            background: 'green'
        },
        iconTheme: {
            primary: 'white',
            secondary: 'green',
        },
    })
}
const displayErrorToast = (str: string) => {
  toast.error(str, {
      style: {
          border: '2px solid #111827',
          padding: '16px',
          color: '#fff',
          background: 'red'
      },
      iconTheme: {
          primary: 'white',
          secondary: 'red',
      },
  })
}


  const items = usersData.map((item) =>
  !item.isAdmin ? (

          
      <Accordion
        key={item._id}
        defaultIndex={[1]}
        allowMultiple
        className="shadow-xl bg-gray-700 text-white rounded-md my-2"
      >
        <AccordionItem key={item._id}>
          <AccordionButton>
            <Box as="span" flex="1" textAlign="left" className="p-3 text-xs md:text-base lg:text-lgitems-center">
              {item.name}
            </Box>
            <AccordionIcon className="mr-2" />
          </AccordionButton>
          <AccordionPanel>
            <Grid as="span" flex="1" className="p-3">
              <GridItem>
                <Text className="text-xs md:text-base lg:text-lgitems-center">email : {item.email}</Text>
              </GridItem>
              <GridItem className="mt-3">
             <div className="gap-3">
              <Link href={`/dashboard/users/details/${item._id}`}
               passHref
               >
              <Button
                
                m={"lg"}
                className='mr-3 mt-3 text-xs md:text-base lg:text-lgitems-center justify-center gap-x-2 bg-gray-900 p-2 rounded-md hover:bg-gray-800'
              >
                {" "}
                Details
              </Button>
              </Link>
                
                <Button
                  m={"lg"}
                  className="mr-3 mt-3 text-xs md:text-base lg:text-lgitems-center justify-center text-red-500 gap-x-2 bg-gray-900 p-2 rounded-md hover:bg-gray-800"
                  onClick={() => {
                    removeUser(item._id).then(() => {
                      fetchdata();
                    });
                  }}
                >
                  {" "}
                  Remove user{" "}
                </Button>
                <Button
                  m={"lg"}
                  className=" mt-3 text-xs md:text-base lg:text-lgitems-center text-green-500 justify-center gap-x-2 bg-gray-900 p-2 rounded-md hover:bg-gray-800"
                  onClick={() => {
                    promoteToAdmin(item._id).then(() => {
                      fetchdata();
                    });
                  }}
                >
                  {" "}
                  Promote to admin{" "}
                </Button>
                </div>
              </GridItem>
            </Grid>
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    ) :<></>
  );

  return (
    <DashboardLayout title='Users'>
{loading && <Loader />}
{!loading &&<div className="">
      <div>{items}</div>
    </div>}
    <Toaster
                position="top-right"
                reverseOrder={false}
            />
    </DashboardLayout>
  );
}

export default User;
