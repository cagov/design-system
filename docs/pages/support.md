# Support

<div class="get-involved-content-form">
    <cagov-airtable-form
        data-airtable-service-endpoint="https://fa-go-design-system-cagov-airtable-form.azurewebsites.net/api/AirtableFormTrigger?code=Zu6Ck/103KrMh2mp/7CANtN3dMrtHMpjdhayZm82OnGava5/A1urvQ=="
        data-airtable-database="app4B5KqaCTSHAdCS"
        data-airtable-table="01 - Design System Launch"
        data-response-success="Submitted"
        data-response-error="Nope"
    >
        <form id="support-form" method="POST">
        <div class="form-field">
            <label for="name">Your name</label>
            <input type="text" id="name" name="name" data-airtable-field="Name" placeholder="Name" required>
        </div>         
        <div class="form-field">
            <label for="email">Your email</label>
            <input type="email" id="email" name="email" data-airtable-field="Email" placeholder="Email address" required>
        </div>
        <div class="form-field">
              <label for="request">Tell us about yourself</label>
              <div class="form-select">
                <select id="request" data-airtable-field="About yourself">
                  <option value="" disabled selected>Select your option</option>
                  <option value="Content">
                    Content
                  </option>
                  <option value="Designer">
                    Designer
                  </option>
                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>
        </div>
        <div class="form-field">
            <label for="request">Message</label>
            <div class="form-textarea">
                <textarea name="message" form="support-form" data-airtable-field="Message"></textarea>
            </div>
        </div>
        <div class="form-field hidden">
            <!-- <label for="form source">Form source</label> -->
            <input value="Support page" type="text" id="form-source" name="form-source" data-airtable-field="Form source">
        </div>
        <div class="wp-block-button">
            <button class="wp-block-button__link airtable-form-submit" id="airtable-form-submit" data-airtable-form-id="interest-form">Submit</button>
        </div>
        </form>
    </cagov-airtable-form>
</div>
