# opt-is

Inspired by `prop-types`. A type testing libaray.

# Usage

Validate `option` as what shapt it should be.

```
const is = require('opt-is');

const validate = is({
  key: is.string,
  callback: is.func,
  badge: is.string,
  size: is.string
})

function ReCaptcha(opt){

  validate(opt);
}

```

# Todo

- add `.isRequired` and more validators.
- How to integrate with `envify`, and skip validatation in production env.
- How to add customized validator.
- How to handle invalid value