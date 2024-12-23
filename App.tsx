import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { styles } from './_utils/styles';

const App = () : React.JSX.Element => {
	const [password, setPassword] = useState<string>('');
	const [isPasswordGenerated, setIsPasswordGenerated] = useState<boolean>(false);
	const [lowercase, setLowercase] = useState<boolean>(true);
	const [uppercase, setUppercase] = useState<boolean>(true);
	const [setsymbols, setSetsymbols] = useState<boolean>(true);
	
	return (
		<SafeAreaView>
			<ScrollView>
				<Text style={[styles.normalText]}>
					App
				</Text>
			</ScrollView>
		</SafeAreaView>
	)
}

export default App;