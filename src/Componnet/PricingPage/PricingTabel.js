import React from 'react'
import { useState } from 'react'
function PricingTabel() {
  const [check, setCheck] = useState(false)
  console.log(check);
  return (
    <div className='table_content_over container'>
      <div className='table_conatiner'>
        {check ? <table className="table text-nowrap">
          <tbody>
            <tr className='table_row_main'>
              <th scope="row">
                <input id='input' className='input' defaultChecked={check ? true : false} onChange={(e) => setCheck(e.target.checked)} type="checkbox" />
                <label style={{ marginLeft: "10px" }} for='input'>Save Upto 34%</label>
              </th>
              <td>
                <h5>Basic</h5>
                <h3>4£<span>Per Hour</span></h3>
                <p>(4 Hours)</p>
              </td>
              <td><h5>Professional</h5>
                <h3>480£<span>Per day</span></h3>
                <p> (8 Hours)</p>
              </td>
              <td><h5>Enterprise</h5>
                <h3>110£<span>Per Hour</span></h3>
                <p> (4 Hours)</p>
              </td>
              <td><h5>Ultimate</h5>
                <h3>820£<span>Per day</span></h3>
                <p>(8 Hours)</p>
              </td>
            </tr>
          </tbody>
        </table> : <table className="table text-nowrap">
          <tbody>
            <tr className='table_row_main'>
              <th scope="row"><input id='input' className='input' defaultChecked={check ? true : false} onChange={(e) => setCheck(e.target.checked)} type="checkbox" />
                <label style={{ marginLeft: "10px" }} for='input'>Save Upto 34%</label>
              </th>
              <td>
                <h5>Basic</h5>
                <h3>2£<span>Per Hour</span></h3>
                <p>(2 Hours)</p>
              </td>
              <td><h5>Professional</h5>
                <h3>240£<span>Per day</span></h3>
                <p> (8 Hours)</p>
              </td>
              <td><h5>Enterprise</h5>
                <h3>60£<span>Per Hour</span></h3>
                <p> (2 Hours)</p>
              </td>
              <td><h5>Ultimate</h5>
                <h3>420£<span>Per day</span></h3>
                <p>(8 Hours)</p>
              </td>
            </tr>
          </tbody>
        </table>}
        <div className="accordion w-full" id="basicAccordion">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseOne" aria-expanded="false" aria-controls="collapseOne">
                Sales force automation
              </button>
            </h2>
            <div id="basicAccordionCollapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-mdb-parent="#basicAccordion" style={{}}>
              <div className="accordion-body">
                <table className="table table-hover text-nowrap">
                  <tbody>
                    <tr className='table_row'>
                      <th scope="row">Basic modules</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Tasks, calls, events</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Advanced filters</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Multiple pipelines</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Scoring rules</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Sales forecasting</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Email insights</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Multiple currencies</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Macros</th>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">SalesSignals</th>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Assignment rules</th>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Multiple scoring rules</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Custom SalesSignals</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Email parsers</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Data entry wizards</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Portals</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Automation and process management
              </button>
            </h2>
            <div id="basicAccordionCollapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-mdb-parent="#basicAccordion" style={{}}>
              <div className="accordion-body">
                <table className="table table-hover text-nowrap">
                  <tbody>
                    <tr className='table_row'>
                      <th scope="row">Basic modules</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>

                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Tasks, calls, events</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Advanced filters</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Multiple pipelines</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Scoring rules</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Sales forecasting</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Email insights</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Multiple currencies</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Macros</th>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">SalesSignals</th>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Assignment rules</th>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Multiple scoring rules</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Custom SalesSignals</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Email parsers</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Data entry wizards</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Portals</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-mdb-toggle="collapse" data-mdb-target="#basicAccordionCollapseThree" aria-expanded="false" aria-controls="collapseThree">
                Product customization
              </button>
            </h2>
            <div id="basicAccordionCollapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-mdb-parent="#basicAccordion" style={{}}>
              <div className="accordion-body">
                <table className="table table-hover text-nowrap">
                  <tbody>
                    <tr className='table_row'>
                      <th scope="row">Basic modules</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Tasks, calls, events</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Advanced filters</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Multiple pipelines</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Scoring rules</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Sales forecasting</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Email insights</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Multiple currencies</th>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Macros</th>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">SalesSignals</th>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Assignment rules</th>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Multiple scoring rules</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Custom SalesSignals</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Email parsers</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Data entry wizards</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color: "#1070FE" }}></i></td>
                    </tr>
                    <tr className='table_row'>
                      <th scope="row">Portals</th>
                      <td></td>
                      <td></td>
                      <td><i class="fa-solid fa-check" style={{ color:"#1070FE"}}></i></td>
                      <td><i class="fa-solid fa-check" style={{ color:"#1070FE"}}></i></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default PricingTabel