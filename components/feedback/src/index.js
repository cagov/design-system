import ratingsTemplate from './template.js';
import styles from './css/index.css';

/**
 * Page feedback web component that asks if you found what you were looking for, then prompts for comments
 * 
 * @element cagov-feedback
 * 
 * @attr {string} [data-question] - "Did you find what you were looking for?";
 * @attr {string} [data-yes] - "Yes";
 * @attr {string} [data-no] - "No";
 * @attr {string} [data-commentPrompt] - "What was the problem?";
 * @attr {string} [data-positiveCommentPrompt] - "Great! What were you looking for today?";
 * @attr {string} [data-thanksFeedback] - "Thank you for your feedback!";
 * @attr {string} [data-thanksComments] - "Thank you for your comments!";
 * @attr {string} [data-submit] - "Submit";
 * @attr {string} [data-requiredField] - "This field is required";
 * @attr {string} [data-anythingToAdd] - "If you have anything to add,"
 * @attr {string} [data-anyOtherFeedback] - "If you have any other feedback about this website,"
 *
 * @cssprop --primary-color - Default value of #064E66, used for background
 */
export class CAGovFeedback extends window.HTMLElement {
  constructor() {
    super();
    const style = document.createElement("style");
    style.textContent = styles;
    document.querySelector('head').appendChild(style);
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
    let requiredField = this.dataset.requiredField
      ? this.dataset.requiredField
      : "This field is required";
    let characterLimit = this.dataset.characterLimit
      ? this.dataset.characterLimit
      : "You have reached your character limit."
    let anythingToAdd = this.dataset.anythingToAdd
      ? this.dataset.anythingToAdd
      : "If you have anything to add,"
    let anyOtherFeedback = this.dataset.anyOtherFeedback
      ? this.dataset.anyOtherFeedback
      : "If you have any other feedback about this website,"

    this.endpointUrl = this.dataset.endpointUrl;
    let html = ratingsTemplate(
      question,
      yes,
      no,
      commentPrompt,
      thanksFeedback,
      thanksComments,
      submit,
      requiredField,
      characterLimit,
      anythingToAdd,
      anyOtherFeedback
    );
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

    feedback.addEventListener("keydown", function (event) {
      if (feedback.value.length > 600) {
        document.querySelector(".feedback-limit-error").style.display = "block";
      } else {
        document
          .querySelector(".feedback-limit-error")
          .removeAttribute("style");
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
