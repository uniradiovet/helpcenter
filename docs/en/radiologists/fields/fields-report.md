# Report Fields

Understand what each field on the report screen means.

---

## **Exam report**

**Report** *(main field)*: Full-featured text editor where the radiologist writes the exam report. Supports rich formatting (bold, italic, tables, images, etc.).

**Use template**: Button to select a pre-registered report template and use it as a starting point for writing.

### PDF upload

**Report PDF upload**: Area for attaching a PDF file of the report, in case the report is generated externally (e.g., another system). Replaces or supplements the report written in the editor.

---

## **Report responsible**

**Report responsible**: Select the team member (radiologist) responsible for preparing the report for this exam.

::: warning ATTENTION
Available only for radiologist-type accounts with exam editing permission.
:::

**Reviewed by**: Select the team member responsible for reviewing the report, if applicable.

---

## **Report settings**

**Number of regions**: Enter the number of anatomical regions evaluated in the report (from 1 to 10). Used for tracking and billing purposes.

**Exam category** *(required)*: Classify the exam into one of the available categories (e.g., Radiography, CT Scan, Ultrasound, etc.).

**Tags**: Add labels to the exam to facilitate later search and categorization. Multiple tags can be selected.

**Images per page**: Defines how many images will be displayed per page in the generated report PDF (options: 1, 2, 4, 6, 8, or 10).

**Report template**: Select a formatting template for the report PDF (e.g., custom header, image layout, etc.).

---

## **Actions (top bar)**

**Save**: Saves the report without sending it to the client.

**Save and send**: Saves the report and sends a notification to the client and/or owner with the access link.

**Edit exam**: Opens the exam data editing form (patient data, clinical data, etc.).

**View PDF**: Opens the report PDF in a new tab for preview.

**Share**: Generates and displays an exam sharing link.

### Additional actions menu

**Move to "In progress"**: Changes the exam status to "In progress". Available when the exam has a "Pending" or "Rejected" status.

**Mark as pending**: Returns the exam to "Pending" status.

**Reject exam**: Marks the exam as "Rejected".

**Previous report versions**: Displays the history of previous versions of the report text, allowing restoration of an older version.

---

## **Tab: Exam data**

Side panel with the information registered in the exam, displayed in read-only mode.

### Exam data

**Exam type**: Exam modality (e.g., Radiography, CT Scan, Ultrasound).

**Regions**: Anatomical regions selected when registering the exam.

**Contrast**: Detail of the region where contrast was applied, if the exam was performed with contrast.

**Exam date**: Date on which the exam was performed.

**Submission date**: Date and time the exam was submitted to the system.

**Acceptance date**: Date and time the exam was accepted by the radiologist.

**First report submission**: Date and time of the first report submission to the client.

**Requesting physician**: Name of the veterinarian who requested the exam.

**Clinic**: Name of the clinic responsible for the exam.

### Patient data

**Patient name**: Name of the examined animal.

**Owner**: Name of the animal's responsible person.

**Owner email**: Owner's email address, used to send a notification with the report access link.

**Species**: Animal species (e.g., Canine, Feline).

**Breed**: Animal breed.

**Age**: Animal's age, with the unit (years or months). When not provided numerically, only the unit may appear.

**Weight**: Animal's weight.

**Sex**: Animal's sex.

**Neutered**: Indicates whether the animal is neutered/spayed (Yes/No).

**Previous exam**: Link to the previous exam from the same patient, when provided during registration.

### Clinical state

**Clinical history**: Patient's clinical history as provided by the clinic.

**Clinical signs**: Clinical signs presented by the patient.

**Clinical suspicion**: Clinical suspicion or differential diagnosis considered.

**Exam notes**: Clinic's observations about the exam procedure. Example: "Animal restless during the procedure."

---

## **Tab: Attachments**

### Images and files

**Images**: Area for viewing and uploading exam images (JPEG, PNG, GIF, DICOM, etc.). Maximum size: 120 MB.

**Documents/Files**: Non-image files attached to the exam (e.g., PDFs, reports). Allows individual or bulk download.

### Links and PACS

**Image links**: Sharing links for images hosted on external services, such as Dropbox or Google Drive. Displayed as access buttons.

**DICOM / PACS**: Links to DICOM studies stored on the PACS server. Allows viewing in the integrated Viewer or downloading the complete study.

**Link PACS study**: Button to manually associate an existing study on the PACS server to the current exam.

::: warning ATTENTION
The link PACS study button is only displayed when the PACS server is available and the user has editing permission.
:::

---

## **Tab: Comments**

**Comments**: Area for internal message exchange between the clinic and the radiologist, without the content appearing in the report. Shows the number of existing comments on the exam.

**New comment**: Button to add a new comment to the exam.

---

## **Tab: Financial**

::: warning ATTENTION
This tab is displayed only when the payment methods feature is enabled in the account settings.
:::

**Payment method**: Select the payment method used for this exam (e.g., PIX, card, insurance plan). The default can be configured per clinic.

**Amount**: Enter the amount charged for the exam, in the currency configured for the account.

**Payment status**: Indicates whether the payment for the exam is pending, received, or in another state defined by the account.
