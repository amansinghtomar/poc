import { PackageDetail } from "poc-ui-repo";
import { useState } from "react";

function PackageDetails(data: any) {
	const [detail, setDetail] = useState(data.data);

	return (
		<div>
			<PackageDetail
				productImage={detail.productImage}
				productTitle={detail.productTitle}
				productSubDetail={detail.productSubDetail}
				productDescription={detail.productDescription}
			/>
		</div>
	);
}

export default PackageDetails;
