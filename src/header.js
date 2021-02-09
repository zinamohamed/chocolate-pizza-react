import React from 'react';
import logo from './logo.svg';
import twitter from './twitter.svg';
import instagram from './instagram.svg';
import blogger from './blogger.svg';

class PizzaHeader extends React.Component {
    render() {
        return (
            <header className="App-header">
                <div className="logo-wrapper">
                    <img alt="pizza logo" className="header-logo" src={logo}/>

                    <h1>Pizza Time!</h1>

                </div>

                <div className="button-wrapper">
                    <button>
                    <img alt="twitter logo" src={twitter}/>
                    </button>

                    <button>
                    <img alt="instagram logo" src={instagram}/>
                    </button>

                    <button>
                    <img alt="blogger logo" src={blogger}/>
                    </button>

                </div>

            </header>
        )
    }
}

export default PizzaHeader;