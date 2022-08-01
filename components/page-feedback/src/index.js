import ratingsTemplate from './template.js';
import styles from './css/index.css';

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
export class CAGovPageFeedback extends window.HTMLElement {
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
    const characterLimit = this.dataset.characterLimit
      ? this.dataset.characterLimit
      : 'You have reached your character limit.';
    const anythingToAdd = this.dataset.anythingToAdd
      ? this.dataset.anythingToAdd
      : 'If you have anything to add,';
    const anyOtherFeedback = this.dataset.anyOtherFeedback
      ? this.dataset.anyOtherFeedback
      : 'If you have any other feedback about this website,';

    this.endpointUrl = this.dataset.endpointUrl;
    const html = ratingsTemplate(
      question,
      yes,
      no,
      commentPrompt,
      thanksFeedback,
      thanksComments,
      submit,
      characterLimit,
      anythingToAdd,
      anyOtherFeedback,
    );
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
