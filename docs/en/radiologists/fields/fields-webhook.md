# Webhook fields

Understand what each field in the webhook creation/editing form means.

Webhooks allow the system to send automatic notifications to external systems whenever certain events occur on the platform.

---

## **URL**

**URL** *(required)*: Endpoint address that will receive the webhook requests. Must be a publicly accessible HTTPS URL.

Example: `https://mysite.com/webhooks`

---

## **Description**

**Description**: Free text to identify the purpose of this webhook. Useful for differentiating multiple webhooks configured in the account.

Example: *"Integration with XYZ clinic management system"*

---

## **Events**

Select which system events should trigger this webhook. Multiple events can be checked.

| Event | Description |
|---|---|
| **Exam submitted** | Triggered when a new exam is created/submitted by the clinic. |
| **Exam updated** | Triggered when the data of an exam is edited. |
| **Report submitted** | Triggered when a report is finalized and sent. |
| **Report updated** | Triggered when an already-submitted report is edited. |
| **New user registered** | Triggered when a new user accepts the invitation and registers in the account. |
| **User updated** | Triggered when a user's data is changed. |
| **New client registered** | Triggered when a new client clinic is added to the account. |
| **Client updated** | Triggered when a client clinic's data is changed. |

::: warning ATTENTION
The **New client registered** and **Client updated** events are available only for radiologist-type accounts. Clinic accounts do not see these options.
:::

---

## **Active**

**Webhook active**: When enabled, the webhook is in operation and selected events trigger requests to the configured URL. When disabled, the webhook is paused without being deleted.

::: tip TIP
Temporarily disable the webhook during maintenance on the external system to avoid delivery failures without needing to delete the configuration.
:::
