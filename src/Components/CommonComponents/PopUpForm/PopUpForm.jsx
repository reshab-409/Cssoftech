import { CModal, CModalBody } from '@coreui/react';
import React, { useImperativeHandle, useState } from 'react';
import './Style.css';


const PopUpForm = ({ ModalFunction }) => {
    const [visible, setVisible] = useState(false);
    useImperativeHandle(ModalFunction, () => ({
        Open() {
            setVisible(!visible);
        }
    }));

    return (
        <>
            <CModal
                size="xl"
                alignment="center"
                visible={visible}
                onClose={() => setVisible(false)}
                aria-labelledby="VerticallyCenteredExample"
            >
                <CModalBody>
                    <div className="flx">
                        <div className="lft">
                            <div className="overlay"></div>
                            <h5>What happens after submitting the inquiry form?</h5>
                            <ul>
                                <li>One of our team members will get in touch with you within 16 hours(Except Holidays)</li>
                                <li>We contact you through email first and we communicate later as per your choice of communication channels</li>
                                <li>All data submitted by you is never shared with others. You can always ask for NDA</li>
                            </ul>
                        </div>
                        <div className="rht">
                            <a className='close' onClick={() => setVisible(false)}>
                            </a>

                            {/* Form */}
                            {/* <form action="submit"> */}
                            <h4 className='hding'>Speak To Our Experts</h4>
                            <p className='sbhding'>It’s our pleasure to co-operate with you.</p>
                            <div className="contact-form1">
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="group">
                                            <input type="text" required />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Full Name*</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="group">
                                            <input type="text" required />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Email*</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="group">
                                            <input type="text" required />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Mobile*</label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="group">
                                            <input type="text" required />
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>Budget*</label>
                                        </div>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="group">
                                            <textarea></textarea>
                                            <span className="highlight"></span>
                                            <span className="bar"></span>
                                            <label>A short description of your project *</label>
                                        </div>
                                    </div>
                                    <div className="lbl">
                                        <div className="wrpr">
                                            <input type="checkbox" className='chkbox' />
                                            <p>I want to get the latest offers and updates</p>
                                        </div>
                                        <div className="wrpr">
                                            <input type="checkbox" className='chkbox' />
                                            <p>Send me a copy of NDA</p>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <button className="button-primary">Send Message</button>
                                    </div>
                                </div>
                            </div>
                            {/* </form> */}
                        </div>
                    </div>
                </CModalBody>
            </CModal>
        </>
    )
};

export default PopUpForm;
