import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { styles } from './_utils/styles';
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { generatePasswordStr, getButtonStyle, getSchemeBasedColorStyle, resetPassword } from './_utils/utils';
import { Form, Formik } from 'formik';
import { PasswordSchema } from './_utils/schema';
import { defaultState } from './_utils/utils';

const App = (): React.JSX.Element => {
	const [password, setPassword] = useState<string>(defaultState.default_password);
	const [isPasswordGenerated, setIsPasswordGenerated] = useState<boolean>(defaultState.default_isPasswordGenerated);
	const [lowercase, setLowercase] = useState<boolean>(defaultState.default_lowercase);
	const [uppercase, setUppercase] = useState<boolean>(defaultState.default_uppercase);
	const [numbers, setNumbers] = useState<boolean>(defaultState.default_numbers);
	const [symbols, setSymbols] = useState<boolean>(defaultState.default_symbols);

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
				<View>
					<Formik
						initialValues={{ passwordLength: '' }}
						onSubmit={(values) => {
							console.log(values);
							let result = generatePasswordStr(+values.passwordLength, uppercase, lowercase, numbers, symbols);
							console.log('result :>> ', result);
							setPassword(result);
							setIsPasswordGenerated(true);
						}}
						onReset={() => {
							console.log('Password reset');
							let {
								default_isPasswordGenerated, 
								default_lowercase, 
								default_numbers, 
								default_password, 
								default_symbols, 
								default_uppercase
							} = resetPassword();
							
							setIsPasswordGenerated(default_isPasswordGenerated);
							setLowercase(default_lowercase);
							setNumbers(default_numbers);
							setPassword(default_password);
							setSymbols(default_symbols);
							setUppercase(default_uppercase);

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
												fillColor='#29AB87'
											/>
										</View>
									</View>
									<View style={styles.inputHolder}>
										<Text style={[styles.inputLabelText]}>Include Numerics</Text>
										<View>
											<BouncyCheckbox
												isChecked={numbers}
												onPress={() => setNumbers(!numbers)}
												fillColor='#7B8CDE'
											/>
										</View>
									</View>
									<View style={styles.inputHolder}>
										<Text style={[styles.inputLabelText]}>Include Symbols</Text>
										<View>
											<BouncyCheckbox
												isChecked={symbols}
												onPress={() => setSymbols(!symbols)}
												fillColor='#BB999C'
											/>
										</View>
									</View>
								</View>
								<View style={[styles.actionsContainer]}>
									<TouchableOpacity 
										style={[styles.button, getButtonStyle(isValid)]}
										disabled={!isValid} 
										onPress={() => handleSubmit()}
									>
										<Text style={[styles.buttonText]}>
											Generate Password
										</Text>
									</TouchableOpacity>
									<TouchableOpacity 
										style={[styles.button, getButtonStyle(!isValid && isPasswordGenerated)]}
										onPress={() => {
											handleReset();
											// setIsPasswordGenerated(false);
										}}
										disabled={!isValid}
									>
										<Text style={[styles.buttonText]}>
											Reset Password
										</Text>
									</TouchableOpacity>
								</View>
							</View>
						)}

					</Formik>
				</View>
				{
					isPasswordGenerated ? (
						<View style={[styles.card, styles.cardElevated]}>
							<Text style={[styles.normalText, getSchemeBasedColorStyle(true)]}>Result:</Text>
							<Text style={[styles.normalText, getSchemeBasedColorStyle(true)]}>Long Press to copy</Text>
							<Text selectable={true} style={[styles.generatedPasswordText, getSchemeBasedColorStyle(true)]}>{password}</Text>
						</View>
					) :
					null
				}
			</ScrollView>
		</SafeAreaView>
	)
}

export default App;