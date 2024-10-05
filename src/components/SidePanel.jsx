import React, { useState } from 'react'
import { examples } from '../constants/example'
import { Tooltip } from 'react-tooltip';

const SidePanel = ({version,setVersion}) => {

    const copyToClipBoard = (data) => {
        navigator.clipboard.writeText(data);
    };
    const changeVersion = (e) => {
        setVersion(e.target.value)
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