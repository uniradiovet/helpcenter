# Exam creation fields

Understand what each field in the exam creation/editing form means.

---

## Submission type selection

When starting a new exam, you must choose how the images will be submitted:

- **Image upload**: Manual submission of image files (JPEG, PNG, DICOM, etc.) directly through the system.
- **PACS Service**: Link a study already available on the clinic's PACS server.

::: warning ATTENTION
The PACS Service option is only displayed when a PACS server is configured and available for the account.
:::

---

## **Draft exams**

Exams that have been started but not yet submitted are saved as drafts. The drafts table displays:

- **ID**: Draft identifier in the system.
- **Date**: Date and time the draft was created.
- **Type**: Indicates whether the draft was started via image upload or via PACS.
- **Edit and submit**: Continue filling in the exam from where you left off.
- **Delete**: Permanently removes the draft.

---

## **Client**

**Client** _(required)_: Select the client (clinic) responsible for the exam.

::: warning ATTENTION
Available for radiologists only. Clients do not see this option — the system automatically links the exam to the logged-in clinic.
:::

---

## **Exam data**

**Exam type** _(required)_: Choose the modality of the exam to be performed (e.g., Radiography, CT Scan, Ultrasound, etc.).

**Regions** _(required)_: Select the anatomical regions to be evaluated in the exam. The options vary according to the chosen exam type:

- **Left Thoracic Limb** – proximal, middle or distal
- **Right Thoracic Limb** – proximal, middle or distal
- **Left Pelvic Limb** – proximal, middle or distal
- **Right Pelvic Limb** – proximal, middle or distal
- **Axial Skeleton** – skull, spine, pelvis, thorax, abdomen, etc.
- **Other**: Field to specify regions not previously listed.

For Ultrasound, the available regions are modality-specific (abdomen, organs, etc.).

**Contrast exam**: Check this option if the exam was performed with contrast.

**Contrast exam details**: Describe the region or type of contrast used. Appears only when the "Contrast exam" option is checked.

**Requesting Physician** _(may be required)_: Full name of the veterinarian responsible for requesting the exam.

::: tip TIP
The requirement and visibility of this field depend on the settings defined by the radiologist for the account.
:::

**Exam date**: Enter the date on which the exam was or will be performed.

---

## **Urgency**

**Urgency**: Check this option to request the exam on an urgent basis. When activated, the exam is highlighted in the report queue.

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

**Age in** _(may be required)_: Choose the unit of measurement for age: **year(s)** or **month(s)**.

**Patient sex** _(may be required)_: Select the patient's sex (male or female).

**Neutered**: Check if the patient is neutered/spayed.

**Previous exam**: Search and link a previous exam from the same patient, if one exists. Facilitates comparison by the radiologist during report preparation.

::: tip TIP
The requirement of each patient field is defined by the radiologist in the account settings. Non-required fields can still be filled in to enrich the report information.
:::

---

## **Owner data**

**Owner**: Full name of the animal's responsible person.

**Owner email**: Owner's email address. When provided, the owner will receive a notification with the link to access the report once it is finalized.

::: tip TIP
Use this option so that the owner receives the report directly by email when it is ready.
:::

---

## **Status**

**Status**: Current state of the exam. Allows manually changing the status during editing.

::: warning ATTENTION
Available only for radiologist administrators (managers). Not visible to clients or for draft exams.
:::

---

## **Clinical state**

**Clinical history** _(may be required)_: Enter the relevant clinical history of the patient.

**Clinical signs** _(may be required)_: Describe the clinical signs presented by the animal.

**Clinical suspicion** _(may be required)_: Enter the clinical suspicion or differential diagnosis considered by the requesting physician.

**Exam notes**: Field for relevant observations about the exam procedure. Example: "Animal restless during the procedure."

---

## **Images**

**Images** _(required)_: Area for uploading exam images. Drag files or click to select. Accepted formats: JPEG, PNG, GIF, DICOM, among others. Maximum size per file: 120 MB.

**Image links**: Enter sharing links for images hosted on external services such as Dropbox or Google Drive.

::: tip TIP
The external links field is only displayed when there are no PACS studies linked to the exam.
:::

**PACS links**: Displays DICOM studies linked via PACS server, with the option to view in the viewer or download.
