import React from 'react';
import Card from './components/Card';
import './App.css';

import img_mysql from './imagens/mysql.png';
import img_php   from './imagens/php.png';
import img_rn    from './imagens/react-native.png';
import img_react from './imagens/react.png';

function App(){
    return(
        <div className='container'>
            <Card 
                title='MySQL'
                text='Gerenciador de Banco de Dados Relacional - SGBDr'
                img={ img_mysql }
                link='https://www.mysql.com'
            />

            <Card 
                title='PHP'
                text='Linguagem de script para Web'
                img={ img_php }
                link='https://www.php.net'
            />

            <Card 
                title='React Native'
                text='Framework para desenvolvimento mobile'
                img={ img_rn }
                link='https://reactnative.dev/'
            />

            <Card 
                title='React.js'
                text='Framework para desenvolvimento web'
                img={ img_react }
                link='https://react.dev'
            />
        </div>
    );
}

export default App;