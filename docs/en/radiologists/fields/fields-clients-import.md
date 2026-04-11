# Client import field definitions

Understand what each field means when preparing or reviewing the client import CSV file.

## How the process works

1. **CSV upload** - upload the file containing clinic account data.
2. **Column mapping** - the system shows each expected field and you map it to the corresponding CSV column.
3. **Import** - the system creates accounts and sends invitation emails to each owner.

::: tip TIP
Use the account export as your CSV template. The exported file already contains the expected column format, which makes future reimports and bulk fixes easier.
:::

---

## Required fields

These three fields are required for each row to be imported successfully. If any required value is missing or invalid, the row is skipped and logged as failed.

### Name

Name of the clinic account that will be created in the system.

Example: `Central Veterinary Clinic`

::: warning ATTENTION
This field is **required**. Rows without an account name are rejected.
:::

### Owner Name

Full name of the user who will be created as the owner (admin) of the clinic account.

Example: `Dr. John Silva`

::: warning ATTENTION
This field is **required**. The system uses this value to create the user and send the invitation email.
:::

### Owner Email

Owner email address. Used to create user login and send access invitation.

Example: `john@centralclinic.com`

::: warning ATTENTION
This field is **required** and must be a valid email. If the email already exists in the system, the existing user is linked to the new account instead of creating a new one.
:::

---

## Identity and billing data

### Account Name

Alternative label for **Name**. Refers to the clinic account name and appears in the system exported CSV.

### Account Email

Main email for the clinic account. Appears in exported CSV. During import, the system uses **Owner Email** as account email, so this field does not need separate mapping.

### User Name

Name of an additional user linked to the account. Present only in **"Accounts with users"** exports, which include one row per user besides the owner. Not an import field.

### Billing Name

Name used for fiscal and billing purposes. Can differ from account name, for example the legal company name.

Example: `Central Veterinary Center LLC`

### CNPJ / CNPJ/CPF

Fiscal identifier for the account:

- **CNPJ** - for legal entities.
- **CPF** - for individual providers.

Enter numbers only, without punctuation.

Example: `12345678000195`

---

## Contact

### Phone

Clinic contact phone number, including area code.

Example: `11987654321`

---

## Address

### ZIP Code

Clinic ZIP code. Enter numbers only, no dash.

Example: `01310100`

### Address

Street, avenue, or address line.

Example: `Av. Paulista`

### Number

Property number.

Example: `1000`

### Complement

Additional location information, such as suite, floor, or building. Optional field.

Example: `Suite 42`

### City

City where the clinic is located.

Example: `Sao Paulo`

### District

District or neighborhood.

Example: `Bela Vista`

### State

State abbreviation.

Example: `SP`

---

::: tip TIP
All address fields are optional for import. If they are not mapped, the account address remains blank and can be filled later on the account edit page.
:::
