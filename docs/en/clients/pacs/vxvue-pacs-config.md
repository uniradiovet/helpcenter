# How to Configure VXVue to Send Exams to the PACS Server

Learn how to configure the VXVue Imaging Expert software to connect and send exams directly to the UniRadio cloud PACS server.

## Prerequisites

Before you begin, you will need the following information from your UniRadio PACS server:

- **AE Title**
- **Server IP address**
- **Port**

:::tip Where to find this information?
Go to [PACS Server Settings](/en/clients/pacs/pacs-settings) on the UniRadio platform and enable the **PACS Port** to view the connection details.
:::

---

## Part 1: Register the PACS Server in VXVue

### 1. Open Settings

On the VXVue main screen, click the **"Configuration"** tab located in the right sidebar.

![VXVue main screen with the Configuration tab highlighted in the right sidebar](/images/en/radiologists/pacs/vxvuew/1-vxvue.jpg)

### 2. Navigate to the DICOM section

In the settings tree, find the **"Integration"** group and click **"DICOM"** to expand the integration options.

![Settings tree with the DICOM option highlighted inside the Integration group](/images/en/radiologists/pacs/vxvuew/2-vxvue.jpg)

### 3. Open the Storage menu

With the **DICOM** group expanded, click **"Storage"** to access the PACS destination server settings.

![Expanded DICOM menu with the Storage option highlighted](/images/en/radiologists/pacs/vxvuew/3-vxvue.jpg)

### 4. Add the server and fill in the details

On the **"DICOM - Storage"** screen:

1. Click **"Add"** to create a new PACS destination
2. Fill in the fields with the information provided by UniRadio:
   - **Name** — an identifying name (e.g. `UNIRADIO`)
   - **AE Title** — enter the server AE Title (e.g. `UNIRADIOAPP`)
   - **IP Address** — enter the server IP address
   - **Port** — enter the server port

:::tip Where to find this information?
Go to [PACS Server Settings](/en/clients/pacs/pacs-settings) on the UniRadio platform and enable the **PACS Port** to view the connection details.
:::

3. Click **"Update"** to save the settings

:::tip Collimation Software
Keep **Collimation Software** set to **"Crop"** to ensure compatibility with the PACS server.
:::

![DICOM Storage screen with Name, AE Title, IP and Port fields filled in, and Add and Update buttons highlighted](/images/en/radiologists/pacs/vxvuew/4-vxvue.jpg)

---

## Part 2: Send an Exam to the PACS

### 5. Open the Database

Click the **"Database"** tab in the right sidebar to access the list of completed exams.

![Study screen with the Database tab highlighted in the right sidebar](/images/en/radiologists/pacs/vxvuew/5-vxvue.jpg)

### 6. Select the exam

In the study list, click the exam you want to send to the PACS to select it.

![Study list with a selected exam highlighted in blue](/images/en/radiologists/pacs/vxvuew/6-vxvue.jpg)

### 7. Click Send

With the exam selected, click the **"Send"** button in the top toolbar to transfer the images to the UniRadio PACS server.

The exam will be available on the platform for reporting once the transfer is complete.

![Toolbar with the Send button highlighted](/images/en/radiologists/pacs/vxvuew/7-vxvue.jpg)

---

## Need Help?

Check our [FAQ](/en/faq) or contact support if you run into issues configuring or sending exams through VXVue.
