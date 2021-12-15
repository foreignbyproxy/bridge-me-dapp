import React from "react";
import { Box, HStack, Text, Select } from "@chakra-ui/react";
import { Formik, Form, Field, FormikHelpers } from "formik";

import { tokens, networks } from "../../../constants";

interface FilterFormProps {}

interface Values {
	asset: typeof tokens[number] | "";
	network1: typeof networks[number] | "";
	network2: typeof networks[number] | "";
}

const initialValues: Values = {
	asset: "",
	network1: "",
	network2: "",
};

function FilterForm({}: FilterFormProps) {
	function handleSubmit(values: Values, formikBag: FormikHelpers<Values>) {
		console.log(values);
	}

	return (
		<Formik initialValues={initialValues} onSubmit={handleSubmit}>
			<Form>
				<HStack mb="4">
					<Text sx={{ whiteSpace: "nowrap" }}>I want to transfer</Text>
					<Field name="asset" as={Select}>
						<option value=""></option>
						{tokens.map((token) => {
							return (
								<option key={token} value={token}>
									{token}
								</option>
							);
						})}
					</Field>
				</HStack>
				<HStack>
					<Text flexShrink="0">From</Text>
					<Field name="network1" as={Select}>
						<option value=""></option>
						{networks.map((network) => {
							return (
								<option key={network} value={network}>
									{network}
								</option>
							);
						})}
					</Field>
					<Text>To</Text>
					<Field name="network2" as={Select}>
						<option value=""></option>
						{networks.map((network) => {
							return (
								<option key={network} value={network}>
									{network}
								</option>
							);
						})}
					</Field>
				</HStack>
			</Form>
		</Formik>
	);
}

export default FilterForm;
