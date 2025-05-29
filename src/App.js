import styles from './assets/styles/common/Reset.module.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Header from 'components/layout/Header/Header';
import Footer from 'components/layout/Footer/Footer';
import ExerciseInputInfo from 'pages/recommend/exercise/ExerciseInputInfo/ExerciseInputInfo';
import RecommendForm from 'components/recommend/RecommendForm/RecommendForm';

function App() {
    return (
        <>
            <BrowserRouter>
                <Header />

                <div className={styles.layout}>
                    {/* <ExerciseInputInfo/> */}
                    <RecommendForm/>
                </div>

                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
