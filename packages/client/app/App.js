import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import useWindowSize from '@rehooks/window-size';

import { useStoreState, useStoreActions } from 'easy-peasy';
import GlobalStyle from './style/GlobalStyle';
import theme from './style/theme';

//Pages
import Game from './pages/Game';
const App = () => {
    const windowSize = useWindowSize();
    const connect = useStoreActions(actions => actions.socket.connect);
    const socket = useStoreState(state => state.socket.socket);
    const game = useStoreState(state => state.game.game);
    useEffect(() => {
        connect();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div style={{ height: windowSize.innerHeight }}>
                <GlobalStyle />
                <Router>
                    {socket && (
                        <Fragment>
                            <Route exact path="/" component={Game} />
                        </Fragment>
                    )}
                </Router>
            </div>
        </ThemeProvider>
    );
};

export default App;
