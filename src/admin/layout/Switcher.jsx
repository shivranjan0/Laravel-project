import React from 'react';

const Switcher = () => {
    return (
        <div className="offcanvas offcanvas-end" tabIndex={-1} id="switcher-canvas" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header border-bottom d-block p-0">
                <div className="d-flex align-items-center justify-content-between p-3">
                    <h5 className="offcanvas-title text-default" id="offcanvasRightLabel">Switcher</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <nav className="border-top border-block-start-dashed">
                    <div className="nav nav-tabs nav-justified" id="switcher-main-tab" role="tablist">
                        <button className="nav-link active" id="switcher-home-tab" data-bs-toggle="tab" data-bs-target="#switcher-home" type="button" role="tab" aria-controls="switcher-home" aria-selected="true">Theme Styles</button>
                        <button className="nav-link" id="switcher-profile-tab" data-bs-toggle="tab" data-bs-target="#switcher-profile" type="button" role="tab" aria-controls="switcher-profile" aria-selected="false">Theme Colors</button>
                    </div>
                </nav>
            </div>
            <div className="offcanvas-body">
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active border-0" id="switcher-home" role="tabpanel" aria-labelledby="switcher-home-tab" tabIndex={0}>
                        <div className="">
                            <p className="switcher-style-head">Theme Color Mode:</p>
                            <div className="row switcher-style gx-0">
                                <div className="col-4">
                                    <div className="form-check switch-select">
                                        <label className="form-check-label" htmlFor="switcher-light-theme"> Light </label>
                                        <input className="form-check-input" type="radio" name="theme-style" id="switcher-light-theme" defaultChecked={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Switcher;