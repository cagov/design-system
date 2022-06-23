import { vars } from './script-utils.js';
import Sprite from './Sprite.js';

const sprite = new Sprite();
sprite.includedIcons = process.argv.slice(2);
sprite.dest = vars.componentFileSome;

sprite.create();
