# Exam Creation Fields

Understand what each field in the exam creation/editing form means.

---

## Choosing the submission type

When starting a new exam, you must choose how the images will be submitted:

- **Image upload**: Manually upload image files (JPEG, PNG, DICOM, etc.) directly through the system.
- **PACS Service**: Link a study already available on the clinic's PACS server.

::: warning ATTENTION
The PACS Service option is only displayed when a PACS server is configured and available for the account.
:::

---

## **Draft exams**

Exams that have been started but not yet submitted are saved as drafts. The drafts table displays:

- **ID**: The draft's identifier in the system.
- **Date**: Date and time the draft was created.
- **Type**: Indicates whether the draft was started via image upload or via PACS.
- **Edit and submit**: Continues filling in the exam from where you left off.
- **Delete**: Permanently removes the draft.

---

## **Exam data**

**Exam type** _(required)_: Choose the modality of the exam to be performed (e.g., Radiography, CT scan, Ultrasound, etc.).

**Regions** _(required)_: Select the anatomical regions to be evaluated in the exam. The options vary depending on the chosen exam type:

- **Left Thoracic Limb** – proximal, middle, or distal
- **Right Thoracic Limb** – proximal, middle, or distal
- **Left Pelvic Limb** – proximal, middle, or distal
- **Right Pelvic Limb** – proximal, middle, or distal
- **Axial Skeleton** – skull, spine, hip, thorax, abdomen, etc.
- **Other**: Field to specify regions not previously listed.

For Ultrasound, the available regions are modality-specific (abdomen, organs, etc.).

**Contrast exam**: Check this option if the exam was performed with contrast.

**Contrast exam details**: Describe the region or type of contrast used. Only appears when "Contrast exam" is checked.

**Requesting Veterinarian** _(may be required)_: Full name of the veterinarian responsible for requesting the exam.

::: tip TIP
Whether this field is required and visible depends on the settings defined by the radiologist for the account.
:::

**Exam date**: Enter the date on which the exam was or will be performed.

---

## **Urgency**

**Urgency**: Check this option to request the exam on an urgent basis. When enabled, the exam is highlighted in the report queue.

::: warning ATTENTION
The urgency option for clinics may be disabled. When enabled, a custom description may be displayed by the radiologist with additional instructions.
:::

---

## **Patient data**

**Patient name** _(may be required)_: Enter the name of the animal to be examined.

**Species** _(may be required)_: Enter the patient's species (e.g., Canine, Feline, Equine, etc.).

**Breed** _(may be required)_: Enter the patient's breed.

**Weight** _(may be required)_: Enter the patient's weight (in kg).

**Age** _(may be required)_: Patient's age.

**Age in** _(may be required)_: Choose the unit of measurement for the age: **year(s)** or **month(s)**.

**Patient sex** _(may be required)_: Select the patient's sex (male or female).

**Neutered**: Check if the patient is neutered/spayed.

**Previous exam**: Search for and link a previous exam from the same patient, if one exists. This makes it easier for the radiologist to compare during report preparation.

::: tip TIP
Whether each patient field is required is defined by the radiologist in the account settings. Non-required fields can still be filled in to enrich the report information.
:::

---

## **Owner data**

**Owner**: Full name of the person responsible for the animal.

**Owner email**: Owner's email address. When provided, the owner will receive a notification with the link to access the report once it is finalized.

::: tip TIP
Use this option so the owner receives the report directly by email when it is ready.
:::

---

## **Status**

**Status**: Current status of the exam. Allows manually changing the status during editing.

::: warning ATTENTION
Available only for radiologist administrators (managers). Not visible to clients or for draft exams.
:::

---

## **Clinical status**

**Clinical history** _(may be required)_: Enter the patient's relevant clinical history.

**Clinical signs** _(may be required)_: Describe the clinical signs presented by the animal.

**Clinical suspicion** _(may be required)_: Enter the clinical suspicion or differential diagnosis considered by the requesting veterinarian.

**Exam notes**: Field for relevant observations about the exam procedure. Example: "Animal was restless during the procedure."

---

## **Images**

**Images** _(required)_: Area for uploading exam images. Drag files or click to select. Accepted formats: JPEG, PNG, GIF, DICOM, among others. Maximum file size: 120 MB.

**Image links**: Enter sharing links for images hosted on external services such as Dropbox or Google Drive.

::: tip TIP
The external links field is only displayed when there are no PACS studies linked to the exam.
:::

**PACS Links**: Displays DICOM studies linked via the PACS server, with options to view in the viewer or download.
