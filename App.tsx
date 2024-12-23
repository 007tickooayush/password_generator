import { View, Text } from 'react-native'
import React, { useState } from 'react'

const App = () : React.JSX.Element => {
	const [password, setPassword] = useState<string>('');
	const [isPasswordGenerated, setIsPasswordGenerated] = useState<boolean>(false);
	const [lowercase, setLowercase] = useState<boolean>(true);
	const [uppercase, setUppercase] = useState<boolean>(true);
	const [setsymbols, setSetsymbols] = useState<boolean>(true);
	
	return (
		<View>
			<Text>App</Text>
		</View>
	)
}

export default App;