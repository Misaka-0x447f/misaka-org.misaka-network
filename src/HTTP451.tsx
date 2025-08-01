import {css} from '@emotion/react'

const HTTP451 = () => {
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
                    HTTP 451 / Unavailable For Legal Reasons
                    <h1 css={css`
                        color: #001;
                        background: #9cf;
                        padding: 0 0.5em;
                        line-height: 2.3;
                        display: inline-block;
                        font-weight: 100;
                    `}>
                        您所在的国家或地区无法使用此服务
                    </h1>
                    <div css={css`margin-top: 2em;`}>由于众所周知的原因或/和需要避免不必要的热度，请为 ip.misaka.org 更换国家或地区后重试。</div>
                    <div>如果您无法更换国家或地区，请前往 github 寻找并自行部署来源项目。</div>
                </div>
                <div css={css`
                    margin-bottom: 2em;
                `}>
                    <div>Compile @ {__BUILT__}</div>
                    <div>Github:&nbsp;
                        <a href="https://github.com/Misaka-0x447f">https://github.com/Misaka-0x447f</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HTTP451
