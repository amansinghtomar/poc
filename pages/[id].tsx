import type { GetStaticProps, NextPage } from "next";
import PackageDetails from "../Components/PackageDetail/PackageDetails";
import { IState } from "../Redux/interfaces/StateInterface";

const PackageID: NextPage = (product) => {
  console.log(product);
  const data = product.data;
	return <PackageDetails data={data} />;
};

async function getData() {
	const data = await fetch("http://localhost:3000/api/Product");
	const res = await data.json();
	return res;
}

export async function getStaticProps(context: { params: any; }) {
	const { params } = context;
	const productId = params.id;
	const data = await getData();
	const product = data.find((product: IState) => product.id === productId);
  console.log("product",product)
	if (!product) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data: product,
		},
	};
}

export async function getStaticPaths() {
	const data = await getData();
	const ids = data.map((product:IState) => product.id);

	const pathsWithParams = ids.map((id:String) => ({ params: { id: id } }));

	return {
		paths: pathsWithParams,
		fallback: false, //if Id is not found then it still loads the page
	};
}

export default PackageID;
