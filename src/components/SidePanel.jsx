import React, { useState } from 'react'
import { examples } from '../constants/example'
import { Tooltip } from 'react-tooltip';

const SidePanel = ({ version, setVersion, multiProcess, setMultiProcess }) => {


    //http : restrict copy to clipboard so alteranate way 
    function unsecuredCopyToClipboard(text) {
        const textArea = document.createElement("textarea");
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        try {
            document.execCommand('copy');
        } catch (err) {
            console.error('Unable to copy to clipboard', err);
        }
        document.body.removeChild(textArea);
    }

    const copyToClipBoard = (data) => {
        if (navigator.clipboard) {
            // If normal copy method available, use it
            navigator.clipboard.writeText(data);
        } else {
            // Otherwise fallback to the above function
            unsecuredCopyToClipboard(data);
        }
    };
    const changeVersion = (e) => {
        setVersion(e.target.value)
    };
    const toggleCheck = (e) => {
        setMultiProcess(!multiProcess)
    };


    return (
        <div id='sidePanel'>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', flex: "1 1 30%", marginBlock: "1rem" }}>


                <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', cursor: 'pointer' }} onChange={changeVersion}>
                    <div data-tooltip-id="#version_1">
                        <input type="radio" value="v1" name="version" defaultChecked={version === 'v1'} /> v1
                    </div>

                    <div data-tooltip-id="#version_2">
                        <input type="radio" value="v2" name="version" defaultChecked={version === 'v2'} /> v2
                    </div>
                </div>
                <Tooltip id="#multiProcessing" className='tooltip' >
                    <div>
                        <h3>Multi processing [multi threading] </h3>
                        <p>By utilizing child processes, web scraping tasks can be delegated to separate processes, improving performance and preventing blocking in the main application workflow.</p>
                    </div>
                </Tooltip>
                <Tooltip id="#version_1" className='tooltip' >
                    <div>
                        <h3>Version 1 of Scrapping </h3>
                        <p>This version will scrape data utilizing relevant CSS selectors, which are identified by a language model (LLM).</p>
                    </div>
                </Tooltip>
                <Tooltip id="#version_2" className='tooltip'>
                    <div>
                        <h3>Version 2 of Scrapping </h3>
                        <p>This version will utilize a large language model (LLM) to scrape data, employing relevant CSS selectors to accurately target the necessary elements identified by the LLM.</p>
                    </div>
                </Tooltip>
            </div>
            <div className='flexCustom' data-tooltip-id="#multiProcessing">
                <span>Mutiple <br />Process</span>
                <span className="checkbox">
                    <input type="checkbox" checked={multiProcess} />
                    <span className="wrapper" onClick={toggleCheck}>
                        <span className="knob"></span>
                    </span>
                </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', flex: "1 1 70%" }}>

                <h3>Examples </h3>
                <ul style={{ width: "100%", display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {examples.map((example) => (

                        <li style={{ cursor: 'pointer', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: "80%" }}> <label htmlFor="">{example.name}</label>      <span className='copy' onClick={() => copyToClipBoard(example.url)} > 🗒️ </span>          </li>
                    ))}
                    {/* <li style={{cursor:'pointer',display:'flex',flexDirection:'row',justifyContent:'space-between',width:"80%"}}> <label htmlFor="">Flipkart</label>      <span className='copy' > 🗒️ </span>          </li> */}
                </ul>

            </div>

        </div>
    )
}

export default SidePanel