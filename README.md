# Schedule React App

## Prerequisites

1. Install the proper pnpm version in `.pnpmrc`

2. Install python for [secrets baseline](https://github.com/Yelp/detect-secrets)

- An application for detecting and preventing secrets key before push commit

## Setup

After cloning this repository, run `pnpm init:dev` to install dependencies, initialize your configurations and other necessary files to run your project after building.

## Run local app

1. Update `.env` file

2. start project

```
pnpm dev
```

## Commit Message Format:

```
<type>(<scope>): <task name> | <short summary>
  │       │         │              │
  │       │         │              └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │         │
  │       │         └─⫸ Task name was assign for this commit
  │       │
  │       └─⫸ Commit Scope: animations|bazel|benchpress|common|compiler|compiler-cli|core|
  │                          elements|forms|http|language-service|localize|platform-browser|
  │                          platform-browser-dynamic|platform-server|router|service-worker|
  │                          upgrade|zone.js|packaging|changelog|dev-infra|docs-infra|migrations|
  │                          ngcc|ve|global|*
  │
  └─⫸ Commit Type: build|ci|docs|feat|fix|perf|refactor|test
```

The `<type>` and `<summary>` fields are mandatory, the `<task_name>` and `<scope>` field is optional.

### Commit Message Example

- `feat(check-in table): Add to queue function`
- `style(pre check-in form): update style Skeleton`
- `fix(check-in table): close toast when click on snackbar`
- `refactor(check-in table): optimized component re-render`
- `ci: update buildspec - fix slack notification`

Or install extension: [Commit Message Editor](https://marketplace.visualstudio.com/items?itemName=adam-bender.commit-message-editor)

## Naming Convention

### Component

Use PascalCase for component naming, name it the same as its file name. Example:

```
// File DecisionSupport.tsx
import React from 'react';

const DecisionSupport: React.FC = () => <div />;

export default DecisionSupport;
```

### Function/Method

| **Action**                                               | **Verb**  | **Example Function**      |
| -------------------------------------------------------- | --------- | ------------------------- |
| **Get/Fetch**                                            | get/fetch | `getClinicalReport`       |
| **Create**                                               | create    | `createVaccinationRecord` |
| **Edit**                                                 | edit      | `editTreatmentSchedule`   |
| **Delete**                                               | delete    | `deleteAppointment`       |
| **Get data from an object or argument.**                 | get       | `getFluVaccines`          |
| **Build an object from arguments**                       | build     | `buildDisplayAppointment` |
| **Validate a form/popup/widget**                         | validate  | `validateDemographic`     |
| **Format/convert/transform a value to the correct form** | format    | `formatNumberToCurrency`  |
| **Render a component**                                   | render    | `renderHeader`            |
| **Compare two objects by the field**                     | compare   | `compareDays`             |
| **Handler of events**                                    | handle    | `handleLeftMenuOnClick`   |

### Constant

Allows using snake_case and camelCase / PascalCase and sanke_case

```
const NUMBER_OF_DISPLAY_ANTIBIOTICS = 3;

const COLORS = {
  primary: '#123456',
  tableHeader: '#ABCDEF'
};

const PaymentMethod = {
  CASH: 'cash',
  HEALTHCARE_CARD: 'healthcare_card'
};

export {
  NUMBER_OF_DISPLAY_ANTIBIOTIC,
  COLORS,
};
```

### Enum

`PascalCase`

```
enum UserKey {
  FIRST_NAME = 'firstName',
  LAST_NAME = 'lastName'
}

// using
export interface User {
  [UserKey.FIRST_NAME]: string,
  [UserKey.LAST_NAME]: string
}

export const validateSchema =
  Yup.object().shape({
  [UserKey.FIRST_NAME]: Yup.string().required(),
  [UserKey.LAST_NAME]: Yup.string().required(),
});
```

```
enum Status {
  COMPLETED,
  NOT_COMPLETED,
}

//using
export const StatusOptions = [
  {
    label: 'Completed',
    value: Status.COMPLETED,
  },
  {
    label: 'Not Completed',
    value: Status.NOT_COMPLETED,
  },
];
```

### Interface

Use when define an object

`IPascalCase`

```
interface IRouteConfig {
  path: string;
  component: FC;
}
```

### Type

Define union, alias and other cases which Interface can’t handle.

`TPascalCase`

```
type TSomething = string | number;
```
