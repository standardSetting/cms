function SessionName(props){
    const sessionName = props.sessionName;
    return (
        <div className='mt2'>
            <span className='f5 underline purple'>Session name</span>
            <span className='f5 purple'>{": "+sessionName}</span>
        </div>
    );
}

function LiveDuration(props){
    const liveDuration = props.liveDuration;
    return (
        <div className='mt1'>
            <span className='f5 underline purple'>Duration</span>
            <span className='f5 purple'>: Live for</span>
            <span className='f5 purple'>{" "+liveDuration.number+" "}</span>
            <span className='f5 purple'>{liveDuration.unit}</span>
        </div>
    );
}

function CompletionRate(props){
    const completionRate = props.completionRate;
    return (
        <div className='mb2 mt1'>
            <span className='f5 underline purple'>Completion rate</span>
            <span className='f5 purple'>{": "+completionRate.numerator}</span>
            <span className='f5 purple'> out of </span>
            <span className='f5 purple'>{completionRate.denominator}</span>
        </div>
    )
}

function DownloadResponsesButton(props){
    const buttonName = props.buttonName;
    return (
        <>
            <a className='purple w5 h2 ma2 ba bw1 br3 b--purple flex justify-center items-center pointer grow'>
                Download session data
            </a>
        </>
    )
}

function EndSessionButton(props){
    return (
        <div className='w2 h2 ba ma2 br3 bw1 b--purple flex items-center justify-center pointer grow'>
            <div className='f3 purple'>
                &#215;
            </div>
        </div>
    );
}


function LiveSession(props){
    const sessionData = props.sessionData;
    return (
        <div className='ml3 mr3 mt4 mb3 flex justify-center'>
            <div className='flex flex-row flex-wrap justify-center items-center ba br3 b--purple shadow-1'>
                <div className='flex flex-column ma3 w5'>
                    <SessionName sessionName={sessionData.name} />
                    <LiveDuration liveDuration={sessionData.liveDuration} />
                    <CompletionRate completionRate={sessionData.completionRate}/>
                </div>
                <div className="flex flex-row items-center">
                    <div className="ml4 mr4 mt3 mb3">
                        <DownloadResponsesButton/>
                    </div>
                    <div className="ma3">
                        <EndSessionButton />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default LiveSession;