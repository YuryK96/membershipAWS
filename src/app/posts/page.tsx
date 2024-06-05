"use client";
import {ComponentOne} from "@/app/components/componentOne";
import {Authenticator, Flex, Heading, useTheme, View} from "@aws-amplify/ui-react";
import {Footer, Logo, Stories} from "../../../ui-components";
import "../reset.css"
import '@fontsource/inter'
import './styles.css';
function Post() {

    const authComponents = {
        Header() {
            const { tokens } = useTheme();
            return (
                <Flex
                    justifyContent={"center"}
                    direction="column"
                    paddingTop={tokens.space.xxxl}
                    paddingBottom={tokens.space.xxl}
                >
                    <Logo />
                </Flex>
            );
        },
    };

    return (
        <Authenticator  components={authComponents} hideSignUp={true}>
            {({ signOut, user }) => (
                <ComponentOne
                    handleClick={() => signOut()}
                    authText="Sign Out"
                    username={user.attributes.email.split("@")[0]}
                >
                    <View marginTop="50px" marginBottom="30px"> <Heading level={2}>Welcome to our backstage</Heading>
                        <p>Text Text Text TextText Text</p>
                    </View>
                    <Stories/>
                    <View marginTop="50px" marginBottom="50px"> <Footer/> </View>
                </ComponentOne>
            )}
        </Authenticator>
    );
}
export default Post;
