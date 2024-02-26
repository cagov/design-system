function ratingsTemplate(
  question,
  yes,
  no,
  commentPrompt,
  thanksFeedback,
  thanksComments,
  submit,
) {
  return `
  <section aria-label="feedback">
  <div class="feedback-form cagov-stack">
    <div class="js-feedback-form feedback-form-question">
      <h2 class="feedback-form-label" id="feedback-rating">${question}</h2>
      <button class="btn-light m-r-2 js-feedback-yes feedback-yes" id="feedback-yes">${yes}</button>
      <button class="btn-light js-feedback-no" id="feedback-no">${no}</button>
    </div>
          
    <div class="feedback-form-thanks js-feedback-thanks" role="alert">${thanksFeedback}</div>
          
    <div class="feedback-form-add">
      <label class="feedback-form-label js-feedback-field-label" for="add-feedback">${commentPrompt}</label>
      <div class="feedback-form-add-grid">
        <textarea name="add-feedback" class="js-add-feedback feedback-form-textarea" id="add-feedback" rows="1"></textarea>
        <button class="btn-light js-feedback-submit" type="submit" id="feedback-submit">${submit}</button>
      </div>
    </div>

    <div class="feedback-form-thanks feedback-thanks-add" role="alert">${thanksComments}</div>
  </div>
  </section>`;
}

var styles = "cagov-page-feedback {\n  width: 100%;\n}\ncagov-page-feedback .feedback-form {\n  background: var(--primary-900, #003588);\n  padding: var(--s-2, 1rem);\n  border-radius: var(--radius-2, 4px);\n  max-width: var(--w-lg, 1176px);\n  margin: 0 auto;\n}\ncagov-page-feedback .feedback-form-question {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\ncagov-page-feedback .feedback-form-label {\n  color: #fff;\n  background-color: var(--primary-900, #003588);\n  font-size: var(--font-size-2, 1.125rem);\n  display: block;\n  margin-right: var(--s-2, 1rem);\n  transition: 0.3s color cubic-bezier(0.57, 0.2, 0.21, 0.89);\n  line-height: 3rem;\n  width: auto;\n}\n@media (max-width: 768px) {\n  cagov-page-feedback .feedback-form-label {\n    line-height: unset;\n    margin-bottom: var(--s-2, 1rem);\n  }\n}\ncagov-page-feedback .feedback-form .btn-light {\n  padding: 0.5rem 1rem;\n  border-radius: 0.5rem;\n  display: inline-block;\n  font-size: var(--font-size-2, 1.125rem);\n  font-weight: var(--font-weight-6, 600);\n  padding: var(--s-1, 0.5rem) var(--s-2, 1rem);\n  line-height: var(--font-lineheight-3, 1.5);\n  border-radius: var(--radius-2, 4px);\n  border: var(--border-1, 1px) solid;\n  text-align: center;\n  text-decoration: none;\n  vertical-align: middle;\n  cursor: pointer;\n  color: var(--primary-900, #003588);\n  background-color: var(--white, #ffffff);\n  border-color: var(--white, #ffffff);\n}\ncagov-page-feedback .feedback-form .btn-light:hover {\n  color: var(--primary-900, #003588);\n  background-color: var(--gray-200, #d4d4d7);\n  border-color: var(--gray-200, #d4d4d7);\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);\n  text-decoration: none;\n}\ncagov-page-feedback .feedback-form .btn-light:focus {\n  background-color: var(--gray-200, #d4d4d7);\n  border-color: var(--gray-200, #d4d4d7);\n  outline: var(--border-2) solid var(--accent2-500, #ac8226);\n  outline-offset: 2px;\n}\ncagov-page-feedback .feedback-form .btn-light .feedback-yes {\n  margin-right: var(--s-2, 1rem);\n}\ncagov-page-feedback .feedback-form-add {\n  padding-top: 0;\n  display: none;\n}\n@media (max-width: 768px) {\n  cagov-page-feedback .feedback-form-add {\n    text-align: left;\n    padding-top: 0;\n  }\n}\ncagov-page-feedback .feedback-form-add-grid {\n  position: relative;\n  margin-top: var(--s-2, 1rem);\n  display: inline-flex;\n  flex-flow: column;\n  align-items: flex-start;\n}\n@media (max-width: 768px) {\n  cagov-page-feedback .feedback-form-add-grid {\n    display: block;\n  }\n}\ncagov-page-feedback .feedback-form-textarea {\n  width: 100%;\n  padding: var(--s-2, 1rem);\n  margin-bottom: var(--s-2, 1rem);\n  color: var(--primary-900, #003484);\n  max-width: 90%;\n  height: 127px;\n  width: 600px;\n}\ncagov-page-feedback .feedback-form-thanks {\n  display: none;\n  color: #fff;\n}\ncagov-page-feedback .feedback-form-error {\n  position: relative;\n  top: 100%;\n  left: 0;\n  display: none;\n  font-weight: 300;\n  text-align: left;\n}\n\n/*# sourceMappingURL=index.css.map */\n";

/**
 * Page feedback web component that asks if you found what you were looking for,
 * then prompts for comments
 *
 * @element cagov-page-feedback
 *
 * @fires ratedPage - custom event with object with detail value of whether the user
 *                    clicked yes or no to the first question: {detail: "yes"}.
 *                    This can be used to send that value as a GA event outside this
 *                    component.
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
 * @cssprop --primary-700 - Default value of #165ac2, used for background
 */
class CAGovPageFeedback extends window.HTMLElement {
  constructor() {
    super();

    if (!document.querySelector('#cagov-page-feedback-styles')) {
      const style = document.createElement('style');
      style.id = 'cagov-page-feedback-styles';
      style.textContent = styles;
      document.querySelector('head').appendChild(style);
    }
  }

  connectedCallback() {
    const question = this.dataset.question
      ? this.dataset.question
      : 'Did you find what you were looking for?';
    const yes = this.dataset.yes ? this.dataset.yes : 'Yes';
    const no = this.dataset.no ? this.dataset.no : 'No';
    const commentPrompt = this.dataset.commentPrompt
      ? this.dataset.commentPrompt
      : 'What was the problem?';
    this.positiveCommentPrompt = this.dataset.positiveCommentPrompt
      ? this.dataset.positiveCommentPrompt
      : 'Great! What were you looking for today?';
    const thanksFeedback = this.dataset.thanksFeedback
      ? this.dataset.thanksFeedback
      : 'Thank you for your feedback!';
    const thanksComments = this.dataset.thanksComments
      ? this.dataset.thanksComments
      : 'Thank you for your comments!';
    const submit = this.dataset.submit ? this.dataset.submit : 'Submit';
    this.dataset.characterLimit
      ? this.dataset.characterLimit
      : 'You have reached your character limit.';
    this.dataset.anythingToAdd
      ? this.dataset.anythingToAdd
      : 'If you have anything to add,';
    this.dataset.anyOtherFeedback
      ? this.dataset.anyOtherFeedback
      : 'If you have any other feedback about this website,';

    this.endpointUrl = 'https://feedback.innovation.ca.gov/sendfeedback';
    if (this.dataset.endpointUrl) {
      this.endpointUrl = this.dataset.endpointUrl;
    }

    const html = ratingsTemplate(
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
    this.wasHelpful = '';
    this.querySelector('.js-add-feedback').addEventListener('focus', () => {
      this.querySelector('.js-feedback-submit').style.display = 'block';
    });
    const feedback = this.querySelector('.js-add-feedback');
    feedback.addEventListener('keyup', () => {
      if (feedback.value.length > 15) {
        feedback.setAttribute('rows', '3');
      } else {
        feedback.setAttribute('rows', '1');
      }
    });

    feedback.addEventListener('blur', () => {
      if (feedback.value.length !== 0) {
        this.querySelector('.js-feedback-submit').style.display = 'block';
      }
    });
    this.querySelector('.js-feedback-yes').addEventListener('click', () => {
      this.querySelector('.js-feedback-field-label').innerHTML =
        this.positiveCommentPrompt;
      this.querySelector('.js-feedback-form').style.display = 'none';
      this.querySelector('.feedback-form-add').style.display = 'block';
      this.wasHelpful = 'yes';
      this.dispatchEvent(
        new CustomEvent('ratedPage', {
          detail: this.wasHelpful,
        }),
      );
    });
    this.querySelector('.js-feedback-no').addEventListener('click', () => {
      this.querySelector('.js-feedback-form').style.display = 'none';
      this.querySelector('.feedback-form-add').style.display = 'block';
      this.wasHelpful = 'no';
      this.dispatchEvent(
        new CustomEvent('ratedPage', {
          detail: this.wasHelpful,
        }),
      );
    });
    this.querySelector('.js-feedback-submit').addEventListener('click', () => {
      this.querySelector('.feedback-form-add').style.display = 'none';
      this.querySelector('.feedback-thanks-add').style.display = 'block';

      const postData = {};
      postData.url = window.location.href;
      postData.helpful = this.wasHelpful;
      postData.comments = feedback.value;
      postData.userAgent = navigator.userAgent;

      fetch(this.endpointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    });
  }
}

window.customElements.define('cagov-page-feedback', CAGovPageFeedback);

export { CAGovPageFeedback };
