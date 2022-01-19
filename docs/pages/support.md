# Contact us

Get help from the Design System team, post questions, and share technical information with fellow developers.

<cagov-airtable-form
          data-airtable-service-endpoint="https://fa-go-design-system-cagov-airtable-form.azurewebsites.net/api/AirtableFormTrigger?code=Zu6Ck/103KrMh2mp/7CANtN3dMrtHMpjdhayZm82OnGava5/A1urvQ=="
          data-airtable-database="app4B5KqaCTSHAdCS"
          data-airtable-table="Contact us responses"
          data-response-success="Thanks!
           We'll be in touch soon. Until then, take a look at our <a href=''>digital product development principles</a> to start thinking about how you can work with the Design System."
          data-response-error="Uh oh! Looks like there was a problem connecting and <strong>your request was not submitted</strong>. Please try again later, and if it does not resolve, please contact us on <a href='https://github.com/cagov/design-system/issues/new?assignees=&labels=Support&template=02-support.md&title=Support%3A+'>Github</a>.<br/> Until then, take a look at our <a href=''>digital product development principles</a> to start thinking about how you can work with the Design System."
        >
          <form id="interest-form" method="POST">
            <div class="form-field">
              <label for="name">Your name</label>
              <input type="text" id="name" name="name" data-airtable-field="Name" placeholder="Name" required>
            </div>         
            <div class="form-field">
              <label for="email">Your email</label>
              <input type="email" id="email" name="email" data-airtable-field="Email" placeholder="Email address" required>
            </div>
            <div class="form-field">
              <label for="request">How can we help you?</label>
              <div class="form-select">
                <select id="request" data-airtable-field="Request">
                  <option value="Send me updates on the Design System">
                    Send me updates on the Design System
                  </option>
                  <option value="I need help getting started">
                    I need help getting started
                  </option>
                  <option value="I want to collaborate">
                    I want to collaborate
                  </option>
                </select>
              </div>
            </div>
            <div class="form-field">
              <label for="request">About yourself</label>
              <div class="form-select">
                <select id="request" data-airtable-field="About yourself">
                  <option value="Content designer">
                    Content designer
                  </option>
                  <option value="Engineer">
                    Engineer
                  </option>
                  <option value="Developer">
                    Developer
                  </option>
                  <option value="Designer">
                    Designer
                  </option>
                  <option value="Product owner">
                    Product owner
                  </option>
                </select>
              </div>
            </div>
            <div class="wp-block-button">
              <button class="wp-block-button__link airtable-form-submit" id="airtable-form-submit">Submit</button>
            </div>
          </form>
        </cagov-airtable-form>

## Get in touch

Email us for support with general inquiries, feedback, or bugs.

## Ask other developers

Post questions on [GitHub](https://github.com/cagov/design-system/issues/new/choose) and leverage our digital community.
