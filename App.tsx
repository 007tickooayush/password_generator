import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './_utils/styles';
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
										<TextInput 
											style={[styles.inputBar, styles.normalText]}
											value={values.passwordLength}
											onChangeText={handleChange('passwordLength')}
											placeholder='Enter password length...'
											keyboardType='numeric'
										/>
									</View>
									<View style={styles.inputHolder}></View>
									<View style={styles.inputHolder}></View>
									<View style={styles.inputHolder}></View>
									<View style={styles.inputHolder}></View>
								</View>

								<View style={styles.actionsContainer}>
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
						)}

					</Formik>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default App;