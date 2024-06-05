import {View} from "@aws-amplify/ui-react";
import {Nav} from "../../../ui-components";

export const ComponentOne = ({children, handleClick, authText, username}) => {
    return <View width="1200px" marginLeft="auto" marginRight="auto"> <Nav marginTop="20px" authText={authText}
                                                                           username={username} handleAuth={handleClick}
                                                                           avatar={username.split('')[0].toUpperCase()}/>
        {children}
    </View>
}
