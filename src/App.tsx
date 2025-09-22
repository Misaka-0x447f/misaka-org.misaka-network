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
                audio.pause();
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
                        padding: 0.5em;
                        font-size: clamp(1rem, 4vw, 2.5rem);
                        display: inline-block;
                        font-weight: 100;
                        word-wrap: break-word;
                        line-height: 1.2;
                    `}>
                        Misaka Distributed Compute Network
                    </h1>
                    <div css={css`
                        display: grid;
                        grid-template-rows: repeat(3, min-content);
                        grid-auto-columns: 1fr;
                        grid-auto-flow: column;
                        justify-items: center;
                        align-items: start;
                        width: min(90vw, 800px);
                        margin: 0 auto;
                        font-size: clamp(0.8rem, 2.5vw, 1.2rem);
                        gap: 0.5rem;

                        & > div {
                            display: grid;
                            grid-template-rows: auto auto auto;
                            gap: 0.2rem;
                            justify-items: center;
                            max-width: 200px;
                        }

                        & .small {
                            font-size: 0.75em;
                            font-weight: normal;
                        }
                    `}>
                            <span className="small">You</span>
                            <span>Browser</span>
                            <span>Working</span>
                            <span className="small">misaka.org</span>
                            <span>Cloudflare Pages</span>
                            <span>Working</span>
                            <span className="small">Misaka 17535</span>
                            <span>Host</span>
                            <span css={css`
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
                                `, isInsert && css`height: 1.1em;`]}></span></span>
                    </div>
                    <div css={css`
                        margin-top: 2em;
                        font-size: clamp(0.9rem, 2vw, 1.1rem);
                    `}>Press ANY key to continue</div>
                </div>
                <div css={css`
                    margin-bottom: 2em;
                    font-size: clamp(0.6rem, 1.2vw, 0.9rem);
                    padding: 0 1rem;

                    & > div {
                        margin: 0.5rem 0;
                    }

                `}>
                    <div>Compile @ {__BUILT__}</div>
                    <div css={css`margin-top: 2em;`}>=== Contact me / Allocate subdomain ===</div>
                    <div>Telegram:&nbsp;
                        <a href="https://misaka.org/tg">https://misaka.org/tg</a>
                    </div>
                    <div>Email:&nbsp;
                        <a href="mailto:447f@misaka.org">447f@misaka.org</a>
                    </div>
                    <div>Social Media:&nbsp;
                        <a href="https://misaka.org/bluesky">https://misaka.org/bluesky</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
