import styles from "./Header.module.css";
import styles2 from "./MyLocationButton.module.css";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const Header = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <header className={styles.rectangleParent}>
      <div className={styles.rectangle} />
      <div className={styles.fRAME}>
        <img
          className={styles.wholeIcon}
          loading="eager"
          alt=""
          src="/whole@2x.png"
        />
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.rectangle1} />
        <img className={styles.frameChild} alt="" src="/group-28.svg" />
        <div className={styles.searchForYour}>
          Search for your favorite groups in ATG
        </div>
      </div>
      <div className={styles.fRAME1}>
        <div className={styles.createAccountItsFreeParent}>
          <div className={styles.createAccountItsContainer}>
            <span className={styles.createAccount}>
              <div style={{ cursor: "pointer" }} onClick={handleShow}>
                create Account
                <span className={styles.itsFree}> It’s free!</span>
              </div>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className={styles2.rectangle} />
                  <button className={styles.learnShareFrame}>
                    <div className={styles.learnShareFrameChild} />
                    <div
                      className={styles.letsLearnShare}
                    >{`Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼`}</div>
                  </button>
                  <div className={styles.signUpWithGoogleButton}>
                    <div className={styles.alreadyHaveAccountButton}>
                      <div className={styles.termsConditionsFrame}>
                        <h2 className={styles.createAccount}>Create Account</h2>
                      </div>
                      <div className={styles.signUpButtons}>
                        <div className={styles2.rectangleParent2}>
                          <div className={styles2.frameChild6} />
                          <div className={styles2.firstName}>First Name</div>
                          <div className={styles2.passwordGroup}>
                            <div className={styles2.emailField} />
                            <div className={styles2.lastName}>Last Name</div>
                          </div>
                        </div>
                        <div className={styles2.rectangleParent3}>
                          <div className={styles2.frameChild7} />
                          <div className={styles2.email}>Email</div>
                        </div>
                        <div className={styles2.rectangleParent4}>
                          <div className={styles2.frameChild8} />
                          <div className={styles2.password}>Password</div>
                          <img
                            className={styles2.groupIcon}
                            alt=""
                            src="/group-3-1@2x.png"
                          />
                        </div>
                        <div className={styles2.rectangleParent5}>
                          <div className={styles2.frameChild9} />
                          <div className={styles2.confirmPassword}>
                            Confirm Password
                          </div>
                        </div>
                      </div>
                      <div className={styles2.googleSignUp}>
                        <button className={styles2.groupButton}>
                          <div className={styles2.frameChild10} />
                          <div className={styles2.createAccount1}>
                            Create Account
                          </div>
                        </button>
                      </div>
                      <div className={styles2.connectButtons}>
                        <button className={styles2.rectangleParent6}>
                          <div className={styles2.frameChild11} />
                          <img
                            className={styles2.fLogoRgbBlue1024Icon}
                            alt=""
                            src="/f-logo-rgbblue-1024@2x.png"
                          />
                          <div className={styles2.signUpWith}>
                            Sign up with Facebook
                          </div>
                        </button>
                        <button className={styles2.rectangleParent7}>
                          <div className={styles2.frameChild12} />
                          <img
                            className={styles2.searchIcon1}
                            alt=""
                            src="/search.svg"
                          />
                          <div className={styles2.signUpWith1}>
                            Sign up with Google
                          </div>
                        </button>
                      </div>
                    </div>
                    <div className={styles2.signInLink}>
                      <div className={styles2.alreadyHaveAnContainer}>
                        <span
                          className={styles2.alreadyHaveAn}
                        >{`Already have an account? `}</span>
                        <span className={styles2.signIn}>Sign In</span>
                      </div>
                      <div className={styles2.footerText}>
                        <img
                          className={styles2.footerTextChild}
                          alt=""
                          src="/group-3-2@2x.png"
                        />
                        <div
                          className={styles2.bySigningUp}
                        >{`By signing up, you agree to our Terms & conditions, Privacy policy`}</div>
                      </div>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                  <Button variant="primary" onClick={handleClose}>
                    Save Changes
                  </Button>
                </Modal.Footer>
              </Modal>
            </span>
          </div>
          <img
            className={styles.baselineArrowDropDown24pxIcon}
            alt=""
            src="/baselinearrow-drop-down24px.svg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
