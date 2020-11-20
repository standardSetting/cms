function InputField(props){
    const type = props.type;
    const name = props.name;
    const label = props.label;
}

function TypedSessionInput(props){
    const labelText = props.labelText;
    const name = props.name;
    return (
        <label className='purple mt3'>
            {labelText+": "}
            <input className='w4' type="text" name={name} required/>
         </label>
    )
}

function ImageUpload(props) {
    return (
        <label className='purple mt3'>
            {"Images:"+" "}
            <input className='w5' type="file" name="images" multiple required/>
         </label>
    )
}

function SpreadsheetUpload(props) {
    return (
        <label className='purple mt3'>
            {"Spreadsheet:"+" "}
            <input className='w5' type="file" name="spreadsheet" required/>
        </label>
    )
}

function StartLiveSessionButton(props) {
 return (
    <input className='bg-white purple w5 h2 ma2 ba bw1 br3 b--purple flex justify-center items-center pointer grow' type="submit" value="Start live session" />
 )
}

function UploadSessionData(props){
    return (
        <div className='ml3 mr3 mt4 mb3 flex justify-center'>
            <div className='flex flex-row flex-wrap justify-around items-center ba br3 b--purple shadow-1'>
                <form action="/uploadSessionData" method="post" enctype="multipart/form-data">
                    <div className='flex flex-row flex-wrap'>
                        <div className='flex flex-column w4 ml4 mr1 mb4 mt1'>
                            <TypedSessionInput labelText='Session name' name='sessionName'/>
                            <TypedSessionInput labelText='# of Examiners' name='numberOfExaminers'/>  
                        </div>
                        <div className='flex flex-column w5 ml4 mt2 mb4'>
                            <ImageUpload />
                            <SpreadsheetUpload />
                        </div>
                        <div className='ml3 flex items-center'>
                            <div className='flex mt2 mr3'>
                                <StartLiveSessionButton />
                            </div>
                        </div>

                    </div>
                </form>
            </div>
        </div>
    );
}

export default UploadSessionData;
