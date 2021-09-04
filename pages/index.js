import axios from 'axios';
import { useEffect } from 'react';
import Banner from "../components/Index/Banner";
import CategoryBanner from "../components/Index/CategoryBanner";
import HotProducts from "../components/Index/HotProducts";
import baseUrl from '../utils/baseUrl';
import Router from 'next/router';



const Fashion = ({products}) => {
   
    useEffect(() => {
       Router.push('/admin/dashboard')
    }, []);
    return(
       
        <>
            <h1 className="text-center mt-5">Welcome Apna Store Admin</h1>
        </>
    );
}

Fashion.getInitialProps = async (ctx) => {
    // console.log(ctx.query)
    const page = ctx.query.page ? ctx.query.page : "1";
    const size = 8;
    const searchTerm = "grocery";
    // fetch data on server
    const url = `${baseUrl}/api/products`;
    const payload = { params: {page, size, searchTerm}}
    const response = await axios.get(url, payload);
    // return response data as an object
    return response.data
    // note: this object will be merge with existing props
}

export default Fashion;