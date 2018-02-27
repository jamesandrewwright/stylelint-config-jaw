# Sensible stylelint configuration 

from James Wright.  For my personal projects - use at own risk as fluid.

This configuration extends stylelint-config-standard and also uses stylelint-scss to provide linting for SCSS.

The rules set within this configuration are based on my personal preferences when working primarily with CSS/SCSS with BEM/ITSCSS methodology.

# Installation
```javascript
npm install stylelint stylelint-config-standard stylelint-scss stylelint-config-jaw --save-dev  
```
# Usage

In .stylelintrc.json:

```javascript
{
  "extends": "stylelint-config-jaw",
    "plugins": [
        "stylelint-scss"
    ]
}

```


