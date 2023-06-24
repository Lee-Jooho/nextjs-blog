import Link from 'next/link';
import Head from 'next/head';
import ImageComponent from '../components/imageComponent';
import ScriptComponent from '../components/ScriptComponent';
import LayoutComponent from '../components/LayoutComponent';
import styles from '../../styles/components/layout.module.css';

export default function FirstPost() {

    const callbackFunc = () => {
        console.log(`script loaded correctly, window.FB has been populated`);
        // window.open("https://www.naver.com");
    }

    return(
        <>
            <LayoutComponent className={styles.container}>
                <Head>
                    <title>First Post</title>
                </Head>
                <ScriptComponent
                    src="https://connect.facebook.net/en_US/sdk.js"
                    strategy="lazyOnload"
                    onLoad={callbackFunc()}
                />
                <h1>First Post</h1>
                <h2>
                    <Link href="/">Back to home</Link>
                </h2>
                <ImageComponent fileName={"cute.jpg"} height={130} width={100} altName={"cute dog"}/>
            </LayoutComponent>
        </>
    )
}