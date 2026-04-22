# Invite user to account

Understand what each field in the invitation form means.

---

## **Full name**

**Full name** *(required)*: Enter the full name of the user to be invited.

---

## **Email**

**Email** *(required)*: Enter the user's email address. The invitation will be sent to this address, with a link for the user to access and set their password.

---

## **Profile**

**Profile** *(required)*: Defines the access level of the invited user in the account. The available options are:

### Administrative

Has complete and unrestricted access to the system. Recommended for managers or those responsible for the account.

### Member

Has access to all exams and reports in the account. When selecting this option, individual permissions can be configured to restrict or expand access.

---

## **Member permissions**

Displayed only when the **Member** profile is selected. Allows configuring individually what the user will be able to do in the account.

| Permission | Description | Default |
|---|---|---|
| **Allow submitting/editing exams** | The user can create, edit, and submit exams. | Enabled |
| **Manage users** | The user can invite, edit, and deactivate other account users. | Disabled |
| **View own reports** | The user can view analytical reports of their own activity. | Enabled |

::: tip TIP
It is recommended to enable only the permissions necessary for the invited user's role, following the principle of least privilege.
:::

---

## **Skip invitation email**

If the **"Skip invitation email"** option is checked, the invited user **will not receive any notification** by email and will be activated automatically.

---

## **Actions**

**Invite**: Saves the invitation and, if the skip email option is not checked, sends the invitation email to the user.

**Cancel**: Discards the form and returns to the user list without creating the invitation.
