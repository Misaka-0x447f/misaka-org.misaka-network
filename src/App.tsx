import AlarmAudio from './assets/alarm.wav'
import {css} from '@emotion/react'
import {useState} from 'react';
import {useBeforeMount} from "./utils/hooks.ts";

function App() {
    const [isInsert, setIsInsert] = useState(false);

    useBeforeMount(() => {
        const keyboardHandler = (event: KeyboardEvent) => {
            if (event.key === 'Insert') {
                setIsInsert(prev => !prev);
                return;
            }
            if (event.key.length === 1 || event.key === 'Enter' || event.key === 'Backspace') {
                const audio = new Audio(AlarmAudio);
                audio.currentTime = 0;
                void audio.play();
            }
        }
        const touchHandler = () => {
            const audio = new Audio(AlarmAudio);
            audio.currentTime = 0;
            void audio.play();
        }
        document.addEventListener('keydown', keyboardHandler);
        document.addEventListener('touchstart', touchHandler);
        return () => {
            document.removeEventListener('keydown', keyboardHandler);
            document.removeEventListener('touchstart', touchHandler);
        }
    })

    return (
        <>
            <div css={css`
                width: 100%;
                height: 100%;
                margin: 0;
                display: flex;
                align-content: center;
                justify-content: center;
                flex-direction: column;
                text-align: center;
            `}>
                <div css={css`
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin: auto 0;
                `}>
                    connected, secure
                    <h1 css={css`
                        color: #001;
                        background: #9cf;
                        padding: 0 0.5em;
                        line-height: 2.3;
                        display: inline-block;
                        font-weight: 100;
                    `}>
                        Misaka Distributed Compute Network
                    </h1>
                    <div css={css`
                        display: flex;
                        justify-content: space-around;
                        align-content: center;
                        width: 50vw;
                        margin: 0 auto;
                        font-size: 1.2em;

                        * {
                            flex-basis: 10vw;
                        }

                        & .small {
                            font-size: 0.75em;
                            font-weight: normal;
                        }
                    `}>
                        <div>
                            <span className="small">You</span><br/>Browser<br/>Working
                        </div>
                        <div>
                            <span className="small">misaka.org</span><br/>Cloudflare Pages<br/>Working
                        </div>
                        <div>
                            <span className="small">Misaka 17535</span><br/>Host<br/>
                            <div css={css`
                                position: relative;
                            `}>Kernel Panic<span
                                css={[css`
                                    @keyframes blink {
                                        0 % {
                                            opacity: 0;
                                        }
                                        49% {
                                            opacity: 0;
                                        }
                                        50% {
                                            opacity: 1;
                                        }
                                        100% {
                                            opacity: 1;
                                        }
                                    }
                                    margin-left: 2px;
                                    opacity: 0;
                                    animation: blink 1s 0.33s infinite;
                                    position: absolute;
                                    bottom: 0.1em;
                                    width: 1ch;
                                    height: 0.1em;
                                    background-color: #9cf;
                                `, isInsert && css`height: 1.1em;`]}></span></div>
                        </div>
                    </div>
                    <div css={css`margin-top: 2em;`}>Press ANY key to continue</div>
                </div>
                <div css={css`
                    margin-bottom: 2em;
                `}>
                    <div>Compile @ {__BUILT__}</div>
                    <div css={css`margin-top: 2em;`}>=== Contact me / Allocate subdomain ===</div>
                    <div>Telegram:
                        <a href="https://misaka.org/tg">https://misaka.org/tg</a>
                    </div>
                    <div>Email:
                        <a href="mailto:447f@misaka.org">447f@misaka.org</a>
                    </div>
                    <div>Social Media:
                        <a href="https://misaka.org/bluesky">https://misaka.org/bluesky</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
