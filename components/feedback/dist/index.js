function ratingsTemplate (question, yes, no, commentPrompt, thanksFeedback, thanksComments, submit) {
  return `
  <section aria-label="feedback">
  <div class="feedback-form cagov-stack">
    <div class="js-feedback-form feedback-form-question">
      <h2 class="feedback-form-label" id="feedback-rating">${question}</h2>
      <button class="feedback-form-button js-feedback-yes feedback-yes" id="feedback-yes">${yes}</button>
      <button class="feedback-form-button js-feedback-no" id="feedback-no">${no}</button>
    </div>
          
    <div class="feedback-form-thanks js-feedback-thanks" role="alert">${thanksFeedback}</div>
          
    <div class="feedback-form-add">
      <label class="feedback-form-label js-feedback-field-label" for="add-feedback">${commentPrompt}</label>
      <div class="feedback-form-add-grid">
        <textarea name="add-feedback" class="js-add-feedback feedback-form-textarea" id="add-feedback" rows="1"></textarea>
        <button class="feedback-form-button js-feedback-submit" type="submit" id="feedback-submit">${submit}</button>
      </div>
    </div>

    <div class="feedback-form-thanks feedback-thanks-add" role="alert">${thanksComments}</div>
  </div>
  </section>`
}

var styles = "cagov-feedback {\n  width: 100%;\n}\ncagov-feedback .feedback-form {\n  background: var(--primary-dark-color, #003484);\n  padding: 1rem;\n  border-radius: 0.3125rem;\n  max-width: var(--w-lg, 1176px);\n  margin: 0 auto;\n}\ncagov-feedback .feedback-form-question {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\ncagov-feedback .feedback-form-label {\n  color: #fff;\n  background-color: var(--primary-dark-color, #003484);\n  font-size: 1.125rem;\n  display: block;\n  margin-right: 1rem;\n  transition: 0.3s color cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  line-height: 3rem;\n  width: auto;\n}\n@media (max-width: 768px) {\n  cagov-feedback .feedback-form-label {\n    line-height: unset;\n    margin-bottom: 1rem;\n  }\n}\ncagov-feedback .feedback-form-button {\n  padding: 1rem;\n  color: var(--primary-dark-color, #003484);\n  border: none;\n  border-radius: 0.3rem;\n  transition: 0.3s background cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  cursor: pointer;\n  margin: 0 0.5rem 0 0;\n  display: inline !important;\n  /* defensive overrides */\n  position: relative;\n  text-transform: none;\n  top: auto;\n  right: auto;\n  background: #fff;\n}\ncagov-feedback .feedback-form-button:hover {\n  box-shadow: 0 0.5rem 1rem 0 rgba(0, 0, 0, 0.2);\n  text-decoration: underline;\n}\ncagov-feedback .feedback-form-button:focus {\n  box-shadow: 0 0 0 2px #fff;\n}\ncagov-feedback .feedback-form-button .feedback-yes {\n  margin-right: 1rem;\n}\ncagov-feedback .feedback-form-add {\n  padding-top: 0;\n  display: none;\n}\n@media (max-width: 768px) {\n  cagov-feedback .feedback-form-add {\n    text-align: left;\n    padding-top: 0;\n  }\n}\ncagov-feedback .feedback-form-add-grid {\n  position: relative;\n  margin-top: 1rem;\n  display: inline-flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n@media (max-width: 768px) {\n  cagov-feedback .feedback-form-add-grid {\n    display: block;\n  }\n}\ncagov-feedback .feedback-form-textarea {\n  width: 100%;\n  padding: 1rem;\n  margin-bottom: 1rem;\n  font-family: \"Roboto\", sans-serif;\n  color: var(--primary-dark-color, #003484);\n  max-width: 90%;\n  height: 127px;\n  width: 600px;\n}\ncagov-feedback .feedback-form-thanks {\n  display: none;\n  color: #fff;\n}\ncagov-feedback .feedback-form-error {\n  position: relative;\n  top: 100%;\n  left: 0;\n  display: none;\n  font-weight: 300;\n  text-align: left;\n}\n\n/*# sourceMappingURL=index.css.map */\n";

/**
 * Page feedback web component that asks if you found what you were looking for, then prompts for comments
 * 
 * @element cagov-feedback
 * 
 * @fires ratedPage - custom event with object with detail value of whether the user clicked yes or no to the first question: {detail: "yes"}. This can be used to send that value as a GA event outside this component.
 * 
 * @attr {string} [data-question] - "Did you find what you were looking for?";
 * @attr {string} [data-yes] - "Yes";
 * @attr {string} [data-no] - "No";
 * @attr {string} [data-commentPrompt] - "What was the problem?";
 * @attr {string} [data-positiveCommentPrompt] - "Great! What were you looking for today?";
 * @attr {string} [data-thanksFeedback] - "Thank you for your feedback!";
 * @attr {string} [data-thanksComments] - "Thank you for your comments!";
 * @attr {string} [data-submit] - "Submit";
 * @attr {string} [data-anythingToAdd] - "If you have anything to add,"
 * @attr {string} [data-anyOtherFeedback] - "If you have any other feedback about this website,"
 *
 * @cssprop --primary-color - Default value of #064E66, used for background
 */
class CAGovFeedback extends window.HTMLElement {
  constructor() {
    super();
    if (document.querySelector('api-viewer')) {
      let link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      link.setAttribute('href', './src/css/index.css');
      document.querySelector('api-viewer').shadowRoot.appendChild(link);
    }
  }

  connectedCallback() {
    let question = this.dataset.question
      ? this.dataset.question
      : "Did you find what you were looking for?";
    let yes = this.dataset.yes ? this.dataset.yes : "Yes";
    let no = this.dataset.no ? this.dataset.no : "No";
    let commentPrompt = this.dataset.commentPrompt
      ? this.dataset.commentPrompt
      : "What was the problem?";
    this.positiveCommentPrompt = this.dataset.positiveCommentPrompt
      ? this.dataset.positiveCommentPrompt
      : "Great! What were you looking for today?";
    let thanksFeedback = this.dataset.thanksFeedback
      ? this.dataset.thanksFeedback
      : "Thank you for your feedback!";
    let thanksComments = this.dataset.thanksComments
      ? this.dataset.thanksComments
      : "Thank you for your comments!";
    let submit = this.dataset.submit ? this.dataset.submit : "Submit";
    this.dataset.characterLimit
      ? this.dataset.characterLimit
      : "You have reached your character limit.";
    this.dataset.anythingToAdd
      ? this.dataset.anythingToAdd
      : "If you have anything to add,";
    this.dataset.anyOtherFeedback
      ? this.dataset.anyOtherFeedback
      : "If you have any other feedback about this website,";

    this.endpointUrl = this.dataset.endpointUrl;
    let html = ratingsTemplate(
      question,
      yes,
      no,
      commentPrompt,
      thanksFeedback,
      thanksComments,
      submit);
    this.innerHTML = html;
    this.applyListeners();
  }

  applyListeners() {
    this.wasHelpful = "";
    this.querySelector(".js-add-feedback").addEventListener(
      "focus",
      (event) => {
        this.querySelector(".js-feedback-submit").style.display = "block";
      }
    );
    let feedback = this.querySelector(".js-add-feedback");
    feedback.addEventListener("keyup", function (event) {
      if (feedback.value.length > 15) {
        feedback.setAttribute("rows", "3");
      } else {
        feedback.setAttribute("rows", "1");
      }
    });

    feedback.addEventListener("blur", (event) => {
      if (feedback.value.length !== 0) {
        this.querySelector(".js-feedback-submit").style.display = "block";
      }
    });
    this.querySelector(".js-feedback-yes").addEventListener(
      "click",
      (event) => {
        this.querySelector('.js-feedback-field-label').innerHTML = this.positiveCommentPrompt;
        this.querySelector(".js-feedback-form").style.display = "none";
        this.querySelector(".feedback-form-add").style.display = "block";
        this.wasHelpful = "yes";
        this.dispatchEvent(
          new CustomEvent("ratedPage", {
            detail: this.wasHelpful,
          })
        );
      }
    );
    this.querySelector(".js-feedback-no").addEventListener("click", (event) => {
      this.querySelector(".js-feedback-form").style.display = "none";
      this.querySelector(".feedback-form-add").style.display = "block";
      this.wasHelpful = "no";
      this.dispatchEvent(
        new CustomEvent("ratedPage", {
          detail: this.wasHelpful,
        })
      );
    });
    this.querySelector(".js-feedback-submit").addEventListener(
      "click",
      (event) => {
        this.querySelector(".feedback-form-add").style.display = "none";
        this.querySelector(".feedback-thanks-add").style.display = "block";

        let postData = {};
        postData.url = window.location.href;
        postData.helpful = this.wasHelpful;
        postData.comments = feedback.value;
        postData.userAgent = navigator.userAgent;

        fetch(this.endpointUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(postData),
        })
          .then((response) => response.json())
          .then((data) => console.log(data));
      }
    );
  }
}
window.customElements.define('cagov-feedback', CAGovFeedback);
const style = document.createElement("style");
style.textContent = styles;
document.querySelector('head').appendChild(style);

export { CAGovFeedback };
