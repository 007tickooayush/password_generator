import { View, Text, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './_utils/styles';
import { getSchemeBasedColor } from './_utils/utils';

const App = () : React.JSX.Element => {
	const [password, setPassword] = useState<string>('');
	const [isPasswordGenerated, setIsPasswordGenerated] = useState<boolean>(false);
	const [lowercase, setLowercase] = useState<boolean>(true);
	const [uppercase, setUppercase] = useState<boolean>(true);
	const [setsymbols, setSetsymbols] = useState<boolean>(true);
	
	return (
		<SafeAreaView>
			<ScrollView>
				<View style={[styles.container]}>
					<View style={[styles.header]}>
						<Text style={[styles.headingText]}>
							App Title
						</Text>
					</View>
					<TouchableOpacity style={[styles.button]}>
						<Text style={[styles.buttonText]}>
							Generate Password
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default App;