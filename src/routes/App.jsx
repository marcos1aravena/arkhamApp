import React, {lazy,Suspense} from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import '../assets/styles/style.scss'

//Components
import Layout from '../components/Layout'
import Characters from '../components/characters/index'
import CharactersContext from "../context/CharactersContext";
import DetailtContext from "../context/DetailtContext"
import CharacterDetails from "../components/character/index";
import NotFound from "../components/notFound";
import { CircularProgress } from "@mui/material";
const list = lazy(() => import("../components/listCharacters/index"));

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <Suspense
                    fallback={
                    <div className="containerHeight">
                        <div className="row">
                            <div className="col text-center">
                                <CircularProgress />
                                <h5 style={{color:"white"}}>Loading</h5>
                            </div>
                        </div>
                    </div>
                }>
                    <Switch>
                        <Route exact path = '/' >
                            <CharactersContext>
                                <Characters/>
                            </CharactersContext>
                        </Route>
                        <Route exact path = '/detail/:id'>
                            <DetailtContext>
                                <CharacterDetails/>
                            </DetailtContext>
                        </Route>
                        <Route exact path = '/list' component={list}/>
                        <Route  component={NotFound}/>
                    </Switch>
                </Suspense>
            </Layout>
        </BrowserRouter>
    )
}

export default App;
