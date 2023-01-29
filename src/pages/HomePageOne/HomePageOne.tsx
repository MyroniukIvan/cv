import React from 'react';
import styles from './HomePageOne.module.scss'
import Card from "@mui/material/Card";
import charPhoto from '../../components/assets/photo_2023-01-28 09.48.31.jpeg'
import {BsGithub, BsTelegram, BsInstagram, BsLinkedin,} from 'react-icons/bs'
import {FaReact} from 'react-icons/fa'
import {SiRedux, SiFirebase, SiJavascript} from 'react-icons/si'

const HomePageOne = () => {
        return (
            <div className={styles.homeOne}>
                <Card className={styles.homeOneCard} sx={{width: '219px'}}>
                    <main className={styles.homeOneWrapper}>
                        <div>
                            <img className={styles.charPhoto} src={charPhoto} alt="charPhoto"/>
                        </div>
                        <div className={styles.homeOneCardSecondary}>
                            <p className={styles.textOne}>
                                Myroniuk Ivan
                            </p>
                            <p className={styles.textTwo}>
                                Front-End Developer
                            </p>
                        </div>
                        <div className={styles.icons}>
                            <a href="https://github.com/MyroniukIvan"><BsGithub/></a>
                            <a href="https://t.me/muronyukk/"><BsTelegram/></a>
                            <a href="https://www.instagram.com/mvron/"><BsInstagram/></a>
                            <a href="https://www.linkedin.com/in/ivan-myroniuk-84009525b/"><BsLinkedin/></a>
                        </div>
                    </main>
                    <aside className={styles.asideWrapper}>
                        <p> Age - 22</p>
                        <p> Country - Ukraine</p>
                        <p> City - Kyiv</p>
                    </aside>
                    <div className={styles.languages}> Languages
                        <div className={styles.languagesFlex}>
                            <div>
                                <p>English</p>
                                <p>German</p>
                                <p>Ukrainian</p>
                                <p>Polish</p>
                            </div>
                            <div>
                                <p>80%</p>
                                <p>50%</p>
                                <p>100%</p>
                                <p>30%</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skills}>
                        <div> Skills
                            <p>JavaScript<SiJavascript/></p>
                            <p>React <FaReact/></p>
                            <p>Redux <SiRedux/></p>
                            <p>Firebase <SiFirebase/></p>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/feed/update/urn:li:activity:7014645923381174272/">
                                Download CV
                            </a>
                        </div>
                    </div>
                </Card>
            </div>
        );
    }
;

export default HomePageOne;