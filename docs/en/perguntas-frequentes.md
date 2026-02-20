# Frequently Asked Questions

## General Questions

### What is UniRadio?
UniRadio is a teleradiology platform that connects veterinary clinics with radiologists for specialized image interpretation and report generation.

### Who can use UniRadio?
- **Radiologists**: Veterinary professionals who analyze images and generate reports
- **Clients**: Veterinary clinics that send exams for analysis

## For Radiologists

### Is it possible to make fields mandatory (such as patient name and owner)?
Currently, this functionality is not yet available. However, we are working on updates that will allow this configuration in future versions of the system.

### Can I customize my reports?
Yes! You can:
- Upload your logo
- Customize report templates
- Configure which fields to show/hide
- Change fonts and layout
- Add custom footers

### Can I increase the size of my logo on reports?
Yes, you can adjust the logo height in the system settings.

### How do I disable automatic email sending to clients?
Access the client profile and disable the "Receive notifications for completed reports?" option.

### Why don't images appear in my report?
Make sure that image file names do not contain accents, parentheses, or special characters, as this may prevent their display in the report.

### Can I change the term "Parecer" to "Radiographic Report"?
Yes, this change can be made in the platform settings tab.

### What's the difference between "Save and Send" and "Save"?
- **"Save and Send"**: Finalizes the report and automatically sends it to the client by email
- **"Save"**: Only stores the report, keeping it in the "In Progress" tab

### How to include images with markings from the DICOM viewer?
Use the "Download" function in the DICOM viewer to export the marked images. Then upload these images to the specific field when editing the report.

### Is it possible to customize the report template with colors or watermark?
Currently, this functionality is not yet available.

### Does the system already provide digital certificates on reports?
Not yet. This functionality is under development.

### I can't view the PDF report. "images_per_page" error appears
Access settings and adjust the "Default number of images per report" option. This should fix the error.

### DICOM images don't include patient information. Is that normal?
Yes. Our DICOM viewer does not display additional information such as age, breed, or other patient data. If this information is essential, we recommend exporting images in JPEG format directly from the imaging software used at the clinic, including the desired information.

## For Clients

### Do I need to access the platform to view reports?
It is not necessary. If you have the email registered and enabled for notifications, you will receive reports directly by email. You can also enable the option to attach the report to notification emails.

### How do I send an exam?
You can send exams in two ways:
1. Direct upload through the web interface
2. Sending via PACS integration from your digital imaging equipment

### Can I edit an exam after sending?
Yes, you can edit exam details before they are finalized by the radiologist.

### How to attach the PDF report to the email sent?
Access the client profile and enable the "Attach PDF to notification emails" option.

## About Tags

### What are "tags"?
Tags are labels used to categorize exams, functioning similarly to blog categories, facilitating organization and search for exams.

## PACS Integration

### Do DICOM files have automatic viewing?
Yes. DICOM files sent are automatically integrated into the DICOM viewer within the platform.

### Why aren't DICOM images automatically attached to the report?
This integration is still under development. Currently, DICOM files need to be sent through the PACS server for images to be automatically attached to the report.

### My PACS integration isn't working. What should I check?
1. Verify that the institutional name is correctly registered
2. Check your network firewall settings
3. Confirm the IP address and port configuration
4. Try sending a test exam and verify the patient name/ID

### Where can problems occur in PACS integration?
Possible blocking points:
- Modem
- Router
- Firewall

Make sure the PACS port is open on all these devices.

## Client Management

### Do I need to register clients to issue reports?
Yes. Reports must be linked to a registered client. If you send and report exams through your own account, you can create a client with the same name as your clinic or hospital.

### I invited a client but they didn't receive the email
The email may have gone to the spam folder or the address may already be registered in the system. If it's a Gmail address, try resending using the alias technique (e.g., email+1@gmail.com).

### Is it possible to link a new account to an old account?
Yes, we can perform this association between accounts. Contact support with the data of the accounts involved.

### Can I import clients in bulk?
Not yet. Soon we will make the client and exam import functionality available directly through the application.

## Users

### What are "users"?
They are radiologists who have access to the system for issuing reports.

### Do "member" type users have access to financial management?
Currently, yes.

## Reports and Financial

### Is it possible to export reports to spreadsheets?
Yes, it is possible.

### Do reports show financial values?
Not yet, but this functionality is under development.

### Is there a PDF report with exam list per client?
We have not yet made this functionality available.

### How to change payment status?
Select the desired exams, access the payment status option and change as needed (e.g., from "Pending" to "Paid").

### Is there integration with billing systems?
Not yet.

### Is there integration with other systems like SimplesVet?
Not yet. We are working to offer this integration soon.

## Emails and Notifications

### Can exams be sent by email with my clinic's name?
Yes. The sending email displays the clinic name as sender, but the sending is done through the UniRadio system (app@uniradio.vet.br), with the identification "by UniRadio".

### Can reports be sent by my professional email?
Currently, sending is done through the UniRadio system. Your company name will be displayed as sender, but the email will be sent from app@uniradio.vet.br.

## Subscription and Billing

### How do I cancel my subscription?
1. Access "My Account"
2. Click "Manage Subscription"
3. Click "Cancel subscription"

### How do I change my payment method?
Contact support to update your payment method (credit card, bank slip, etc.).

## Technical Support

### How do I open a support ticket?
Use our [Support Form](https://forms.clickup.com/3010859/f/2vw9b-4017/JUF9S4KVT2T4VHWMZ4)

### Where can I find video tutorials?
Video tutorials are available throughout this documentation. Look for 📹 icons next to tutorial topics.

## Still Have Questions?

Contact our support team through the form above or check the detailed tutorials in the [Radiologists](/en/radiologistas/) or [Clients](/en/clientes/) sections.
