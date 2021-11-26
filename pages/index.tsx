import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import  { PackageCard } from 'poc-ui-repo';
import Packages from '../Components/PackageCard/Packages';
import { IStateFinal } from '../Redux/interfaces/StateInterface';
import { updateAnnouncement } from '../Redux/actions/productAction';



const Home: NextPage = ({data}) => {


  return (
    <Packages data={ data}/>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await fetch('http://localhost:3000/api/Product');
  const res = await data.json();
  
  return {
    props: {
      data:res
    }
  }
}



export default Home
