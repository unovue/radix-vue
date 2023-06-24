---
metaTitle: Form
metaDescription: Collect information from your users using validation rules.
name: form
---

# Form

<Description>
  Collect information from your users using validation rules.
</Description>

<HeroContainer>
  <FormDemo />
</HeroContainer>

<HeroCodeBlock folder="Form" />

<Highlights
  features={[
    <>
      Built on top of the native browser{' '}
      <Link href="https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation">
        constraint validation API.
      </Link>
    </>,
    'Supports built-in validation.',
    'Supports custom validation.',
    'Full customization of validation messages.',
    'Accessible validation messages.',
    'Supports client-side and server-side scenarios.',
    'Focus is fully managed.',
  ]}
/>

## Installation

Install the component from your command line.

```bash
npm install @radix-ui/react-form
```

## Anatomy

Import all parts and piece them together.

```jsx
import * as Form from '@radix-ui/react-form';

export default () => (
  <Form.Root>
    <Form.Field>
      <Form.Label />
      <Form.Control />
      <Form.Message />
      <Form.ValidityState />
    </Form.Field>

    <Form.Message />
    <Form.ValidityState />

    <Form.Submit />
  </Form.Root>
);
```

## API Reference

### Root

Contains all the parts of a form.

<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more
          details.
        </>
      ),
    },
    {
      name: 'onClearServerErrors',
      required: false,
      type: '() => void',
      typeSimple: 'function',
      description:
        'Event handler called when the form is submitted or reset and the server errors need to be cleared.',
    },
  ]}
/>

### Field

The wrapper for a field. It handles id/name and label accessibility automatically.

<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more
          details.
        </>
      ),
    },
    {
      name: 'name',
      required: true,
      type: 'string',
      description:
        'The name of the field that will be passed down to the control and used to match with validation messages.',
    },
    {
      name: 'serverInvalid',
      required: false,
      type: 'boolean',
      description: 'Use this prop to mark the field as invalid on the server.',
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-invalid]',
      values: 'Present when the field is invalid',
    },
    {
      attribute: '[data-valid]',
      values: 'Present when the field is valid',
    },
  ]}
/>

### Label

A label element which is automatically wired when nested inside a `Field` part.

<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more
          details.
        </>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-invalid]',
      values: 'Present when the field is invalid',
    },
    {
      attribute: '[data-valid]',
      values: 'Present when the field is valid',
    },
  ]}
/>

### Control

A control element (by default an `input`) which is automatically wired when nested inside a `Field` part.

<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more
          details.
        </>
      ),
    },
  ]}
/>

<DataAttributesTable
  data={[
    {
      attribute: '[data-invalid]',
      values: 'Present when the field is invalid',
    },
    {
      attribute: '[data-valid]',
      values: 'Present when the field is valid',
    },
  ]}
/>

### Message

A validation message which is automatically wired (functionality and accessibility) to a given control when nested inside a `Field` part. It can be used for built-in and custom client-side validation, as well as server-side validation. When used outside a `Field` you must pass a `name` prop matching a field.

`Form.Message` accepts a `match` prop which is used to determine when the message should show. It matches the native HTML validity state (`ValidityState` on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)) which validates against attributes such as `required`, `min`, `max`. The message will show if the given `match` is `true` on the control’s validity state.

You can also pass a function to `match` to provide custom validation rules.

<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more
          details.
        </>
      ),
    },
    {
      name: 'match',
      required: false,
      type: (
        <>
          | 'badInput'
          <br />
          | 'patternMismatch'
          <br />
          | 'rangeOverflow'
          <br />
          | 'rangeUnderflow'
          <br />
          | 'stepMismatch'
          <br />
          | 'tooLong'
          <br />
          | 'tooShort'
          <br />
          | 'typeMismatch'
          <br />
          | 'valid'
          <br />
          | 'valueMissing'
          <br />| {`((value: string, formData: FormData) => boolean)`}
          <br />| {`((value: string, formData: FormData) => Promise<boolean>)`}
          <br />
        </>
      ),
      typeSimple: 'Matcher',
      description:
        'Used to indicate on which condition the message should be visible.',
    },
    {
      name: 'forceMatch',
      required: false,
      type: 'boolean',
      default: 'false',
      description:
        'Forces the message to be shown. This is useful when using server-side validation.',
    },
    {
      name: 'name',
      required: false,
      type: 'string',
      description: (
        <>
          Used to target a specific field by name when rendering outside of a{' '}
          <Code>Field</Code> part.
        </>
      ),
    },
  ]}
/>

### ValidityState

Use this render-prop component to access a given field’s validity state in render (see `ValidityState` on [MDN](https://developer.mozilla.org/en-US/docs/Web/API/ValidityState)). A field's validity is available automatically when nested inside a `Field` part, otherwise you must pass a `name` prop to associate it.

<PropsTable
  data={[
    {
      name: 'children',
      required: false,
      type: '(validity: ValidityState | undefined) => React.ReactNode',
      typeSimple: 'function',
      description:
        'A render function that receives the validity state of the field.',
    },
    {
      name: 'name',
      required: false,
      type: 'string',
      description: (
        <>
          Used to target a specific field by name when rendering outside of a{' '}
          <Code>Field</Code> part.
        </>
      ),
    },
  ]}
/>

### Submit

The submit button.

<PropsTable
  data={[
    {
      name: 'asChild',
      required: false,
      type: 'boolean',
      default: 'false',
      description: (
        <>
          Change the default rendered element for the one passed as a child,
          merging their props and behavior.
          <br />
          <br />
          Read our <a href="../guides/composition">Composition</a> guide for more
          details.
        </>
      ),
    },
  ]}
/>

## Examples

### Composing with your own components

Using `asChild` you can compose the `Form` primitive parts with your own components.

```jsx line=3
<Form.Field name="name">
  <Form.Label>Full name</Form.Label>
  <Form.Control __asChild__>
    <TextField variant="primary" />
  </Form.Control>
</Form.Field>
```

It can also be used to compose other types of controls, such as a `select`:

```jsx line=3
<Form.Field name="country">
  <Form.Label>Country</Form.Label>
  <Form.Control __asChild__>
    <select>
      <option value="uk">United Kingdom</option>…
    </select>
  </Form.Control>
</Form.Field>
```

> Note: At the moment, it is not possible to compose `Form` with Radix's other form primitives such as `Checkbox`, `Select`, etc. We are working on a solution for this.

### Providing your own validation messages

When no `children` are provided, `Form.Message` will render a default error message for the given `match`.

```jsx
// will yield "This value is missing"
<Form.Message match="missingValue" />
```

You can provide a more meaningful message by passing your own `children`. This is also useful for internationalization.

```jsx
// will yield "Please provide a name"
<Form.Message match="missingValue">__Please provide a name__</Form.Message>
```

### Custom validation

On top of all the built-in client-side validation matches described above you can also provide your own custom validation whilst still making use of the platform's validation abilities. It uses the `customError` type present in the [constraint validition API](https://developer.mozilla.org/en-US/docs/Web/HTML/Constraint_validation).

You can pass your own validation function into the `match` prop on `Form.Message`. Here's an example:

```jsx line=4
<Form.Field name="name">
  <Form.Label>Full name</Form.Label>
  <Form.Control />
  <Form.Message __match__={(value, formData) => value !== 'John'}>
    Only John is allowed.
  </Form.Message>
</Form.Field>
```

> `match` will be called with the current value of the control as first argument and the entire `FormData` as second argument.
> `match` can also be an `async` function (or return a promise) to perform async validation.

### Styling based on validity

We add `data-valid` and `data-invalid` attributes to the relevant parts. Use it to style your components accordingly.
Here is an example styling the `Label` part.

```jsx line=8
//index.jsx
import * as React from 'react';
import Form from '@radix-ui/react-form';

export default () => (
  <Form.Root>
    <Form.Field name="email">
      <Form.Label __className__="FormLabel">Email</Form.Label>
      <Form.Control type="email" />
    </Form.Field>
  </Form.Root>
);
```

```css line=2,5
/* styles.css */
.FormLabel[__data-invalid__] {
  color: red;
}
.FormLabel[__data-valid__] {
  color: green;
}
```

### Accessing the validity state for more control

You may need to access the raw validity state of a field in order to display your own icons, or interface with a component library via it's defined props. You can do this by using the `Form.ValidityState` part:

```jsx line=3-4,7-8
<Form.Field name="name">
  <Form.Label>Full name</Form.Label>
  <Form.ValidityState>
    {(validity) => (
      <Form.Control asChild>
        <TextField variant="primary" state={getTextFieldState(__validity__)} />
      </Form.Control>
    )}
  </Form.ValidityState>
</Form.Field>
```

### Server-side validation

The component also supports server-side validation using the same `Form.Message` component.
You can re-use the same messages you defined for client-side errors by passing a `forceMatch` prop which will force the message to show regardless of the client-side matching logic.

If the message doesn't exist on the client-side, you can render a `Form.Message` without a `match` too.
The field is marked as invalid by passing a `serverInvalid` boolean prop to the `Form.Field` part.

Here's an example with server-side error handling:

```jsx line=5-8,13,23,28-30,49-54
import * as React from 'react';
import * as Form from '@radix-ui/react-form';

function Page() {
  const [serverErrors, setServerErrors] = React.useState({
    email: false,
    password: false,
  });

  return (
    <Form.Root
      // `onSubmit` only triggered if it passes client-side validation
      onSubmit={(event) => {
        const data = Object.fromEntries(new FormData(event.currentTarget));

        // Submit form data and catch errors in the response
        submitForm(data)
          .then(() => {})
          /**
           * Map errors from your server response into a structure you'd like to work with.
           * In this case resulting in this object: `{ email: false, password: true }`
           */
          .catch((errors) => __setServerErrors__(mapServerErrors(errors)));

        // prevent default form submission
        event.preventDefault();
      }}
      onClearServerErrors={() =>
        __setServerErrors__({ email: false, password: false })
      }
    >
      <Form.Field name="email" __serverInvalid__={serverErrors.email}>
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" required />
        <Form.Message match="valueMissing">
          Please enter your email.
        </Form.Message>
        <Form.Message match="typeMismatch" __forceMatch__={serverErrors.email}>
          Please provide a valid email.
        </Form.Message>
      </Form.Field>

      <Form.Field name="password" __serverInvalid__={serverErrors.password}>
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" required />
        <Form.Message match="valueMissing">
          Please enter a password.
        </Form.Message>
        {serverErrors.password && (
          <Form.Message>
            Please provide a valid password. It should contain at least 1 number
            and 1 special character.
          </Form.Message>
        )}
      </Form.Field>

      <Form.Submit>Submit</Form.Submit>
    </Form.Root>
  );
}
```

You should clear the server errors using the `onClearServerErrors` callback prop on the `Form.Root` part. It will clear the server errors before the form is re-submitted, and when the form is reset.

In addition, this provides control over when to reset single server errors. For example you could reset the email server error as soon as the user edits it:

```jsx line=3
<Form.Field name="email" serverInvalid={serverErrors.email}>
  <Form.Label>Email address</Form.Label>
  <Form.Control
    type="email"
    __onChange__={() => setServerErrors((prev) => ({ ...prev, email: false }))}
  />
  <Form.Message match="missingValue">Please enter your email.</Form.Message>
  <Form.Message match="typeMismatch" forceMatch={serverErrors.email}>
    Please provide a valid email.
  </Form.Message>
</Form.Field>
```

## Accessibility

The component follows the "inline errors" pattern for validation:

- Label and control are associated using the `name` provided on `Form.Field`
- When one or more client-side error messages display, they are automatically associated with their matching control and announced accordingly
- Focus is moved to the first invalid control