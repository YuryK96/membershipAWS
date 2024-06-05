"use client";
import {Amplify} from 'aws-amplify'
import {studioTheme} from "../../ui-components";
import {ThemeProvider} from '@aws-amplify/ui-react'
import "./reset.css"
import '@fontsource/inter'
import awsConfig from '../../aws-exports'
import {Main} from "@/app/main";


Amplify.configure(awsConfig)
export default function Home() {
    return <ThemeProvider theme={studioTheme}>
        <main>
            <Main/>
        </main>
    </ThemeProvider>

};
