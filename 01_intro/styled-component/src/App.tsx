import React from 'react';
import './App.css';
import styled from "styled-components"
import {StyleBtn} from "./components/Button.styled";
import {myTheme} from "./styles/Theme.styled";

function App() {
    return (
        <div className="App">
            {/*<Menu>*/}
            {/*    <ul>*/}
            {/*        <li><a href="">menu item 1</a></li>*/}
            {/*        <li><a href="">menu item 2</a></li>*/}
            {/*        <li><a href="">menu item 3</a></li>*/}
            {/*    </ul>*/}
            {/*</Menu>*/}

            <Box>
                <Card>
                    <Image
                        src="https://s3-alpha-sig.figma.com/img/295b/9b3e/0cbd17e4381497547009ce81acc4eee3?Expires=1733097600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WKmToV-LNcoC2Q3dxXgMi-Vs-Z2AUCCywYKJGsC8W5OE96PdEBavLRmmkXWcTH1OdjNSp3alcEdXODP8CWMqU-omjrXnIzBfWDwYkgHwHpn4TOhia6JV8Px6NxwvGYL7XXsOO4CKaPWdlwCem95Gb5yI67EOGzxHYcM9jN2cbZIeT~9FsojyWl53nfRf18JmmQBNaoNZDVLG37dIq05cDBJs91tIden8sf8QI73eT9TBS~SVgY5skyejn-bffGenSVUMXKsa7XIL7CjZFRn-w8KgDwJ5-Ux58o2rBAdDZYeK1wyuMJAyowbfW1K8DMoPakfpJieOwRV5zAtP7phInA__"
                        alt="image"/>

                    <h1>Headline</h1>
                    <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>

                    <div>
                        <StyleBtn color={'rgba(78, 113, 254, 1)'} btnType={'outlined'}>Save</StyleBtn>
                        <StyleBtn color={'rgba(78, 113, 254, 1)'} btnType={'primary'}>Save</StyleBtn>
                    </div>


                </Card>

                {/* eslint-disable-next-line react/jsx-no-undef */}
                {/*<StyleBtn color={'red'} fontSize={'20px'}>Hello</StyleBtn>*/}
                {/*<StyleBtn color={'green'}>Hello</StyleBtn>*/}
                <StyleBtn color={myTheme.colors.primary} btnType={"primary"} active>Hello</StyleBtn>
                {/* eslint-disable-next-line react/jsx-no-undef */}
                {/*<StyleBtn as ="a">Link</StyleBtn>*/}

            </Box>
        </div>
    );
}

export default App;


const Box = styled.div`
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 10px;


    @media ${myTheme.media.tablet} {
        flex-direction: column;
    }
`

const Card = styled.div`
    display: flex;
    height: 350px;
    width: 300px;
    align-items: center;
    Flex-direction: column;
    background-color: snow;
    border-radius: 10px;


`

const Image = styled.img`
    display: flex;
    height: 170px;
    width: 280px;

    padding: 10px;
    border-radius: 20px;

`


const Menu = styled.nav`
    ul {
        list-style: none;
        padding: 0;
        display: flex;

        li > a {
            color: green;
        }

        li + li {
            margin-left: 20px;
        }
    }


`