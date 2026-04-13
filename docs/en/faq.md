# Frequently Asked Questions

## General Questions

### What is UniRadio?

UniRadio is a teleradiology platform that connects veterinary clinics with radiologists for specialized image interpretation and report generation.

### Who can use UniRadio?

- **Radiologists**: Veterinary professionals who analyze images and issue reports.
- **Clients**: Veterinary clinics that submit exams for analysis.

---

## For Radiologists

### Is it possible to make fields mandatory (such as patient and owner name)?

Yes. In **Settings > Exam Settings**, there is a configurable fields table where each field can be individually marked as **visible** or **required**. Disabled fields do not appear in the report form. This configuration applies to the entire account and all exams.

---

### Can I customize my reports?

Yes. In **Settings > Report Settings**, you can:

- Upload your logo
- Create and use report templates
- Configure which fields to show or hide
- Adjust font and text size
- Add a custom footer

---

### Can I increase my logo size in reports?

Yes. In **Settings > Report Settings**, adjust the **"Logo height"** field to set the account logo size and the client clinic logo size separately.

---

### How do I disable automatic client email sending?

Go to account settings and disable the email sending option when a report is finalized. You can also configure this individually per client clinic in sharing settings.

---

### Why don't images appear in my report?

The most common cause is **file names with special characters**: accents, cedilla, parentheses, or spaces may block image processing. Rename files using only non-accented letters, numbers, and underscores before uploading.

---

### Can I replace the term "Opinion" with "Radiographic Report"?

Yes. In **Settings > Report Settings**, the **"Report title"** field lets you define the text shown as the title in the generated PDF.

---

### What is the difference between "Save and Send" and "Save"?

- **"Save and Send"** - finalizes the report, changes exam status to **Completed**, and triggers automatic email sending to the client.
- **"Save"** - stores the report without finalizing it. The exam remains in the **"In Progress"** queue and no client email is sent.

---

### Does the report save automatically?

Yes. The text editor saves automatically **2 seconds after the last keystroke**. A brief notification appears with the message "Saving exam..." on each autosave.

::: warning ATTENTION
Autosave applies only to the **report text** (editor). Other fields - such as category, responsible professional, tags, and selected images - must be saved manually using the **"Save"** button.
:::

---

### How do I include images with DICOM viewer annotations?

Use the **download** function in the DICOM viewer to export images with applied annotations. Then upload those images in the exam image field while editing the report.

---

### Can I customize the report template with colors or watermark?

This customization is not available directly in the panel. To request a template with logo, colors, and your account visual identity, contact support. The team applies these customizations upon request.

---

### Does the system already provide digital certificates in reports?

Not yet. This feature is under development.

---

### I can't view the PDF report. I get an "images_per_page" related error

Go to **Settings > Report Settings** and set the **"Default number of images per page"** field. This field must be filled for proper PDF generation.

---

### DICOM images do not include patient information. Is that normal?

Yes. The DICOM viewer does not display additional information such as age, breed, or other clinical patient data. If these details are essential for the report, export images as JPEG directly from the clinic's imaging software including the required data, then upload as regular images.

---

### How long are images stored in the system?

Images are not automatically deleted. The system has an old-image control routine, but automatic deletion is disabled. Images remain available indefinitely unless manually deleted.

---

## For Clients

### Do I need to access the platform to view reports?

Not necessarily. If your email is registered and notifications are enabled, the report is sent directly by email. You can also enable the option to **attach the PDF to the notification email** so the report arrives as a file.

---

### How can I submit an exam?

There are two ways to submit exams:

1. **Direct upload** - through the web interface by dragging files or selecting image files.
2. **PACS integration** - sending directly from your digital imaging equipment via the PACS server configured in your account.

---

### Can I edit an exam after submission?

Yes. You can edit exam data while it has not yet been finalized by the radiologist.

---

### How do I attach the report PDF in the sent email?

In **Account Settings**, enable **"Send PDF as attachment in email notifications"**.

---

## About Tags

### What are "tags"?

Tags are labels used to categorize exams. They work similarly to categories and make it easier to organize and search specific exams in the list.

---

## PACS Integration

### Do DICOM files have automatic visualization?

Yes. DICOM files submitted via PACS are integrated with the **OHIF Viewer**, a DICOM viewer that opens directly in the browser without requiring software installation.

---

### Which tools are available in the DICOM viewer?

OHIF Viewer offers key analysis tools:

- **Zoom** - zoom in and out
- **Pan** - move the image on screen
- **Window/Level adjustment** - brightness and contrast control for different tissue types
- **Measurements** - distance ruler, angle, and ROI area
- **Annotations** - add text and marks over the image
- **Series and instance navigation** - access different series from the same study
- **Color inversion** - switch between black and white background
- **Rotation and mirroring** - reposition the image for analysis

---

### Why are DICOM images not automatically attached to the report?

DICOM files are linked to the exam as PACS studies and are accessible in the viewer, but they are not automatically converted into images attached to the report PDF. To include images in the report, export them from the viewer and upload them manually.

---

### Which formats are accepted for PACS submission?

The system accepts **DICOM** (`.dcm`) files and **ZIP** files containing DICOM files. Other formats are automatically rejected.

---

### The image was sent but appears black or with display issues. What could it be?

Most common causes are:

- **Corrupted or incomplete file** - verify whether the file opens normally in another DICOM viewer before sending.
- **Improper conversion** - images exported with non-standard DICOM settings may fail to render properly. Try exporting again directly from the equipment, without intermediate conversion.
- **Incorrect ZIP structure** - DICOM files should be at the ZIP root or inside a simple folder. Nested folder structures may cause processing failure.

---

### Image upload failed with an error. What are the most common causes?

- **File name with special characters** - accents, cedilla, parentheses, and spaces may cause failure. Rename using only non-accented letters, numbers, and underscore.
- **Unsupported archive format** - only `.zip` is accepted. Formats like `.rar`, `.7z`, and `.tar.gz` do not work.
- **Interrupted upload** - do not close or refresh the page during upload. The system warns you when trying to leave while uploads are in progress.
- **Incorrect file type** - for report PDF upload, only `.pdf` is accepted.

---

### My PACS integration is not working. What should I check?

1. Verify whether **AE Title** (institutional name) is correctly registered in the account.
2. Check your network **firewall** settings.
3. Confirm configured **IP address** and **port**.
4. Send a test exam and verify patient name and patient ID.

---

### Where can PACS integration be blocked?

Possible network blocking points:

- Modem
- Router
- Firewall

Make sure the PACS port is open in all these devices.

---

## Client Management

### Do I need to register clients to issue reports?

Yes. Reports must be linked to a registered client. If you report exams for your own clinic, create a client using your clinic or hospital name.

---

### I invited a client but they did not receive the invitation email

The email may have gone to spam, or the address may already exist in the system. If it is a Gmail address, try resending using an alias (e.g., `email+1@gmail.com`).

You can also **copy the invitation link** directly: open the user profile and click **"Show invitation link"**. This link can be shared through any channel (such as WhatsApp), without relying on email.

---

### The client received the invitation but did not complete registration. What should I do?

In **Settings > Users**, select the user with **"Pending invitation"** status and use the bulk action **"Resend invitation"**. The system sends a new email with an updated link.

---

### Is registration through the invitation link mandatory?

It depends on how the invitation was created. If **"Skip invitation email sending"** was enabled, the user is automatically activated by the system without needing to click any link.

---

### Can a new account be linked to an old account?

Yes. Contact support with the account data involved so the association can be performed.

---

### Can I import clients in bulk?

Yes. The system allows bulk client import through a **CSV** file. In **Client Import**, upload the file and map CSV columns to system fields. See the import field documentation for the expected format.

---

## Users

### What are "users"?

Users are people who have access to the system. In a radiologist account, users are professionals who issue reports. In a clinic account, users are responsible for submitting exams and following reports.

---

### Do "member" users have access to financial management?

It depends on the permission configured for that user. The **"Revenue"** permission can be enabled or disabled individually for any user, regardless of role (Administrator or Member). This is configured by the account administrator in **Settings > Users > user profile**.

---

## Reports and Financial

### Can reports be exported to spreadsheets?

Yes. The system allows exporting data to Excel.

---

### How do I create a new financial entry?

In the financial section, go to **Debit Notes > New note**. The form allows date, reason, identifier number, and clinic selection. Charged items are added in a table with description, quantity, and unit price.

::: tip TIP
Use a dot (`.`) as decimal separator when entering values. Example: `150.00` instead of `150,00`.
:::

---

### How can I edit existing financial entries?

Open the entry from the debit notes list and click edit. All fields - date, reason, clinic, and items - can be changed before resubmitting.

---

### Do reports show financial values?

The financial section is shown only when **"Payment methods"** is enabled in report settings and the user has **"Revenue"** permission enabled. If these criteria are met, values appear in exam listings and reports.

---

### Is there a PDF report listing exams per client?

This functionality is not available yet.

---

### How do I change an exam payment status?

In the exam list, select the desired exams and use the bulk action to change payment status (e.g., from "Pending" to "Paid").

---

### Is there integration with billing systems or other systems like SimplesVet?

Not yet. We are working to provide these integrations soon.

---

## Emails and Notifications

### Can report emails be sent using my clinic name?

Yes. The email displays your account name as sender, but delivery is performed by UniRadio (app@uniradio.vet.br), with the identification "by UniRadio".

---

### Can emails be sent from my professional email?

Currently, sending is performed by UniRadio. Your account name appears as sender, but the message is sent from app@uniradio.vet.br.

---

## Subscription and Billing

### How do I cancel my subscription?

1. Go to **My Account**
2. Click **Manage Subscription**
3. Click **Cancel subscription**

---

### How do I change my payment method?

Contact support to update your payment method (credit card, bank slip, etc.).

---

## Technical Support

### How do I open a support ticket?

Use our [Support Form](https://forms.clickup.com/3010859/f/2vw9b-4017/JUF9S4KVT2T4VHWMZ4).

---

### Where can I find video tutorials?

Video tutorials are available throughout this documentation. Look for 📹 icons near tutorial topics.

---

## Still Have Questions?

Contact our support team through the form above or check detailed tutorials in the [Radiologists](/en/radiologists/) or [Clients](/en/clients/) sections.
