import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './_utils/styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { generatePasswordStr, getSchemeBasedColor } from './_utils/utils';
import { Form, Formik } from 'formik';
import { PasswordSchema } from './_utils/schema';

const App = (): React.JSX.Element => {
	const [password, setPassword] = useState<string>('');
	const [isPasswordGenerated, setIsPasswordGenerated] = useState<boolean>(false);
	const [lowercase, setLowercase] = useState<boolean>(true);
	const [uppercase, setUppercase] = useState<boolean>(true);
	const [numbers, setNumbers] = useState<boolean>(true);
	const [symbols, setSymbols] = useState<boolean>(true);

	return (
		<SafeAreaView>
			<ScrollView>
				<View style={[styles.container]}>
					<View style={[styles.header]}>
						<Text style={[styles.headingText]}>
							Password Generator
						</Text>
					</View>
				</View>
				<Formik
					initialValues={{ passwordLength: '' }}
					onSubmit={(values) => {
						console.log(values);
						let result = generatePasswordStr(+values.passwordLength, uppercase, lowercase, numbers, symbols);
						console.log('result :>> ', result);
					}}
					validationSchema={PasswordSchema}
				>
					{({
						handleChange,
						handleBlur,
						handleSubmit,
						errors,
						touched,
						isValid,
						handleReset,
						values
					}) => (
						<View style={styles.formContainer}>
							<View style={styles.inputContainer}>

								<View style={styles.inputHolder}>
									<Text style={[styles.inputLabelText]}>Password Length</Text>
									{touched.passwordLength && errors.passwordLength && (
										<Text style={[styles.errorText]}>
											{errors.passwordLength}
										</Text>
									)}
									<TextInput
										style={[styles.inputBar, styles.inputNumeric, styles.normalText]}
										value={values.passwordLength}
										onChangeText={handleChange('passwordLength')}
										placeholder='E.g. 8'
										keyboardType='numeric'
									/>
								</View>
								<View style={styles.inputHolder}>
									<Text style={[styles.inputLabelText]}>Include Lowercase</Text>
									<View>
										<BouncyCheckbox
											isChecked={lowercase}
											onPress={() => setLowercase(!lowercase)}
										/>
									</View>
								</View>
								<View style={styles.inputHolder}>
									<Text style={[styles.inputLabelText]}>Include Uppercase</Text>
									<View>
										<BouncyCheckbox
											isChecked={uppercase}
											onPress={() => setUppercase(!uppercase)}
										/>
									</View>
								</View>
								<Text style={styles.normalText}>some text</Text>
							</View>
							<View style={[styles.actionsContainer]}>
								<TouchableOpacity style={[styles.button]}>
									<Text style={[styles.buttonText]}>
										Generate Password
									</Text>
								</TouchableOpacity>
								<TouchableOpacity style={[styles.button]}>
									<Text style={[styles.buttonText]}>
										Reset Password
									</Text>
								</TouchableOpacity>
							</View>
						</View>
						// <View style={styles.formContainer}>
						// 	<View style={styles.inputContainer}>
						// 		<View style={styles.inputHolder}>
						// 			<Text style={[styles.normalText]}>Password Length</Text>
						// 			{touched.passwordLength && errors.passwordLength && (
						// 				<Text style={[styles.errorText]}>
						// 					{errors.passwordLength}
						// 				</Text>
						// 			)}
						// 			<TextInput 
						// 				style={[styles.inputBar, styles.normalText]}
						// 				value={values.passwordLength}
						// 				onChangeText={handleChange('passwordLength')}
						// 				placeholder='Enter password length...'
						// 				keyboardType='numeric'
						// 			/>
						// 		</View>
						// 		<View style={styles.inputHolder}>
						// 			<Text style={[styles.headingText]}>Include Lowercase</Text>
						// 			<BouncyCheckbox 
						// 				isChecked={lowercase}
						// 				onPress={() => setLowercase(!lowercase)}
						// 			/>
						// 		</View>
						// 		<View style={styles.inputHolder}></View>
						// 		<View style={styles.inputHolder}></View>
						// 		<View style={styles.inputHolder}></View>
						// 	</View>

						// 	<View style={styles.actionsContainer}>
						// 		<TouchableOpacity style={[styles.button]}>
						// 			<Text style={[styles.buttonText]}>
						// 				Generate Password
						// 			</Text>
						// 		</TouchableOpacity>
						// 		<TouchableOpacity style={[styles.button]}>
						// 			<Text style={[styles.buttonText]}>
						// 				Reset Password
						// 			</Text>
						// 		</TouchableOpacity>
						// 	</View>


						// </View>
					)}

				</Formik>
			</ScrollView>
		</SafeAreaView>
	)
}

export default App;