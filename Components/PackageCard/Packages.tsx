import { useRouter } from "next/dist/client/router";
import { HeaderTab, PackageCard } from "poc-ui-repo";
import { Content, Wrapper } from "./PackagesStyle";
import { useState } from "react";
import { IStateFinal } from "../../Redux/interfaces/StateInterface";

interface Props {
	data: {}[];
}
function Packages({ data }: Props) {
	const [Cards, setCards] = useState(data);
	const router = useRouter();

	const handleChange = (id:String) => {
		router.push(`/${id}`);
	};

	return (
		<>
			<Wrapper>
				<HeaderTab name="POC" />
				<Content>
					{Cards.map((card: any) => {
						return (
							<PackageCard
								key={card.id}
								productImage={card.productImage}
								productTitle={card.productTitle}
								productSubDetail={card.productSubDetail}
								productButtonLabel="More Action"
								onClick={() => handleChange(card.id)}
							/>
						);
					})}
				</Content>
			</Wrapper>
		</>
	);
}

export default Packages;
