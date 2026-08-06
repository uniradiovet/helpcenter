# How to Configure Ultramedic to Send Exams to the PACS Server

Learn how to configure the Ultramedic software to connect and send exams directly to the UniRadio cloud PACS server.

## Prerequisites

Before you begin, you will need the following information from your UniRadio PACS server:

- **AE Title**
- **Server IP address**
- **Port**

:::tip Where to find this information?
Go to [PACS Server Settings](/en/radiologists/pacs/pacs-settings) on the UniRadio platform and enable the **PACS Port** to view the connection details.
:::

---

## Part 1: Register the PACS Server in Ultramedic

### 1. Open the System Manager

On the Ultramedic main screen, click the **gear icon** (settings) in the upper-right corner.

![Ultramedic main screen with the gear icon highlighted in the upper-right corner](/images/en/radiologists/pacs/ultramedic/Ultramedic-1.jpg)

### 2. Open the System settings

In the **"System Manager"** menu, click **"SYSTEM"** to access the software's general settings.

![System Manager with the SYSTEM option highlighted](/images/en/radiologists/pacs/ultramedic/Ultramedic-2.jpg)

### 3. Go to the Storage tab

In the **"System"** window, click the **"Storage"** tab to access the DICOM server settings.

![System window with the Storage tab highlighted, showing the DICOM STORE fields](/images/en/radiologists/pacs/ultramedic/Ultramedic-2a.jpg)

### 4. Fill in the PACS server details

Find an available slot (e.g. **DICOM STORE No.2**) and fill in the fields with the information provided by UniRadio:

- **AETitle** — enter the server AE Title (e.g. `ZOOMPPACS`)
- **IPAddr** — enter the server IP address (e.g. `54.187.76.135`)
- **Port** — enter the server port (e.g. `15451`)
- **Protocol** — keep as `<Default>`
- **Send** — select `Manual send`

:::tip Where to find this information?
Go to [PACS Server Settings](/en/radiologists/pacs/pacs-settings) on the UniRadio platform and enable the **PACS Port** to view the connection details.
:::

![DICOM STORE No.2 with AETitle, IPAddr and Port fields filled in with UniRadio server data](/images/en/radiologists/pacs/ultramedic/Ultramedic-3.jpg)

### 5. Save the settings

Click **"OK"** to save the PACS server settings.

![OK button highlighted in the System settings window](/images/en/radiologists/pacs/ultramedic/Ultramedic-4.jpg)

---

## Part 2: Send an Exam to the PACS

### 6. Select the exam in the Study List

1. Click the **"Study List"** tab at the top of the screen
2. Select the exam you want to send by clicking on it in the list
3. Click the **DICOM send** icon (globe icon) in the bottom toolbar

![Study list with the "Study List" tab, selected exam and DICOM send icon highlighted](/images/en/radiologists/pacs/ultramedic/Ultramedic-5.jpg)

### 7. Confirm the destination and send

In the **"Data Loading"** window:

1. Select the **ZOOMPPACS** server as the destination
2. Click **"Send"** to start the exam transfer

The exam will be sent to the UniRadio PACS server and will be available on the platform for reporting.

![Data Loading window with ZOOMPPACS server selected and Send button highlighted](/images/en/radiologists/pacs/ultramedic/Ultramedic-6.jpg)

---

## Need Help?

Check our [FAQ](/en/faq) or contact support if you run into issues configuring or sending exams through Ultramedic.
