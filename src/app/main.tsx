import {ComponentOne} from './components/componentOne'
import {Flex, Grid, View} from "@aws-amplify/ui-react";
import {Footer, Hero, Persuade, Testimonies} from "../../ui-components";
import {useRouter} from "next/navigation";

export const Main = () => {
    const router = useRouter()
    return <ComponentOne handleClick={() => {
        router.push("/posts")
    }} username="none" authText="Sign Up">
        <View marginBottom="135px"> <Hero handleClick={() => {
        }}/> </View>

        <View> <Grid> <Testimonies style={{display:"grid"}} /></Grid> </View>

        <Flex justifyContent="center"> <Persuade
            banner="https://www.shutterstock.com/shutterstock/photos/2318800313/display_1500/stock-photo-paris-france-june-elon-musk-founder-ceo-and-chief-engineer-of-spacex-ceo-of-tesla-2318800313.jpg"></Persuade>
        </Flex>
        <View marginTop="50px" marginBottom="50px"> <Footer/> </View>

    </ComponentOne>
}
