# Account Fields (Clinic)

Understand what each field in the clinic account settings means.

---

## **Account**

**Account logo**: Logo image of the clinic displayed in the system. Accepted formats: JPEG, PNG, or GIF.

**Account name** *(required)*: The clinic's trade name or legal name, displayed in the system and on documents.

**Account email**: The account's primary email address, used for system communications.

---

## **Address**

**Billing name**: Full name or legal name for billing and fiscal document purposes.

**Tax ID (CNPJ)**: The clinic's tax identification number.

**Country code + Phone**: Country code and contact phone number of the clinic.

**Postal code (ZIP)**: The clinic's postal code.

**Address**: Street address (street, avenue, etc.).

**Number**: Establishment number.

**Complement**: Additional address information (suite, building, floor, etc.).

**City**: City where the clinic is located.

**Neighborhood**: Clinic's neighborhood/district.

**State**: State (province/region) of the clinic.

**Country**: Country of the clinic.

---

## **Report template**

**Report template**: Select the default PDF formatting template for this clinic's reports. The template defines the header, footer, and layout used when generating the report as a PDF.

::: tip TIP
The template defined here will be used as the default for all clinic exams and can be overridden individually in the exam form.
:::

---

## **Default payment method**

**Payment method**: Defines the default payment method automatically applied to new exams for this clinic (e.g., PIX, credit card, insurance).

::: warning ATTENTION
This section is only displayed when the payment methods feature is enabled in the radiologist's settings.
:::

---

## **Email attachments**

**Attach report to notification email**: When enabled, the report PDF is sent as an attachment in the notification email to the clinic and the animal's owner when the report is finalized.

::: tip TIP
If disabled, the notification email will contain only the link to access the report, without the file attached.
:::

---

## **Report sharing options**

Defines what is displayed to the owner and the clinic when accessing the public report link. Each option can be configured individually with the following values:

- **Default**: Follows the setting defined by the radiologist for all accounts.
- **Yes**: Displays the content in the shared report.
- **No**: Hides the content in the shared report.

| Field | Description |
|---|---|
| **Share attached images in the report** | Shows or hides images attached to the exam in the public report view. |
| **Share attached files in the report** | Shows or hides files (non-images) attached to the exam in the public report view. |
| **Share external links in the report** | Shows or hides external links (PACS, Dropbox, Google Drive, etc.) in the public report view. |

---

## **PACS**

**Enable PACS**: Activates the integration with the PACS server so the clinic can submit and link DICOM studies.

**Enable PACS Port**: Activates the specific port of the PACS server for this clinic. When enabled, the connection details (AE Title, IP, and Port) are displayed for configuration on imaging equipment.

::: tip TIP
The PACS connection details (AE Title, IP, and Port) must be configured on the clinic's imaging equipment (CT scanner, X-ray machine, etc.) so that studies are automatically sent to the system.
:::

---

## **Contacts**

List of informational contacts for the clinic. These contacts **are not system users** and do not have access to the platform. They serve only as internal records of responsible persons.

Each contact has the following fields:

**Contact name**: Full name of the responsible person.

**Tax ID (CPF)**: The responsible person's individual tax identification number.

**Veterinary license (CRMV) of the technical officer**: License number of the veterinarian who is the clinic's technical officer.

**Type**: Contact classification:
- **Technical Officer**: Veterinarian who is the clinic's technical officer.
- **Administrator**: Administrative officer of the clinic.

Multiple contacts can be added by clicking **Add Contact**.
