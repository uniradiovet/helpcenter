# How to Configure DR Tech to Send Exams to the PACS Server

Learn how to configure the DR Tech software to connect and send exams directly to the UniRadio cloud PACS server.

## Prerequisites

Before you begin, you will need the following information from your UniRadio PACS server:

- **AE Title**
- **Server IP address**
- **Port**

:::tip Where to find this information?
Go to [PACS Server Settings](/en/radiologists/pacs/pacs-settings) on the UniRadio platform and enable the **PACS Port** to view the connection details.
:::

---

## Part 1: Register the PACS Server in DR Tech

### 1. Open Settings

On the DR Tech main screen, click the **"Config"** button located on the bottom-right bar.

![DR Tech main screen with the Config button highlighted on the bottom-right bar](/images/en/radiologists/pacs/drtech/1-drtech.jpg)

### 2. Open the PACS section and click Add

In the **"Config."** window, click **"PACS"** in the left sidebar. The list of registered servers will appear. Click the **"Add"** button to register a new server.

![Config. window on the PACS section with the Add button highlighted](/images/en/radiologists/pacs/drtech/2-drtech.jpg)

### 3. Fill in the PACS server details

In the **"New"** window, fill in the fields with the information provided by UniRadio:

- **AE Title** — enter the server AE Title (e.g. `UNIRADIOAPP`)
- **IP** — enter the server IP address
- **Port** — enter the server port

:::tip Where to find this information?
Go to [PACS Server Settings](/en/radiologists/pacs/pacs-settings) on the UniRadio platform and enable the **PACS Port** to view the connection details.
:::

Click **"Ok"** to confirm the registration.

![New form with AE Title, IP and Port fields filled in and Ok button highlighted](/images/en/radiologists/pacs/drtech/3-drtech.jpg)

### 4. Verify the connection and close settings

The newly added server will appear in the list. If the connection is correct, the status will show **"PACS OK (C-ECHO)"**, confirming that the equipment is communicating with the server.

Check the **TimeOut** value (default: 30 seconds) and click **"X"** to close the settings window.

![PACS window showing the UNIRADIOAPP server added with PACS OK status and TimeOut highlighted](/images/en/radiologists/pacs/drtech/4-drtech.jpg)

---

## Part 2: Send an Exam to the PACS

### 5. Select the exam and click Send

1. Click the **"Study List"** tab at the top of the screen
2. Select the patient and exam you want to send
3. Click the **"Send"** button in the lower-right corner to transfer the images to the PACS server

The exam will be transferred to the UniRadio PACS server and will be available on the platform for reporting.

![Study List with patient selected and Send button highlighted in the lower-right corner](/images/en/radiologists/pacs/drtech/5-drtech.jpg)

---

## Need Help?

Check our [FAQ](/en/faq) or contact support if you run into issues configuring or sending exams through DR Tech.
