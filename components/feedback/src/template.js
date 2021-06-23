export default function (question, yes, no, commentPrompt, thanksFeedback, thanksComments, submit) {
  return `
  <div class="feedback-form cagov-stack">
    <div class="js-feedback-form feedback-form-question">
      <label class="feedback-form-label" id="feedback-rating">${question}</label>
      <button class="feedback-form-button js-feedback-yes feedback-yes" id="feedback-yes" aria-labelledby="feedback-rating">${yes}</button>
      <button class="feedback-form-button js-feedback-no" id="feedback-no" aria-labelledby="feedback-rating">${no}</button>
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
  </div>`
}