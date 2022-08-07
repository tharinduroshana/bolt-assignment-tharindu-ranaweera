import React, {useState} from "react";
import "./FormSection.css";

const EMAIL_INPUT = "emailInput";
const PHONE_CODE_INPUT = "phoneCodeInput";
const PHONE_NO_INPUT = "phoneNoInput";
const CITY_INPUT = "cityInput";
const INVALID_CHECK = "invalidCheck";

const FormSection = () => {
    const [validated, setValidated] = useState(false);

    const submit = (e) => {
        e.preventDefault();
        const target = e?.target;

        const email = target?.[EMAIL_INPUT]?.value;
        const phoneCode = target?.[PHONE_CODE_INPUT]?.value;
        const phoneNo = target?.[PHONE_NO_INPUT]?.value;
        const city = target?.[CITY_INPUT]?.value;
        const agreed = target?.[INVALID_CHECK]?.checked;

        setValidated(true);

        if (email && phoneCode && phoneNo && city && agreed) {
            alert("Registration should continue!");
        } else {
            alert("One or more fields contains errors!");
        }
    }

    return (
        <div className="col-lg-4 form-section">
            <h5 className="form-title">Become a Bolt driver</h5>
            <p className="form-description">If you have multiple cars or drivers <a className="form-link" href="#">signup
                as a fleet owner.</a></p>
            <form onSubmit={submit} className={validated ? "was-validated" : "needs-validation"} noValidate>
                <div className="form-group">
                    <label className="bolt-form-label bolt-form-label-bold" htmlFor="emailInput">Email</label>
                    <input type="email" className="form-control large-input-box" id={EMAIL_INPUT} name={EMAIL_INPUT}
                           aria-describedby="emailHelp" placeholder="Email" required/>
                    {!validated ? <small id="emailHelp" className="form-text text-muted">
                        <i className="fa fa-info-circle" aria-hidden="true"/> This will be your username</small> : null}
                    <div className="invalid-feedback">
                        Email is required/badly-formatted.
                    </div>
                </div>
                <div className="form-group">
                    <label className="bolt-form-label bolt-form-label-bold" htmlFor={PHONE_NO_INPUT}>Phone number</label>
                    <div className="telephone-group">
                        <select name={PHONE_CODE_INPUT} className="form-control telephone-group-code large-input-box" required>
                            <option>+372</option>
                            <option>+371</option>
                        </select>
                        <input type="tel" className="form-control telephone-group-no large-input-box" id={PHONE_NO_INPUT}
                               aria-describedby="phoneHelp" placeholder="Phone" name={PHONE_NO_INPUT} required/>
                    </div>
                    <div className="invalid-feedback">
                        Phone is required.
                    </div>
                </div>
                <div className="form-group">
                    <label className="bolt-form-label bolt-form-label-bold" htmlFor={CITY_INPUT}>City</label>
                    <select className="form-control telephone-group-code large-input-box" id={CITY_INPUT}>
                        <option>Tallinn</option>
                        <option>Tartu</option>
                        <option>Narva</option>
                    </select>
                </div>
                <div className="form-group">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" name={INVALID_CHECK} required/>
                        <label className="form-check-label bolt-form-label" htmlFor="invalidCheck">
                            I agree to Bolt's <a className="form-link" href="#">Terms of Service</a> and <a
                            className="form-link" href="#">Privacy Policy</a>
                        </label>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary bolt-green-btn signup-btn" type="submit">Sign up as a driver</button>
            </form>
        </div>
    );
}

export default FormSection;