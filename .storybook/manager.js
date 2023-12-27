import "./PrimusTheme.css";

import { addons } from '@storybook/manager-api';
import primusTheme from './PrimusTheme';

addons.setConfig({
  theme: primusTheme,
  showToolbar: false,
});
